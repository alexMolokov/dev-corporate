<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="font-family: Arial, Helvetica, sans-serif; color: #666;">

    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td>
                <div align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapper">
                        <tr>
                            <td style="padding: 17px 15px 17px 15px;" class="logo" bgcolor="#00a0c8">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td bgcolor="#00a0c8"  align="left" style="padding-left:35px;">
                                            <div>
                                                <div><img border="0" alt="VIPole" src="images/logo/vipole.png" style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 16px;"></div>
                                                <div style="color: #fff; text-align: right; width: 165px; margin-top: -10px;">www.vipole.com</div>
                                            </div>
                                        </td>
                                        <td bgcolor="#00a0c8"  align="left" style="padding-left:18px">
                                            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%">
                                                <tr>
                                                    <td align="left" style="padding: 0 0 0px 0; font-size: 14px; line-height: normal;font-family: Arial, Helvetica, sans-serif; color: #ffffff; text-decoration: none;">
                                                        <div style="color: #ffffff; text-decoration: none; text-align: right; padding-right: 20px">
                                                        <div style="white-space: nowrap; text-transform: uppercase; font-size: 19px;">Secure And Encrypted messanger</div>
                                                        <div style="white-space: nowrap; font-size: 15px;">for secure communications, teamwork and data storage</div>
                                                        <div style="white-space: nowrap; font-size: 14px; margin-top: 15px;">Windows • OS X • Linux Android • iOS • Enterprise solutions</div>
                                                        </div></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px">
                    <table width="100%">
                        <tr>
                            <td>
                                <div style="font-size: 23px; color: #00a0c8"><span style="font-weight: 600; font-size: 28px;">Invoice</span> <span>{{$number}}</span></div>
                            </td>
                            <td align="right">
                                    <div style="color: #666; font-size: 15px;"><span style="font-weight: 600;">Date: </span> <span>{{$date}}</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px; font-size: 15px;">
                                <div><span style="font-weight: 600;font-size: 16px;">Invoice to:</span></div>
                                <div style="margin-top: 5px">{{$company["name"]}}</div>

                                @if($company["address"])
                                    <div>
                                        Address: {{$company["address"]}}
                                        @if($company["zip"])
                                            ,{{$company["zip"]}}
                                        @endif
                                    </div>
                                @endif
                                @if($company["city"] || $company["country"])
                                    <div>{{$company["city"]}} {{$company["country"]}} </div>
                                @endif
                            </td>
                        </tr>
                    </table>
                    </div>

                    <div style="margin-top: 20px">
                        <table width="100%" border="0" cellpadding="8" cellspacing="0">
                            <tr style="color: #fff; background-color: #00a0c8;" align="center">
                                <th align="left">Software and Services</th>
                                <th>Quantity</th>
                                <th align="right">Price, {{$currency}}</th>
                            </tr>
                            @foreach ($basket as $position)
                                <tr>
                                    <td>{{$position["name"]}}</td>
                                    <td align="center">{{$position["count"]}}</td>
                                    <td align="right">{{number_format(round($position["price"]/$exchangeRate),2)}}</td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                    <div style="text-align: right; border-top: 2px solid  #00a0c8;font-weight: 600; font-size: 20px; margin-top: 10px; padding: 10px 0 0 0">
                        Total: {{number_format($sum,2)}} {{$currency}}
                    </div>

                    <div style="text-align: left; margin-top: 10px; font-size: 14px;">
                        <div style="font-weight: 600;padding: 3px;">Payment method: {{$payment["method"]}}</div>
                        <div style="padding: 3px;">Payment type: {{$payment["type"]}}</div>
                        <div style="padding: 3px;">Payment terms: {{$payment["days"]}} days</div>
                    </div>


<div style="margin-top:40px;">
                    <table width="100%" border="0" cellpadding="8" cellspacing="0">
                            <tr>
                                <td width="60%">
                                    <div>{{$currency}} {{$companyFrom["bank"]->accounts->$currency}}</div>
                                    <div>{{$companyFrom["bank"]->name}}</div>
                                    <div>{{$companyFrom["bank"]->address}}</div>
                                    <div>{{$companyFrom["bank"]->swift}}</div>
                                </td>
                                <td width="40%">
                                    <div style="font-weight: 600">{{$companyFrom["name"]}}</div>
                                    <div>{{$companyFrom["address"]}}</div>
                                    <div>{{$companyFrom["number"]}}</div>
                                    <div>{{$companyFrom["phone"]}}</div>
                                </td>

                            </tr>

                    </table>
</div>



                    <div style="text-align: left; margin-top: 40px; font-size: 10px; color: #999">
                        During the Contract Term and for two years thereafter, The Customer shall not disclose the pricing or terms hereunder to any third party without VIPole LTD
                        prior consent.The Customer shall safeguard all such information with the same or greater degree as it uses to safeguard its own confidential or propriety
                        information (but no less than reasonable care).The Customer shall, upon becoming aware of any unauthorized disclosure of such information, promptly notify VIPole
                        LTD, and provide reasonable assistance to VIPole LTD remedying, such disclosure.
                    </div>





                </div>
            </td>
        </tr>
    </table>

        <div style="position: absolute; bottom: 0; text-align: center">
            <div style="font-weight: 600">{{$companyFrom["name"]}}</div>
            <div>{{$companyFrom["address"]}}</div>
            <div style="color: #00a0c8; font-size: 14px;">{{$companyFrom["email"]}}</div>
        </div>
    </body>
</html>
