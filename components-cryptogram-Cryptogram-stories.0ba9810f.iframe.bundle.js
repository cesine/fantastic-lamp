(self.webpackChunkgame=self.webpackChunkgame||[]).push([[306],{"./src/components/cryptogram/Cryptogram.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Cryptogram_stories}),__webpack_require__("./node_modules/react/index.js");var cipher=__webpack_require__("./src/lib/cipher.ts"),quotes=__webpack_require__("./src/lib/quotes.ts"),Cell=__webpack_require__("./src/components/cryptogram/Cell.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Cryptogram=_ref=>{var _encryptedQuote$quote,_encryptedQuote$quote2,_encryptedQuote$autho,_encryptedQuote$autho2;let{onChar,cipher,encryptedQuote,isRevealing,isHardMode=!0}=_ref,words=null!==(_encryptedQuote$quote=null==encryptedQuote?void 0:null===(_encryptedQuote$quote2=encryptedQuote.quote)||void 0===_encryptedQuote$quote2?void 0:_encryptedQuote$quote2.toLocaleUpperCase().split(/\s/))&&void 0!==_encryptedQuote$quote?_encryptedQuote$quote:[],author=null!==(_encryptedQuote$autho=null==encryptedQuote?void 0:null===(_encryptedQuote$autho2=encryptedQuote.author)||void 0===_encryptedQuote$autho2?void 0:_encryptedQuote$autho2.toLocaleUpperCase().split(/\s/))&&void 0!==_encryptedQuote$autho?_encryptedQuote$autho:[];function renderLetter(value,i){return/\s/.test(value)?(0,jsx_runtime.jsx)("div",{"test-id":"letter",children:value},"".concat(value,"-").concat(i)):(0,jsx_runtime.jsx)(Cell.b,{onClick:onChar,encryptedValue:value,decryptedValue:cipher[value]?cipher[value].guesses[0]:value,isRevealing:isRevealing,status:cipher[value]&&!isHardMode?cipher[value].status:void 0},"".concat(value,"-").concat(i))}function renderWord(word,i){return(0,jsx_runtime.jsx)("div",{"test-id":"word",className:"mr-8 flex whitespace-nowrap",children:word.split("").map(renderLetter)},"".concat(word,"-").concat(i))}return(0,jsx_runtime.jsxs)("div",{"test-id":"phrase",className:"mb-1 flex flex-wrap justify-center",style:{width:"100%"},children:[words.map(renderWord),(0,jsx_runtime.jsx)("div",{style:{width:"100%"}})," ",author.map(renderWord)]})};Cryptogram.displayName="Cryptogram";let Cryptogram_stories={title:"Cryptogram",component:Cryptogram},solution=(0,quotes.NV)(11),Cryptogram_stories_cipher=(0,cipher.bf)(3),onChar=(input,ariaLabel)=>{alert("You clicked on ".concat(ariaLabel))},Default=()=>(0,jsx_runtime.jsx)(Cryptogram,{onChar:onChar,cipher:Cryptogram_stories_cipher,encryptedQuote:solution,isRevealing:!0});Default.displayName="Default";let __namedExportsOrder=["Default"]},"./src/components/cryptogram/Cell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>Cell});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_constants_settings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/settings.ts"),_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/localStorage.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let isaLetter=decryptedValue=>/[a-zA-Z]+/.test(decryptedValue),userHasInteractedWithCell=!1,isIphone=/iPhone/i.test(navigator.userAgent),Cell=_ref=>{let{encryptedValue,decryptedValue,status,isRevealing,isCompleted,onClick,position=0}=_ref,animationDelay="".concat(position*_constants_settings__WEBPACK_IMPORTED_MODULE_3__.hu,"ms"),isHighContrast=(0,_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__.IS)(),shouldDisplayDecrypted=isaLetter(encryptedValue),classesEncrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-8 h-8 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white",{"bg-white dark:bg-federal-blue":!status}),classesDecrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-8 h-8 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white",{"hover:bg-slate-500 active:bg-slate-400 dark:border-federal-blue-700":!status,"absent border-federal-blue-400 hover:bg-slate-500 active:bg-slate-400 dark:border-federal-blue-700":"absent"===status,"correct shadowed bg-cyan-500 hover:bg-orange-600 active:bg-orange-700 text-white border-cyan-500":"correct"===status&&isHighContrast,"present shadowed bg-orange-500 hover:bg-cyan-600 active:bg-cyan-700 text-white border-orange-500":"present"===status&&isHighContrast,"correct shadowed bg-green-700 hover:bg-green-600 active:bg-green-700 text-white border-green-700":"correct"===status&&!isHighContrast,"present shadowed bg-dark-goldenrod hover:bg-yellow-500 active:bg-yellow-700 text-white border-dark-goldenrod":"present"===status&&!isHighContrast,"cell-fill-animation":decryptedValue&&!isCompleted,"cell-reveal":isRevealing&&isCompleted}),stylesDecrypted={fontFamily:"Courier New",animationDelay,minHeight:"1em"},stylesEncrypted={...stylesDecrypted,marginBottom:"40px"},hiddenInputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"inline-flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{"aria-label":encryptedValue,onClick:event=>{var _event$target,_hiddenInputRef$curre;userHasInteractedWithCell||(userHasInteractedWithCell=!0,window.gtag("event","unlock_achievement",{achievement_id:"click_cryptogram_cell"})),onClick("",(null==event?void 0:null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.ariaLabel)||""),isIphone&&(event.currentTarget.blur(),null==hiddenInputRef||null===(_hiddenInputRef$curre=hiddenInputRef.current)||void 0===_hiddenInputRef$curre||_hiddenInputRef$curre.focus())},className:shouldDisplayDecrypted?classesDecrypted:classesEncrypted,style:stylesDecrypted,...shouldDisplayDecrypted?{}:{tabIndex:-1},children:[shouldDisplayDecrypted?decryptedValue:null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{ref:hiddenInputRef,style:{position:"absolute",top:"-9999px"},tabIndex:-1,type:"text"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-label":encryptedValue,style:stylesEncrypted,className:classesEncrypted,children:encryptedValue})]})};Cell.displayName="Cell"},"./src/lib/cipher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bf:()=>newCipher});var seedrandom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/seedrandom/index.js"),seedrandom__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);let ALPHABET="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function isOriginalPosition(shuffled,original){for(var i=0;i<shuffled.length;i++)if(shuffled[i]===original[i])return console.log("this letter is matching",i,original[i]),!0;return!1}let newCipher=seed=>{console.log("todays seed",seed);let whileCount=0,randomGenerator=seedrandom__WEBPACK_IMPORTED_MODULE_0___default()("".concat(seed)),randomKey=[...ALPHABET].sort(()=>randomGenerator()>.5?1:-1);for(;whileCount<10&&isOriginalPosition(randomKey,ALPHABET);)whileCount++,console.log("regenerating randomKey",randomKey),randomGenerator=seedrandom__WEBPACK_IMPORTED_MODULE_0___default()("".concat(seed+whileCount)),randomKey=[...ALPHABET].sort(()=>randomGenerator()>.5?1:-1),console.log("trying with next seed whileCount",whileCount,seed);let cipher={};for(let index in ALPHABET){let i=parseInt(index,10);cipher[randomKey[i]]={decrypted:ALPHABET[i],guesses:[]}}return cipher}},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},firstGame=!0,loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return!stats&&firstGame&&(firstGame=!1,window.gtag("event","sign_up",{method:"Anonymous"})),stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")},"?d4c0":()=>{}}]);