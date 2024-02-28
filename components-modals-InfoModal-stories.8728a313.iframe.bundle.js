(self.webpackChunkgame=self.webpackChunkgame||[]).push([[890],{"./src/components/modals/InfoModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InfoModal_stories}),__webpack_require__("./node_modules/react/index.js");var Cell=__webpack_require__("./src/components/cryptogram/Cell.tsx"),BaseModal=__webpack_require__("./src/components/modals/BaseModal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let onClick=(input,ariaLabel)=>{alert("You clicked on ".concat(ariaLabel))},InfoModal=_ref=>{let{isOpen,handleClose}=_ref;return(0,jsx_runtime.jsxs)(BaseModal.I,{title:"How to play",isOpen:isOpen,handleClose:handleClose,children:[(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"Guess the letter. After each guess, the color of the tile will change to show how close your guess was to the word."}),(0,jsx_runtime.jsxs)("div",{className:"mb-1 mt-4 flex justify-center",children:[(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,isRevealing:!0,isCompleted:!0,encryptedValue:"E",decryptedValue:"W",status:"correct"}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"E",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"A",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"R",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"Y",isCompleted:!0})]}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"The letter W is in the word and in the correct spot."}),(0,jsx_runtime.jsxs)("div",{className:"mb-1 mt-4 flex justify-center",children:[(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"P",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"I",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,isRevealing:!0,isCompleted:!0,encryptedValue:"E",decryptedValue:"L",status:"present"}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"O",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"T",isCompleted:!0})]}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"The letter L is in the word but in the wrong spot."}),(0,jsx_runtime.jsxs)("div",{className:"mb-1 mt-4 flex justify-center",children:[(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"V",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"A",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"G",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,isRevealing:!0,isCompleted:!0,encryptedValue:"E",decryptedValue:"U",status:"absent"}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"E",decryptedValue:"E",isCompleted:!0})]}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"The letter U is not in the word in any spot."}),(0,jsx_runtime.jsxs)("p",{className:"mt-6 text-sm italic text-gray-500 dark:text-gray-300",children:["This is an open source version of the word guessing game we all know and love -"," ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/cwackerfuss/react-wordle",className:"font-bold underline",children:"check out the code here"})," "]})]})};try{InfoModal.displayName="InfoModal",InfoModal.__docgenInfo={description:"",displayName:"InfoModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/InfoModal.tsx#InfoModal"]={docgenInfo:InfoModal.__docgenInfo,name:"InfoModal",path:"src/components/modals/InfoModal.tsx#InfoModal"})}catch(__react_docgen_typescript_loader_error){}let InfoModal_stories={title:"InfoModal",component:InfoModal},Default=()=>(0,jsx_runtime.jsx)(InfoModal,{isOpen:!0,handleClose:()=>console.log("handleClose")});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <InfoModal isOpen={true} handleClose={() => console.log('handleClose')} />",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/cryptogram/Cell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>Cell});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_constants_settings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/settings.ts"),_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/localStorage.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let isPunctuation=decryptedValue=>/\W/.test(decryptedValue),Cell=_ref=>{let{encryptedValue,decryptedValue,status,isRevealing,isCompleted,onClick,position=0}=_ref,[revealLetter,setRevealLetter]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[guess,setGuess]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),isFilled=decryptedValue&&!isCompleted,animationDelay="".concat(position*_constants_settings__WEBPACK_IMPORTED_MODULE_3__.hu,"ms"),isHighContrast=(0,_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__.IS)();decryptedValue&&isPunctuation(decryptedValue);let classesEncrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white",{"bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600":!status,"border-white dark:border-black":!status,"absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700":"absent"===status,"correct shadowed bg-orange-500 text-white border-orange-500":"correct"===status&&isHighContrast,"present shadowed bg-cyan-500 text-white border-cyan-500":"present"===status&&isHighContrast,"correct shadowed bg-green-500 text-white border-green-500":"correct"===status&&!isHighContrast,"present shadowed bg-yellow-500 text-white border-yellow-500":"present"===status&&!isHighContrast,"cell-fill-animation":isFilled,"cell-reveal":isRevealing&&isCompleted}),classesDecrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white"),styles={fontFamily:"Courier New",animationDelay,minHeight:"1em"};function handleKeyDown(ev){console.log(ev.key,decryptedValue),setGuess(ev.key.toLocaleUpperCase()),setRevealLetter(!0),window.removeEventListener("keydown",handleKeyDown)}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"inline-flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-label":encryptedValue,onClick:event=>{var _event$target;onClick("",(null==event?void 0:null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.ariaLabel)||""),event.currentTarget.blur()},className:classesDecrypted,style:styles,children:decryptedValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-label":encryptedValue,style:styles,className:classesEncrypted,children:encryptedValue})]})};try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{encryptedValue:{defaultValue:null,description:"",name:"encryptedValue",required:!0,type:{name:"string"}},decryptedValue:{defaultValue:null,description:"",name:"decryptedValue",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"absent"'},{value:'"present"'},{value:'"correct"'}]}},isRevealing:{defaultValue:null,description:"",name:"isRevealing",required:!1,type:{name:"boolean"}},isCompleted:{defaultValue:null,description:"",name:"isCompleted",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"0"},description:"",name:"position",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(input: string, ariaLabel: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cryptogram/Cell.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"src/components/cryptogram/Cell.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modals/BaseModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>BaseModal});var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let BaseModal=_ref=>{let{title,children,isOpen,handleClose}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex min-h-full items-center justify-center px-4 py-10 text-center sm:p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Overlay,{className:"fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>handleClose(),tabIndex:0,"aria-pressed":"false",className:"absolute right-4 top-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6 cursor-pointer dark:stroke-white"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-2",children:children})]})})]})})]})})})};try{BaseModal.displayName="BaseModal",BaseModal.__docgenInfo={description:"",displayName:"BaseModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/BaseModal.tsx#BaseModal"]={docgenInfo:BaseModal.__docgenInfo,name:"BaseModal",path:"src/components/modals/BaseModal.tsx#BaseModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=6,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!1,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/date-fns/locale/en-US.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>enUS});let formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function buildFormatLongFn(args){return (options={})=>{let width=options.width?String(options.width):args.defaultWidth;return args.formats[width]||args.formats[args.defaultWidth]}}let formatLong={date:buildFormatLongFn({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:buildFormatLongFn({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function buildLocalizeFn(args){return(value,options)=>{let valuesArray;if("formatting"===(options?.context?String(options.context):"standalone")&&args.formattingValues){let defaultWidth=args.defaultFormattingWidth||args.defaultWidth,width=options?.width?String(options.width):defaultWidth;valuesArray=args.formattingValues[width]||args.formattingValues[defaultWidth]}else{let defaultWidth=args.defaultWidth,width=options?.width?String(options.width):args.defaultWidth;valuesArray=args.values[width]||args.values[defaultWidth]}return valuesArray[args.argumentCallback?args.argumentCallback(value):value]}}function buildMatchFn(args){return(string,options={})=>{let value;let width=options.width,matchPattern=width&&args.matchPatterns[width]||args.matchPatterns[args.defaultMatchWidth],matchResult=string.match(matchPattern);if(!matchResult)return null;let matchedString=matchResult[0],parsePatterns=width&&args.parsePatterns[width]||args.parsePatterns[args.defaultParseWidth],key=Array.isArray(parsePatterns)?findIndex(parsePatterns,pattern=>pattern.test(matchedString)):findKey(parsePatterns,pattern=>pattern.test(matchedString));return value=args.valueCallback?args.valueCallback(key):key,{value:value=options.valueCallback?options.valueCallback(value):value,rest:string.slice(matchedString.length)}}}function findKey(object,predicate){for(let key in object)if(Object.prototype.hasOwnProperty.call(object,key)&&predicate(object[key]))return key}function findIndex(array,predicate){for(let key=0;key<array.length;key++)if(predicate(array[key]))return key}function buildMatchPatternFn(args){return(string,options={})=>{let matchResult=string.match(args.matchPattern);if(!matchResult)return null;let matchedString=matchResult[0],parseResult=string.match(args.parsePattern);if(!parseResult)return null;let value=args.valueCallback?args.valueCallback(parseResult[0]):parseResult[0];return{value:value=options.valueCallback?options.valueCallback(value):value,rest:string.slice(matchedString.length)}}}let enUS={code:"en-US",formatDistance:(token,count,options)=>{let result;let tokenValue=formatDistanceLocale[token];return(result="string"==typeof tokenValue?tokenValue:1===count?tokenValue.one:tokenValue.other.replace("{{count}}",count.toString()),options?.addSuffix)?options.comparison&&options.comparison>0?"in "+result:result+" ago":result},formatLong:formatLong,formatRelative:(token,_date,_baseDate,_options)=>formatRelativeLocale[token],localize:{ordinalNumber:(dirtyNumber,_options)=>{let number=Number(dirtyNumber),rem100=number%100;if(rem100>20||rem100<10)switch(rem100%10){case 1:return number+"st";case 2:return number+"nd";case 3:return number+"rd"}return number+"th"},era:buildLocalizeFn({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:buildLocalizeFn({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:quarter=>quarter-1}),month:buildLocalizeFn({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:buildLocalizeFn({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:buildMatchPatternFn({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:value=>parseInt(value,10)}),era:buildMatchFn({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:index=>index+1}),month:buildMatchFn({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-modals-InfoModal-stories.8728a313.iframe.bundle.js.map