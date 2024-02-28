"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[340],{"./node_modules/date-fns/format.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WU:()=>format});var en_US=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs");let defaultOptions={};var differenceInCalendarDays=__webpack_require__("./node_modules/date-fns/differenceInCalendarDays.mjs"),toDate=__webpack_require__("./node_modules/date-fns/toDate.mjs"),constructFrom=__webpack_require__("./node_modules/date-fns/constructFrom.mjs");function startOfYear(date){let cleanDate=(0,toDate.Q)(date),_date=(0,constructFrom.L)(date,0);return _date.setFullYear(cleanDate.getFullYear(),0,1),_date.setHours(0,0,0,0),_date}function getDayOfYear(date){let _date=(0,toDate.Q)(date);return(0,differenceInCalendarDays.w)(_date,startOfYear(_date))+1}var constants=__webpack_require__("./node_modules/date-fns/constants.mjs");function startOfWeek(date,options){let weekStartsOn=options?.weekStartsOn??options?.locale?.options?.weekStartsOn??defaultOptions.weekStartsOn??defaultOptions.locale?.options?.weekStartsOn??0,_date=(0,toDate.Q)(date),day=_date.getDay();return _date.setDate(_date.getDate()-((day<weekStartsOn?7:0)+day-weekStartsOn)),_date.setHours(0,0,0,0),_date}function startOfISOWeek(date){return startOfWeek(date,{weekStartsOn:1})}function getISOWeekYear(date){let _date=(0,toDate.Q)(date),year=_date.getFullYear(),fourthOfJanuaryOfNextYear=(0,constructFrom.L)(date,0);fourthOfJanuaryOfNextYear.setFullYear(year+1,0,4),fourthOfJanuaryOfNextYear.setHours(0,0,0,0);let startOfNextYear=startOfISOWeek(fourthOfJanuaryOfNextYear),fourthOfJanuaryOfThisYear=(0,constructFrom.L)(date,0);fourthOfJanuaryOfThisYear.setFullYear(year,0,4),fourthOfJanuaryOfThisYear.setHours(0,0,0,0);let startOfThisYear=startOfISOWeek(fourthOfJanuaryOfThisYear);return _date.getTime()>=startOfNextYear.getTime()?year+1:_date.getTime()>=startOfThisYear.getTime()?year:year-1}function startOfISOWeekYear(date){let year=getISOWeekYear(date),fourthOfJanuary=(0,constructFrom.L)(date,0);return fourthOfJanuary.setFullYear(year,0,4),fourthOfJanuary.setHours(0,0,0,0),startOfISOWeek(fourthOfJanuary)}function getISOWeek(date){let _date=(0,toDate.Q)(date);return Math.round((+startOfISOWeek(_date)-+startOfISOWeekYear(_date))/constants.jE)+1}function getWeekYear(date,options){let _date=(0,toDate.Q)(date),year=_date.getFullYear(),firstWeekContainsDate=options?.firstWeekContainsDate??options?.locale?.options?.firstWeekContainsDate??defaultOptions.firstWeekContainsDate??defaultOptions.locale?.options?.firstWeekContainsDate??1,firstWeekOfNextYear=(0,constructFrom.L)(date,0);firstWeekOfNextYear.setFullYear(year+1,0,firstWeekContainsDate),firstWeekOfNextYear.setHours(0,0,0,0);let startOfNextYear=startOfWeek(firstWeekOfNextYear,options),firstWeekOfThisYear=(0,constructFrom.L)(date,0);firstWeekOfThisYear.setFullYear(year,0,firstWeekContainsDate),firstWeekOfThisYear.setHours(0,0,0,0);let startOfThisYear=startOfWeek(firstWeekOfThisYear,options);return _date.getTime()>=startOfNextYear.getTime()?year+1:_date.getTime()>=startOfThisYear.getTime()?year:year-1}function startOfWeekYear(date,options){let firstWeekContainsDate=options?.firstWeekContainsDate??options?.locale?.options?.firstWeekContainsDate??defaultOptions.firstWeekContainsDate??defaultOptions.locale?.options?.firstWeekContainsDate??1,year=getWeekYear(date,options),firstWeek=(0,constructFrom.L)(date,0);return firstWeek.setFullYear(year,0,firstWeekContainsDate),firstWeek.setHours(0,0,0,0),startOfWeek(firstWeek,options)}function getWeek(date,options){let _date=(0,toDate.Q)(date);return Math.round((+startOfWeek(_date,options)-+startOfWeekYear(_date,options))/constants.jE)+1}var addLeadingZeros=__webpack_require__("./node_modules/date-fns/_lib/addLeadingZeros.mjs");let lightFormatters={y(date,token){let signedYear=date.getFullYear(),year=signedYear>0?signedYear:1-signedYear;return(0,addLeadingZeros.r)("yy"===token?year%100:year,token.length)},M(date,token){let month=date.getMonth();return"M"===token?String(month+1):(0,addLeadingZeros.r)(month+1,2)},d:(date,token)=>(0,addLeadingZeros.r)(date.getDate(),token.length),a(date,token){let dayPeriodEnumValue=date.getHours()/12>=1?"pm":"am";switch(token){case"a":case"aa":return dayPeriodEnumValue.toUpperCase();case"aaa":return dayPeriodEnumValue;case"aaaaa":return dayPeriodEnumValue[0];default:return"am"===dayPeriodEnumValue?"a.m.":"p.m."}},h:(date,token)=>(0,addLeadingZeros.r)(date.getHours()%12||12,token.length),H:(date,token)=>(0,addLeadingZeros.r)(date.getHours(),token.length),m:(date,token)=>(0,addLeadingZeros.r)(date.getMinutes(),token.length),s:(date,token)=>(0,addLeadingZeros.r)(date.getSeconds(),token.length),S(date,token){let numberOfDigits=token.length,milliseconds=date.getMilliseconds();return(0,addLeadingZeros.r)(Math.trunc(milliseconds*Math.pow(10,numberOfDigits-3)),token.length)}},dayPeriodEnum={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},formatters={G:function(date,token,localize){let era=date.getFullYear()>0?1:0;switch(token){case"G":case"GG":case"GGG":return localize.era(era,{width:"abbreviated"});case"GGGGG":return localize.era(era,{width:"narrow"});default:return localize.era(era,{width:"wide"})}},y:function(date,token,localize){if("yo"===token){let signedYear=date.getFullYear();return localize.ordinalNumber(signedYear>0?signedYear:1-signedYear,{unit:"year"})}return lightFormatters.y(date,token)},Y:function(date,token,localize,options){let signedWeekYear=getWeekYear(date,options),weekYear=signedWeekYear>0?signedWeekYear:1-signedWeekYear;if("YY"===token){let twoDigitYear=weekYear%100;return(0,addLeadingZeros.r)(twoDigitYear,2)}return"Yo"===token?localize.ordinalNumber(weekYear,{unit:"year"}):(0,addLeadingZeros.r)(weekYear,token.length)},R:function(date,token){let isoWeekYear=getISOWeekYear(date);return(0,addLeadingZeros.r)(isoWeekYear,token.length)},u:function(date,token){let year=date.getFullYear();return(0,addLeadingZeros.r)(year,token.length)},Q:function(date,token,localize){let quarter=Math.ceil((date.getMonth()+1)/3);switch(token){case"Q":return String(quarter);case"QQ":return(0,addLeadingZeros.r)(quarter,2);case"Qo":return localize.ordinalNumber(quarter,{unit:"quarter"});case"QQQ":return localize.quarter(quarter,{width:"abbreviated",context:"formatting"});case"QQQQQ":return localize.quarter(quarter,{width:"narrow",context:"formatting"});default:return localize.quarter(quarter,{width:"wide",context:"formatting"})}},q:function(date,token,localize){let quarter=Math.ceil((date.getMonth()+1)/3);switch(token){case"q":return String(quarter);case"qq":return(0,addLeadingZeros.r)(quarter,2);case"qo":return localize.ordinalNumber(quarter,{unit:"quarter"});case"qqq":return localize.quarter(quarter,{width:"abbreviated",context:"standalone"});case"qqqqq":return localize.quarter(quarter,{width:"narrow",context:"standalone"});default:return localize.quarter(quarter,{width:"wide",context:"standalone"})}},M:function(date,token,localize){let month=date.getMonth();switch(token){case"M":case"MM":return lightFormatters.M(date,token);case"Mo":return localize.ordinalNumber(month+1,{unit:"month"});case"MMM":return localize.month(month,{width:"abbreviated",context:"formatting"});case"MMMMM":return localize.month(month,{width:"narrow",context:"formatting"});default:return localize.month(month,{width:"wide",context:"formatting"})}},L:function(date,token,localize){let month=date.getMonth();switch(token){case"L":return String(month+1);case"LL":return(0,addLeadingZeros.r)(month+1,2);case"Lo":return localize.ordinalNumber(month+1,{unit:"month"});case"LLL":return localize.month(month,{width:"abbreviated",context:"standalone"});case"LLLLL":return localize.month(month,{width:"narrow",context:"standalone"});default:return localize.month(month,{width:"wide",context:"standalone"})}},w:function(date,token,localize,options){let week=getWeek(date,options);return"wo"===token?localize.ordinalNumber(week,{unit:"week"}):(0,addLeadingZeros.r)(week,token.length)},I:function(date,token,localize){let isoWeek=getISOWeek(date);return"Io"===token?localize.ordinalNumber(isoWeek,{unit:"week"}):(0,addLeadingZeros.r)(isoWeek,token.length)},d:function(date,token,localize){return"do"===token?localize.ordinalNumber(date.getDate(),{unit:"date"}):lightFormatters.d(date,token)},D:function(date,token,localize){let dayOfYear=getDayOfYear(date);return"Do"===token?localize.ordinalNumber(dayOfYear,{unit:"dayOfYear"}):(0,addLeadingZeros.r)(dayOfYear,token.length)},E:function(date,token,localize){let dayOfWeek=date.getDay();switch(token){case"E":case"EE":case"EEE":return localize.day(dayOfWeek,{width:"abbreviated",context:"formatting"});case"EEEEE":return localize.day(dayOfWeek,{width:"narrow",context:"formatting"});case"EEEEEE":return localize.day(dayOfWeek,{width:"short",context:"formatting"});default:return localize.day(dayOfWeek,{width:"wide",context:"formatting"})}},e:function(date,token,localize,options){let dayOfWeek=date.getDay(),localDayOfWeek=(dayOfWeek-options.weekStartsOn+8)%7||7;switch(token){case"e":return String(localDayOfWeek);case"ee":return(0,addLeadingZeros.r)(localDayOfWeek,2);case"eo":return localize.ordinalNumber(localDayOfWeek,{unit:"day"});case"eee":return localize.day(dayOfWeek,{width:"abbreviated",context:"formatting"});case"eeeee":return localize.day(dayOfWeek,{width:"narrow",context:"formatting"});case"eeeeee":return localize.day(dayOfWeek,{width:"short",context:"formatting"});default:return localize.day(dayOfWeek,{width:"wide",context:"formatting"})}},c:function(date,token,localize,options){let dayOfWeek=date.getDay(),localDayOfWeek=(dayOfWeek-options.weekStartsOn+8)%7||7;switch(token){case"c":return String(localDayOfWeek);case"cc":return(0,addLeadingZeros.r)(localDayOfWeek,token.length);case"co":return localize.ordinalNumber(localDayOfWeek,{unit:"day"});case"ccc":return localize.day(dayOfWeek,{width:"abbreviated",context:"standalone"});case"ccccc":return localize.day(dayOfWeek,{width:"narrow",context:"standalone"});case"cccccc":return localize.day(dayOfWeek,{width:"short",context:"standalone"});default:return localize.day(dayOfWeek,{width:"wide",context:"standalone"})}},i:function(date,token,localize){let dayOfWeek=date.getDay(),isoDayOfWeek=0===dayOfWeek?7:dayOfWeek;switch(token){case"i":return String(isoDayOfWeek);case"ii":return(0,addLeadingZeros.r)(isoDayOfWeek,token.length);case"io":return localize.ordinalNumber(isoDayOfWeek,{unit:"day"});case"iii":return localize.day(dayOfWeek,{width:"abbreviated",context:"formatting"});case"iiiii":return localize.day(dayOfWeek,{width:"narrow",context:"formatting"});case"iiiiii":return localize.day(dayOfWeek,{width:"short",context:"formatting"});default:return localize.day(dayOfWeek,{width:"wide",context:"formatting"})}},a:function(date,token,localize){let dayPeriodEnumValue=date.getHours()/12>=1?"pm":"am";switch(token){case"a":case"aa":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"});case"aaa":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return localize.dayPeriod(dayPeriodEnumValue,{width:"narrow",context:"formatting"});default:return localize.dayPeriod(dayPeriodEnumValue,{width:"wide",context:"formatting"})}},b:function(date,token,localize){let dayPeriodEnumValue;let hours=date.getHours();switch(dayPeriodEnumValue=12===hours?dayPeriodEnum.noon:0===hours?dayPeriodEnum.midnight:hours/12>=1?"pm":"am",token){case"b":case"bb":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"});case"bbb":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return localize.dayPeriod(dayPeriodEnumValue,{width:"narrow",context:"formatting"});default:return localize.dayPeriod(dayPeriodEnumValue,{width:"wide",context:"formatting"})}},B:function(date,token,localize){let dayPeriodEnumValue;let hours=date.getHours();switch(dayPeriodEnumValue=hours>=17?dayPeriodEnum.evening:hours>=12?dayPeriodEnum.afternoon:hours>=4?dayPeriodEnum.morning:dayPeriodEnum.night,token){case"B":case"BB":case"BBB":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"});case"BBBBB":return localize.dayPeriod(dayPeriodEnumValue,{width:"narrow",context:"formatting"});default:return localize.dayPeriod(dayPeriodEnumValue,{width:"wide",context:"formatting"})}},h:function(date,token,localize){if("ho"===token){let hours=date.getHours()%12;return 0===hours&&(hours=12),localize.ordinalNumber(hours,{unit:"hour"})}return lightFormatters.h(date,token)},H:function(date,token,localize){return"Ho"===token?localize.ordinalNumber(date.getHours(),{unit:"hour"}):lightFormatters.H(date,token)},K:function(date,token,localize){let hours=date.getHours()%12;return"Ko"===token?localize.ordinalNumber(hours,{unit:"hour"}):(0,addLeadingZeros.r)(hours,token.length)},k:function(date,token,localize){let hours=date.getHours();return(0===hours&&(hours=24),"ko"===token)?localize.ordinalNumber(hours,{unit:"hour"}):(0,addLeadingZeros.r)(hours,token.length)},m:function(date,token,localize){return"mo"===token?localize.ordinalNumber(date.getMinutes(),{unit:"minute"}):lightFormatters.m(date,token)},s:function(date,token,localize){return"so"===token?localize.ordinalNumber(date.getSeconds(),{unit:"second"}):lightFormatters.s(date,token)},S:function(date,token){return lightFormatters.S(date,token)},X:function(date,token,_localize){let timezoneOffset=date.getTimezoneOffset();if(0===timezoneOffset)return"Z";switch(token){case"X":return formatTimezoneWithOptionalMinutes(timezoneOffset);case"XXXX":case"XX":return formatTimezone(timezoneOffset);default:return formatTimezone(timezoneOffset,":")}},x:function(date,token,_localize){let timezoneOffset=date.getTimezoneOffset();switch(token){case"x":return formatTimezoneWithOptionalMinutes(timezoneOffset);case"xxxx":case"xx":return formatTimezone(timezoneOffset);default:return formatTimezone(timezoneOffset,":")}},O:function(date,token,_localize){let timezoneOffset=date.getTimezoneOffset();switch(token){case"O":case"OO":case"OOO":return"GMT"+formatTimezoneShort(timezoneOffset,":");default:return"GMT"+formatTimezone(timezoneOffset,":")}},z:function(date,token,_localize){let timezoneOffset=date.getTimezoneOffset();switch(token){case"z":case"zz":case"zzz":return"GMT"+formatTimezoneShort(timezoneOffset,":");default:return"GMT"+formatTimezone(timezoneOffset,":")}},t:function(date,token,_localize){let timestamp=Math.trunc(date.getTime()/1e3);return(0,addLeadingZeros.r)(timestamp,token.length)},T:function(date,token,_localize){let timestamp=date.getTime();return(0,addLeadingZeros.r)(timestamp,token.length)}};function formatTimezoneShort(offset,delimiter=""){let sign=offset>0?"-":"+",absOffset=Math.abs(offset),hours=Math.trunc(absOffset/60),minutes=absOffset%60;return 0===minutes?sign+String(hours):sign+String(hours)+delimiter+(0,addLeadingZeros.r)(minutes,2)}function formatTimezoneWithOptionalMinutes(offset,delimiter){return offset%60==0?(offset>0?"-":"+")+(0,addLeadingZeros.r)(Math.abs(offset)/60,2):formatTimezone(offset,delimiter)}function formatTimezone(offset,delimiter=""){let absOffset=Math.abs(offset);return(offset>0?"-":"+")+(0,addLeadingZeros.r)(Math.trunc(absOffset/60),2)+delimiter+(0,addLeadingZeros.r)(absOffset%60,2)}let dateLongFormatter=(pattern,formatLong)=>{switch(pattern){case"P":return formatLong.date({width:"short"});case"PP":return formatLong.date({width:"medium"});case"PPP":return formatLong.date({width:"long"});default:return formatLong.date({width:"full"})}},timeLongFormatter=(pattern,formatLong)=>{switch(pattern){case"p":return formatLong.time({width:"short"});case"pp":return formatLong.time({width:"medium"});case"ppp":return formatLong.time({width:"long"});default:return formatLong.time({width:"full"})}},longFormatters={p:timeLongFormatter,P:(pattern,formatLong)=>{let dateTimeFormat;let matchResult=pattern.match(/(P+)(p+)?/)||[],datePattern=matchResult[1],timePattern=matchResult[2];if(!timePattern)return dateLongFormatter(pattern,formatLong);switch(datePattern){case"P":dateTimeFormat=formatLong.dateTime({width:"short"});break;case"PP":dateTimeFormat=formatLong.dateTime({width:"medium"});break;case"PPP":dateTimeFormat=formatLong.dateTime({width:"long"});break;default:dateTimeFormat=formatLong.dateTime({width:"full"})}return dateTimeFormat.replace("{{date}}",dateLongFormatter(datePattern,formatLong)).replace("{{time}}",timeLongFormatter(timePattern,formatLong))}},dayOfYearTokenRE=/^D+$/,weekYearTokenRE=/^Y+$/,throwTokens=["D","DD","YY","YYYY"];function isProtectedDayOfYearToken(token){return dayOfYearTokenRE.test(token)}function isProtectedWeekYearToken(token){return weekYearTokenRE.test(token)}function warnOrThrowProtectedError(token,format,input){let _message=message(token,format,input);if(console.warn(_message),throwTokens.includes(token))throw RangeError(_message)}function message(token,format,input){let subject="Y"===token[0]?"years":"days of the month";return`Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}function isDate(value){return value instanceof Date||"object"==typeof value&&"[object Date]"===Object.prototype.toString.call(value)}function isValid(date){return(!!isDate(date)||"number"==typeof date)&&!isNaN(Number((0,toDate.Q)(date)))}let formattingTokensRegExp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp=/^'([^]*?)'?$/,doubleQuoteRegExp=/''/g,unescapedLatinCharacterRegExp=/[a-zA-Z]/;function format(date,formatStr,options){let locale=options?.locale??defaultOptions.locale??en_US._,firstWeekContainsDate=options?.firstWeekContainsDate??options?.locale?.options?.firstWeekContainsDate??defaultOptions.firstWeekContainsDate??defaultOptions.locale?.options?.firstWeekContainsDate??1,weekStartsOn=options?.weekStartsOn??options?.locale?.options?.weekStartsOn??defaultOptions.weekStartsOn??defaultOptions.locale?.options?.weekStartsOn??0,originalDate=(0,toDate.Q)(date);if(!isValid(originalDate))throw RangeError("Invalid time value");let parts=formatStr.match(longFormattingTokensRegExp).map(substring=>{let firstCharacter=substring[0];return"p"===firstCharacter||"P"===firstCharacter?(0,longFormatters[firstCharacter])(substring,locale.formatLong):substring}).join("").match(formattingTokensRegExp).map(substring=>{if("''"===substring)return{isToken:!1,value:"'"};let firstCharacter=substring[0];if("'"===firstCharacter)return{isToken:!1,value:cleanEscapedString(substring)};if(formatters[firstCharacter])return{isToken:!0,value:substring};if(firstCharacter.match(unescapedLatinCharacterRegExp))throw RangeError("Format string contains an unescaped latin alphabet character `"+firstCharacter+"`");return{isToken:!1,value:substring}});locale.localize.preprocessor&&(parts=locale.localize.preprocessor(originalDate,parts));let formatterOptions={firstWeekContainsDate,weekStartsOn,locale};return parts.map(part=>{if(!part.isToken)return part.value;let token=part.value;return(!options?.useAdditionalWeekYearTokens&&isProtectedWeekYearToken(token)||!options?.useAdditionalDayOfYearTokens&&isProtectedDayOfYearToken(token))&&warnOrThrowProtectedError(token,formatStr,String(date)),(0,formatters[token[0]])(originalDate,token,locale.localize,formatterOptions)}).join("")}function cleanEscapedString(input){let matched=input.match(escapedStringRegExp);return matched?matched[1].replace(doubleQuoteRegExp,"'"):input}}}]);