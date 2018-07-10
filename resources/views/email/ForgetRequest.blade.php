@extends('email.wrapper')

@section('body')
    <div align="center" style="font-size: 20px; line-height: 36px; font-family: Arial,  Helvetica, sans-serif; color:#3e3e3e;">{{__("VIPole account password reset")}}</div>

    <div style="padding-top:20px;">
        <div style="font-size: 15px;">{{__("Click on the link below to reset the password of your VIPole Corporate account and get a new one")}}.</div>
    </div>

    <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0" class="mobile-button-container">
            <tbody><tr>
                <td align="center" class="padding-copy" style="padding: 25px 0 0 0;">
                    <table cellspacing="0" cellpadding="0" border="0" class="responsive-table">
                        <tbody><tr>
                            <td align="center"><a class="mobile-button" style="font-size: 16px; font-family:  Arial, Helvetica, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #4bb91c; border-top: 15px solid #4bb91c; border-bottom: 15px solid #4bb91c; border-left: 25px solid #4bb91c; border-right: 25px solid #4bb91c; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" target="_blank" href="{{config("app.url")}}/#/registration/change/password/{{$code}}">{{__("Reset your password")}}</a></td>
                        </tr>
                        </tbody></table>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <div style="padding-top:20px;">
        <div style="font-size: 15px;color:#3e3e3e;">
            {{__("The activation link is valid for 24 hours")}}.
        </div>
    </div>
@endsection