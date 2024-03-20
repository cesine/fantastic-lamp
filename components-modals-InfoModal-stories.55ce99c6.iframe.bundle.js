"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[890],{"./src/components/modals/InfoModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InfoModal_stories}),__webpack_require__("./node_modules/react/index.js");var Cell=__webpack_require__("./src/components/cryptogram/Cell.tsx"),BaseModal=__webpack_require__("./src/components/modals/BaseModal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let onClick=(input,ariaLabel)=>{alert("You clicked on ".concat(ariaLabel))},firstTutorial=!0,InfoModal=_ref=>{let{isOpen,handleClose}=_ref;function onCloseClick(){return window.gtag("event","tutorial_complete"),handleClose()}return isOpen&&firstTutorial&&(firstTutorial=!1,window.gtag("event","tutorial_begin")),(0,jsx_runtime.jsxs)(BaseModal.I,{title:"How to play",isOpen:isOpen,handleClose:onCloseClick,children:[(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"Uncover the hidden quote by deciphering the code. Each letter is substituted with another. Guess the letter. After each guess, the color of the tile will change to show how close your guess was to the message."}),(0,jsx_runtime.jsxs)("div",{className:"mb-1 mt-4 flex justify-center",children:[(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"K",decryptedValue:"P",isCompleted:!0,status:"correct"}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"F",decryptedValue:"",isCompleted:!0}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,isRevealing:!0,isCompleted:!0,encryptedValue:"D",decryptedValue:""}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"Z",decryptedValue:"U",isCompleted:!0,status:"absent"}),(0,jsx_runtime.jsx)(Cell.b,{onClick:onClick,encryptedValue:"C",decryptedValue:"L",status:"present",isCompleted:!0})]}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"The letter P is in correct spot."}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"The letter L is in the message but in the wrong spot."}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:"The letter U is not in the message in any spot."})]})};InfoModal.displayName="InfoModal";let InfoModal_stories={title:"InfoModal",component:InfoModal},Default=()=>(0,jsx_runtime.jsx)(InfoModal,{isOpen:!0,handleClose:()=>console.log("handleClose")});Default.displayName="Default";let __namedExportsOrder=["Default"]},"./src/components/cryptogram/Cell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Cell});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_constants_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/settings.ts"),_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/localStorage.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let isaLetter=decryptedValue=>/[a-zA-Z]+/.test(decryptedValue),userHasInteractedWithCell=!1,isIphone=/iPhone/i.test(navigator.userAgent),Cell=_ref=>{let{encryptedValue,decryptedValue,status,isRevealing,isCompleted,onClick,position=0}=_ref,animationDelay="".concat(position*_constants_settings__WEBPACK_IMPORTED_MODULE_2__.hu,"ms"),isHighContrast=(0,_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__.IS)(),shouldDisplayDecrypted=isaLetter(encryptedValue),classesEncrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-8 h-8 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white",{"bg-white dark:bg-slate-900":!status}),classesDecrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-8 h-8 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white",{"hover:bg-slate-300 active:bg-slate-400 dark:border-slate-700":!status,"absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700":"absent"===status,"correct shadowed bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white border-orange-500":"correct"===status&&isHighContrast,"present shadowed bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white border-cyan-500":"present"===status&&isHighContrast,"correct shadowed bg-green-500 hover:bg-green-600 active:bg-green-700 text-white border-green-500":"correct"===status&&!isHighContrast,"present shadowed bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white border-yellow-500":"present"===status&&!isHighContrast,"cell-fill-animation":decryptedValue&&!isCompleted,"cell-reveal":isRevealing&&isCompleted}),stylesDecrypted={fontFamily:"Courier New",animationDelay,minHeight:"1em"},stylesEncrypted={...stylesDecrypted,marginBottom:"40px"},hiddenInputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"inline-flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{"aria-label":encryptedValue,onClick:event=>{var _event$target,_hiddenInputRef$curre;userHasInteractedWithCell||(userHasInteractedWithCell=!0,window.gtag("event","unlock_achievement",{achievement_id:"click_cryptogram_cell"})),onClick("",(null==event?void 0:null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.ariaLabel)||""),isIphone&&(event.currentTarget.blur(),null==hiddenInputRef||null===(_hiddenInputRef$curre=hiddenInputRef.current)||void 0===_hiddenInputRef$curre||_hiddenInputRef$curre.focus())},className:shouldDisplayDecrypted?classesDecrypted:classesEncrypted,style:stylesDecrypted,...shouldDisplayDecrypted?{}:{tabIndex:-1},children:[shouldDisplayDecrypted?decryptedValue:null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{ref:hiddenInputRef,style:{position:"absolute",top:"-9999px"},tabIndex:-1,type:"text"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{"aria-label":encryptedValue,style:stylesEncrypted,className:classesEncrypted,children:encryptedValue})]})};Cell.displayName="Cell"},"./src/components/modals/BaseModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>BaseModal});var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let BaseModal=_ref=>{let{title,children,isOpen,handleClose}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex min-h-full items-center justify-center px-4 py-10 text-center sm:p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Overlay,{className:"fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>handleClose(),tabIndex:0,"aria-pressed":"false",className:"absolute right-4 top-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6 cursor-pointer dark:stroke-white"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-2",children:children})]})})]})})]})})})};BaseModal.displayName="BaseModal"},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=26,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!0,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},firstGame=!0,loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return!stats&&firstGame&&(firstGame=!1,window.gtag("event","sign_up",{method:"Anonymous"})),stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")},"./node_modules/date-fns/locale/en-US.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>enUS});let formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function buildFormatLongFn(args){return (options={})=>{let width=options.width?String(options.width):args.defaultWidth;return args.formats[width]||args.formats[args.defaultWidth]}}let formatLong={date:buildFormatLongFn({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:buildFormatLongFn({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function buildLocalizeFn(args){return(value,options)=>{let valuesArray;if("formatting"===(options?.context?String(options.context):"standalone")&&args.formattingValues){let defaultWidth=args.defaultFormattingWidth||args.defaultWidth,width=options?.width?String(options.width):defaultWidth;valuesArray=args.formattingValues[width]||args.formattingValues[defaultWidth]}else{let defaultWidth=args.defaultWidth,width=options?.width?String(options.width):args.defaultWidth;valuesArray=args.values[width]||args.values[defaultWidth]}return valuesArray[args.argumentCallback?args.argumentCallback(value):value]}}function buildMatchFn(args){return(string,options={})=>{let value;let width=options.width,matchPattern=width&&args.matchPatterns[width]||args.matchPatterns[args.defaultMatchWidth],matchResult=string.match(matchPattern);if(!matchResult)return null;let matchedString=matchResult[0],parsePatterns=width&&args.parsePatterns[width]||args.parsePatterns[args.defaultParseWidth],key=Array.isArray(parsePatterns)?findIndex(parsePatterns,pattern=>pattern.test(matchedString)):findKey(parsePatterns,pattern=>pattern.test(matchedString));return value=args.valueCallback?args.valueCallback(key):key,{value:value=options.valueCallback?options.valueCallback(value):value,rest:string.slice(matchedString.length)}}}function findKey(object,predicate){for(let key in object)if(Object.prototype.hasOwnProperty.call(object,key)&&predicate(object[key]))return key}function findIndex(array,predicate){for(let key=0;key<array.length;key++)if(predicate(array[key]))return key}function buildMatchPatternFn(args){return(string,options={})=>{let matchResult=string.match(args.matchPattern);if(!matchResult)return null;let matchedString=matchResult[0],parseResult=string.match(args.parsePattern);if(!parseResult)return null;let value=args.valueCallback?args.valueCallback(parseResult[0]):parseResult[0];return{value:value=options.valueCallback?options.valueCallback(value):value,rest:string.slice(matchedString.length)}}}let enUS={code:"en-US",formatDistance:(token,count,options)=>{let result;let tokenValue=formatDistanceLocale[token];return(result="string"==typeof tokenValue?tokenValue:1===count?tokenValue.one:tokenValue.other.replace("{{count}}",count.toString()),options?.addSuffix)?options.comparison&&options.comparison>0?"in "+result:result+" ago":result},formatLong:formatLong,formatRelative:(token,_date,_baseDate,_options)=>formatRelativeLocale[token],localize:{ordinalNumber:(dirtyNumber,_options)=>{let number=Number(dirtyNumber),rem100=number%100;if(rem100>20||rem100<10)switch(rem100%10){case 1:return number+"st";case 2:return number+"nd";case 3:return number+"rd"}return number+"th"},era:buildLocalizeFn({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:buildLocalizeFn({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:quarter=>quarter-1}),month:buildLocalizeFn({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:buildLocalizeFn({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:buildMatchPatternFn({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:value=>parseInt(value,10)}),era:buildMatchFn({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:index=>index+1}),month:buildMatchFn({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}}}]);