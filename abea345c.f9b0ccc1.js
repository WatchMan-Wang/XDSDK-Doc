(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(7),b=(a(0),a(86)),r=a(99),c=a(100),i=a(89),o={id:"tap-fun-moment",title:"\u52a8\u6001\u793e\u533a",sidebar_label:"\u52a8\u6001 3.x"},p={unversionedId:"tap-fun-moment",id:"tap-fun-moment",isDocsHomePage:!1,title:"\u52a8\u6001\u793e\u533a",description:"unity\u7248\u672cxdsdk 3.x\u624d\u5f00\u59cb\u5305\u542b\u52a8\u6001\u529f\u80fd",source:"@site/docs/tap-fun-moment3.md",slug:"/tap-fun-moment",permalink:"/XDSDK-Doc/tap-fun-moment",version:"current",sidebar_label:"\u52a8\u6001 3.x",sidebar:"xdsdk",previous:{title:"\u52a8\u6001\u793e\u533a",permalink:"/XDSDK-Doc/tap-moment"},next:{title:"\u670d\u52a1\u7aef\u5bf9\u63a5",permalink:"/XDSDK-Doc/fun-service"}},m=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",children:[]},{value:"2. \u529f\u80fd\u5f00\u542f",id:"2-\u529f\u80fd\u5f00\u542f",children:[]},{value:"3. \u8bbe\u7f6e\u56de\u8c03",id:"3-\u8bbe\u7f6e\u56de\u8c03",children:[]},{value:"4. \u6253\u5f00\u52a8\u6001\u9875\u9762",id:"4-\u6253\u5f00\u52a8\u6001\u9875\u9762",children:[]},{value:"5. \u53d1\u5e03\u52a8\u6001",id:"5-\u53d1\u5e03\u52a8\u6001",children:[]},{value:"6. \u83b7\u53d6\u7528\u6237\u65b0\u901a\u77e5\u6570\u91cf",id:"6-\u83b7\u53d6\u7528\u6237\u65b0\u901a\u77e5\u6570\u91cf",children:[]},{value:"7. \u5173\u95ed\u52a8\u6001\u9875\u9762",id:"7-\u5173\u95ed\u52a8\u6001\u9875\u9762",children:[{value:"\u76f4\u63a5\u5173\u95ed",id:"\u76f4\u63a5\u5173\u95ed",children:[]},{value:"\u5f39\u51fa\u4e8c\u6b21\u786e\u8ba4",id:"\u5f39\u51fa\u4e8c\u6b21\u786e\u8ba4",children:[]}]},{value:"8. \u6ce8\u610f\u4e8b\u9879",id:"8-\u6ce8\u610f\u4e8b\u9879",children:[]}],d={toc:m};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},Object(b.b)("strong",{parentName:"p"},"unity\u7248\u672cxdsdk 3.x\u624d\u5f00\u59cb\u5305\u542b\u52a8\u6001\u529f\u80fd")))),Object(b.b)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),Object(b.b)("p",null,"\u5185\u5d4c\u52a8\u6001\u57fa\u4e8eTapTap \u5185\u5bb9\u793e\u533a\u7684\u529f\u80fd\u548c\u6e38\u620f\u672c\u8eab\u7684\u8d26\u53f7\u7cfb\u7edf\u7684\u66f4\u591a\u878d\u5408\uff0c\u6210\u529f\u63a5\u5165\u5185\u5d4c\u52a8\u6001SDK\u540e\u73a9\u5bb6\u5373\u53ef\u901a\u8fc7\u6e38\u620f\u76f4\u63a5\u8bbf\u95eeTapTap\u5185\u5bb9\u548c\u81ea\u5e26\u529f\u80fd\u3002\u540c\u65f6\u5185\u5d4c\u52a8\u6001SDK\u4e5f\u4e3a\u6e38\u620f\u6253\u9020\u4e2a\u6027\u5316\u5185\u5bb9\u6216\u670d\u52a1\u63d0\u4f9b\u4e86\u5f00\u653e\u529f\u80fd\u3002"),Object(b.b)("h2",{id:"2-\u529f\u80fd\u5f00\u542f"},"2. \u529f\u80fd\u5f00\u542f"),Object(b.b)("p",null,"API\u653e\u5728init\u521d\u59cb\u5316SDK\u4e4b\u540e\u8c03\u7528\u5373\u53ef  "),Object(b.b)("h4",{id:"api"},"API"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TdsInitializer.enableMoment(Activity);\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"+ (void)enableMoment;\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"public static void EnableMoment();\n")))),Object(b.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"  TdsInitializer.enableMoment(MainActivity.this);\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"[TDSInitializer enableMoment];\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"TapSDK.TDSCore.EnableMoment();\n")))),Object(b.b)("h2",{id:"3-\u8bbe\u7f6e\u56de\u8c03"},"3. \u8bbe\u7f6e\u56de\u8c03"),Object(b.b)("p",null,"\u8c03\u7528 enableMoment \u540e\uff0c\u9700\u8981\u8bbe\u7f6e\u52a8\u6001\u56de\u8c03\uff0c\u7528\u4e8e\u83b7\u53d6\u52a8\u6001\u7684\u72b6\u6001\u53d8\u5316"),Object(b.b)("h4",{id:"api-1"},"API"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.setCallback(TapTapMomentSdk.TapMomentCallback var0);\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"- (void)onMomentCallbackWithCode:(NSInteger)code msg:(NSString *)msg;\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"public static void SetCallback(Action<int, string> callback);\n")))),Object(b.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.setCallback(new TapTapMomentSdk.TapMomentCallback() {\n@Override\npublic void onCallback(int code, String msg) {\n\n}\n});\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},'@interface ViewController () <TDSMomentDelegate>\n\n@end\n\n- (void)onMomentCallbackWithCode:(NSInteger)code msg:(NSString *)msg {\n    NSLog (@"msg:%@, code:%i" ,msg, code);\n}\n\n[TDSMomentSdk setDelegate:self];\n'))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},'TapSDK.TDSMoment.SetCallback((code,msg)=>{\n    Debug.Log(code+"---"+msg);\n});\n')))),Object(b.b)("p",null,"\u56de\u8c03\u65b9\u6cd5\u4e2d code \u8868\u793a\u4e8b\u4ef6\u7c7b\u578b\uff0c\u73b0\u652f\u6301\u7684\u56de\u8c03\u7c7b\u578b\u5982\u4e0b\uff1a"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u56de\u8c03"),Object(b.b)("th",{parentName:"tr",align:null},"\u56de\u8c03\u503c"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE_PUBLISH","_","SUCCESS"),Object(b.b)("td",{parentName:"tr",align:null},"10000"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u53d1\u5e03\u6210\u529f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE_PUBLISH","_","FAIL"),Object(b.b)("td",{parentName:"tr",align:null},"10100"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u53d1\u5e03\u5931\u8d25")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE","_","PUBLISH","_","CANCEL"),Object(b.b)("td",{parentName:"tr",align:null},"10200"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u53d1\u5e03\u5931\u8d25")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE","_","GET","_","NOTICE","_","SUCCESS"),Object(b.b)("td",{parentName:"tr",align:null},"20000"),Object(b.b)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u901a\u77e5\u6570\u91cf\u6210\u529f\uff0c\u9644\u5e26\u4fe1\u606f\u4e3a\u901a\u77e5\u6570\u91cf")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE","_","GET","_","NOTICE","_","FAIL"),Object(b.b)("td",{parentName:"tr",align:null},"20100"),Object(b.b)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u901a\u77e5\u6570\u91cf\u5931\u8d25\uff0c\u9644\u5e26\u4fe1\u606f\u4e3a\u9519\u8bef\u539f\u56e0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE_MOMENT","_","APPEAR"),Object(b.b)("td",{parentName:"tr",align:null},"30000"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u9875\u9762\u663e\u793a\u65f6\u89e6\u53d1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK","_","CODE_MOMENT","_","DISAPPEAR"),Object(b.b)("td",{parentName:"tr",align:null},"30100"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u9875\u9762\u6d88\u5931\u65f6\u89e6\u53d1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK_CODE_INIT_SUCCESS"),Object(b.b)("td",{parentName:"tr",align:null},"40000"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u521d\u59cb\u5316\u6210\u529f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK_CODE_INIT_FAIL"),Object(b.b)("td",{parentName:"tr",align:null},"40100"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u521d\u59cb\u5316\u5931\u8d25")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK_CODE_ClOSE_CANCEL"),Object(b.b)("td",{parentName:"tr",align:null},"50000"),Object(b.b)("td",{parentName:"tr",align:null},"\u5f39\u51fa\u5173\u95ed\u52a8\u6001\u5f39\u7a97\u65f6\uff0c\u7528\u6237\u53d6\u6d88")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CALLBACK_CODE_ClOSE_CONFIRM"),Object(b.b)("td",{parentName:"tr",align:null},"50100"),Object(b.b)("td",{parentName:"tr",align:null},"\u5f39\u51fa\u5173\u95ed\u52a8\u6001\u5f39\u7a97\u65f6\uff0c\u7528\u6237\u786e\u8ba4")))),Object(b.b)("h2",{id:"4-\u6253\u5f00\u52a8\u6001\u9875\u9762"},"4. \u6253\u5f00\u52a8\u6001\u9875\u9762"),Object(b.b)("p",null,"\u5728\u6e38\u620f\u4e2d\uff0c\u663e\u793a\u6e38\u620f\u52a8\u6001\u9875\u9762\u3002"),Object(b.b)("blockquote",null,Object(b.b)(i.a,{color:"#f00",mdxType:"Highlight"},"\u6253\u5f00\u52a8\u6001\u9875\u9762\u65f6\uff0c\u8bf7\u5148\u5c4f\u853d\u6e38\u620f\u81ea\u8eab\u7684\u58f0\u97f3\uff0c\u907f\u514d\u4e0e\u52a8\u6001\u5185\u89c6\u9891\u58f0\u97f3\u4ea7\u751f\u91cd\u5408 ")),Object(b.b)("blockquote",null,Object(b.b)(i.a,{color:"#f00",mdxType:"Highlight"},"\u5982\u9700\u8981\u52a8\u6001\u80fd\u652f\u6301\u6a2a\u7ad6\u5c4f\u968f\u8bbe\u5907\u81ea\u52a8\u65cb\u8f6c\uff0c\u9700\u8981\u6e38\u620fapp\u81ea\u8eab\u80fd\u652f\u6301\u6a2a\u7ad6\u5c4f(Xcode\u914d\u7f6eDevice Orientation)")),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},Object(b.b)("strong",{parentName:"p"},"\u622a\u6b62\u5230\u6b64\u6b65\u9aa4\uff0c2\u30013\u6b65\u4e3a\u5fc5\u8981\u6b65\u9aa4")))),Object(b.b)("h4",{id:"api-2"},"API"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.openTapMoment(TapTapMomentSdk.Config);\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"+ (void)openTapMomentWithConfig:(TDSMomentConfig *) config;\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"public static void OpenMoment(Orientation config);\n")))),Object(b.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.Config config = new TapTapMomentSdk.Config();\n// config\u7528\u6765\u8bbe\u7f6e\u9875\u9762\u663e\u793a\u914d\u7f6e\uff0c\u5305\u62ec\u663e\u793a\u65b9\u5411\u7b49\n//config.orientation = TapTapMomentSdk.ORIENTATION_LANDSCAPE;\nTapTapMomentSdk.openTapMoment(config);\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"TDSMomentConfig *mconfig = [[TDSMomentConfig alloc]init];\nmconfig.orientation = TDSMomentOrientationDefault;\n[TDSMomentSdk openTapMomentWithConfig:mconfig];\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"TapSDK.TDSMoment.OpenMoment(TapSDK.Orientation.ORIENTATION_LANDSCAPE);\n")))),Object(b.b)("h2",{id:"5-\u53d1\u5e03\u52a8\u6001"},"5. \u53d1\u5e03\u52a8\u6001"),Object(b.b)("p",null,"\u666e\u901a\u52a8\u6001\u5305\u62ec\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u5185\u5bb9\u63cf\u8ff0"),Object(b.b)("h4",{id:"api-3"},"API"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.publishMoment(TapTapMomentSdk.Config config, String imgPaths, String content);\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"+ (void)openPostMomentPageWithContent:(TDSPostMomentData * _Nonnull)content\n                               config:(TDSMomentConfig * _Nonnull)config;\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"public static void PublishMoment(Orientation config, string[] imagePaths, string content);\n")))),Object(b.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-3"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},'TapTapMomentSdk.Config config = new TapTapMomentSdk.Config();\nconfig.orientation = TapTapMomentSdk.ORIENTATION_DEFAULT;  \nString content = "\u666e\u901a\u52a8\u6001\u63cf\u8ff0";\nString[] images = new String[] { "content://***.jpg","/sdcard/**.jpg" };\nTapTapMomentSdk.publishMoment(config, imagePaths, content);\n'))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},'TDSImageMomentData *imageMoment = [[TDSImageMomentData alloc] init];\nimageMoment.images = @[@"file://..."];\nimageMoment.content = @"\u6211\u662f\u53d1\u56fe\u7247\u52a8\u6001\u7684\u5185\u5bb9";\n\nTDSMomentConfig *config = [[TDSMomentConfig alloc] init];\nconfig.orientation = TDSMomentOrientationDefault;\n\n[TDSMomentSdk openPostMomentPageWithContent:imageMoment config:config];\n'))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},'string content = "\u6211\u662f\u63cf\u8ff0";\nstring[] images = {"imgpath01","imgpath02","imgpath03"};\nTapSDK.TDSMoment.PublishMoment(TapSDK.Orientation.ORIENTATION_LANDSCAPE, images, content);\n')))),Object(b.b)("h2",{id:"6-\u83b7\u53d6\u7528\u6237\u65b0\u901a\u77e5\u6570\u91cf"},"6. \u83b7\u53d6\u7528\u6237\u65b0\u901a\u77e5\u6570\u91cf"),Object(b.b)("p",null,"\u5f53\u6e38\u620f\u9700\u8981\u83b7\u53d6\u5f53\u524d\u7528\u6237\u7684\u65b0\u7684\u901a\u77e5\u4fe1\u606f\u6570\u91cf\u65f6\uff0c\u8c03\u7528\u8be5\u63a5\u53e3"),Object(b.b)("h4",{id:"api-4"},"API"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.getNoticeData();\n")),Object(b.b)("p",null,"  \u8fd4\u56de\u7ed3\u679c\u4f1a\u901a\u8fc7\u52a8\u6001\u56de\u8c03\u901a\u77e5\u6e38\u620f\u3002",Object(b.b)("br",{parentName:"p"}),"\n","",Object(b.b)("inlineCode",{parentName:"p"},"code == CALLBACK_CODE_GET_NOTICE_SUCCESS"),"(20000)\u8868\u793a\u83b7\u53d6\u6210\u529f\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"msg")," \u4e3a0\u8868\u793a\u65e0\u65b0\u6d88\u606f\uff0c\u4e3a1\u8868\u793a\u6709\u65b0\u6d88\u606f\u3002",Object(b.b)("br",{parentName:"p"}),"\n","",Object(b.b)("inlineCode",{parentName:"p"},"CALLBACK_CODE_GET_NOTICE_FAIL"),"(20100)\u8868\u793a\u83b7\u53d6\u5931\u8d25")),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"+ (void)fetchNewMessage;\n")),Object(b.b)("p",null,"  \u7ed3\u679c\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"Delegate")," \u4e0b\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"onMomentCallbackWithCode:msg:"),"\u4e2d\u8fd4\u56de\u3002",Object(b.b)("br",{parentName:"p"}),"\n","",Object(b.b)("inlineCode",{parentName:"p"},"code == CALLBACK_CODE_GET_NOTICE_SUCCESS"),"(20000)\u8868\u793a\u83b7\u53d6\u6210\u529f\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"msg")," \u4e3a0\u8868\u793a\u65e0\u65b0\u6d88\u606f\uff0c\u4e3a1\u8868\u793a\u6709\u65b0\u6d88\u606f\u3002",Object(b.b)("br",{parentName:"p"}),"\n","",Object(b.b)("inlineCode",{parentName:"p"},"CALLBACK_CODE_GET_NOTICE_FAIL"),"(20100)\u8868\u793a\u83b7\u53d6\u5931\u8d25")),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"public static void GetNoticeData();\n")),Object(b.b)("p",null,"\u7ed3\u679c\u5728",Object(b.b)("inlineCode",{parentName:"p"},"TapSDK.TDSMoment.SetCallback"),"\u8fdb\u884c\u56de\u8c03"))),Object(b.b)("h2",{id:"7-\u5173\u95ed\u52a8\u6001\u9875\u9762"},"7. \u5173\u95ed\u52a8\u6001\u9875\u9762"),Object(b.b)("p",null,"\u5f53\u6e38\u620f\u5728\u7279\u5b9a\u573a\u666f\u4e0b\u9700\u8981\u4e3b\u52a8\u5173\u95ed\u52a8\u6001\u7a97\u53e3\u65f6\u8c03\u7528"),Object(b.b)("h3",{id:"\u76f4\u63a5\u5173\u95ed"},"\u76f4\u63a5\u5173\u95ed"),Object(b.b)("p",null,"\u8be5\u63a5\u53e3\u4f1a\u76f4\u63a5\u5173\u95ed\u52a8\u6001\u7a97\u53e3\uff0c\u4e0d\u4f1a\u5f39\u51fa\u4e8c\u6b21\u786e\u8ba4\u5f39\u7a97\uff0c\u63a5\u53e3\u793a\u4f8b\uff1a"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.closeMoment();\n"))),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},"[TDSMomentSdk closeMoment];\n"))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"TapSDK.TDSMoment.CloseMoment();\n")))),Object(b.b)("h3",{id:"\u5f39\u51fa\u4e8c\u6b21\u786e\u8ba4"},"\u5f39\u51fa\u4e8c\u6b21\u786e\u8ba4"),Object(b.b)("p",null,"\u8be5\u63a5\u53e3\u4f1a\u5f39\u51fa\u4e8c\u6b21\u786e\u8ba4\u5f39\u7a97\uff0c\u7531\u7528\u6237\u786e\u5b9a\u662f\u5426\u5173\u95ed\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(b.b)(r.a,{groupId:"tap-platform",defaultValue:"Android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"unity",value:"unity"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"android",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"TapTapMomentSdk.closeMoment(title, content)\n")),Object(b.b)("p",null,"  ",Object(b.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),Object(b.b)("th",{parentName:"tr",align:null},"\u53ef\u4e3a\u7a7a"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"title"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6807\u9898")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"content"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u63cf\u8ff0")))),Object(b.b)("p",null,'\u53c2\u6570\u4e3a\u4e8c\u6b21\u5f39\u7a97\u7684\u6807\u9898\u548c\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a"\u63d0\u793a"\u548c"\u5339\u914d\u6210\u529f\uff0c\u8fdb\u5165\u6e38\u620f",\u7528\u6237\u9009\u62e9\u63a5\u53e3\u4f1a\u901a\u8fc7\u56de\u8c03 ',Object(b.b)("inlineCode",{parentName:"p"},"CALLBACK_CODE_ClOSE_CANCEL"),"(50000) \u548c",Object(b.b)("inlineCode",{parentName:"p"},"CALLBACK_CODE_ClOSE_CONFIRM"),"(50100)\u901a\u77e5\u6e38\u620f  ")),Object(b.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-objectivec"},'[TDSMomentSdk closeMomentWithTitle:@"title" content:@"content" showConfirm:true];\n')),Object(b.b)("p",null,"  ",Object(b.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),Object(b.b)("th",{parentName:"tr",align:null},"\u53ef\u4e3a\u7a7a"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"title"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6807\u9898")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"content"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u63cf\u8ff0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"showConfirm"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u786e\u8ba4\u5f39\u7a97"))))),Object(b.b)(c.a,{value:"unity",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-cs"},"TapSDK.TDSMoment.CloseMoment(title, desc);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),Object(b.b)("th",{parentName:"tr",align:null},"\u53ef\u4e3a\u7a7a"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"title"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6807\u9898")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"desc"),Object(b.b)("td",{parentName:"tr",align:null},"\u5426"),Object(b.b)("td",{parentName:"tr",align:null},"\u52a8\u6001\u63cf\u8ff0")))))),Object(b.b)("h2",{id:"8-\u6ce8\u610f\u4e8b\u9879"},"8. \u6ce8\u610f\u4e8b\u9879"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6253\u5f00\u52a8\u6001\u9875\u9762\u65f6\uff0c\u8bf7\u5148\u5c4f\u853d\u6e38\u620f\u81ea\u8eab\u7684\u58f0\u97f3\uff0c\u907f\u514d\u4e0e\u52a8\u6001\u5185\u89c6\u9891\u58f0\u97f3\u4ea7\u751f\u91cd\u5408"),Object(b.b)("li",{parentName:"ul"},"\u5982\u9700\u8981\u52a8\u6001\u80fd\u652f\u6301\u6a2a\u7ad6\u5c4f\u968f\u8bbe\u5907\u81ea\u52a8\u65cb\u8f6c\uff0c\u9700\u8981\u6e38\u620fapp\u81ea\u8eab\u80fd\u652f\u6301\u6a2a\u7ad6\u5c4f(Xcode\u914d\u7f6eDevice Orientation)"),Object(b.b)("li",{parentName:"ul"},"\u5c0f\u7ea2\u70b9\u5efa\u8bae\u8bf7\u6c42\u9891\u73871\u6b21/1\u5206\u949f"),Object(b.b)("li",{parentName:"ul"},"\u52a8\u6001\u5185\u7684\u80cc\u666f\u56fe\u662f\u53ef\u914d\u7f6e\u7684\uff0c\u5177\u4f53\u914d\u7f6e\u4f4d\u7f6e",Object(b.b)("a",{parentName:"li",href:"https://qnblog.ijemy.com/xd_moment_bg.png"},"\u70b9\u51fb\u67e5\u770b"),"\uff0c\u4e14\u9700\u8981\u7b49\u5f85\u5ba1\u6838\uff0c\u8bf7\u63d0\u524d\u914d\u7f6e")))}u.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,O=m["".concat(r,".").concat(u)]||m[u]||d[u]||b;return a?l.a.createElement(O,c(c({ref:t},o),{},{components:a})):l.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<b;o++)r[o]=a[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),l=a.n(n),b=function(e){var t=e.children,a=e.color;return l.a.createElement("span",{style:{color:a,padding:"0.2rem"}},t)}},93:function(e,t,a){"use strict";var n=a(0),l=a(94);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},94:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},99:function(e,t,a){"use strict";var n=a(0),l=a.n(n),b=a(93),r=a(88),c=a(53),i=a.n(c),o=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,m=e.values,d=e.groupId,u=e.className,O=Object(b.a)(),j=O.tabGroupChoices,s=O.setTabGroupChoices,g=Object(n.useState)(c),N=g[0],v=g[1],T=n.Children.toArray(e.children);if(null!=d){var f=j[d];null!=f&&f!==N&&m.some((function(e){return e.value===f}))&&v(f)}var y=function(e){v(e),null!=d&&s(d,e)},C=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},u)},m.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(T.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},T.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}}}]);