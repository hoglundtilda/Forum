(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],p=0,m=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0beb":function(e,t,s){"use strict";var a=s("7c52"),n=s.n(a);n.a},"0fb1":function(e,t,s){"use strict";var a=s("ed20"),n=s.n(a);n.a},1180:function(e,t,s){},"26c3":function(e,t,s){"use strict";var a=s("281c"),n=s.n(a);n.a},"281c":function(e,t,s){},"2e1c":function(e,t,s){"use strict";var a=s("50c0"),n=s.n(a);n.a},"353d":function(e,t,s){},"4c24":function(e,t,s){},"50c0":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("5c0b"),s("2877")),r={},c=Object(o["a"])(r,n,i,!1,null,null,null),l=c.exports,u=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"start"},[e.login?s("LogIn",{on:{signUp:e.signUp}}):s("CreateUser",{on:{signIn:e.signIn}})],1)},m=[],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-form"},[s("h1",[e._v("Sign In")]),s("div",{staticClass:"user"},[s("i",{staticClass:"fas fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"Username",name:"username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"pwd"},[s("i",{staticClass:"fas fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],attrs:{placeholder:"Password",name:"password",type:"text"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})]),s("button",{staticClass:"btn",on:{click:e.logIn}},[e._v("Login")]),s("span",{staticClass:"switch-form",on:{click:e.signUp}},[e._v("Don't have an account? Sign Up!")])])},f=[],h={name:"LogIn",props:{},data:()=>({username:"",pwd:""}),computed:{authentication(){return this.$store.state.checkAuthenticate.userToken}},watch:{authentication(){this.userToken=this.authentication,this.$router.push("/home"),this.$store.dispatch("fetchCategories")}},methods:{logIn(){const e={username:this.username,pwd:this.pwd};this.$store.dispatch("authenticateUser",e)},signUp(){this.$emit("signUp",event)}}},v=h,g=(s("ed60"),Object(o["a"])(v,d,f,!1,null,"81e018c6",null)),C=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-form"},[s("h1",[e._v("Create User")]),s("div",{staticClass:"email"},[s("i",{staticClass:"fas fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],attrs:{name:"email",type:"email",placeholder:"Email"},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}})]),s("div",{staticClass:"user"},[s("i",{staticClass:"fas fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{name:"username",type:"text",placeholder:"Username"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}})]),s("div",{staticClass:"pwd"},[s("i",{staticClass:"fas fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.input.pwd,expression:"input.pwd"}],attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:e.input.pwd},on:{input:function(t){t.target.composing||e.$set(e.input,"pwd",t.target.value)}}})]),s("button",{staticClass:"btn",on:{click:e.createUser}},[e._v("Create")]),s("span",{staticClass:"switch-form",on:{click:e.signIn}},[e._v("Sign In!")])])},b=[],_={name:"CreateUser",props:{},data:()=>({input:{email:"",username:"",pwd:""}}),methods:{signIn(){this.$emit("signIn")},createUser(){const e=["January","February","March","April","May","June","July","August","September","October","November","December"];let t=new Date,s=t.getMonth();s=e[s];let a=t.getFullYear(),n=s+" "+a;const i={email:this.input.email,username:this.input.username,pwd:this.input.pwd,regDate:n};console.log(i);const o="http://localhost:3005/users/register";fetch(o,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),this.signIn()}}},w=_,j=(s("e2bf"),Object(o["a"])(w,y,b,!1,null,"097f361a",null)),x=j.exports,O={name:"start",components:{LogIn:C,CreateUser:x},data:()=>({login:!0}),methods:{signUp(){this.login=!1},signIn(){this.login=!0}}},$=O,S=(s("2e1c"),Object(o["a"])($,p,m,!1,null,"194e4988",null)),T=S.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Header",{staticClass:"header"}),s("main",{staticClass:"main"},[s("Categories",{staticClass:"categories",on:{category:e.showCategory}}),s("Discussion",{staticClass:"discussion",attrs:{Topic:e.topic}}),s("SideBar",{staticClass:"side-bar"})],1)],1)},k=[],P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[s("h1",[e._v("GeekStorm")])]),s("nav",{staticClass:"nav"},[s("ul",[s("li",[e._v("Hot Topics")]),s("li",[e._v("New Topics")]),s("li",[e._v("Rules")])])]),s("section",{staticClass:"user"},[s("button",{staticClass:"user-menu"},[s("i",{staticClass:"fas fa-envelope"})]),s("button",{staticClass:"user-menu"},[s("i",{staticClass:"fas fa-bell"})]),s("button",{staticClass:"user-menu profile"},[s("i",{staticClass:"fas fa-user-circle"})]),s("p",{staticClass:"username"},[e._v("John Doe")])])])])}],U=(s("9c80"),{}),I=Object(o["a"])(U,P,q,!1,null,"abe735c6",null),N=I.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"categories"},[s("h3",[e._v("Categories")]),e._l(e.categories,(function(t,a){return s("li",{key:a,staticClass:"category-title",on:{click:function(e){return t(a)}}},[e._v(e._s(t.title))])})),s("aside",{staticClass:"add-category",on:{click:e.categoryPanel}},[s("i",{staticClass:"fas fa-plus"})])],2)},J=[],D={data:()=>({}),computed:{categories(){return this.$store.state.getCategories.categories}},methods:{categoryPanel(){this.$router.push("/Admin")},category(e){this.$emit("category",e)}},mounted(){}},H=D,M=(s("0fb1"),Object(o["a"])(H,A,J,!1,null,"b0512316",null)),L=M.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"discussion"},[s("Topic"),s("Topic-Replies")],1)},B=[],G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topic"},[s("section",{staticClass:"header"},[s("h4",{staticClass:"title"},[e._v("How to create relations between databases in mongoDB/mongoose?")]),s("div",{staticClass:"user"},[s("p",{staticClass:"username"},[e._v("John Doe")]),s("i",{staticClass:"fas fa-user-circle"})])]),s("span",{staticClass:"divider"}),s("section",{staticClass:"content"},[s("p",{staticClass:"description"},[e._v("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")]),s("aside",{staticClass:"created"},[e._v("13:20 02/06/19")])])])}],Y=(s("ab4e"),{}),z=Object(o["a"])(Y,G,F,!1,null,"1ff93b4f",null),K=z.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topic_replies"},[s("span",{staticClass:"divider-reply"}),s("section",{staticClass:"content"},[s("p",{staticClass:"reply"},[e._v("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")]),s("div",{staticClass:"details"},[s("div",{staticClass:"user"},[s("p",{staticClass:"username"},[e._v("John Doe")]),s("i",{staticClass:"fas fa-user-circle"})]),s("aside",{staticClass:"created"},[e._v("09:34 02/07/19")])])])])}],W=(s("0beb"),{}),X=Object(o["a"])(W,Q,V,!1,null,"06c8354e",null),Z=X.exports,ee={props:Object,components:{Topic:K,TopicReplies:Z}},te=ee,se=(s("e8e2"),Object(o["a"])(te,R,B,!1,null,"60563ede",null)),ae=se.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"side-menu"},[s("h3",[e._v("Side")]),s("p",[e._v("Something")]),s("p",[e._v("Something else")]),s("p",[e._v("Anything")]),s("p",[e._v("Let's be serious")]),s("p",[e._v("Another something")]),s("p",[e._v("And another useless something")])])}],oe=(s("26c3"),{}),re=Object(o["a"])(oe,ne,ie,!1,null,"b7bdfdf6",null),ce=re.exports,le={components:{Header:N,Categories:L,Discussion:ae,SideBar:ce},data:()=>({topic:""}),methods:{showCategory(e){this.topic=e}}},ue=le,pe=(s("6f68"),Object(o["a"])(ue,E,k,!1,null,"6225dc63",null)),me=pe.exports,de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"admin-panel"},[s("Header",{staticClass:"header"}),s("section",{staticClass:"admin-controllers"},[s("Add-Category")],1)],1)},fe=[],he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"category"},[s("h3",[e._v("New Category")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.category.title,expression:"category.title"}],attrs:{type:"text",name:"title",placeholder:"Category Title",autocomplete:"off"},domProps:{value:e.category.title},on:{input:function(t){t.target.composing||e.$set(e.category,"title",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.category.description,expression:"category.description"}],attrs:{type:"text",name:"description",placeholder:"Category Description",autocomplete:"off"},domProps:{value:e.category.description},on:{input:function(t){t.target.composing||e.$set(e.category,"description",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.category.img,expression:"category.img"}],attrs:{type:"text",name:"imgurl",placeholder:"Image URL",autocomplete:"off"},domProps:{value:e.category.img},on:{input:function(t){t.target.composing||e.$set(e.category,"img",t.target.value)}}}),e.complete?s("aside",{staticClass:"complete"},[e._v("Category successfully added!")]):e._e(),s("button",{staticClass:"btn",on:{click:e.postCategory}},[e._v("Add Category")])])},ve=[],ge={data:()=>({category:{title:"",description:"",img:""},complete:!1}),methods:{postCategory(){const e="http://localhost:3005/admin/category";fetch(e,{method:"POST",body:JSON.stringify(this.category),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e),e.success&&(this.complete=!0)}).catch(e=>{console.error("Error:",e)}),setTimeout(()=>{this.complete=!1},3e3)}}},Ce=ge,ye=(s("c849"),Object(o["a"])(Ce,he,ve,!1,null,"839c52be",null)),be=ye.exports,_e={name:"Admin",components:{Header:N,AddCategory:be}},we=_e,je=(s("dde3"),Object(o["a"])(we,de,fe,!1,null,"644ecfe7",null)),xe=je.exports;a["a"].use(u["a"]);const Oe=[{path:"/",name:"Start",component:T},{path:"/home",name:"Home",meta:{requiresAuth:!0},component:me},{path:"/admin",name:"Admin",meta:{requiresAuth:!0},component:xe}],$e=new u["a"]({mode:"history",base:"/",routes:Oe});$e.beforeEach((e,t,s)=>{e.meta.requiresAuth?window.localStorage.getItem("jwt")?s():s({name:"login"}):s()});var Se=$e,Te=s("2f62");const Ee={state:{userToken:""},mutations:{loginUser(e,t){localStorage.setItem("jwt",JSON.stringify(t)),e.userToken=t}},actions:{async authenticateUser(e,t){const s="http://localhost:3005/auth/login";fetch(s,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.success&&this.dispatch("redirect",e)}).catch(e=>{console.error("Error:",e)})},async redirect(e,t){const s="http://localhost:3005/auth/user";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",token:t.token}}).then(e=>e.json()).then(t=>{t.success&&e.commit("loginUser",t.token)}).catch(e=>{console.error("Error:",e)})}},modules:{}};var ke=Ee;const Pe={state:{categories:[]},mutations:{clearState(e){e.categories=[]},addCategories(e,t){e.categories=t}},actions:{async fetchCategories(e){e.commit("clearState");const t="http://localhost:3005/admin/categories";fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(t=>{t&&e.commit("addCategories",t)}).catch(e=>{console.error("Error:",e)})}},modules:{}};var qe=Pe;a["a"].use(Te["a"]);var Ue=new Te["a"].Store({state:{},mutations:{},actions:{},modules:{checkAuthenticate:ke,getCategories:qe}});a["a"].config.productionTip=!1,new a["a"]({router:Se,store:Ue,render:e=>e(l)}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"6f68":function(e,t,s){"use strict";var a=s("ff19"),n=s.n(a);n.a},"7c52":function(e,t,s){},8620:function(e,t,s){},"9c0c":function(e,t,s){},"9c80":function(e,t,s){"use strict";var a=s("efce"),n=s.n(a);n.a},ab4e:function(e,t,s){"use strict";var a=s("ac70"),n=s.n(a);n.a},ac70:function(e,t,s){},b09e:function(e,t,s){},c849:function(e,t,s){"use strict";var a=s("1180"),n=s.n(a);n.a},dde3:function(e,t,s){"use strict";var a=s("353d"),n=s.n(a);n.a},e2bf:function(e,t,s){"use strict";var a=s("8620"),n=s.n(a);n.a},e8e2:function(e,t,s){"use strict";var a=s("4c24"),n=s.n(a);n.a},ed20:function(e,t,s){},ed60:function(e,t,s){"use strict";var a=s("b09e"),n=s.n(a);n.a},efce:function(e,t,s){},ff19:function(e,t,s){}});
//# sourceMappingURL=app.d17184b8.js.map