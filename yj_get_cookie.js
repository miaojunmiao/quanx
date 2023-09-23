/*

TieBa Checkin Get Cookie.

About the author:
Telegram channel: @NobyDa
Telegram bots: @NobyDa_bot

Description :
When TieBa app is opened, click "My", If notification gets cookie success, you can use the check in script. because script will automatically judgment whether the cookie is updated, so you dont need to disable it manually.

Note that the following config is only a local script configuration, please put this scripts into Quantumult X/Script, and the cookie script only works for TieBa apps in china apple store

[rewrite_local]
https?:\/\/kunpeng.business.tech.sznyjd.cn url script-request-header https://raw.githubusercontent.com/miaojunmiao/quanx/master/yj_get_cookie.js

# MITM = kunpeng.business.tech.sznyjd.cn

*/

var headerCookie = $request.headers["kp"];

if (headerCookie) {
  if ($prefs.valueForKey("CookieZBT") != undefined) {
    if ($prefs.valueForKey("CookieZBT") != headerCookie) {
      if (headerCookie.indexOf("ey") != -1) {
        console.log('御姐Cookie: ' + headerCookie);
        $notify("御姐Cookie成功 🎉", "", "");
      } else {
        $notify("御姐Cookie失败‼️", "", "");
      }
    } else {
      console.log("御姐cookie", "没有变化,无需更新")
    }
  } else {
    if (headerCookie.indexOf("ey") != -1) {
      console.log('御姐Cookie: ' + headerCookie);
      $notify("御姐Cookie成功 🎉", "", "");
    } else {
      $notify("御姐Cookie失败‼️", "", "");
      
    }
  }
}
$done({})