"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[146],{"./src/components/modals/StatsModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StatsModal_stories}),__webpack_require__("./node_modules/react/index.js");var ClockIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js"),ShareIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ShareIcon.js"),format=__webpack_require__("./node_modules/date-fns/format.mjs"),index_es=__webpack_require__("./node_modules/react-countdown/dist/index.es.js"),settings=__webpack_require__("./src/constants/settings.ts"),strings=__webpack_require__("./src/constants/strings.ts"),quotes=__webpack_require__("./src/lib/quotes.ts"),ua_parser=__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js"),statuses=__webpack_require__("./src/lib/statuses.ts");let webShareApiDeviceTypes=["mobile","smarttv","wearable"],parser=new ua_parser.UAParser,browser=parser.getBrowser(),device=parser.getDevice(),shareStatus=(solution,guesses,lost,isHardMode,isDarkMode,isHighContrastMode,handleShareToClipboard,handleShareFailure)=>{let textToShare="".concat(strings.b5," ").concat(quotes.Ds," ").concat(lost?"X":guesses.length,"/").concat(settings.EG).concat(isHardMode?"*":"","\n\n")+generateEmojiGrid(solution,guesses,getEmojiTiles(isDarkMode,isHighContrastMode)),shareData={text:textToShare},shareSuccess=!1;try{attemptShare(shareData)&&(navigator.share(shareData),shareSuccess=!0)}catch(error){shareSuccess=!1}try{shareSuccess||(navigator.clipboard?navigator.clipboard.writeText(textToShare).then(handleShareToClipboard).catch(handleShareFailure):handleShareFailure())}catch(error){handleShareFailure()}},generateEmojiGrid=(solution,guesses,tiles)=>guesses.map(guess=>{let status=(0,statuses.Y)(solution,guess);return(0,quotes.C2)(guess).map((_,i)=>{switch(status[i]){case"correct":return tiles[0];case"present":return tiles[1];default:return tiles[2]}}).join("")}).join("\n"),attemptShare=shareData=>{var _browser$name,_device$type;return(null===(_browser$name=browser.name)||void 0===_browser$name?void 0:_browser$name.toUpperCase().indexOf("FIREFOX"))===-1&&-1!==webShareApiDeviceTypes.indexOf(null!==(_device$type=device.type)&&void 0!==_device$type?_device$type:"")&&navigator.canShare&&navigator.canShare(shareData)&&navigator.share},getEmojiTiles=(isDarkMode,isHighContrastMode)=>{let tiles=[];return tiles.push(isHighContrastMode?"🟧":"🟩"),tiles.push(isHighContrastMode?"🟦":"🟨"),tiles.push(isDarkMode?"⬛":"⬜"),tiles};var Histogram=__webpack_require__("./src/components/stats/Histogram.tsx"),ArrowRightStartOnRectangleIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ArrowRightStartOnRectangleIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let MigrationIntro=_ref=>{let{handleMigrateStatsButton}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"mt-5 columns-2 items-center items-stretch justify-center text-center dark:text-white sm:mt-6",children:[(0,jsx_runtime.jsx)("div",{className:"mt-3 text-xs",children:strings.kq}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm",onClick:handleMigrateStatsButton,children:[(0,jsx_runtime.jsx)(ArrowRightStartOnRectangleIcon.Z,{className:"mr-2 h-6 w-6 cursor-pointer dark:stroke-white"}),strings.aV]})]})};var StatBar=__webpack_require__("./src/components/stats/StatBar.tsx"),BaseModal=__webpack_require__("./src/components/modals/BaseModal.tsx");let StatsModal=_ref=>{let{isOpen,handleClose,solution,guesses,gameStats,isLatestGame,isGameLost,isGameWon,handleShareToClipboard,handleShareFailure,handleMigrateStatsButton,isHardMode,isDarkMode,isHighContrastMode,numberOfGuessesMade}=_ref;return gameStats.totalGames<=0?(0,jsx_runtime.jsxs)(BaseModal.I,{title:strings.I2,isOpen:isOpen,handleClose:handleClose,children:[(0,jsx_runtime.jsx)(StatBar.u,{gameStats:gameStats}),settings.tH&&(0,jsx_runtime.jsx)(MigrationIntro,{handleMigrateStatsButton:handleMigrateStatsButton})]}):(0,jsx_runtime.jsxs)(BaseModal.I,{title:strings.I2,isOpen:isOpen,handleClose:handleClose,children:[(0,jsx_runtime.jsx)(StatBar.u,{gameStats:gameStats}),(0,jsx_runtime.jsx)("h4",{className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:strings.W6}),(0,jsx_runtime.jsx)(Histogram.b,{isLatestGame:isLatestGame,gameStats:gameStats,isGameWon:isGameWon,numberOfGuessesMade:numberOfGuessesMade}),(isGameLost||isGameWon)&&(0,jsx_runtime.jsxs)("div",{className:"mt-5 columns-2 items-center items-stretch justify-center text-center dark:text-white sm:mt-6",children:[(0,jsx_runtime.jsxs)("div",{className:"inline-block w-full text-left",children:[(!settings.rd||isLatestGame)&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h5",{children:strings.rd}),(0,jsx_runtime.jsx)(index_es.ZP,{className:"text-lg font-medium text-gray-900 dark:text-gray-100",date:quotes.Ro,daysInHours:!0})]}),settings.rd&&!isLatestGame&&(0,jsx_runtime.jsxs)("div",{className:"mt-2 inline-flex",children:[(0,jsx_runtime.jsx)(ClockIcon.Z,{className:"mr-1 mt-1 mt-2 h-5 w-5 stroke-black dark:stroke-white"}),(0,jsx_runtime.jsxs)("div",{className:"ml-1 mt-1 text-center text-sm sm:text-base",children:[(0,jsx_runtime.jsxs)("strong",{children:[strings.hn,":"]}),(0,jsx_runtime.jsx)("br",{}),(0,format.WU)(quotes.qm,"d MMMM yyyy",{locale:settings.vE})]})]})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("button",{type:"button",className:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base",onClick:()=>{shareStatus(solution,guesses,isGameLost,isHardMode,isDarkMode,isHighContrastMode,handleShareToClipboard,handleShareFailure)},children:[(0,jsx_runtime.jsx)(ShareIcon.Z,{className:"mr-2 h-6 w-6 cursor-pointer dark:stroke-white"}),strings.Pm]})})]}),settings.tH&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("hr",{className:"-mb-4 mt-4 border-gray-500"}),(0,jsx_runtime.jsx)(MigrationIntro,{handleMigrateStatsButton:handleMigrateStatsButton})]})]})},StatsModal_stories={title:"StatsModal",component:StatsModal},Default=()=>(0,jsx_runtime.jsx)(StatsModal,{isOpen:!0,handleClose:()=>console.log("handleClose"),solution:"solution",guesses:["guess1","guess2"],gameStats:{totalGames:10,successRate:50,currentStreak:2,bestStreak:5,winDistribution:[10,20,30,40,50],gamesFailed:5},isLatestGame:!0,isGameLost:!1,isGameWon:!0,handleShareToClipboard:()=>console.log("handleShareToClipboard"),handleShareFailure:()=>console.log("handleShareFailure"),handleMigrateStatsButton:()=>console.log("handleMigrateStatsButton"),isHardMode:!1,isDarkMode:!1,isHighContrastMode:!1,numberOfGuessesMade:2}),__namedExportsOrder=["Default"]},"./src/components/modals/BaseModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>BaseModal});var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let BaseModal=_ref=>{let{title,children,isOpen,handleClose}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex min-h-full items-center justify-center px-4 py-10 text-center sm:p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Overlay,{className:"fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>handleClose(),tabIndex:0,"aria-pressed":"false",className:"absolute right-4 top-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6 cursor-pointer dark:stroke-white"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-2",children:children})]})})]})})]})})})}},"./src/components/stats/Histogram.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Histogram});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Progress=_ref=>{let{index,size,label,isCurrentDayStatRow}=_ref,currentRowClass=classnames_default()("text-xs font-medium text-blue-100 text-center p-0.5",{"bg-blue-600":isCurrentDayStatRow,"bg-gray-600":!isCurrentDayStatRow});return(0,jsx_runtime.jsxs)("div",{className:"justify-left m-1 flex",children:[(0,jsx_runtime.jsx)("div",{className:"w-2 items-center justify-center",children:index+1}),(0,jsx_runtime.jsx)("div",{className:"ml-2 w-full",children:(0,jsx_runtime.jsx)("div",{style:{width:"".concat(8+size,"%")},className:currentRowClass,children:label})})]})},isCurrentDayStatRow=(isLatestGame,isGameWon,numberOfGuessesMade,i)=>isLatestGame&&isGameWon&&numberOfGuessesMade===i+1,Histogram=_ref=>{let{gameStats,isLatestGame,isGameWon,numberOfGuessesMade}=_ref,winDistribution=gameStats.winDistribution,maxValue=Math.max(...winDistribution,1);return(0,jsx_runtime.jsx)("div",{className:"justify-left m-2 columns-1 text-sm dark:text-white",children:winDistribution.map((value,i)=>(0,jsx_runtime.jsx)(Progress,{index:i,isCurrentDayStatRow:isCurrentDayStatRow(isLatestGame,isGameWon,numberOfGuessesMade,i),size:value/maxValue*90,label:String(value)},i))})}},"./src/components/stats/StatBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>StatBar});var _constants_strings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/strings.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");let StatItem=_ref=>{let{label,value}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"m-1 w-1/4 items-center justify-center dark:text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-3xl font-bold",children:value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-xs",children:label})]})},StatBar=_ref2=>{let{gameStats}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"my-2 flex justify-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StatItem,{label:_constants_strings__WEBPACK_IMPORTED_MODULE_1__.Kj,value:gameStats.totalGames}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StatItem,{label:_constants_strings__WEBPACK_IMPORTED_MODULE_1__.sr,value:"".concat(gameStats.successRate,"%")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StatItem,{label:_constants_strings__WEBPACK_IMPORTED_MODULE_1__.Jn,value:gameStats.currentStreak}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StatItem,{label:_constants_strings__WEBPACK_IMPORTED_MODULE_1__.sh,value:gameStats.bestStreak})]})}},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=6,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!1,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/constants/strings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I2:()=>STATISTICS_TITLE,Jn:()=>CURRENT_STREAK_TEXT,Kj:()=>TOTAL_TRIES_TEXT,Pm:()=>SHARE_TEXT,Q6:()=>DATEPICKER_TODAY_TEXT,SY:()=>DATEPICKER_TITLE,W6:()=>GUESS_DISTRIBUTION_TEXT,aV:()=>MIGRATE_BUTTON_TEXT,b5:()=>GAME_TITLE,hn:()=>ARCHIVE_GAMEDATE_TEXT,kq:()=>MIGRATE_DESCRIPTION_TEXT,rd:()=>NEW_WORD_TEXT,sh:()=>BEST_STREAK_TEXT,sr:()=>SUCCESS_RATE_TEXT,xm:()=>DATEPICKER_CHOOSE_TEXT});let GAME_TITLE="Reactle",STATISTICS_TITLE="Statistics",GUESS_DISTRIBUTION_TEXT="Guess Distribution",NEW_WORD_TEXT="New word in",SHARE_TEXT="Share",MIGRATE_BUTTON_TEXT="Transfer",MIGRATE_DESCRIPTION_TEXT="Click here to transfer your statistics to a new device.",TOTAL_TRIES_TEXT="Total tries",SUCCESS_RATE_TEXT="Success rate",CURRENT_STREAK_TEXT="Current streak",BEST_STREAK_TEXT="Best streak",DATEPICKER_TITLE="Choose a past date",DATEPICKER_CHOOSE_TEXT="Choose",DATEPICKER_TODAY_TEXT="today",ARCHIVE_GAMEDATE_TEXT="Game date"},"./src/lib/dateutils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>getYesterday,x:()=>getToday});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/startOfToday.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/startOfYesterday.mjs");let getToday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.I)(),getYesterday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.Y)()},"./src/lib/quotes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hm:()=>firstGameDate,Ek:()=>getLastGameDate,NV:()=>getQuoteOfDay,ij:()=>isValidGameDate,oM:()=>periodInDays,DV:()=>solution,qm:()=>solutionGameDate,Ds:()=>solutionIndex,Ro:()=>tomorrow,C2:()=>unicodeSplit});var startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),differenceInDays=__webpack_require__("./node_modules/date-fns/differenceInDays.mjs"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),parseISO=__webpack_require__("./node_modules/date-fns/parseISO.mjs"),formatISO=__webpack_require__("./node_modules/date-fns/formatISO.mjs"),grapheme_splitter=__webpack_require__("./node_modules/grapheme-splitter/index.js"),grapheme_splitter_default=__webpack_require__.n(grapheme_splitter),query_string=__webpack_require__("./node_modules/query-string/index.js");let quotelist_QUOTES=['"Surround yourself with only people who are going to lift you higher." Oprah Winfrey','"It\'s the friends you can call up at 4 a.m. that matter." Marlene Dietrich','"I always felt that the great high, privilege, relief, and comfort of friendship was that one had to explain nothing." Katherine Mansfield','"There\'s nothing like a really loyal, dependable, good friend. Nothing."  Jennifer Aniston',"\"It's not that diamonds are a girl's best friend, but it's your best friends who are diamonds.\" Gina Barreca",'"Many people will walk in and out of your life, but only true friends will leave footprints in your heart." Eleanor Roosevelt','"True friends are families which you can select." Audrey Hepburn','"Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born." Anais Nin','"A friend is someone you want to be around when you feel like being alone." Barbara Burrow','"True friends are like diamonds — bright, beautiful, valuable, and always in style." Nicole Richie'];var settings=__webpack_require__("./src/constants/settings.ts"),dateutils=__webpack_require__("./src/lib/dateutils.ts");__webpack_require__("./src/lib/statuses.ts");let firstGameDate=new Date(2022,0),periodInDays=1,unicodeSplit=quote=>new(grapheme_splitter_default())().splitGraphemes(quote),localeAwareUpperCase=text=>text.toUpperCase(),getLastGameDate=today=>{let t=(0,startOfDay.b)(today),daysSinceLastGame=(0,differenceInDays.j)(firstGameDate,t)%periodInDays;return(0,addDays.E)(t,-daysSinceLastGame)},getNextGameDate=today=>(0,addDays.E)(getLastGameDate(today),periodInDays),isValidGameDate=date=>!(date<firstGameDate||date>(0,dateutils.x)())&&(0,differenceInDays.j)(firstGameDate,date)%periodInDays==0,getIndex=gameDate=>{let start=firstGameDate,index=-1;do index++,start=(0,addDays.E)(start,periodInDays);while(start<=gameDate)return index},getQuoteOfDay=index=>{if(index<0)throw Error("Invalid index");return localeAwareUpperCase(quotelist_QUOTES[index%quotelist_QUOTES.length])},setGameDate=d=>{try{if(d<(0,dateutils.x)()){window.location.href="/?d="+(0,formatISO.c)(d,{representation:"date"});return}}catch(e){console.log(e)}window.location.href="/"},getIsLatestGame=()=>{if(!settings.rd)return!0;let parsed=query_string.parse(window.location.search);return null===parsed||!("d"in parsed)},{solution,solutionGameDate,solutionIndex,tomorrow}=(gameDate=>{let nextGameDate=getNextGameDate(gameDate),index=getIndex(gameDate);return{solution:getQuoteOfDay(index),solutionGameDate:gameDate,solutionIndex:index,tomorrow:nextGameDate.valueOf()}})((()=>{if(getIsLatestGame())return(0,dateutils.x)();let parsed=query_string.parse(window.location.search);try{let d=(0,startOfDay.b)((0,parseISO.D)(parsed.d.toString()));return(d>=(0,dateutils.x)()||d<firstGameDate)&&setGameDate((0,dateutils.x)()),d}catch(e){return console.log(e),(0,dateutils.x)()}})())},"./src/lib/statuses.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>getGuessStatuses});var _quotes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/quotes.ts");let getGuessStatuses=(solution,guess)=>{let splitSolution=(0,_quotes__WEBPACK_IMPORTED_MODULE_0__.C2)(solution),splitGuess=(0,_quotes__WEBPACK_IMPORTED_MODULE_0__.C2)(guess),solutionCharsTaken=splitSolution.map(_=>!1),statuses=Array.from(Array(guess.length));return splitGuess.forEach((letter,i)=>{if(letter===splitSolution[i]){statuses[i]="correct",solutionCharsTaken[i]=!0;return}}),splitGuess.forEach((letter,i)=>{if(statuses[i])return;if(!splitSolution.includes(letter)){statuses[i]="absent";return}let indexOfPresentChar=splitSolution.findIndex((x,index)=>x===letter&&!solutionCharsTaken[index]);if(indexOfPresentChar>-1){statuses[i]="present",solutionCharsTaken[indexOfPresentChar]=!0;return}statuses[i]="absent"}),statuses}}}]);