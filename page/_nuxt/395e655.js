(window.webpackJsonp=window.webpackJsonp||[]).push([[207,441],{2186:function(t,e,n){"use strict";n.r(e);var a=n(10),i=(n(43),n(37),n(96),n(41),n(46),n(26),n(63),n(67),n(854)),r=n(1635),s={extends:i.default,components:{desktop:r.default},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"keywords",name:"keywords",content:this.keywords}],__dangerouslyDisableSanitizers:["script"],script:[{innerHTML:JSON.stringify(this.breadcrumbList),type:"application/ld+json"}]}},data:function(){return{slug:"",data:{}}},asyncData:function(t){return Object(a.a)(regeneratorRuntime.mark((function e(){var n,a,i,r,s,o,c,u,p,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,a=t.app,t.store,i=t.redirect,r=n.slug,s=9,o=n.page?parseInt(n.page,10):1,e.next=6,Promise.all([a.$postApi.getCatBySlug(r,{limit:s,page:o}),a.$postApi.getCategories()]);case 6:if(c=e.sent,u={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:"Tin tức",item:"/tin-tuc"}]},p=[{name:"Home",path:"/"},{name:"Tin tức",path:"/tin-tuc"}],"OK"!==c[0].status){e.next=14;break}return m="OK"===c[1].status?c[1].categories:[],d=c[0].data.category,u.itemListElement.push({"@type":"ListItem",position:3,name:d.name,item:"/the-loai/".concat(d.alias)}),e.abrupt("return",{content:d.content,title:1===o?"LODE88 - ".concat(d.meta_title):"LODE88 - ".concat(d.meta_title," - Trang ").concat(o),description:d.meta_description,keywords:d.meta_keywords,slug:r,data:c[0].data,categories:m,limit:s,page:o,breadcrumbList:u,breadcrumbListEle:p});case 14:i("/404");case 15:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$nextTick(Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))}},o=s,c=n(29),u=Object(c.a)(o,(function(){var t=this;return(0,t._self._c)(t.component,{tag:"component",attrs:{data:t.data,slug:t.slug,page:t.page,limit:t.limit,categories:t.categories,breadcrumbListEle:t.breadcrumbListEle,breadcrumbList:t.breadcrumbList}})}),[],!1,null,null,null);e.default=u.exports},854:function(t,e,n){"use strict";n.r(e);var a={components:{},beforeCreate:function(){this.component="desktop"},data:function(){return{}},methods:{},mounted:function(){}},i=n(29),r=Object(i.a)(a,(function(){return(0,this._self._c)(this.component,{tag:"component"})}),[],!1,null,null,null);e.default=r.exports}}]);