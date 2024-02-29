"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[662],{"./src/components/modals/DatePickerModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DatePickerModal_stories});var react=__webpack_require__("./node_modules/react/index.js"),ChevronLeftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),format=__webpack_require__("./node_modules/date-fns/format.mjs"),react_datepicker_min=__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.min.js"),react_datepicker_min_default=__webpack_require__.n(react_datepicker_min),settings=__webpack_require__("./src/constants/settings.ts"),strings=__webpack_require__("./src/constants/strings.ts"),dateutils=__webpack_require__("./src/lib/dateutils.ts"),quotes=__webpack_require__("./src/lib/quotes.ts"),BaseModal=__webpack_require__("./src/components/modals/BaseModal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let DatePickerModal=_ref=>{let{isOpen,initialDate,handleSelectDate,handleClose}=_ref,lastGameDate=(0,quotes.Ek)((0,dateutils.h)()),[selectedDate,setSelectedDate]=(0,react.useState)(()=>null==initialDate||initialDate>lastGameDate?lastGameDate:initialDate),formatOptions={locale:settings.vE};(0,react_datepicker_min.registerLocale)("locale",settings.vE);let excludedDates=[];if(quotes.oM>1){let date=quotes.hm;for(date=quotes.hm;date<(0,dateutils.x)();date=(0,addDays.E)(date,1))(0,quotes.ij)(date)||excludedDates.push(date)}return(0,jsx_runtime.jsxs)(BaseModal.I,{title:strings.SY,isOpen:isOpen,handleClose:handleClose,children:[(0,jsx_runtime.jsx)("div",{className:"mx-auto flex max-w-2xl items-center justify-center space-x-4 py-5 text-left sm:w-48",children:(0,jsx_runtime.jsx)(react_datepicker_min_default(),{locale:"locale",minDate:quotes.hm,maxDate:(0,dateutils.h)(),selected:selectedDate,excludeDates:excludedDates,onChange:date=>setSelectedDate((0,startOfDay.b)(date)),inline:!0,popperClassName:"react-datepicker-left",renderCustomHeader:_ref2=>{let{date,decreaseMonth,increaseMonth,prevMonthButtonDisabled,nextMonthButtonDisabled}=_ref2;return(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between px-2 py-2",children:[(0,jsx_runtime.jsx)("span",{className:"text-lg text-gray-700 dark:text-gray-100",children:(0,format.WU)(date,"MMMM yyyy",formatOptions)}),(0,jsx_runtime.jsxs)("div",{className:"space-x-2",children:[(0,jsx_runtime.jsx)("button",{onClick:decreaseMonth,disabled:prevMonthButtonDisabled,type:"button",className:"\n                            ".concat(prevMonthButtonDisabled&&"cursor-not-allowed opacity-50","\n                            inline-flex rounded border border-gray-300 bg-white p-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0\n                            dark:border-gray-600 dark:bg-slate-700 dark:text-gray-200 dark:focus:ring-blue-600\n                        "),children:(0,jsx_runtime.jsx)(ChevronLeftIcon.Z,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})}),(0,jsx_runtime.jsx)("button",{onClick:increaseMonth,disabled:nextMonthButtonDisabled,type:"button",className:"\n                            ".concat(nextMonthButtonDisabled&&"cursor-not-allowed opacity-50","\n                            inline-flex rounded border border-gray-300 bg-white p-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0\n                            dark:border-gray-600 dark:bg-slate-700 dark:text-gray-200 dark:focus:ring-blue-600\n                        "),children:(0,jsx_runtime.jsx)(ChevronRightIcon.Z,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})})]})]})}})}),(0,jsx_runtime.jsxs)("div",{className:"mt-5 flex columns-2 items-center items-stretch justify-center gap-2 text-center dark:text-white sm:mt-6",children:[(0,jsx_runtime.jsxs)("button",{type:"button",disabled:!(0,quotes.ij)((0,dateutils.x)()),className:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:border-gray-200 disabled:bg-gray-500 disabled:bg-white disabled:text-gray-900 disabled:focus:outline-none disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 sm:text-base sm:text-base",onClick:()=>handleSelectDate((0,dateutils.x)()),children:[strings.xm," ",strings.Q6]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ",disabled:selectedDate>=(0,dateutils.x)(),onClick:()=>handleSelectDate(selectedDate),children:[strings.xm,(0,jsx_runtime.jsx)("br",{}),(0,format.WU)(selectedDate,"d MMM yyyy",formatOptions)]})]})]})},DatePickerModal_stories={title:"DatePickerModal",component:DatePickerModal},Default=()=>{let[isOpen,setIsOpen]=(0,react.useState)(!0);return(0,jsx_runtime.jsx)(DatePickerModal,{isOpen:isOpen,initialDate:new Date,handleSelectDate:date=>console.log("Selected date:",date),handleClose:()=>setIsOpen(!1)})},__namedExportsOrder=["Default"]},"./src/components/modals/BaseModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>BaseModal});var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let BaseModal=_ref=>{let{title,children,isOpen,handleClose}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex min-h-full items-center justify-center px-4 py-10 text-center sm:p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Overlay,{className:"fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>handleClose(),tabIndex:0,"aria-pressed":"false",className:"absolute right-4 top-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6 cursor-pointer dark:stroke-white"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-2",children:children})]})})]})})]})})})}},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=6,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!1,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/constants/strings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I2:()=>STATISTICS_TITLE,Jn:()=>CURRENT_STREAK_TEXT,Kj:()=>TOTAL_TRIES_TEXT,Pm:()=>SHARE_TEXT,Q6:()=>DATEPICKER_TODAY_TEXT,SY:()=>DATEPICKER_TITLE,W6:()=>GUESS_DISTRIBUTION_TEXT,aV:()=>MIGRATE_BUTTON_TEXT,b5:()=>GAME_TITLE,hn:()=>ARCHIVE_GAMEDATE_TEXT,kq:()=>MIGRATE_DESCRIPTION_TEXT,rd:()=>NEW_WORD_TEXT,sh:()=>BEST_STREAK_TEXT,sr:()=>SUCCESS_RATE_TEXT,xm:()=>DATEPICKER_CHOOSE_TEXT});let GAME_TITLE="Reactle",STATISTICS_TITLE="Statistics",GUESS_DISTRIBUTION_TEXT="Guess Distribution",NEW_WORD_TEXT="New word in",SHARE_TEXT="Share",MIGRATE_BUTTON_TEXT="Transfer",MIGRATE_DESCRIPTION_TEXT="Click here to transfer your statistics to a new device.",TOTAL_TRIES_TEXT="Total tries",SUCCESS_RATE_TEXT="Success rate",CURRENT_STREAK_TEXT="Current streak",BEST_STREAK_TEXT="Best streak",DATEPICKER_TITLE="Choose a past date",DATEPICKER_CHOOSE_TEXT="Choose",DATEPICKER_TODAY_TEXT="today",ARCHIVE_GAMEDATE_TEXT="Game date"},"./src/lib/dateutils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>getYesterday,x:()=>getToday});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/startOfToday.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/startOfYesterday.mjs");let getToday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.I)(),getYesterday=()=>(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.Y)()},"./src/lib/quotes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hm:()=>firstGameDate,Ek:()=>getLastGameDate,NV:()=>getQuoteOfDay,ij:()=>isValidGameDate,oM:()=>periodInDays,DV:()=>solution,qm:()=>solutionGameDate,Ds:()=>solutionIndex,Ro:()=>tomorrow,C2:()=>unicodeSplit});var startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),differenceInDays=__webpack_require__("./node_modules/date-fns/differenceInDays.mjs"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),parseISO=__webpack_require__("./node_modules/date-fns/parseISO.mjs"),formatISO=__webpack_require__("./node_modules/date-fns/formatISO.mjs"),grapheme_splitter=__webpack_require__("./node_modules/grapheme-splitter/index.js"),grapheme_splitter_default=__webpack_require__.n(grapheme_splitter),query_string=__webpack_require__("./node_modules/query-string/index.js");let quotelist_QUOTES=['"Surround yourself with only people who are going to lift you higher." Oprah Winfrey','"It\'s the friends you can call up at 4 a.m. that matter." Marlene Dietrich','"I always felt that the great high, privilege, relief, and comfort of friendship was that one had to explain nothing." Katherine Mansfield','"There\'s nothing like a really loyal, dependable, good friend. Nothing."  Jennifer Aniston',"\"It's not that diamonds are a girl's best friend, but it's your best friends who are diamonds.\" Gina Barreca",'"Many people will walk in and out of your life, but only true friends will leave footprints in your heart." Eleanor Roosevelt','"True friends are families which you can select." Audrey Hepburn','"Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born." Anais Nin','"A friend is someone you want to be around when you feel like being alone." Barbara Burrow','"True friends are like diamonds — bright, beautiful, valuable, and always in style." Nicole Richie'];var settings=__webpack_require__("./src/constants/settings.ts"),dateutils=__webpack_require__("./src/lib/dateutils.ts");__webpack_require__("./src/lib/statuses.ts");let firstGameDate=new Date(2022,0),periodInDays=1,unicodeSplit=quote=>new(grapheme_splitter_default())().splitGraphemes(quote),localeAwareUpperCase=text=>text.toUpperCase(),getLastGameDate=today=>{let t=(0,startOfDay.b)(today),daysSinceLastGame=(0,differenceInDays.j)(firstGameDate,t)%periodInDays;return(0,addDays.E)(t,-daysSinceLastGame)},getNextGameDate=today=>(0,addDays.E)(getLastGameDate(today),periodInDays),isValidGameDate=date=>!(date<firstGameDate||date>(0,dateutils.x)())&&(0,differenceInDays.j)(firstGameDate,date)%periodInDays==0,getIndex=gameDate=>{let start=firstGameDate,index=-1;do index++,start=(0,addDays.E)(start,periodInDays);while(start<=gameDate)return index},getQuoteOfDay=index=>{if(index<0)throw Error("Invalid index");return localeAwareUpperCase(quotelist_QUOTES[index%quotelist_QUOTES.length])},setGameDate=d=>{try{if(d<(0,dateutils.x)()){window.location.href="/?d="+(0,formatISO.c)(d,{representation:"date"});return}}catch(e){console.log(e)}window.location.href="/"},getIsLatestGame=()=>{if(!settings.rd)return!0;let parsed=query_string.parse(window.location.search);return null===parsed||!("d"in parsed)},{solution,solutionGameDate,solutionIndex,tomorrow}=(gameDate=>{let nextGameDate=getNextGameDate(gameDate),index=getIndex(gameDate);return{solution:getQuoteOfDay(index),solutionGameDate:gameDate,solutionIndex:index,tomorrow:nextGameDate.valueOf()}})((()=>{if(getIsLatestGame())return(0,dateutils.x)();let parsed=query_string.parse(window.location.search);try{let d=(0,startOfDay.b)((0,parseISO.D)(parsed.d.toString()));return(d>=(0,dateutils.x)()||d<firstGameDate)&&setGameDate((0,dateutils.x)()),d}catch(e){return console.log(e),(0,dateutils.x)()}})())},"./src/lib/statuses.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>getGuessStatuses});var _quotes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/quotes.ts");let getGuessStatuses=(solution,guess)=>{let splitSolution=(0,_quotes__WEBPACK_IMPORTED_MODULE_0__.C2)(solution),splitGuess=(0,_quotes__WEBPACK_IMPORTED_MODULE_0__.C2)(guess),solutionCharsTaken=splitSolution.map(_=>!1),statuses=Array.from(Array(guess.length));return splitGuess.forEach((letter,i)=>{if(letter===splitSolution[i]){statuses[i]="correct",solutionCharsTaken[i]=!0;return}}),splitGuess.forEach((letter,i)=>{if(statuses[i])return;if(!splitSolution.includes(letter)){statuses[i]="absent";return}let indexOfPresentChar=splitSolution.findIndex((x,index)=>x===letter&&!solutionCharsTaken[index]);if(indexOfPresentChar>-1){statuses[i]="present",solutionCharsTaken[indexOfPresentChar]=!0;return}statuses[i]="absent"}),statuses}}}]);