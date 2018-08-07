<?php
//$i = include("sphinxindex.xml");
$handle = fopen("sphinxindex.xml", "w");
if ($handle)
{
    while (($buffer = fgets($handle, 4096)) !== false) {
        echo $buffer;
    }
    if (!feof($handle)) {
        echo "Ошибка: fgets() неожиданно потерпел неудачу\n";
    }
    fclose($handle);
}


