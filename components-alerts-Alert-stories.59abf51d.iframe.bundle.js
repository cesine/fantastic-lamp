(self.webpackChunkgame=self.webpackChunkgame||[]).push([[241],{"./src/components/alerts/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Success:()=>Success,TopMost:()=>TopMost,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});var react=__webpack_require__("./node_modules/react/index.js"),transition_esm=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Alert=_ref=>{let{isOpen,message,variant="error",topMost=!1}=_ref,classes=classnames_default()("fixed z-20 top-14 left-1/2 transform -translate-x-1/2 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",{"bg-rose-500 text-white":"error"===variant,"bg-blue-500 text-white":"success"===variant});return(0,jsx_runtime.jsx)(transition_esm.u,{show:isOpen,as:react.Fragment,enter:"ease-out duration-300 transition",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,jsx_runtime.jsx)("div",{className:classes,children:(0,jsx_runtime.jsx)("div",{className:"p-2",children:(0,jsx_runtime.jsx)("p",{className:"text-center text-sm font-medium",children:message})})})})};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"error"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},topMost:{defaultValue:{value:"false"},description:"",name:"topMost",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/alerts/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/alerts/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}let Alert_stories={title:"Alert",component:Alert},Error=()=>(0,jsx_runtime.jsx)(Alert,{isOpen:!0,message:"This is an error alert.",variant:"error"}),Success=()=>(0,jsx_runtime.jsx)(Alert,{isOpen:!0,message:"This is a success alert.",variant:"success"}),TopMost=()=>(0,jsx_runtime.jsx)(Alert,{isOpen:!0,message:"This is a top-most alert.",topMost:!0});Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'() => <Alert isOpen={true} message="This is an error alert." variant="error" />',...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'() => <Alert isOpen={true} message="This is a success alert." variant="success" />',...Success.parameters?.docs?.source}}},TopMost.parameters={...TopMost.parameters,docs:{...TopMost.parameters?.docs,source:{originalSource:'() => <Alert isOpen={true} message="This is a top-most alert." topMost={true} />',...TopMost.parameters?.docs?.source}}};let __namedExportsOrder=["Error","Success","TopMost"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-alerts-Alert-stories.59abf51d.iframe.bundle.js.map