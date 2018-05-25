<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 24.05.2018
 * Time: 17:16
 */

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\OTRS\OtrsClientService;

class OtrsClientServiceTest extends TestCase
{
    private $client;

    public function __construct()
    {
        $app = $this->createApplication();
        $this->client = $app->make("App\Contracts\TicketsInterface");
    }

    public function testGetSessionId()
    {
        $URL = 'https://my.url.com/otrs/nph-genericinterface.pl';
        $namespace = 'https://my.url.com/otrs/GenericInterface/actions';

        // initialize a SoapClient instance
        /*$SOAPClientInstance = new \SoapClient(null, array(
                'location'=> $URL,
                'uri' => $namespace,
                'trace' => 1,
                'login' => $username,
                'password'=> $password,
                'style' => SOAP_RPC,
                'use' => SOAP_ENCODED
            )
        );

        // set the request parameters as an array of SoapParam instances
        $TicketRequestArray = array(
            new \SoapParam($username, 'CustomerUserLogin'),
            new \SoapParam($soap_username, 'UserLogin'),
            new \SoapParam($password, "Password"),
        );

        $TicketRequestArray[] = new \SoapParam($TicketID, 'TicketID');
        $TicketRequestArray[] = new \SoapParam(array(
            'State' => 'open'
        ), 'Ticket');
        $Action = 'TicketUpdate';

        $Response = $SOAPClientInstance->__soapCall($Action,
            $TicketRequestArray
        );*/



        $client = new \SoapClient(
            null,
            array(
                'location' => 'http://helpdesk.vipole.com/otrs/nph-genericinterface.pl/Webservice/GenericTicketConnectorSOAP',
                'uri' => "http://www.otrs.com/TicketConnector/",
                'trace' => 1,
                'stream_context' => stream_context_create(array(
                    'http' => array(
                        'header' => 'Authorization:Basic ' . base64_encode("vipoleuser:12345") . '\r\n'
                    ),
                )),
                'login' => "soap_user",
                'password' => '5GhgfR5y',
                'style' => SOAP_RPC,
                'use' => SOAP_ENCODED,

            )
        );

        $ticket =  $client->__soapCall("Dispatch",
            array("soap_user", '5GhgfR5y',
                "TicketObject", "TicketGet",
                "TicketID", 1
            ));





        $this->assertTrue(true);

    }
}
