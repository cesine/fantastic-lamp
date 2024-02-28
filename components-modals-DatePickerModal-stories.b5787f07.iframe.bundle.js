"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[662],{"./src/components/modals/DatePickerModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DatePickerModal_stories});var react=__webpack_require__("./node_modules/react/index.js"),ChevronLeftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js"),addDays=__webpack_require__("./node_modules/date-fns/addDays.mjs"),startOfDay=__webpack_require__("./node_modules/date-fns/startOfDay.mjs"),format=__webpack_require__("./node_modules/date-fns/format.mjs"),react_datepicker_min=__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.min.js"),react_datepicker_min_default=__webpack_require__.n(react_datepicker_min),settings=__webpack_require__("./src/constants/settings.ts"),strings=__webpack_require__("./src/constants/strings.ts"),dateutils=__webpack_require__("./src/lib/dateutils.ts"),words=__webpack_require__("./src/lib/words.ts"),BaseModal=__webpack_require__("./src/components/modals/BaseModal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let DatePickerModal=_ref=>{let{isOpen,initialDate,handleSelectDate,handleClose}=_ref,lastGameDate=(0,words.Ek)((0,dateutils.h)()),[selectedDate,setSelectedDate]=(0,react.useState)(()=>null==initialDate||initialDate>lastGameDate?lastGameDate:initialDate),formatOptions={locale:settings.vE};(0,react_datepicker_min.registerLocale)("locale",settings.vE);let excludedDates=[];if(words.oM>1){let date=words.hm;for(date=words.hm;date<(0,dateutils.x)();date=(0,addDays.E)(date,1))(0,words.ij)(date)||excludedDates.push(date)}return(0,jsx_runtime.jsxs)(BaseModal.I,{title:strings.SY,isOpen:isOpen,handleClose:handleClose,children:[(0,jsx_runtime.jsx)("div",{className:"mx-auto flex max-w-2xl items-center justify-center space-x-4 py-5 text-left sm:w-48",children:(0,jsx_runtime.jsx)(react_datepicker_min_default(),{locale:"locale",minDate:words.hm,maxDate:(0,dateutils.h)(),selected:selectedDate,excludeDates:excludedDates,onChange:date=>setSelectedDate((0,startOfDay.b)(date)),inline:!0,popperClassName:"react-datepicker-left",renderCustomHeader:_ref2=>{let{date,decreaseMonth,increaseMonth,prevMonthButtonDisabled,nextMonthButtonDisabled}=_ref2;return(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between px-2 py-2",children:[(0,jsx_runtime.jsx)("span",{className:"text-lg text-gray-700 dark:text-gray-100",children:(0,format.WU)(date,"MMMM yyyy",formatOptions)}),(0,jsx_runtime.jsxs)("div",{className:"space-x-2",children:[(0,jsx_runtime.jsx)("button",{onClick:decreaseMonth,disabled:prevMonthButtonDisabled,type:"button",className:"\n                            ".concat(prevMonthButtonDisabled&&"cursor-not-allowed opacity-50","\n                            inline-flex rounded border border-gray-300 bg-white p-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0\n                            dark:border-gray-600 dark:bg-slate-700 dark:text-gray-200 dark:focus:ring-blue-600\n                        "),children:(0,jsx_runtime.jsx)(ChevronLeftIcon.Z,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})}),(0,jsx_runtime.jsx)("button",{onClick:increaseMonth,disabled:nextMonthButtonDisabled,type:"button",className:"\n                            ".concat(nextMonthButtonDisabled&&"cursor-not-allowed opacity-50","\n                            inline-flex rounded border border-gray-300 bg-white p-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0\n                            dark:border-gray-600 dark:bg-slate-700 dark:text-gray-200 dark:focus:ring-blue-600\n                        "),children:(0,jsx_runtime.jsx)(ChevronRightIcon.Z,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})})]})]})}})}),(0,jsx_runtime.jsxs)("div",{className:"mt-5 flex columns-2 items-center items-stretch justify-center gap-2 text-center dark:text-white sm:mt-6",children:[(0,jsx_runtime.jsxs)("button",{type:"button",disabled:!(0,words.ij)((0,dateutils.x)()),className:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:border-gray-200 disabled:bg-gray-500 disabled:bg-white disabled:text-gray-900 disabled:focus:outline-none disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 sm:text-base sm:text-base",onClick:()=>handleSelectDate((0,dateutils.x)()),children:[strings.xm," ",strings.Q6]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ",disabled:selectedDate>=(0,dateutils.x)(),onClick:()=>handleSelectDate(selectedDate),children:[strings.xm,(0,jsx_runtime.jsx)("br",{}),(0,format.WU)(selectedDate,"d MMM yyyy",formatOptions)]})]})]})};try{DatePickerModal.displayName="DatePickerModal",DatePickerModal.__docgenInfo={description:"",displayName:"DatePickerModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},initialDate:{defaultValue:null,description:"",name:"initialDate",required:!1,type:{name:"Date"}},handleSelectDate:{defaultValue:null,description:"",name:"handleSelectDate",required:!0,type:{name:"(date: Date) => void"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/DatePickerModal.tsx#DatePickerModal"]={docgenInfo:DatePickerModal.__docgenInfo,name:"DatePickerModal",path:"src/components/modals/DatePickerModal.tsx#DatePickerModal"})}catch(__react_docgen_typescript_loader_error){}let DatePickerModal_stories={title:"DatePickerModal",component:DatePickerModal},Default=()=>{let[isOpen,setIsOpen]=(0,react.useState)(!0);return(0,jsx_runtime.jsx)(DatePickerModal,{isOpen:isOpen,initialDate:new Date,handleSelectDate:date=>console.log("Selected date:",date),handleClose:()=>setIsOpen(!1)})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [isOpen, setIsOpen] = useState(true);\n  return <DatePickerModal isOpen={isOpen} initialDate={new Date()} handleSelectDate={date => console.log('Selected date:', date)} handleClose={() => setIsOpen(false)} />;\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/modals/BaseModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>BaseModal});var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let BaseModal=_ref=>{let{title,children,isOpen,handleClose}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex min-h-full items-center justify-center px-4 py-10 text-center sm:p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Overlay,{className:"fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>handleClose(),tabIndex:0,"aria-pressed":"false",className:"absolute right-4 top-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6 cursor-pointer dark:stroke-white"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-2",children:children})]})})]})})]})})})};try{BaseModal.displayName="BaseModal",BaseModal.__docgenInfo={description:"",displayName:"BaseModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/BaseModal.tsx#BaseModal"]={docgenInfo:BaseModal.__docgenInfo,name:"BaseModal",path:"src/components/modals/BaseModal.tsx#BaseModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/strings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I2:()=>STATISTICS_TITLE,Jn:()=>CURRENT_STREAK_TEXT,Kj:()=>TOTAL_TRIES_TEXT,Pm:()=>SHARE_TEXT,Q6:()=>DATEPICKER_TODAY_TEXT,SY:()=>DATEPICKER_TITLE,W6:()=>GUESS_DISTRIBUTION_TEXT,aV:()=>MIGRATE_BUTTON_TEXT,b5:()=>GAME_TITLE,hn:()=>ARCHIVE_GAMEDATE_TEXT,kq:()=>MIGRATE_DESCRIPTION_TEXT,rd:()=>NEW_WORD_TEXT,sh:()=>BEST_STREAK_TEXT,sr:()=>SUCCESS_RATE_TEXT,xm:()=>DATEPICKER_CHOOSE_TEXT});let GAME_TITLE="Reactle",STATISTICS_TITLE="Statistics",GUESS_DISTRIBUTION_TEXT="Guess Distribution",NEW_WORD_TEXT="New word in",SHARE_TEXT="Share",MIGRATE_BUTTON_TEXT="Transfer",MIGRATE_DESCRIPTION_TEXT="Click here to transfer your statistics to a new device.",TOTAL_TRIES_TEXT="Total tries",SUCCESS_RATE_TEXT="Success rate",CURRENT_STREAK_TEXT="Current streak",BEST_STREAK_TEXT="Best streak",DATEPICKER_TITLE="Choose a past date",DATEPICKER_CHOOSE_TEXT="Choose",DATEPICKER_TODAY_TEXT="today",ARCHIVE_GAMEDATE_TEXT="Game date"}}]);