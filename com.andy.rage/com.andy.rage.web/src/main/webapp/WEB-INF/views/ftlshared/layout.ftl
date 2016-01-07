 <@block name="include"></@block>
 <#include "./header.ftl" />
 <#include "./footer.ftl" />
<!DOCTYPE html>
<html>
<head>
<@block name="head"></@block>
<!-- UC默认竖屏 ，UC制全屏 -->
<meta name="full-screen" content="yes" />
<meta name="browsermode" content="application" />
<!-- QQ强制竖屏 QQ强制全屏 -->
<meta name="x5-orientation" content="portrait" />
<meta name="x5-fullscreen" content="true" />
<meta name="x5-page-mode" content="app" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
<@block name="css"></@block>
<link rel="stylesheet" href="/static/dist/css/main.css" />
</head>
<body>
	<@block name="main"></@block>
</body>
	<@block name="script"></@block>
</html>