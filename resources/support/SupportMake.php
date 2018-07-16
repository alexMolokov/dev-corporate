<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 21.06.2018
 * Time: 18:33
 */

class SupportMakeFromXml
{
    private $files = [
           [ "edition" => "standalone", "os" => "windows", "lang" => "en", "file" => "entities_standalone_windows_ru.xml"]
    ];
    private $xslDoc="body.xsl";
    private $output="";

    private function deleteXmlns($xml){
        $ar = ["<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>", 'xmlns:ac="http://www.vipole.com/support"', 'xmlns:ri="http://www.vipole.com/support/attacments"'];
        foreach($ar as $char) $xml = str_replace($char, "",$xml);
        return $xml;
    }

    private function deleteInvalidCharacters($feedXml)
    {
        $feedXml = str_replace("]] >", "]]>",$feedXml);
        $ar = ["&laquo;", "&raquo;","&rarr;", "&rsquo;"];
        foreach($ar as $char) $feedXml = str_replace($char, " ",$feedXml);

        $ar = ["&nbsp;" => "&#160;"];
        foreach($ar as $char => $replace) $feedXml = str_replace($char, $replace,$feedXml);


        $invalid_characters = '/[^\x9\xa\x20-\xD7FF\xE000-\xFFFD]/';
        $feedXml = preg_replace($invalid_characters, '', $feedXml );
        return $feedXml;
    }

    private function getAttachmentFileName($xml, $id)
    {
        $attacments = $xml->xpath("//object[@class='Attachment']");
        foreach($attacments as $attacment)
        {
            if($attacment->id->__toString() == $id)
            {
                $titles = $attacment->xpath("./property[@name='title']");
                if(isset($titles[0]))
                {
                    return $titles[0]->__toString();
                }
            }
        }
    }

    public function run()
    {
        $xsl_doc = new DOMDocument('1.0', 'utf-8');
        $xsl_doc->load($this->xslDoc);
        $proc = new XSLTProcessor();
        $proc->importStylesheet($xsl_doc);

        // корень 14614612
        foreach($this->files as $file) {
           $hash = [];
           $rootId = "";
           $sourcePath = "sources/{$file['edition']}/{$file['os']}";
           $html   = file_get_contents("{$sourcePath}/{$file['file']}");

            $invalid_characters = '/[^\x9\xa\x20-\xD7FF\xE000-\xFFFD]/';
            $html = preg_replace($invalid_characters, '', $html);

            $xml = simplexml_load_string($html);

           $pages = $xml->xpath("//object[@class='Page']");
           foreach($pages as $page)
           {
              if(count($page->xpath("./property[@name='originalVersion']")) > 0) continue;
              $parents = $page->xpath("./property[@name='parent']/id");
              $titles = $page->xpath("./property[@name='title']");
              $positions= $page->xpath("./property[@name='position']");
              $childrens = $page->xpath("./collection[@name='children']/element/id");
              $bodyIds = $page->xpath(".//element[@class='BodyContent']/id");
              $attachments = $page->xpath("./collection[@name='attachments']/element[@class = 'Attachment']");


              $children = [];
              $positionsChild = [];
              foreach($childrens as $node )
              {

                  $positionChild = $xml->xpath("//object[@class='Page']/id[contains(text(), '". $node->__toString() ."')]/parent::object/property[@name='position']");
                  $positionsChild[(string)$positionChild[0]] = $node->__toString();
              }
               ksort($positionsChild);
              foreach($positionsChild as $child) $children[]= $child;

              if(is_null($parents[0]))
              {
                  $rootId = $page->id;
              }

              $id = $page->id->__toString();
              $hash[$id] = [
                  "title" => $titles[0]->__toString(),
                  "parent" => (!is_null($parents[0]))? $parents[0]->__toString(): null,
                  "position" => (!is_null($positions[0]))? (int) $positions[0]->__toString(): 0,
                  "children" => $children,
                  "bodyId" => (!is_null($bodyIds[0]))? $bodyIds[0]->__toString() : null
              ];

              if($hash[$id]["bodyId"] !== null)
              {
                 $contents =  $xml->xpath("//object[@class='BodyContent']");
                 foreach($contents as $content) {
                     if($content->id->__toString() == $hash[$id]["bodyId"])
                     {
                         $bodies = $content->xpath("./property[@name='body']");

                         $body = new DOMDocument('1.0', 'utf-8');
                         $str = '<?xml version="1.0" encoding="utf-8"?><root xmlns:ri="http://www.vipole.com/support/attacments" xmlns:ac="http://www.vipole.com/support" 
                           ' . ' doc-id="' . $id. '" edition="'. $file['edition'] . '" os="' . $file['os'] . '" lang="'.  $file['lang']. '">' .
                         '<h2>'. $hash[$id]["title"] . '</h2>' . $this-> deleteInvalidCharacters($bodies[0]->__toString()) . '</root>';

                         $body->loadXML($str);
                         $newdom = $proc->transformToDoc($body);
                         $hash[$id]["body"] = $newdom->saveXML();


                            foreach($attachments as $attachment)
                            {
                                $aid = $attachment->id->__toString();
                                $fileName = $this->getAttachmentFileName($xml,$aid);

                                if(file_exists("{$sourcePath}/attachments/{$id}/{$aid}/1"))
                                {
                                    copy("{$sourcePath}/attachments/{$id}/{$aid}/1", "../../public/support/{$file['lang']}/{$file['edition']}/{$file['os']}/attachments/{$fileName}");
                                }

                            }

                            $h=fopen("../../public/support/{$file['lang']}/{$file['edition']}/{$file['os']}/{$id}.html", "w") ;
                            fwrite($h,$this->deleteXmlns($hash[$id]["body"]));
                            fclose($h) ;


                         break;
                     }
                 }
              }

           }




          // var_dump($hash);
        }


        function getMenu($id,$hash, $menu, $rootId = null)
        {
            $id = (string) $id;

            $menu .= "['name' =>'" . $hash[$id]["title"] . "', 'id' => " . $id ;

            if(count($hash[$id]['children']) > 0)
            {
                $menu .= " , 'children' => [" ;
                foreach($hash[$id]['children'] as $childId) {
                    $menu = getMenu($childId, $hash, $menu, $rootId);
                }
                $menu .= "]";
            }
            if($id != $rootId) {
                $menu .= "],";
            } else {

                $menu .= ", 'root' => true]";
            }
            return $menu;

        };
        $menu = '<?php return ' . getMenu($rootId, $hash, "", $rootId) . ';';
        $h=fopen("../../public/support/{$file['lang']}/{$file['edition']}/{$file['os']}/menu.php", "w") ;
        fwrite($h,$menu);
        fclose($h) ;
        //echo $menu;
    }


}

$make = new SupportMakeFromXml();
$make->run();