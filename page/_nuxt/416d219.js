(window.webpackJsonp=window.webpackJsonp||[]).push([[186,268,367,441],{1004:function(t,e,n){"use strict";n.r(e);n(172),n(260);var i=n(60),a={props:{item:{type:Object,default:function(){}},index:{type:Number,default:0}},methods:{formatToPrice:function(t){return Object(i.o)(t.toFixed(0))}}},s=(n(991),n(29)),r=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-info"},[e("div",{staticClass:"user-info__top-number"},[t._v(t._s(t.index+1))]),t._v(" "),e("div",{staticClass:"user-info__content"},[e("div",{staticClass:"user-info__name"},[e("span",{staticClass:"name"},[t._v(t._s(t.item.username))]),t._v(" "),e("span",{staticClass:"label"},[t._v("trúng")])]),t._v(" "),e("div",{staticClass:"user-info__win"},[t._v(t._s(t._f("formatMoney")(t.formatToPrice(t.item.winlost)))+" "),e("span",[t._v("VNĐ")])])])])}),[],!1,null,"f6f5cbc0",null);e.default=r.exports},1052:function(t,e,n){},1053:function(t,e,n){},1054:function(t,e,n){},1055:function(t,e,n){},1056:function(t,e,n){t.exports=n.p+"img/cup.47077e8.png"},1057:function(t,e,n){"use strict";n(974)},1058:function(t,e,n){},1136:function(t,e,n){"use strict";n.r(e);var i=n(10),a=(n(322),n(26),n(35),n(74),n(43),n(32)),s=n.n(a),r=n(210),o=n.n(r),u=n(212),c=n.n(u),l=n(1216),m=n.n(l),d=n(1173),f=n(44);s.a.extend(o.a),s.a.extend(c.a),s.a.extend(m.a);var p={components:{LotteryCard:d.default},props:{hasVirtualLottery:{type:Boolean,default:!1}},data:function(){return{speedLotteryTimeLeft:0,lotteSpeed:{timer:null,next:"",thumb:"banner-sieu-toc",rate:98,txt:"SIÊU TỐC",txtMb:"CHƠI NGAY",title:"SIÊU TỐC",classInfo:"info-virtual",url:"/lo-de-sieu-toc",link:"/lo-de-sieu-toc",isMobileNewsTab:!0},tab:this.tabIndex,timeNow:null,tabIndex:this.$route.path,countdownTimes:[{targetHour:16,targetMinute:5,hours:0,minutes:0,seconds:0,days:0,rate:98.4,url:"/lo-de-mien-nam",thumb:"banner-mien-nam",txt:"Miền nam",classBox:"bg-box-nam",classInfo:"info-nam",id:"nam"},{targetHour:17,targetMinute:5,hours:0,minutes:0,seconds:0,days:0,rate:98.4,url:"/lo-de-mien-trung",thumb:"banner-mien-trung",txt:"Miền trung",classBox:"bg-box-trung",classInfo:"info-trung",id:"trung"},{targetHour:18,targetMinute:5,hours:0,minutes:0,seconds:0,days:0,rate:99.4,url:"/lo-de-mien-bac",thumb:"banner-mien-bac",txt:"Miền bắc",classBox:"bg-box-bac",classInfo:"info-bac",id:"bac"}],interval:null,timestamp:null,date:null}},computed:{totalThreeCountry:function(){return this.$store.state.totalThreeCountry}},watch:{},methods:{getTimeLeft:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$lotteOrder.roundInfo();case 3:n=e.sent,t.speedLotteryTimeLeft=n.rows.timeleft,t.lotteSpeed.next=n.rows.next,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},goTo:function(t){this.$router.push(t)},updateCountdownTime:function(t,e){this.timestamp||(this.timestamp=0);var n=s.a.utc(s.a.unix(this.timestamp)).tz("Asia/Ho_Chi_Minh"),i=s.a.utc(s.a.unix(this.timestamp)).tz("Asia/Ho_Chi_Minh").set({hour:t.targetHour,minute:t.targetMinute,second:0,millisecond:0});return(n.isAfter(i)||e)&&(i=i.add(1,"day")),new Date(i.valueOf())},update:function(){var t=this;this.countdownTimes.forEach((function(e,n){t.$set(t.countdownTimes[n],"targetDate",t.updateCountdownTime(e))}))},getTotalLotteryBet:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getTotalCountry");case 2:t.countdownTimes.forEach((function(e,n){t.$set(t.countdownTimes[n],"jackpot",t.totalThreeCountry[e.id])}));case 3:case"end":return e.stop()}}),e)})))()},getLotteryTimeStamp:function(){var t=this;this.$store.dispatch(f.DATE_BET_GET_REGION).then((function(e){t.timestamp=e,t.$emit("getTimerSuccess",t.timestamp),t.update()}))},handleResetCountDown:function(t){this.getLotteryTimeStamp();var e=this.countdownTimes.find((function(e){return e.id===t.id}));this.updateCountdownTime(e,!0)},handleResetSpeedLotteryTimeLeft:function(){this.getTimeLeft()}},created:function(){var t=this;setTimeout((function(){t.getTotalLotteryBet(),t.$store.state.isBot||(t.interval=setInterval((function(){t.getTotalLotteryBet()}),1e4))}))},beforeMount:function(){var t=this;setTimeout((function(){t.getLotteryTimeStamp(),t.hasVirtualLottery&&t.getTimeLeft()}))},beforeDestroy:function(){clearInterval(this.interval)}},h=(n(1219),n(29)),b=Object(h.a)(p,(function(){var t=this,e=t._self._c;return e("section",{class:["section-country container",{"mobile-vertical":t.hasVirtualLottery}]},[e("div",{staticClass:"list-country"},[e("div",{staticClass:"lottery-list"},t._l(t.countdownTimes,(function(n,i){return e("LotteryCard",{key:i,attrs:{item:n,isMobileVertical:t.hasVirtualLottery,currentTime:t.timestamp},on:{resetCountDown:t.handleResetCountDown}})})),1),t._v(" "),t.hasVirtualLottery?e("LotteryCard",{attrs:{item:t.lotteSpeed,speedLotteryTimeLeft:t.speedLotteryTimeLeft,isMobileVertical:t.hasVirtualLottery,isSpeedLottery:""},on:{resetSpeedLotteryTimeLeft:t.handleResetSpeedLotteryTimeLeft}}):t._e(),t._v(" "),t._t("hot-match"),t._v(" "),e("div",{staticClass:"number-hotmatch"},[e("div",{staticClass:"suggest-number"},[e("div",{staticClass:"ratio"},[t.$device.isMobile?t._e():e("img",{staticClass:"ratio__content",attrs:{src:"".concat(t.$store.state.mapDomain.STATIC_URL,"/assets/img/home/lottery.png"),alt:"logo"}})]),t._v(" "),t._t("suggest-number")],2)])],2)])}),[],!1,null,"7aab123f",null);e.default=b.exports},1137:function(t,e,n){"use strict";n.r(e);var i={props:{listNumber:{type:[],default:function(){return[]}},title:{type:String,default:""},type:{type:String,default:""}}},a=(n(1220),n(29)),s=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-number number-days"},[e("p",{staticClass:"list-number__title"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"list-number__list"},t._l(t.listNumber,(function(n,i){return e("li",{key:i,class:t.type},[e("span",[t._v(t._s(n))])])})),0)])}),[],!1,null,"6a54d0ea",null);e.default=s.exports},1138:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-win__left"},[e("div",{staticClass:"ratio"},[e("div",{staticClass:"ratio__content"},[e("img",{attrs:{src:n(1056),alt:"Chiến thắng gần đây"}})])]),t._v(" "),e("h4",{staticClass:"top-win__title mb-0"},[t._v("Chiến thắng "),e("span",[t._v("gần đây")])])])}],a=n(900),s=n.n(a),r={components:{TopWinnerItem:n(1004).default,VueSlickCarousel:s.a},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{slickOptions:{slidesToShow:4.44,slidesToScroll:4,arrows:!1,dots:!1,autoplay:!0,speed:800,autoplaySpeed:7e3,infinite:!0,variableWidth:!0,responsive:[{breakpoint:1025,settings:{centerMode:!1,arrows:!1,slidesToShow:2.4,speed:400,slidesToScroll:2,touchMove:!0,draggable:!1,variableWidth:!0}}]}}}},o=(n(1057),n(29)),u=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-win"},[t._m(0),t._v(" "),e("div",{staticClass:"top-win__right slider"},[t.list.length>0?e("VueSlickCarousel",t._b({},"VueSlickCarousel",t.slickOptions,!1),t._l(t.list,(function(t,n){return e("div",{key:n,staticClass:"item-slide"},[e("TopWinnerItem",{attrs:{item:t,index:n}})],1)})),0):t._e()],1)])}),i,!1,null,"24299698",null);e.default=u.exports},1173:function(t,e,n){"use strict";n.r(e);n(41),n(172),n(260),n(924),n(205),n(74);var i=n(32),a=n.n(i),s=n(210),r=n.n(s),o=n(212),u=n.n(o),c=n(857),l=n.n(c),m=n(60),d=n(1174),f=n(324);a.a.extend(r.a),a.a.extend(u.a);var p={components:{AnimatedNumber:l.a,CardTime:d.default},props:{item:{type:Object,default:function(){}},isMobileVertical:{type:Boolean,default:!1},currentTime:{type:Number,default:0},speedLotteryTimeLeft:{type:Number,default:0},isSpeedLottery:{type:Boolean}},data:function(){return{date:null,timeRelease:{hours:0,minute:0,second:0}}},computed:{publishDate:function(){var t=Object(f.cloneDeep)(this.item);if(null==t||!t.targetDate)return 0;var e=String(t.targetDate.getDate()).padStart(2,"0"),n=String(t.targetDate.getMonth()+1).padStart(2,"0");return"".concat(e,"/").concat(n)}},methods:{formatDate:function(t){var e=t.split("-");return 3!==e.length?null:"".concat(e[2],"-").concat(e[1],"-").concat(e[0])},formatToPrice:function(t){return Object(m.o)(t.toFixed(0))},handleGoToLink:function(t){return t.isMobileNewsTab&&!this.$isDesktop()?this.$openLink("".concat(this.$store.state.mapDomain.GAME_URL,"?url=").concat(t.link),{loginRequired:t.loginRequired,newTab:!0}):this.$router.push(t.url)},setTimeRelease:function(){var t=this;clearInterval(this.timer);var e=this.isSpeedLottery?this.speedLotteryTimeLeft:Object(m.c)({startTime:this.currentTime,endTime:this.formatDate(Object(m.h)(this.item.id,this.currentTime)),region:this.item.id});this.timer=setInterval((function(){t.timeRelease.hours=t.formatTimeCountDown(Math.floor(e/3600)),t.timeRelease.minute=t.formatTimeCountDown(Math.floor(e%3600/60)),t.timeRelease.second=t.formatTimeCountDown(e%60),(e-=1)<=0&&(t.isSpeedLottery?t.$emit("resetSpeedLotteryTimeLeft"):t.$emit("resetCountDown",t.item),e<0&&clearInterval(t.timer))}),1e3)},formatTimeCountDown:function(t){return t<0&&(t=0),t<10?"0".concat(t):t}},watch:{currentTime:function(){this.setTimeRelease()},speedLotteryTimeLeft:function(){this.setTimeRelease()}}},h=(n(1218),n(29)),b=Object(h.a)(p,(function(){var t=this,e=t._self._c;return e("div",{class:["lottery-card",t.item.classInfo,{vertical:t.isMobileVertical}],on:{click:function(e){return e.preventDefault(),t.handleGoToLink(t.item)}}},[e("div",{staticClass:"ratio"},[e("img",{staticClass:"ratio__content",attrs:{src:"".concat(t.$store.state.mapDomain.STATIC_URL,"/assets/img/lottery/").concat(t.item.thumb).concat(t.$isDesktop()?"":"-mb",".jpg"),alt:t.item.txt}}),t._v(" "),e("span",{staticClass:"category"},[t._v("LÔ ĐỀ "),e("br"),t._v("\n      "+t._s(t.item.txt))])]),t._v(" "),e("div",{staticClass:"lottery-card__info"},[e("div",{staticClass:"lottery-card__mobile-left"},[e("div",{staticClass:"head"},["info-virtual"===t.item.classInfo?e("div",{staticClass:"info-virtual"},[e("span",{staticClass:"info-virtual__label"},[t._v("Lượt xổ tiếp theo")]),t._v(" "),e("span",{staticClass:"info-virtual__time"},[t._v(t._s(t.item.next))])]):e("p",{staticClass:"txt-jackpot"},[t.item.jackpot?e("AnimatedNumber",{attrs:{value:t.item.jackpot,formatValue:t.formatToPrice,duration:1e3}}):t._e()],1)]),t._v(" "),e("div",{staticClass:"box-time",class:t.item.classInfo},[e("ul",{staticClass:"list-countdown"},[t.isSpeedLottery?t._e():e("CardTime",{staticClass:"card-date",attrs:{number:t.publishDate,label:t.$isDesktop()||!t.$isDesktop()&&t.isMobileVertical?"Ngày xổ":"Ngày"}}),t._v(" "),t.isSpeedLottery?t._e():e("CardTime",{attrs:{number:t.timeRelease.hours,label:"Giờ"}}),t._v(" "),e("CardTime",{attrs:{number:t.timeRelease.minute,label:"Phút"}}),t._v(" "),t.$isDesktop()||!t.$isDesktop()&&t.isMobileVertical?e("CardTime",{attrs:{number:t.timeRelease.second,label:"Giây"}}):t._e()],1)])]),t._v(" "),t.isMobileVertical?e("div",{staticClass:"lottery-card__mobile-right mb"},[e("div",{staticClass:"left-btn"},[e("span",{staticClass:"category"},[t._v("LÔ ĐỀ "+t._s(t.item.txt))]),t._v(" "),e("p",{staticClass:"txt-jackpot"},[t.item.jackpot?e("AnimatedNumber",{attrs:{value:t.item.jackpot,formatValue:t.formatToPrice,duration:1e3}}):t._e()],1)])]):t._e()])])}),[],!1,null,"e77491da",null);e.default=b.exports},1174:function(t,e,n){"use strict";n.r(e);n(172);var i={props:{number:{type:[String,Number],default:""},label:{type:String,default:""}}},a=(n(1217),n(29)),s=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"card-time"},[e("span",{staticClass:"card-time__number"},[t._v(t._s(t.number))]),t._v(" "),e("span",{staticClass:"card-time__label"},[t._v(" "+t._s(t.label))])])}),[],!1,null,"13bdf8ee",null);e.default=s.exports},1217:function(t,e,n){"use strict";n(1052)},1218:function(t,e,n){"use strict";n(1053)},1219:function(t,e,n){"use strict";n(1054)},1220:function(t,e,n){"use strict";n(1055)},1221:function(t,e,n){"use strict";n(1058)},1329:function(t,e,n){"use strict";n.r(e);var i=n(10),a=(n(43),n(97),n(26),n(990),n(63),n(67),n(32)),s=n.n(a),r=n(1136),o=n(1137),u=n(852),c=n(1138),l={components:{SearchResult:n(1315).default,tab:u.default,FootballSection:r.default,ListNumber:o.default,TopWinner:c.default,FunctionSection:function(){return n.e(22).then(n.bind(null,1979))}},head:function(){return{}},data:function(){return{tab:this.tabIndex,tabIndex:this.$route.path,topLode:{topNumberBet:[],topNumberStake:[],bigWin:[]},defaultDate:s()().format("DD-MM-YYYY HH:mm:ss")}},computed:{totalThreeCountry:function(){return this.$store.state.totalThreeCountry}},methods:{getTopLode:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$lotteApi.getTopLode();case 3:(n=e.sent)&&"OK"===n.status&&(t.topLode={topNumberBet:Object.values(n.data.top_numbers_bet).slice(0,10),topNumberStake:Object.values(n.data.top_numbers_stake).slice(0,10),bigWin:n.data.big_win}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},handleGetTimerSuccessfully:function(t){this.defaultDate=s.a.unix(t).format("YYYY/MM/DD HH:mm:ss")}},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTopLode();case 2:case"end":return e.stop()}}),e)})))()}},m=(n(1221),n(29)),d=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("tab",{attrs:{index:t.tabIndex}},[e("div",{staticClass:"p-lottery"},[e("h1",{staticClass:"hide"},[t._v("Lô đề ba miền")]),t._v(" "),e("FootballSection",{attrs:{hasVirtualLottery:!0,"top-lode":t.topLode},on:{getTimerSuccess:t.handleGetTimerSuccessfully},scopedSlots:t._u([{key:"suggest-number",fn:function(){return[e("ListNumber",{staticClass:"day-suggest",attrs:{title:"Chọn nhiều trong ngày","list-number":t.topLode.topNumberBet,type:"red"}}),t._v(" "),e("ListNumber",{staticClass:"experts-suggest",attrs:{title:"Chuyên gia chọn nhiều","list-number":t.topLode.topNumberStake,type:"yellow"}})]},proxy:!0}])}),t._v(" "),e("section",{staticClass:"container"},[e("TopWinner",{attrs:{list:t.topLode.bigWin}}),t._v(" "),e("SearchResult",{attrs:{defaultDate:t.defaultDate}})],1),t._v(" "),t.$isDesktop()?e("FunctionSection"):t._e()],1)])}),[],!1,null,"0bf149ec",null);e.default=d.exports},2136:function(t,e,n){"use strict";n.r(e);var i=n(854),a=n(1329),s={extends:i.default,components:{desktop:a.default},head:function(){return{}},data:function(){return{tabIndex:this.$route.path,data:{url:"".concat(this.$store.state.mapDomain.HOME_URL)}}},computed:{},methods:{},mounted:function(){}},r=n(29),o=Object(r.a)(s,(function(){var t=this;return(0,t._self._c)(t.component,{tag:"component",attrs:{tabIndex:t.tabIndex}})}),[],!1,null,null,null);e.default=o.exports},852:function(t,e,n){"use strict";n.r(e);var i=n(10),a=(n(43),{props:{index:{type:String,default:""},loginRequired:{type:Boolean,default:!1},iframeDisplay:{type:Boolean,default:!1},init:{type:Function,default:function(){}}},head:function(){return{}},computed:{},methods:{},mounted:function(){var t=this;this.$nextTick(Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$store.state.user,t.loginRequired&&null==n?(t.$router.push("/"),t.$alertLoginRequired()):(t.$store.commit("mutate",{property:"currentTab",with:t.index}),t.init(),t.$store.commit("mutate",{property:"iframeDisplay",with:t.iframeDisplay}));case 2:case"end":return e.stop()}}),e)}))))}}),s=n(29),r=Object(s.a)(a,(function(){return(0,this._self._c)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},854:function(t,e,n){"use strict";n.r(e);var i={components:{},beforeCreate:function(){this.component="desktop"},data:function(){return{}},methods:{},mounted:function(){}},a=n(29),s=Object(a.a)(i,(function(){return(0,this._self._c)(this.component,{tag:"component"})}),[],!1,null,null,null);e.default=s.exports},929:function(t,e,n){},974:function(t,e,n){},991:function(t,e,n){"use strict";n(929)}}]);