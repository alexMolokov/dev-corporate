<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 24.05.2018
 * Time: 17:16
 */

namespace Tests\Feature;

use Tests\TestCase;
use Wsdl2PhpGenerator;
use App\OTRS\OtrsClientService;

class WsdlGeneratorTest extends TestCase
{
    private $client;

    public function __construct()
    {
        $app = $this->createApplication();
        $generator = new Wsdl2PhpGenerator\Generator();
        $generator->generate(
            new \Wsdl2PhpGenerator\Config(array(
                'inputFile' => 'otrs.wsdl',
                'outputDir' => '/tmp/output',
                'namespaceName' => "App\OTRS"
            ))
        );

    }

    public function testGenerate()
    {






        $this->assertTrue(true);

    }
}
