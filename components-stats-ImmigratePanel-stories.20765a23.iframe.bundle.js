"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[182],{"./src/components/stats/ImmigratePanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImmigratePanel_stories});var react=__webpack_require__("./node_modules/react/index.js");function ArrowRightEndOnRectangleIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"}))}let ForwardRef=react.forwardRef(ArrowRightEndOnRectangleIcon);var encryption=__webpack_require__("./src/lib/encryption.ts"),localStorage1=__webpack_require__("./src/lib/localStorage.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let ImmigratePanel=()=>{let[isSaveButtonEnabled,setIsSaveButtonEnabled]=(0,react.useState)(!1),textareaClassNames={valid:["bg-gray-100","dark:bg-gray-700"],invalid:["bg-red-400","dark:bg-red-900"]},allClassNames=[...textareaClassNames.valid,...textareaClassNames.invalid],handleImmigrationCodeChange=event=>{if(event.target instanceof Element){let textarea=event.target;allClassNames.forEach(cn=>textarea.classList.remove(cn)),setIsSaveButtonEnabled(!1);let text=textarea.value;try{var _decrypt;let migrationStats=JSON.parse(null!==(_decrypt=(0,encryption.p)(text))&&void 0!==_decrypt?_decrypt:"");if(!migrationStats||!migrationStats.gameState&&!migrationStats.statistics){textareaClassNames.invalid.forEach(cn=>textarea.classList.add(cn));return}textareaClassNames.valid.forEach(cn=>textarea.classList.add(cn)),setIsSaveButtonEnabled(!0)}catch(error){textareaClassNames.invalid.forEach(cn=>textarea.classList.add(cn))}}};return(0,jsx_runtime.jsxs)("div",{className:"text-sm text-gray-500 dark:text-gray-300",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"message",className:"mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-400",children:"Paste your migration code:"}),(0,jsx_runtime.jsx)("textarea",{onChange:e=>handleImmigrationCodeChange(e),id:"immigration-code",rows:8,className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),(0,jsx_runtime.jsxs)("button",{disabled:!isSaveButtonEnabled,onClick:()=>{let textarea=document.getElementById("immigration-code");if(textarea&&window.confirm("Are you sure you want to override the statistics on this device? This action is not reversable.")){var _decrypt2,migrationStats=JSON.parse(null!==(_decrypt2=(0,encryption.p)(textarea.value))&&void 0!==_decrypt2?_decrypt2:"");if(!migrationStats)return;migrationStats.gameState&&(0,localStorage1.$F)(!0,migrationStats.gameState),migrationStats.statistics&&(0,localStorage1.WD)(migrationStats.statistics),alert("The site will now reload."),window.location.reload()}},type:"button",className:"mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-left text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:border-gray-200 disabled:bg-white disabled:text-gray-900 disabled:focus:outline-none disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 sm:text-sm",children:[isSaveButtonEnabled&&(0,jsx_runtime.jsx)(ForwardRef,{className:"mr-2 h-6 w-6 cursor-pointer dark:stroke-white"}),"Save"]})]})},ImmigratePanel_stories={title:"ImmigratePanel",component:ImmigratePanel},Default=()=>(0,jsx_runtime.jsx)(ImmigratePanel,{});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <ImmigratePanel />",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/constants/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EG:()=>MAX_CHALLENGES,XZ:()=>BLOWFISH_IV,hu:()=>REVEAL_TIME_MS,iG:()=>BLOWFISH_KEY,rd:()=>ENABLE_ARCHIVED_GAMES,tH:()=>ENABLE_MIGRATE_STATS,vE:()=>DATE_LOCALE});var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let MAX_CHALLENGES=6,REVEAL_TIME_MS=350,ENABLE_MIGRATE_STATS=!0,BLOWFISH_KEY="xcQUAHsik#Thq&LG*8es2DsZ$3bw^e",BLOWFISH_IV="#45XmF^w",ENABLE_ARCHIVED_GAMES=!1,DATE_LOCALE=date_fns_locale__WEBPACK_IMPORTED_MODULE_0__._},"./src/lib/encryption.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>encrypt,p:()=>decrypt});var egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/egoroof-blowfish/dist/blowfish.js"),egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0__),_constants_settings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/settings.ts");let bf=new(egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0___default())(_constants_settings__WEBPACK_IMPORTED_MODULE_1__.iG,egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0___default().MODE.ECB,egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0___default().PADDING.NULL);bf.setIv(_constants_settings__WEBPACK_IMPORTED_MODULE_1__.XZ);let encrypt=data=>btoa(bf.encode(data).reduce((data,byte)=>data+String.fromCharCode(byte),"")),decrypt=encoded=>{try{return bf.decode(Uint8Array.from(atob(encoded),c=>c.charCodeAt(0)),egoroof_blowfish__WEBPACK_IMPORTED_MODULE_0___default().TYPE.STRING)}catch(error){return null}}},"./src/lib/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>saveGameStateToLocalStorage,IS:()=>getStoredIsHighContrastMode,WD:()=>saveStatsToLocalStorage,cT:()=>loadStatsFromLocalStorage,vK:()=>loadGameStateFromLocalStorage});let gameStateKey="gameState",archiveGameStateKey="archiveGameState",saveGameStateToLocalStorage=(isLatestGame,gameState)=>{localStorage.setItem(isLatestGame?gameStateKey:archiveGameStateKey,JSON.stringify(gameState))},loadGameStateFromLocalStorage=isLatestGame=>{let state=localStorage.getItem(isLatestGame?gameStateKey:archiveGameStateKey);return state?JSON.parse(state):null},gameStatKey="gameStats",saveStatsToLocalStorage=gameStats=>{localStorage.setItem(gameStatKey,JSON.stringify(gameStats))},loadStatsFromLocalStorage=()=>{let stats=localStorage.getItem(gameStatKey);return stats?JSON.parse(stats):null},getStoredIsHighContrastMode=()=>"1"===localStorage.getItem("highContrast")}}]);