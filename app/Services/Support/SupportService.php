<?php
namespace App\Services\Support;

use App\Contracts\SupportInterface;


class SupportService implements  SupportInterface
{
    private $edition;
    private $os;
    private $lang;

    public function setEdition($edition)
    {
        $this->edition = $edition;
    }

    public function setOs($os)
    {
        $this->os = $os;
    }

    public function setLang($lang)
    {
        $this->lang = $lang;
    }


    private function _getPath()
    {
        return "support/{$this->lang}/{$this->edition}/{$this->os}";
    }

    public function getCatalog()
    {
        $menu = [];
        $fileMenu = $this->_getPath() . "/menu.php";
        if(file_exists($fileMenu))
        {
            $menu =  include $fileMenu;
        }

        return $menu;

    }

    public function getBody($id)
    {
        $fileName = $this->_getPath() . "/{$id}.html";
        if(file_exists($fileName))
        {
            return file_get_contents($fileName);
        }
     }
}