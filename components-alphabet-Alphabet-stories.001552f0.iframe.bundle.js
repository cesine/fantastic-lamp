"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[132],{"./src/components/alphabet/Alphabet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alphabet_stories}),__webpack_require__("./node_modules/react/index.js");var cipher=__webpack_require__("./src/lib/cipher.ts"),Letter=__webpack_require__("./src/components/alphabet/Letter.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Alphabet=_ref=>{let{cipher,onChar,onDelete,onEnter,isRevealing}=_ref,onClick=(input,ariaLabel)=>{"ENTER"===input?onEnter():"DELETE"===input?onDelete():onChar(input,ariaLabel)};return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"mb-1 flex flex-wrap justify-center",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(key=>(0,jsx_runtime.jsx)(Letter.k,{alphabetLine:key,randomKey:cipher[key].guesses[0],onClick:onClick,isRevealing:isRevealing},key))})})},Alphabet_stories_cipher=(0,cipher.bf)(3),Alphabet_stories={title:"Alphabet",component:Alphabet},Default=()=>(0,jsx_runtime.jsx)(Alphabet,{cipher:Alphabet_stories_cipher,onChar:value=>console.log("onChar",value),onDelete:()=>console.log("onDelete"),onEnter:()=>console.log("onEnter"),isRevealing:!0}),__namedExportsOrder=["Default"]},"./src/components/alphabet/Letter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Letter});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_constants_settings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/settings.ts"),_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/localStorage.ts"),_lib_quotes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/quotes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let isPunctuation=randomKey=>/\W/.test(randomKey),Letter=_ref=>{let{children,status,width=40,alphabetLine="",randomKey,onClick,isRevealing}=_ref,keyDelayMs=_constants_settings__WEBPACK_IMPORTED_MODULE_1__.hu*_lib_quotes__WEBPACK_IMPORTED_MODULE_2__.DV.length,isHighContrast=(0,_lib_localStorage__WEBPACK_IMPORTED_MODULE_4__.IS)(),displayButton=!isPunctuation(randomKey),classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:h-8 xxshort:w-8 xxshort:text-xxs xshort:w-10 xshort:h-10 flex short:h-12 h-14 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white",{"transition ease-in-out":isRevealing,"bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400":!status,"bg-slate-400 dark:bg-slate-800 text-white":"absent"===status,"bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white":"correct"===status&&isHighContrast,"bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white":"present"===status&&isHighContrast,"bg-green-500 hover:bg-green-600 active:bg-green-700 text-white":"correct"===status&&!isHighContrast,"bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white":"present"===status&&!isHighContrast}),classesLetter=classnames__WEBPACK_IMPORTED_MODULE_0___default()("xxshort:h-8 xxshort:w-8 xxshort:text-xxs xshort:w-10 xshort:h-10 flex short:h-12 h-14 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white",{"transition ease-in-out":isRevealing}),stylesLetter={transitionDelay:isRevealing?"".concat(keyDelayMs,"ms"):"unset",width:"".concat(width,"px")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{style:displayButton?{transitionDelay:isRevealing?"".concat(keyDelayMs,"ms"):"unset",width:"".concat(width,"px")}:stylesLetter,"aria-label":alphabetLine||"",className:displayButton?classes:classesLetter,onClick:event=>{var _event$target;onClick(randomKey,(null==event?void 0:null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.ariaLabel)||""),event.currentTarget.blur()},children:children||randomKey}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{"aria-label":alphabetLine||"",style:stylesLetter,className:classesLetter,children:alphabetLine})]})}},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=26,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!0,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/lib/cipher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bf:()=>newCipher});let ALPHABET="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function isOriginalPosition(shuffled,original){for(var i=0;i<shuffled.length;i++)if(shuffled[i]===original[i])return console.log("this letter is matching",i,original[i]),!0;return!1}function seededRandom(seed){let x=1e4*Math.sin(seed++);return x-Math.floor(x)}let newCipher=seed=>{console.log("todays seed",seed);let whileCount=0,randomKey=[...ALPHABET].sort(()=>seededRandom(seed)>.5?1:-1);for(;whileCount<10&&isOriginalPosition(randomKey,ALPHABET);)whileCount++,console.log("regenerating randomKey",randomKey),randomKey=[...ALPHABET].sort(()=>seededRandom(seed+whileCount)>.5?1:-1),console.log("trying with next seed whileCount",whileCount,seed);let cipher={};for(let index in ALPHABET){let i=parseInt(index,10);cipher[randomKey[i]]={decrypted:ALPHABET[i],guesses:[]}}return cipher}},"./src/lib/dateutils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>getYesterday,x:()=>getToday});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/startOfToday.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/startOfYesterday.mjs");let getToday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.I)(),getYesterday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.Y)()},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")},"./src/lib/quotes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hm:()=>firstGameDate,Ek:()=>getLastGameDate,NV:()=>getQuoteOfDay,ij:()=>isValidGameDate,yw:()=>message,oM:()=>periodInDays,DV:()=>solution,qm:()=>solutionGameDate,Ds:()=>solutionIndex,Ro:()=>tomorrow,C2:()=>quotes_unicodeSplit});var startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),differenceInDays=__webpack_require__("./node_modules/date-fns/differenceInDays.mjs"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),parseISO=__webpack_require__("./node_modules/date-fns/parseISO.mjs"),formatISO=__webpack_require__("./node_modules/date-fns/formatISO.mjs"),grapheme_splitter=__webpack_require__("./node_modules/grapheme-splitter/index.js"),grapheme_splitter_default=__webpack_require__.n(grapheme_splitter),query_string=__webpack_require__("./node_modules/query-string/index.js");let quotelist_QUOTES=['"Surround yourself with only people who are going to lift you higher." Oprah Winfrey','"It\'s the friends you can call up at 4 a.m. that matter." Marlene Dietrich','"I always felt that the great high, privilege, relief, and comfort of friendship was that one had to explain nothing." Katherine Mansfield','"There\'s nothing like a really loyal, dependable, good friend. Nothing."  Jennifer Aniston',"\"It's not that diamonds are a girl's best friend, but it's your best friends who are diamonds.\" Gina Barreca",'"Many people will walk in and out of your life, but only true friends will leave footprints in your heart." Eleanor Roosevelt','"True friends are families which you can select." Audrey Hepburn','"Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born." Anais Nin','"A friend is someone you want to be around when you feel like being alone." Barbara Burrow','"True friends are like diamonds — bright, beautiful, valuable, and always in style." Nicole Richie'];var dateutils=__webpack_require__("./src/lib/dateutils.ts");let firstGameDate=new Date(2022,0),periodInDays=1,quotes_unicodeSplit=quote=>new(grapheme_splitter_default())().splitGraphemes(quote),localeAwareUpperCase=text=>text.toUpperCase(),getLastGameDate=today=>{let t=(0,startOfDay.b)(today),daysSinceLastGame=(0,differenceInDays.j)(firstGameDate,t)%periodInDays;return(0,addDays.E)(t,-daysSinceLastGame)},getNextGameDate=today=>(0,addDays.E)(getLastGameDate(today),periodInDays),isValidGameDate=date=>!(date<firstGameDate||date>(0,dateutils.x)())&&(0,differenceInDays.j)(firstGameDate,date)%periodInDays==0,getIndex=gameDate=>{let start=firstGameDate,index=-1;do index++,start=(0,addDays.E)(start,periodInDays);while(start<=gameDate)return index},getQuoteOfDay=index=>{if(index<0)throw Error("Invalid index");return localeAwareUpperCase(quotelist_QUOTES[index%quotelist_QUOTES.length])},setGameDate=d=>{try{if(d<(0,dateutils.x)()){window.location.href="/?d="+(0,formatISO.c)(d,{representation:"date"});return}}catch(e){console.log(e)}window.location.href="/"},getIsLatestGame=()=>{let parsed=query_string.parse(window.location.search);return null===parsed||!("d"in parsed)},emptyGame={guesses:[],index:1,solution:""},loadGameStateFromQueryParam=queryParams=>{try{let code=queryParams.get("code"),stateString=code?atob(code):"{}",state=stateString?JSON.parse(stateString):emptyGame;return state.solution&&console.log("Loaded a game from query params",state),state}catch(err){console.warn("Error laoding game from query params, ignoring it",err)}return emptyGame},{message,solution,solutionGameDate,solutionIndex,tomorrow}=(gameDate=>{let gameFromQueryParams=loadGameStateFromQueryParam(new URLSearchParams(window.location.search)),nextGameDate=getNextGameDate(gameDate),index=gameFromQueryParams.index?gameFromQueryParams.index:getIndex(gameDate),quoteOfTheDay=gameFromQueryParams.solution?gameFromQueryParams.solution:getQuoteOfDay(index);return{message:gameFromQueryParams.message?gameFromQueryParams.message:"",solution:quoteOfTheDay,solutionGameDate:gameDate,solutionIndex:index,tomorrow:nextGameDate.valueOf()}})((()=>{if(getIsLatestGame())return(0,dateutils.x)();let parsed=query_string.parse(window.location.search);try{let d=(0,startOfDay.b)((0,parseISO.D)(parsed.d.toString()));return(d>=(0,dateutils.x)()||d<firstGameDate)&&setGameDate((0,dateutils.x)()),d}catch(e){return console.log(e),(0,dateutils.x)()}})())}}]);