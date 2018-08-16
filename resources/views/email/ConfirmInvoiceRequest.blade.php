@extends('email.wrapper')

@section('body')
    <h3>Hello admin!</h3>
    <div>User upload confirming file for <br>
        invoice = {{$id}}.</div>
    <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0" class="mobile-button-container">
            <tbody><tr>
                <td align="center" class="padding-copy" style="padding: 25px 0 0 0;">
                    <table cellspacing="0" cellpadding="0" border="0" class="responsive-table">
                        <tbody><tr>
                            <td align="center"><a class="mobile-button" style="font-size: 16px; font-family:  Arial, Helvetica, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #4bb91c; border-top: 15px solid #4bb91c; border-bottom: 15px solid #4bb91c; border-left: 25px solid #4bb91c; border-right: 25px solid #4bb91c; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" target="_blank" href="{{config("bsystem.url")}}/admin/invoices?id={{$id}}">Confirm Invoice</a></td>
                        </tr>
                        </tbody></table>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

@endsection