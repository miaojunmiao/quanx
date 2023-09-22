/*

TieBa Checkin Get Cookie.

About the author:
Telegram channel: @NobyDa
Telegram bots: @NobyDa_bot

Description :
When TieBa app is opened, click "My", If notification gets cookie success, you can use the check in script. because script will automatically judgment whether the cookie is updated, so you dont need to disable it manually.

Note that the following config is only a local script configuration, please put this scripts into Quantumult X/Script, and the cookie script only works for TieBa apps in china apple store

[rewrite_local]
https?:\/\/kunpeng.business.tech.sznyjd.cn url script-response-body TieBa_GetCookie_QX.js

# MITM = kunpeng.business.tech.sznyjd.cn

*/

var headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("CookieKP") != undefined) {
    if ($prefs.valueForKey("CookieKP") != headerCookie) {
      if (headerCookie.indexOf("ey") != -1) {
        var cookie = $prefs.setValueForKey(headerCookie, "CookieKP");
        if (!cookie) {
          $notify("Cookie失败‼️", "", "");
        } else {
          $notify("Cookie成功 🎉", "", "");
        }
      }
    }else{
      console.log("cookie", "没有变化,无需更新")
    }
  } else {
    if (headerCookie.indexOf("ey") != -1) {
      var cookie = $prefs.setValueForKey(headerCookie, "CookieKP");
      if (!cookie) {
        $notify("首次写入Cookie失败‼️", "", "");
      } else {
        $notify("首次写入Cookie成功 🎉", "", "");
      }
    }
  }
}
$done({})