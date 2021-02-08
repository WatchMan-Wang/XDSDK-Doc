(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{75:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return l}));var i=r(3),t=r(7),a=(r(0),r(83)),o={id:"android",title:"Android\u5feb\u901f\u5f00\u59cb",sidebar_label:"Android"},d={unversionedId:"android",id:"android",isDocsHomePage:!1,title:"Android\u5feb\u901f\u5f00\u59cb",description:"\u6253\u5305Android",source:"@site/docs/android.md",slug:"/android",permalink:"/XDSDK-Doc/android",version:"current",sidebar_label:"Android",sidebar:"xdsdk",previous:{title:"Unity\u5feb\u901f\u5f00\u59cb",permalink:"/XDSDK-Doc/"},next:{title:"iOS\u5feb\u901f\u5f00\u59cb",permalink:"/XDSDK-Doc/ios"}},c=[{value:"\u6253\u5305Android",id:"\u6253\u5305android",children:[]}],s={toc:c};function l(n){var e=n.components,r=Object(t.a)(n,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6253\u5305android"},"\u6253\u5305Android"),Object(a.b)("p",null,"\u53ef\u4ee5\u6839\u636e\u9700\u8981, \u53c2\u7167\u5982\u4e0b\u793a\u4f8b\u4fee\u6539Plugins/Android/AndroidManifest.xml\uff0c\u6ce8\u610f\u8981\u5c06\u201c\u9879\u76ee\u5305\u540d\u201d\u6539\u4e3a\u6e38\u620f\u81ea\u5df1\u7684\u5305\u540d\u3002  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest.xml"',title:'"AndroidManifest.xml"'},'<?xml version="1.0" encoding="utf-8"?>\n<manifest\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    package="\u9879\u76ee\u5305\u540d"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:installLocation="preferExternal"\n    android:versionCode="1"\n    android:versionName="1.0">\n    <supports-screens\n        android:smallScreens="true"\n        android:normalScreens="true"\n        android:largeScreens="true"\n        android:xlargeScreens="true"\n        android:anyDensity="true"/>\n\n    <uses-sdk tools:overrideLibrary="com.bun.miitmdid"/>\n\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n\n    <application  android:usesCleartextTraffic="true">\n        <activity\n            android:name="com.unity3d.player.UnityPlayerActivity"\n            android:launchMode="2"\n            android:screenOrientation="0"\n            android:configChanges="orientation|keyboardHidden|screenSize"\n            android:hardwareAccelerated="false">\n               <intent-filter>\n                  <action\n                      android:name="android.intent.action.MAIN" />\n                  <category\n                      android:name="android.intent.category.LAUNCHER" />\n               </intent-filter>\n       </activity>\n\n    <activity\n        android:name="com.xd.sdklib.helper.XDStartView"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"\n        android:configChanges="orientation|keyboardHidden|screenSize" />\n    <activity\n        android:name="com.xd.sdklib.helper.XDPayActivity"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"\n        android:configChanges="orientation|keyboardHidden|screenSize"  />\n    <activity\n        android:name="com.xd.sdklib.helper.XDViewActivity"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"\n        android:configChanges="orientation|keyboardHidden|screenSize" />\n    <activity\n        android:name="com.xd.sdklib.helper.XDWebView"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />\n    <activity\n        android:name="com.xd.sdklib.helper.WXEntryActivity"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />\n\n    <activity-alias\n        android:name="\u9879\u76ee\u5305\u540d.wxapi.WXEntryActivity"\n        android:exported="true"\n        android:targetActivity="com.xd.sdklib.helper.WXEntryActivity"/>\n\n    \x3c!-- Ping++ SDK --\x3e\n    <activity\n        android:name="com.pingplusplus.android.PaymentActivity"\n        android:configChanges="orientation|screenSize"\n        android:launchMode="singleTop"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />\n\n     \x3c!-- TapTap\u767b\u5f55 --\x3e\n    <activity\n            android:name="com.taptap.sdk.TapTapActivity"\n            android:exported="false"\n            android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"\n            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />\n\n    <activity\n            android:name="com.taptap.forum.TapTapActivity"\n            android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"\n            android:exported="false"\n            android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />\n\n    \x3c!-- \u652f\u4ed8\u5b9d --\x3e\n    <activity\n        android:name="com.alipay.sdk.app.H5PayActivity"\n        android:configChanges="orientation|keyboardHidden|navigation"\n        android:exported="false"\n        android:screenOrientation="portrait" />\n    <activity\n        android:name="com.alipay.sdk.auth.AuthActivity"\n        android:configChanges="orientation|keyboardHidden|navigation"\n        android:exported="false"\n        android:screenOrientation="portrait" />\n\n    \x3c!-- \u5fae\u4fe1\u652f\u4ed8 --\x3e\n    <activity-alias\n        android:name="\u9879\u76ee\u5305\u540d.wxapi.WXPayEntryActivity"\n        android:exported="true"\n        android:targetActivity="com.pingplusplus.android.PaymentActivity" />\n\n    \x3c!-- QQ\u767b\u5f55 --\x3e\n    <activity\n        android:name="com.tencent.tauth.AuthActivity"\n        android:noHistory="true"\n        android:launchMode="singleTask" />\n    <activity\n        android:name="com.tencent.connect.common.AssistActivity"\n        android:theme="@android:style/Theme.Translucent.NoTitleBar"\n        android:configChanges="orientation|keyboardHidden|screenSize" />\n\n    \x3c!-- \u6587\u4ef6\u914d\u7f6e --\x3e    \n    <provider\n        android:authorities="\u9879\u76ee\u5305\u540d.com.squareup.picasso"\n        android:exported="false"\n        android:name="com.squareup.picasso.PicassoProvider"/>\n    </application>\n</manifest>\n')))}l.isMDXComponent=!0},83:function(n,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return y}));var i=r(0),t=r.n(i);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,i)}return r}function d(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function c(n,e){if(null==n)return{};var r,i,t=function(n,e){if(null==n)return{};var r,i,t={},a=Object.keys(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var s=t.a.createContext({}),l=function(n){var e=t.a.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):d(d({},e),n)),r},p=function(n){var e=l(n.components);return t.a.createElement(s.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},u=t.a.forwardRef((function(n,e){var r=n.components,i=n.mdxType,a=n.originalType,o=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),p=l(r),u=i,y=p["".concat(o,".").concat(u)]||p[u]||m[u]||a;return r?t.a.createElement(y,d(d({ref:e},s),{},{components:r})):t.a.createElement(y,d({ref:e},s))}));function y(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=r.length,o=new Array(a);o[0]=u;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=n,d.mdxType="string"==typeof n?n:i,o[1]=d;for(var s=2;s<a;s++)o[s]=r[s];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);