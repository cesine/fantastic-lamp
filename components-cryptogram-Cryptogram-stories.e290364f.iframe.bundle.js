"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[306],{"./src/components/cryptogram/Cryptogram.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Cryptogram_stories}),__webpack_require__("./node_modules/react/index.js");var cipher=__webpack_require__("./src/lib/cipher.ts"),quotes=__webpack_require__("./src/lib/quotes.ts"),Cell=__webpack_require__("./src/components/cryptogram/Cell.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Cryptogram=_ref=>{let{onChar,cipher,encryptedQuote:encryptedQuote,isRevealing,currentRowClassName}=_ref,words=encryptedQuote.toLocaleUpperCase().split(/\s/);function renderLetter(value,i){return/\s/.test(value)?(0,jsx_runtime.jsx)("div",{"test-id":"letter",children:value},"".concat(value,"-").concat(i)):(0,jsx_runtime.jsx)(Cell.b,{onClick:onChar,encryptedValue:value,decryptedValue:cipher[value]?cipher[value].guesses[0]:value},"".concat(value,"-").concat(i))}function renderWord(word,i){return(0,jsx_runtime.jsx)("div",{"test-id":"word",className:"mr-8 flex whitespace-nowrap",children:word.split("").map(renderLetter)},"".concat(word,"-").concat(i))}return(0,jsx_runtime.jsx)("div",{"test-id":"phrase",className:"mb-1 flex flex-wrap justify-center",style:{width:"100%"},children:words.map(renderWord)})},Cryptogram_stories={title:"Cryptogram",component:Cryptogram},solution=(0,quotes.NV)(11),Cryptogram_stories_cipher=(0,cipher.b)(),onChar=(input,ariaLabel)=>{alert("You clicked on ".concat(ariaLabel))},Default=()=>(0,jsx_runtime.jsx)(Cryptogram,{onChar:onChar,cipher:Cryptogram_stories_cipher,encryptedQuote:solution,isRevealing:!0,currentRowClassName:"example-class"}),__namedExportsOrder=["Default"]},"./src/components/cryptogram/Cell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Cell});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_constants_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/settings.ts"),_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/localStorage.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let isaLetter=decryptedValue=>/[a-zA-Z]+/.test(decryptedValue),Cell=_ref=>{let{encryptedValue,decryptedValue,status,isRevealing,isCompleted,onClick,position=0}=_ref,[revealLetter,setRevealLetter]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[guess,setGuess]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),animationDelay="".concat(position*_constants_settings__WEBPACK_IMPORTED_MODULE_2__.hu,"ms"),isHighContrast=(0,_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__.IS)(),shouldDisplayDecrypted=isaLetter(encryptedValue),classesEncrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-8 h-8 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white",{"bg-white dark:bg-slate-900":!status}),classesDecrypted=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-8 h-8 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white",{"hover:bg-slate-300 active:bg-slate-400 dark:border-slate-700":!status,"absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700":"absent"===status,"correct shadowed bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white border-orange-500":"correct"===status&&isHighContrast,"present shadowed bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white border-cyan-500":"present"===status&&isHighContrast,"correct shadowed bg-green-500 hover:bg-green-600 active:bg-green-700 text-white border-green-500":"correct"===status&&!isHighContrast,"present shadowed bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white border-yellow-500":"present"===status&&!isHighContrast,"cell-fill-animation":decryptedValue&&!isCompleted,"cell-reveal":isRevealing&&isCompleted}),stylesDecrypted={fontFamily:"Courier New",animationDelay,minHeight:"1em"},stylesEncrypted={...stylesDecrypted,marginBottom:"40px"};function handleKeyDown(ev){console.log(ev.key,decryptedValue),setGuess(ev.key.toLocaleUpperCase()),setRevealLetter(!0),window.removeEventListener("keydown",handleKeyDown)}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"inline-flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{"aria-label":encryptedValue,onClick:event=>{var _event$target;onClick("",(null==event?void 0:null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.ariaLabel)||""),event.currentTarget.blur()},className:shouldDisplayDecrypted?classesDecrypted:classesEncrypted,style:stylesDecrypted,children:shouldDisplayDecrypted?decryptedValue:null}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{"aria-label":encryptedValue,style:stylesEncrypted,className:classesEncrypted,children:encryptedValue})]})}},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=26,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!1,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/lib/cipher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>newCipher});let ALPHABET="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function isOriginalPosition(shuffled,original){for(var i=0;i<shuffled.length;i++)if(shuffled[i]===original[i])return console.log("this letter is matching",i,original[i]),!0;return!1}let newCipher=()=>{let randomKey=[...ALPHABET].sort(()=>Math.random()>.5?1:-1);for(;isOriginalPosition(randomKey,ALPHABET);)console.log("regenerating randomKey",randomKey),randomKey=[...ALPHABET].sort(()=>Math.random()>.5?1:-1);let cipher={};for(let index in ALPHABET){let i=parseInt(index,10);cipher[randomKey[i]]={decrypted:ALPHABET[i],guesses:[]}}return cipher}},"./src/lib/dateutils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>getYesterday,x:()=>getToday});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/startOfToday.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/startOfYesterday.mjs");let getToday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.I)(),getYesterday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.Y)()},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")},"./src/lib/quotes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hm:()=>firstGameDate,Ek:()=>getLastGameDate,NV:()=>getQuoteOfDay,ij:()=>isValidGameDate,oM:()=>periodInDays,DV:()=>solution,qm:()=>solutionGameDate,Ds:()=>solutionIndex,Ro:()=>tomorrow,C2:()=>unicodeSplit});var startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),differenceInDays=__webpack_require__("./node_modules/date-fns/differenceInDays.mjs"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),parseISO=__webpack_require__("./node_modules/date-fns/parseISO.mjs"),formatISO=__webpack_require__("./node_modules/date-fns/formatISO.mjs"),grapheme_splitter=__webpack_require__("./node_modules/grapheme-splitter/index.js"),grapheme_splitter_default=__webpack_require__.n(grapheme_splitter),query_string=__webpack_require__("./node_modules/query-string/index.js");let quotelist_QUOTES=['"Surround yourself with only people who are going to lift you higher." Oprah Winfrey','"It\'s the friends you can call up at 4 a.m. that matter." Marlene Dietrich','"I always felt that the great high, privilege, relief, and comfort of friendship was that one had to explain nothing." Katherine Mansfield','"There\'s nothing like a really loyal, dependable, good friend. Nothing."  Jennifer Aniston',"\"It's not that diamonds are a girl's best friend, but it's your best friends who are diamonds.\" Gina Barreca",'"Many people will walk in and out of your life, but only true friends will leave footprints in your heart." Eleanor Roosevelt','"True friends are families which you can select." Audrey Hepburn','"Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born." Anais Nin','"A friend is someone you want to be around when you feel like being alone." Barbara Burrow','"True friends are like diamonds — bright, beautiful, valuable, and always in style." Nicole Richie'];var settings=__webpack_require__("./src/constants/settings.ts"),dateutils=__webpack_require__("./src/lib/dateutils.ts");__webpack_require__("./src/lib/statuses.ts");let firstGameDate=new Date(2022,0),periodInDays=1,unicodeSplit=quote=>new(grapheme_splitter_default())().splitGraphemes(quote),localeAwareUpperCase=text=>text.toUpperCase(),getLastGameDate=today=>{let t=(0,startOfDay.b)(today),daysSinceLastGame=(0,differenceInDays.j)(firstGameDate,t)%periodInDays;return(0,addDays.E)(t,-daysSinceLastGame)},getNextGameDate=today=>(0,addDays.E)(getLastGameDate(today),periodInDays),isValidGameDate=date=>!(date<firstGameDate||date>(0,dateutils.x)())&&(0,differenceInDays.j)(firstGameDate,date)%periodInDays==0,getIndex=gameDate=>{let start=firstGameDate,index=-1;do index++,start=(0,addDays.E)(start,periodInDays);while(start<=gameDate)return index},getQuoteOfDay=index=>{if(index<0)throw Error("Invalid index");return localeAwareUpperCase(quotelist_QUOTES[index%quotelist_QUOTES.length])},setGameDate=d=>{try{if(d<(0,dateutils.x)()){window.location.href="/?d="+(0,formatISO.c)(d,{representation:"date"});return}}catch(e){console.log(e)}window.location.href="/"},getIsLatestGame=()=>{if(!settings.rd)return!0;let parsed=query_string.parse(window.location.search);return null===parsed||!("d"in parsed)},{solution,solutionGameDate,solutionIndex,tomorrow}=(gameDate=>{let nextGameDate=getNextGameDate(gameDate),index=getIndex(gameDate);return{solution:getQuoteOfDay(index),solutionGameDate:gameDate,solutionIndex:index,tomorrow:nextGameDate.valueOf()}})((()=>{if(getIsLatestGame())return(0,dateutils.x)();let parsed=query_string.parse(window.location.search);try{let d=(0,startOfDay.b)((0,parseISO.D)(parsed.d.toString()));return(d>=(0,dateutils.x)()||d<firstGameDate)&&setGameDate((0,dateutils.x)()),d}catch(e){return console.log(e),(0,dateutils.x)()}})())},"./src/lib/statuses.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>getGuessStatuses});var _quotes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/quotes.ts");let getGuessStatuses=(solution,guess)=>{let splitSolution=(0,_quotes__WEBPACK_IMPORTED_MODULE_0__.C2)(solution),splitGuess=(0,_quotes__WEBPACK_IMPORTED_MODULE_0__.C2)(guess),solutionCharsTaken=splitSolution.map(_=>!1),statuses=Array.from(Array(guess.length));return splitGuess.forEach((letter,i)=>{if(letter===splitSolution[i]){statuses[i]="correct",solutionCharsTaken[i]=!0;return}}),splitGuess.forEach((letter,i)=>{if(statuses[i])return;if(!splitSolution.includes(letter)){statuses[i]="absent";return}let indexOfPresentChar=splitSolution.findIndex((x,index)=>x===letter&&!solutionCharsTaken[index]);if(indexOfPresentChar>-1){statuses[i]="present",solutionCharsTaken[indexOfPresentChar]=!0;return}statuses[i]="absent"}),statuses}}}]);