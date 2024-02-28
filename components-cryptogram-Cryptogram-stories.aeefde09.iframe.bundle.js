"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[306],{"./src/components/cryptogram/Cryptogram.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Cryptogram_stories}),__webpack_require__("./node_modules/react/index.js");var cipher=__webpack_require__("./src/lib/cipher.ts"),startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),date_fns_differenceInDays=__webpack_require__("./node_modules/date-fns/differenceInDays.mjs"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),parseISO=__webpack_require__("./node_modules/date-fns/parseISO.mjs"),formatISO=__webpack_require__("./node_modules/date-fns/formatISO.mjs");__webpack_require__("./node_modules/grapheme-splitter/index.js");var query_string=__webpack_require__("./node_modules/query-string/index.js");let quotelist_QUOTES=['"Surround yourself with only people who are going to lift you higher." Oprah Winfrey','"It\'s the friends you can call up at 4 a.m. that matter." Marlene Dietrich','"I always felt that the great high, privilege, relief, and comfort of friendship was that one had to explain nothing." Katherine Mansfield','"There\'s nothing like a really loyal, dependable, good friend. Nothing."  Jennifer Aniston',"\"It's not that diamonds are a girl's best friend, but it's your best friends who are diamonds.\" Gina Barreca",'"Many people will walk in and out of your life, but only true friends will leave footprints in your heart." Eleanor Roosevelt','"True friends are families which you can select." Audrey Hepburn','"Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born." Anais Nin','"A friend is someone you want to be around when you feel like being alone." Barbara Burrow','"True friends are like diamonds — bright, beautiful, valuable, and always in style." Nicole Richie'];var settings=__webpack_require__("./src/constants/settings.ts"),dateutils=__webpack_require__("./src/lib/dateutils.ts");__webpack_require__("./src/lib/statuses.ts");let firstGameDate=new Date(2022,0),localeAwareUpperCase=text=>text.toUpperCase(),getLastGameDate=today=>{let t=(0,startOfDay.b)(today),daysSinceLastGame=(0,date_fns_differenceInDays.j)(firstGameDate,t)%1;return(0,addDays.E)(t,-daysSinceLastGame)},getNextGameDate=today=>(0,addDays.E)(getLastGameDate(today),1),getIndex=gameDate=>{let start=firstGameDate,index=-1;do index++,start=(0,addDays.E)(start,1);while(start<=gameDate)return index},getQuoteOfDay=index=>{if(index<0)throw Error("Invalid index");return localeAwareUpperCase(quotelist_QUOTES[index%quotelist_QUOTES.length])},setGameDate=d=>{try{if(d<(0,dateutils.x)()){window.location.href="/?d="+(0,formatISO.c)(d,{representation:"date"});return}}catch(e){console.log(e)}window.location.href="/"},getIsLatestGame=()=>{if(!settings.rd)return!0;let parsed=query_string.parse(window.location.search);return null===parsed||!("d"in parsed)},{solution,solutionGameDate,solutionIndex,tomorrow}=(gameDate=>{let nextGameDate=getNextGameDate(gameDate),index=getIndex(gameDate);return{solution:getQuoteOfDay(index),solutionGameDate:gameDate,solutionIndex:index,tomorrow:nextGameDate.valueOf()}})((()=>{if(getIsLatestGame())return(0,dateutils.x)();let parsed=query_string.parse(window.location.search);try{let d=(0,startOfDay.b)((0,parseISO.D)(parsed.d.toString()));return(d>=(0,dateutils.x)()||d<firstGameDate)&&setGameDate((0,dateutils.x)()),d}catch(e){return console.log(e),(0,dateutils.x)()}})());var Cell=__webpack_require__("./src/components/cryptogram/Cell.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Cryptogram=_ref=>{let{onChar,cipher,encryptedQuote:encryptedQuote,isRevealing,currentRowClassName}=_ref,words=encryptedQuote.toLocaleUpperCase().split(/\s/);function renderLetter(value,i){return/\s/.test(value)?(0,jsx_runtime.jsx)("div",{"test-id":"letter",children:value},"".concat(value,"-").concat(i)):(0,jsx_runtime.jsx)(Cell.b,{onClick:onChar,encryptedValue:value,decryptedValue:cipher[value]?cipher[value].guesses[0]:value},"".concat(value,"-").concat(i))}function renderWord(word,i){return(0,jsx_runtime.jsx)("div",{"test-id":"word",className:"mr-4 flex whitespace-nowrap",children:word.split("").map(renderLetter)},"".concat(word,"-").concat(i))}return(0,jsx_runtime.jsx)("div",{"test-id":"phrase",className:"mb-1 flex flex-wrap justify-center",style:{width:"100%"},children:words.map(renderWord)})};try{Cryptogram.displayName="Cryptogram",Cryptogram.__docgenInfo={description:"",displayName:"Cryptogram",props:{onChar:{defaultValue:null,description:"",name:"onChar",required:!0,type:{name:"(input: string, ariaLabel: string) => void"}},cipher:{defaultValue:null,description:"",name:"cipher",required:!0,type:{name:"Cipher"}},encryptedQuote:{defaultValue:null,description:"",name:"encryptedQuote",required:!0,type:{name:"string"}},isRevealing:{defaultValue:null,description:"",name:"isRevealing",required:!1,type:{name:"boolean"}},currentRowClassName:{defaultValue:null,description:"",name:"currentRowClassName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cryptogram/Cryptogram.tsx#Cryptogram"]={docgenInfo:Cryptogram.__docgenInfo,name:"Cryptogram",path:"src/components/cryptogram/Cryptogram.tsx#Cryptogram"})}catch(__react_docgen_typescript_loader_error){}let Cryptogram_stories={title:"Cryptogram",component:Cryptogram},Cryptogram_stories_solution=getQuoteOfDay(11),Cryptogram_stories_cipher=(0,cipher.b)(),onChar=(input,ariaLabel)=>{alert("You clicked on ".concat(ariaLabel))},Default=()=>(0,jsx_runtime.jsx)(Cryptogram,{onChar:onChar,cipher:Cryptogram_stories_cipher,encryptedQuote:Cryptogram_stories_solution,isRevealing:!0,currentRowClassName:"example-class"});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <Cryptogram onChar={onChar} cipher={cipher} encryptedQuote={solution} isRevealing={true} currentRowClassName="example-class" />',...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/cryptogram/Cell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Cell});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_constants_settings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/settings.ts"),_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/localStorage.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let isPunctuation=decryptedValue=>/\W/.test(decryptedValue),Cell=_ref=>{let{encryptedValue,decryptedValue,status,isRevealing,isCompleted,onClick,position=0}=_ref,[revealLetter,setRevealLetter]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[guess,setGuess]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),isFilled=decryptedValue&&!isCompleted,animationDelay="".concat(position*_constants_settings__WEBPACK_IMPORTED_MODULE_3__.hu,"ms"),isHighContrast=(0,_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__.IS)();decryptedValue&&isPunctuation(decryptedValue);let classesEncrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white",{"bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600":!status,"border-white dark:border-black":!status,"absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700":"absent"===status,"correct shadowed bg-orange-500 text-white border-orange-500":"correct"===status&&isHighContrast,"present shadowed bg-cyan-500 text-white border-cyan-500":"present"===status&&isHighContrast,"correct shadowed bg-green-500 text-white border-green-500":"correct"===status&&!isHighContrast,"present shadowed bg-yellow-500 text-white border-yellow-500":"present"===status&&!isHighContrast,"cell-fill-animation":isFilled,"cell-reveal":isRevealing&&isCompleted}),classesDecrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white"),styles={fontFamily:"Courier New",animationDelay,minHeight:"1em"};function handleKeyDown(ev){console.log(ev.key,decryptedValue),setGuess(ev.key.toLocaleUpperCase()),setRevealLetter(!0),window.removeEventListener("keydown",handleKeyDown)}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"inline-flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-label":encryptedValue,onClick:event=>{var _event$target;onClick("",(null==event?void 0:null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.ariaLabel)||""),event.currentTarget.blur()},className:classesDecrypted,style:styles,children:decryptedValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-label":encryptedValue,style:styles,className:classesEncrypted,children:encryptedValue})]})};try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{encryptedValue:{defaultValue:null,description:"",name:"encryptedValue",required:!0,type:{name:"string"}},decryptedValue:{defaultValue:null,description:"",name:"decryptedValue",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"absent"'},{value:'"present"'},{value:'"correct"'}]}},isRevealing:{defaultValue:null,description:"",name:"isRevealing",required:!1,type:{name:"boolean"}},isCompleted:{defaultValue:null,description:"",name:"isCompleted",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"0"},description:"",name:"position",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(input: string, ariaLabel: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cryptogram/Cell.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"src/components/cryptogram/Cell.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/cipher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>newCipher});let ALPHABET="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function isOriginalPosition(shuffled,original){for(var i=0;i<shuffled.length;i++)if(shuffled[i]===original[i])return console.log("this letter is matching",i,original[i]),!0;return!1}let newCipher=()=>{let randomKey=[...ALPHABET].sort(()=>Math.random()>.5?1:-1);for(;isOriginalPosition(randomKey,ALPHABET);)console.log("regenerating randomKey",randomKey),randomKey=[...ALPHABET].sort(()=>Math.random()>.5?1:-1);let cipher={};for(let index in ALPHABET){let i=parseInt(index,10);cipher[randomKey[i]]={decrypted:ALPHABET[i],guesses:[]}}return cipher}},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")}}]);