<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 07.08.2018
 * Time: 10:13
 */

class SphinxIndex
{
    const CDATA = "cdata";
    const RAW = "raw";

    private $attributes = [];
    private $nodes = [];
    private $xmlWriter;

    /**
     * SphinxIndex constructor.
     * @param array $attributes [name = type]
     */
    public function __construct(array $attributes)
    {
        $this->attributes = $attributes;
        $this->xmlWriter = new xmlWriter();
    }

    public function addNode(array $node)
    {
        $this->nodes[] = $node;
    }

    private function _write($attr, $value)
    {
        if(isset($this->attributes[$attr]))
        {
            if($this->attributes[$attr] == self::RAW)
            {
                $this->xmlWriter->writeRaw($value);
                return;
            }
        }
        $this->xmlWriter->writeCData($value);
    }

    public function getXmlForIndex()
    {
        $this->xmlWriter->openMemory();
        $this->xmlWriter->setIndent(true);
        $this->xmlWriter->startDocument('1.0', 'UTF-8');

        $this->xmlWriter->startElement('sphinx:docset');
        foreach($this->nodes as $node)
        {
            $this->xmlWriter->startElement('sphinx:document');
            $this->xmlWriter->writeAttribute('id', $node['id']);

            foreach($node as $attr => $value)
            {
                if($attr == 'id') continue;

                $this->xmlWriter->startElement($attr);
                $this->_write($attr, $value);
                $this->xmlWriter->endElement();
            }
            $this->xmlWriter->endElement();
        }

        $this->xmlWriter->endElement();

        $tidy = new tidy();
        return $tidy->repairString($this->xmlWriter->outputMemory(),array(
            'output-xml' => true,
            'input-xml' => true,
            'input-encoding' => "utf8",
            'output-encoding' => "utf8"

        ));
    }

}