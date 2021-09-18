(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(433)},1236:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(433).configure)([__webpack_require__(1237),__webpack_require__(1239)],module,!1)}).call(this,__webpack_require__(216)(module))},1237:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1238};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1237},1238:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(22),__webpack_require__(323),__webpack_require__(6),__webpack_require__(15),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(48),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(565),_excluded=["components"];function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Meta=function makeShortcode(name){return function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("div",props)}}("Meta"),layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(Meta,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"welcome-to-open-librarys-component-storybook"},"Welcome to Open Library's Component storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Open Library's use of storybook continues the work that began in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://github.com/internetarchive/openlibrary/wiki/Design-Pattern-Library",target:"_blank",rel:"nofollow noopener noreferrer"},"design pattern library"),".\nOver time the components identified there will be moved to storybook."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"src/storybook-examples")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1239:function(module,exports,__webpack_require__){var map={"./Button.stories.js":1246};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1239},1246:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CtaBtn",(function(){return CtaBtn})),__webpack_require__.d(__webpack_exports__,"CtaBtnUnavailable",(function(){return CtaBtnUnavailable})),__webpack_require__.d(__webpack_exports__,"CtaBtnAvailable",(function(){return CtaBtnAvailable})),__webpack_require__.d(__webpack_exports__,"CtaBtnPreview",(function(){return CtaBtnPreview})),__webpack_require__.d(__webpack_exports__,"CtaBtnWithBadge",(function(){return CtaBtnWithBadge})),__webpack_require__.d(__webpack_exports__,"CtaBtnGroup",(function(){return CtaBtnGroup}));__webpack_require__(22),__webpack_require__(6),__webpack_require__(42),__webpack_require__(147),__webpack_require__(145),__webpack_require__(39),__webpack_require__(224),__webpack_require__(144),__webpack_require__(146),__webpack_require__(23);var injectStylesIntoStyleTag=__webpack_require__(238),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),buttonCta=__webpack_require__(331),options={insert:"head",singleton:!1},buttonCta_js=(injectStylesIntoStyleTag_default()(buttonCta.a,options),buttonCta.a.locals,__webpack_require__(332)),buttonCta_js_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(buttonCta_js.a,buttonCta_js_options),buttonCta_js.a.locals;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Legacy/Button"};var ButtonTemplate=function ButtonTemplate(buttonType,text){var badgeCount=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return'<div class="cta-btn '.concat(ButtonTypes[buttonType],'">').concat(text," ").concat(badgeCount?BadgeTemplate(badgeCount):"","</div>")},BadgeTemplate=function BadgeTemplate(badgeCount){return'<span class="cta-btn__badge">'.concat(badgeCount,"</span>")},ButtonTypes={default:"",unavailable:" cta-btn--unavailable",available:" cta-btn--available",preview:" cta-btn--shell cta-btn--preview"},CtaBtn=function CtaBtn(){return ButtonTemplate("default","Leave waitlist")};CtaBtn.parameters={docs:{source:{code:'<div class="cta-btn">Leave waitlist</div>'}}};var CtaBtnUnavailable=function CtaBtnUnavailable(){return ButtonTemplate("unavailable","Join waitlist")};CtaBtnUnavailable.parameters={docs:{source:{code:'<div class="cta-btn cta-btn--unavailable">Join waitlist</div>'}}};var CtaBtnAvailable=function CtaBtnAvailable(){return ButtonTemplate("available","Borrow")};CtaBtnAvailable.parameters={docs:{source:{code:'<div class="cta-btn cta-btn--available">Borrow</div>'}}};var CtaBtnPreview=function CtaBtnPreview(){return ButtonTemplate("preview","Preview")};CtaBtnPreview.parameters={docs:{source:{code:'<div class="cta-btn cta-btn--shell cta-btn--preview">Preview</div>'}}};var CtaBtnWithBadge=function CtaBtnWithBadge(){return ButtonTemplate("unavailable","Join waiting list",4)};CtaBtnWithBadge.parameters={docs:{source:{code:'<div class="cta-btn cta-btn--unavailable">Join waiting list <span class="cta-btn__badge">4</span></div>'}}};var CtaBtnGroup=function CtaBtnGroup(){return'<div class="cta-button-group">\n<a href="/borrow/ia/sevenhabitsofhi00cove?ref=ol" title="Borrow ebook from Internet Archive" id="borrow_ebook" data-ol-link-track="CTAClick|Borrow" class="cta-btn cta-btn--available">Borrow</a>\n<a href="/borrow/ia/sevenhabitsofhi00cove?ref=ol&amp;_autoReadAloud=show" title="Borrow ebook from Internet Archive using Read Aloud" data-ol-link-track="CTAClick|BorrowListen" class="cta-btn cta-btn--available">\n  <span class="btn-icon read-aloud"></span>\n  <span class="btn-label">Listen</span>\n</a>\n</div>\n'};CtaBtnGroup.parameters={docs:{source:{code:'\n<div class="cta-button-group">\n    <a href="/borrow/ia/sevenhabitsofhi00cove?ref=ol" title="Borrow ebook from Internet Archive" id="borrow_ebook" data-ol-link-track="CTAClick|Borrow" class="cta-btn cta-btn--available">Borrow</a>\n    <a href="/borrow/ia/sevenhabitsofhi00cove?ref=ol&amp;_autoReadAloud=show" title="Borrow ebook from Internet Archive using Read Aloud" data-ol-link-track="CTAClick|BorrowListen" class="cta-btn cta-btn--available">\n        <span class="btn-icon read-aloud"></span>\n        <span class="btn-label">Listen</span>\n    </a>\n</div>'}}},CtaBtn.parameters=_objectSpread({storySource:{source:"() => ButtonTemplate('default','Leave waitlist')"}},CtaBtn.parameters),CtaBtnUnavailable.parameters=_objectSpread({storySource:{source:"() => ButtonTemplate('unavailable','Join waitlist')"}},CtaBtnUnavailable.parameters),CtaBtnAvailable.parameters=_objectSpread({storySource:{source:"() => ButtonTemplate('available','Borrow')"}},CtaBtnAvailable.parameters),CtaBtnPreview.parameters=_objectSpread({storySource:{source:"() => ButtonTemplate('preview','Preview')"}},CtaBtnPreview.parameters),CtaBtnWithBadge.parameters=_objectSpread({storySource:{source:"() =>\n    ButtonTemplate('unavailable', 'Join waiting list', 4)"}},CtaBtnWithBadge.parameters),CtaBtnGroup.parameters=_objectSpread({storySource:{source:'() => `<div class="cta-button-group">\n<a href="/borrow/ia/sevenhabitsofhi00cove?ref=ol" title="Borrow ebook from Internet Archive" id="borrow_ebook" data-ol-link-track="CTAClick|Borrow" class="cta-btn cta-btn--available">Borrow</a>\n<a href="/borrow/ia/sevenhabitsofhi00cove?ref=ol&amp;_autoReadAloud=show" title="Borrow ebook from Internet Archive using Read Aloud" data-ol-link-track="CTAClick|BorrowListen" class="cta-btn cta-btn--available">\n  <span class="btn-icon read-aloud"></span>\n  <span class="btn-label">Listen</span>\n</a>\n</div>\n`'}},CtaBtnGroup.parameters)},1250:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(6),__webpack_require__(42),__webpack_require__(147),__webpack_require__(145),__webpack_require__(39),__webpack_require__(224),__webpack_require__(144),__webpack_require__(146);var client_api=__webpack_require__(1257),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},331:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(239),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(240),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,'/**\n * CtaBtn\n * https://github.com/internetarchive/openlibrary/wiki/Design-Pattern-Library#ctabtn\n */\n.cta-btn,\na.cta-btn {\n  font-size: 16px;\n  color: hsl(0, 0%, 100%);\n  width: 100%;\n  display: block;\n  border: 0;\n  border-radius: 5px;\n  margin-top: 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: "Lucida Grande", Verdana, Geneva, Helvetica, Arial, sans-serif;\n  text-align: center;\n  padding: 7px;\n  white-space: nowrap;\n  background-color: hsl(0, 0%, 40%);\n  line-height: 1.5em;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.cta-btn .btn-icon,\na.cta-btn .btn-icon {\n  width: 40px;\n  flex-shrink: 0;\n}\n.cta-btn .btn-icon.read-aloud,\na.cta-btn .btn-icon.read-aloud {\n  background-image: url(/static/images/icons/read%20aloud.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n.cta-btn .btn-label,\na.cta-btn .btn-label {\n  padding: 0 20px;\n}\n.cta-btn:link,\na.cta-btn:link,\n.cta-btn:visited,\na.cta-btn:visited {\n  color: hsl(0, 0%, 100%);\n  text-decoration: none;\n}\n.cta-btn--available,\na.cta-btn--available {\n  background-color: hsl(202, 96%, 37%);\n  color: hsl(0, 0%, 100%);\n}\n.cta-btn--available:hover,\na.cta-btn--available:hover {\n  background-color: hsl(202, 96%, 17%);\n}\n.cta-btn--unavailable,\na.cta-btn--unavailable {\n  background-color: hsl(19, 95%, 40%);\n  color: hsl(0, 0%, 100%);\n}\n.cta-btn--unavailable:hover,\na.cta-btn--unavailable:hover {\n  background-color: hsl(19, 95%, 20%);\n}\n.cta-btn--shell,\na.cta-btn--shell,\n.cta-btn--shell:link,\na.cta-btn--shell:link,\n.cta-btn--shell:visited,\na.cta-btn--shell:visited {\n  background-color: hsl(0, 0%, 100%);\n  border: 2px solid hsl(202, 96%, 37%);\n  color: hsl(202, 96%, 37%);\n}\n.cta-btn--sponsor,\na.cta-btn--sponsor {\n  border: 2px solid hsl(202, 96%, 28%);\n  background: hsl(202, 40%, 95%);\n}\n.cta-btn--vanilla,\na.cta-btn--vanilla {\n  padding: 5px;\n  border: 2px solid hsl(0, 0%, 80%);\n  background: hsl(0, 0%, 100%);\n  color: hsl(0, 0%, 0%);\n  border-radius: 6px;\n}\n.cta-btn--sponsor:link,\na.cta-btn--sponsor:link,\n.cta-btn--sponsor:visited,\na.cta-btn--sponsor:visited {\n  color: hsl(202, 96%, 28%);\n}\n.cta-btn--sponsor:hover,\na.cta-btn--sponsor:hover {\n  border: 2px solid hsl(202, 96%, 28%);\n  background-color: hsl(202, 96%, 28%);\n  color: hsl(0, 0%, 100%);\n}\n.cta-btn__badge,\na.cta-btn__badge {\n  background-color: hsl(19, 95%, 20%);\n  padding: 4px 7px;\n  border-radius: 5px;\n  font-size: 0.7em;\n}\n.cta-btn + form input.cta-btn,\n.cta-btn + .cta-btn {\n  margin-top: 5px;\n}\n.cta-btn--small {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.waitinglist-message {\n  white-space: nowrap;\n}\n.cta-button-group {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.cta-button-group .cta-btn {\n  margin: 0;\n  padding: 8px 0;\n}\n.cta-button-group .cta-btn:first-child {\n  flex: 1;\n  padding: 8px;\n  overflow: hidden;\n}\n.cta-button-group .cta-btn:not(:first-child) {\n  margin-left: 1px;\n  width: 40px;\n  transition: width 0.2s;\n  overflow: hidden;\n  display: flex;\n  border-radius: 2px 6px 6px 2px;\n}\n.cta-button-group .cta-btn:not(:last-child) {\n  border-radius: 6px 2px 2px 6px;\n}\n.cta-button-group .cta-btn:not(:first-child):hover {\n  width: 100%;\n}\n',"",{version:3,sources:["webpack://./static/css/components/buttonCta.less"],names:[],mappings:"AAAA;;;EAGE;AAIF;;EAEE,eAAA;EACA,uBAAA;EACA,WAAA;EACA,cAAA;EACA,SAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;EACA,eAAA;EACA,2EAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,iCAAA;EACA,kBAAA;EACA,qBAAA;EAEA,iCAAA;AAHF;AAhBA;;EAsBI,WAAA;EACA,cAAA;AAFJ;AArBA;;EA2BI,4DAAA;EACA,4BAAA;EACA,wBAAA;EACA,2BAAA;AAFJ;AA5BA;;EAiCe,eAAA;AADf;AAGE;;;;EACE,uBAAA;EACA,qBAAA;AAEJ;AACE;;EACE,oCAAA;EACA,uBAAA;AAEJ;AADI;;EAAU,oCAAA;AAKd;AAFE;;EACE,mCAAA;EACA,uBAAA;AAKJ;AAJI;;EAAU,mCAAA;AAQd;AANE;;;;;;EACE,kCAAA;EACA,oCAAA;EACA,yBAAA;AAaJ;AAXE;;EACE,oCAAA;EACA,8BAAA;AAcJ;AAZE;;EACE,YAAA;EACA,iCAAA;EACA,4BAAA;EACA,qBAAA;EACA,kBAAA;AAeJ;AAZE;;;;EACE,yBAAA;AAiBJ;AAdE;;EACE,oCAAA;EACA,oCAAA;EACA,uBAAA;AAiBJ;AAdE;;EACE,mCAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAiBJ;AAZA;;EACE,eAAA;AAeF;AAZA;EACE,eAAA;EACA,iBAAA;AAcF;AAXA;EACE,mBAAA;AAaF;AAVA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AAYF;AAfA;EAMI,SAAA;EACA,cAAA;AAYJ;AAVI;EACE,OAAA;EACA,YAAA;EACA,gBAAA;AAYN;AATI;EACE,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;AAWN;AARI;EAAqB,8BAAA;AAWzB;AATI;EAA4B,WAAA;AAYhC",sourcesContent:['/**\n * CtaBtn\n * https://github.com/internetarchive/openlibrary/wiki/Design-Pattern-Library#ctabtn\n */\n@import "../less/index.less";\n\n// `a` specificity is needed to override default anchor styles\n.cta-btn,\na.cta-btn {\n  font-size: 16px;\n  color: @white;\n  width: 100%;\n  display: block;\n  border: 0;\n  border-radius: 5px;\n  margin-top: 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: @lucida_sans_serif-1;\n  text-align: center;\n  padding: 7px;\n  white-space: nowrap;\n  background-color: @grey;\n  line-height: 1.5em;\n  text-decoration: none;\n\n  transition: background-color .2s;\n\n  .btn-icon {\n    width: 40px;\n    flex-shrink: 0;\n  }\n  // stylelint-disable-next-line selector-max-specificity\n  .btn-icon.read-aloud {\n    background-image: url(/static/images/icons/read%20aloud.svg);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n  }\n\n  .btn-label { padding: 0 20px; }\n\n  &:link, &:visited {\n    color: @white;\n    text-decoration: none;\n  }\n\n  &--available {\n    background-color: @primary-blue;\n    color: @white;\n    &:hover { background-color: darken(@primary-blue, 20%); }\n  }\n\n  &--unavailable {\n    background-color: @burnt-sienna;\n    color: @white;\n    &:hover { background-color: darken(@burnt-sienna, 20%); }\n  }\n  &--shell, &--shell:link, &--shell:visited {\n    background-color: @white;\n    border: 2px solid @primary-blue;\n    color: @primary-blue;\n  }\n  &--sponsor {\n    border: 2px solid @link-blue;\n    background: lighten(desaturate(@link-blue, 56%), 67%);\n  }\n  &--vanilla {\n    padding: 5px;\n    border: 2px solid @light-grey;\n    background: @white;\n    color: @black;\n    border-radius: 6px;\n  }\n\n  &--sponsor:link, &--sponsor:visited {\n    color: @link-blue;\n  }\n\n  &--sponsor:hover {\n    border: 2px solid @link-blue;\n    background-color: @link-blue;\n    color: @white;\n  }\n\n  &__badge {\n    background-color: darken(@burnt-sienna, 20%);\n    padding: 4px 7px;\n    border-radius: 5px;\n    font-size: .7em;\n  }\n}\n\n// Top margin to button coming after another button\n.cta-btn + form input.cta-btn, .cta-btn + .cta-btn {\n  margin-top: 5px;\n}\n\n.cta-btn--small {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\n.waitinglist-message {\n  white-space: nowrap;\n}\n\n.cta-button-group {\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  .cta-btn {\n    margin: 0;\n    padding: 8px 0;\n\n    &:first-child {\n      flex: 1;\n      padding: 8px;\n      overflow: hidden;\n    }\n\n    &:not(:first-child) {\n      margin-left: 1px;\n      width: 40px;\n      transition: width .2s;\n      overflow: hidden;\n      display: flex;\n      border-radius: 2px 6px 6px 2px;\n    }\n\n    &:not(:last-child) { border-radius: 6px 2px 2px 6px; }\n    // stylelint-disable-next-line selector-max-specificity\n    &:not(:first-child):hover { width: 100%; }\n  }\n}\n'],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},332:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(239),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(240),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"/**\n * CtaBtn\n * https://github.com/internetarchive/openlibrary/wiki/Design-Pattern-Library#ctabtn\n * This stylesheet will only apply if JS is present on the page.\n */\n.cta-btn--available--load,\na.cta-btn--available--load {\n  background: url(/static/images/indicator.gif) center center no-repeat;\n  background-color: hsl(202, 96%, 37%) !important;\n  opacity: 0.6;\n}\n.cta-btn--unavailable--load,\na.cta-btn--unavailable--load {\n  background: url(/static/images/indicator.gif) center center no-repeat;\n  background-color: hsl(19, 95%, 40%) !important;\n  opacity: 0.6;\n}\n","",{version:3,sources:["webpack://./static/css/components/buttonCta--js.less"],names:[],mappings:"AAAA;;;;EAIE;AAOE;;EACE,qEAAA;EACA,+CAAA;EACA,YAAA;AAJN;AAQI;;EACE,qEAAA;EACA,8CAAA;EACA,YAAA;AALN",sourcesContent:['/**\n * CtaBtn\n * https://github.com/internetarchive/openlibrary/wiki/Design-Pattern-Library#ctabtn\n * This stylesheet will only apply if JS is present on the page.\n */\n@import "../less/index.less";\n\n// `a` specificity is needed to override default anchor styles\n.cta-btn,\na.cta-btn {\n  &--available {\n    &--load {\n      background: url(/static/images/indicator.gif) center center no-repeat;\n      background-color: @primary-blue !important;\n      opacity: .6;\n    }\n  }\n  &--unavailable {\n    &--load {\n      background: url(/static/images/indicator.gif) center center no-repeat;\n      background-color: @burnt-sienna !important;\n      opacity: .6;\n    }\n  }\n}\n'],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},584:function(module,exports,__webpack_require__){__webpack_require__(585),__webpack_require__(1010),__webpack_require__(1011),__webpack_require__(1244),__webpack_require__(1243),__webpack_require__(1247),__webpack_require__(1248),__webpack_require__(1245),__webpack_require__(1240),__webpack_require__(1249),__webpack_require__(1241),__webpack_require__(1242),__webpack_require__(1250),module.exports=__webpack_require__(1236)},728:function(module,exports){},771:function(module,exports){},839:function(module,exports){},885:function(module,exports){},930:function(module,exports){},954:function(module,exports){}},[[584,2,3]]]);