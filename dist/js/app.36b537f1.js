(function(t){function e(e){for(var o,n,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,c=1;c<s.length;c++){var r=s[c];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},a={app:0},i=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01be":function(t,e,s){},"042b":function(t,e,s){},"062c":function(t,e,s){},"07c0":function(t,e,s){"use strict";var o=s("ce7f"),a=s.n(o);a.a},"0926":function(t,e,s){"use strict";var o=s("b45d"),a=s.n(o);a.a},"0943":function(t,e,s){"use strict";var o=s("77d6"),a=s.n(o);a.a},"10a0":function(t,e,s){},"18e3":function(t,e,s){"use strict";var o=s("4930"),a=s.n(o);a.a},"353d":function(t,e,s){},4930:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(s("5c0b"),s("2877")),c={},r=Object(n["a"])(c,a,i,!1,null,null,null),l=r.exports,p=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start"},[t.login?s("LogIn",{on:{signUp:t.signUp}}):s("CreateUser",{on:{signIn:t.signIn}})],1)},d=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-form"},[s("h1",[t._v("Sign In")]),s("div",{staticClass:"user"},[s("i",{staticClass:"fas fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{placeholder:"Username",name:"username",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"pwd"},[s("i",{staticClass:"fas fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{placeholder:"Password",name:"password",type:"password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),s("button",{staticClass:"btn",on:{click:t.logIn}},[t._v("Login")]),s("span",{staticClass:"switch-form",on:{click:t.signUp}},[t._v("Don't have an account? Sign Up!")])])},m=[],g={name:"LogIn",props:{},data:()=>({username:"",pwd:""}),computed:{authentication(){return this.$store.state.checkAuthenticate.user_id}},watch:{authentication(){this.$router.push("/home"),this.$store.dispatch("fetchCategories")}},methods:{logIn(){const t={username:this.username,pwd:this.pwd};this.$store.dispatch("authenticateUser",t)},signUp(){this.$emit("signUp",event)}}},f=g,v=(s("d606"),Object(n["a"])(f,h,m,!1,null,"16505026",null)),y=v.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-form"},[s("h1",[t._v("Create User")]),s("div",{staticClass:"email"},[s("i",{staticClass:"fas fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],attrs:{name:"email",type:"email",placeholder:"Email"},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}})]),s("div",{staticClass:"user"},[s("i",{staticClass:"fas fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{name:"username",type:"text",placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}})]),s("div",{staticClass:"pwd"},[s("i",{staticClass:"fas fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.pwd,expression:"input.pwd"}],attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:t.input.pwd},on:{input:function(e){e.target.composing||t.$set(t.input,"pwd",e.target.value)}}})]),s("button",{staticClass:"btn",on:{click:t.createUser}},[t._v("Create")]),s("span",{staticClass:"switch-form",on:{click:t.signIn}},[t._v("Sign In!")])])},_=[],b={name:"CreateUser",props:{},data:()=>({input:{email:"",username:"",pwd:""}}),methods:{signIn(){this.$emit("signIn")},createUser(){const t=["January","February","March","April","May","June","July","August","September","October","November","December"];let e=new Date,s=e.getMonth();s=t[s];let o=e.getFullYear(),a=s+" "+o;const i={email:this.input.email,username:this.input.username,pwd:this.input.pwd,regDate:a};console.log(i);const n="http://localhost:3005/users/register";fetch(n,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{console.log(t)}).catch(t=>{console.log(t)}),this.signIn()}}},T=b,w=(s("e2bf"),Object(n["a"])(T,C,_,!1,null,"097f361a",null)),$=w.exports,j={name:"start",components:{LogIn:y,CreateUser:$},data:()=>({login:!0}),methods:{signUp(){this.login=!1},signIn(){this.login=!0}}},P=j,x=(s("e3ea"),Object(n["a"])(P,u,d,!1,null,"8138d5c0",null)),O=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Header",{staticClass:"header"}),s("main",{staticClass:"main"},[s("Categories",{staticClass:"categories",on:{category:t.showCategory}}),!0===this.$store.state.display.discussion?s("Discussion",{staticClass:"discussion",attrs:{Topic:t.topic}}):!0===this.$store.state.display.profile?s("Profile"):t._e()],1)],1)},E=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[s("h1",{on:{click:t.goToHomepage}},[t._v("Forumet")])]),s("nav",{staticClass:"nav"},[s("ul",[s("li",[t._v("Hot Topics (NA)")]),s("li",[t._v("New Topics (NA)")]),s("li",{on:{click:t.goToAdmin}},[t._v("ADMIN")])])]),s("section",{staticClass:"user"},[t._m(0),t._m(1),s("button",{staticClass:"user-menu profile",on:{click:t.goToProfile}},[s("i",{staticClass:"fas fa-user-circle"})]),s("p",{staticClass:"username",on:{click:t.goToProfile}},[t._v(t._s(t.user.username))])])])])},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"user-menu"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"user-menu"},[s("i",{staticClass:"fas fa-bell"})])}],R={computed:{user(){const t=JSON.parse(localStorage.getItem("user"));return console.log(t),t}},methods:{goToHomepage(){"/home"!==this.$route.path&&this.$router.push("/home")},goToAdmin(){"/admin"!==this.$route.path&&this.$router.push("/admin")},goToProfile(){"/home"!==this.$route.path?(this.$router.push("/home"),this.$store.state.display.discussion=!1,this.$store.state.display.profile=!0):(this.$store.state.display.discussion=!1,this.$store.state.display.profile=!0)}}},I=R,U=(s("99bd"),Object(n["a"])(I,k,N,!1,null,"7f1ab5b9",null)),A=U.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"categories"},[s("h3",[t._v("Categories")]),t._l(t.categories,(function(e,o){return s("li",{key:o,staticClass:"category-title",on:{click:function(s){return t.getCategory(e._id)}}},[t._v(t._s(e.title))])}))],2)},D=[],M={data:()=>({}),watch:{},computed:{categories(){return this.$store.state.getCategories.categories}},methods:{categoryPanel(){this.$router.push("/Admin")},getCategory(t){this.$store.dispatch("getCategory",t),this.$store.dispatch("getTopics",t)}},beforeUpdate(){this.$store.dispatch("fetchCategories")}},H=M,F=(s("8ef2"),Object(n["a"])(H,J,D,!1,null,"4010acd2",null)),G=F.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discussion"},[!0===this.$store.state.display.showTopic?s("section",{staticClass:"topic"},[s("Topic"),s("Replies")],1):!0===this.$store.state.display.showCategory?s("CategoryTopics",{on:{postTopic:t.postTopic}}):!0===this.$store.state.display.postTopic?s("PostTopic",{attrs:{category_id:t.category_id}}):!0===this.$store.state.display.postReply?s("PostReply"):t._e()],1)},B=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic"},[s("section",{staticClass:"header"},[s("h4",{staticClass:"title"},[t._v(t._s(t.topic.title))]),s("div",{staticClass:"post-reply",on:{click:t.postReply}},[s("h3",[t._v("Reply")]),s("i",{staticClass:"fas fa-plus"})])]),s("span",{staticClass:"divider"}),s("div",{staticClass:"topic_replies"},[s("span",{staticClass:"divider-reply"}),s("section",{staticClass:"content"},[s("p",{staticClass:"reply"},[t._v(t._s(t.topic.description))]),s("div",{staticClass:"details"},[s("div",{staticClass:"user"},[s("p",{staticClass:"username"},[t._v(t._s(t.topic.username))])]),s("aside",{staticClass:"created"},[t._v(t._s(t.topic.created_at))])])])])])},q=[],z={data:()=>({}),computed:{topic(){return this.$store.state.topicReplies.topic}},methods:{postReply(){this.$store.state.display.showCategory=!1,this.$store.state.display.showTopic=!1,this.$store.state.display.postTopic=!1,this.$store.state.display.postReply=!0}}},K=z,Q=(s("72e0"),Object(n["a"])(K,Y,q,!1,null,"46189bd0",null)),V=Q.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic_replies"},t._l(t.replies,(function(e,o){return s("li",{key:o},[s("span",{staticClass:"divider-reply"}),s("section",{staticClass:"content"},[s("p",{staticClass:"reply"},[t._v(t._s(e.content))]),s("div",{staticClass:"details"},[s("div",{staticClass:"user"},[s("p",{staticClass:"username"},[t._v(t._s(e.username))]),s("i",{staticClass:"fas fa-user-circle"})]),s("aside",{staticClass:"created"},[t._v(t._s(e.created_at))])])])])})),0)},X=[],Z={data:()=>({}),computed:{replies(){return this.$store.state.topicReplies.replies}}},tt=Z,et=(s("d28f"),Object(n["a"])(tt,W,X,!1,null,"bf94e49c",null)),st=et.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topics"},[s("section",{staticClass:"header"},[s("h4",{staticClass:"title"},[t._v(t._s(t.category.title))]),s("div",{staticClass:"add-topic",on:{click:t.postTopic}},[s("h3",[t._v("Post Topic")]),s("i",{staticClass:"fas fa-plus"})])]),s("span",{staticClass:"divider"}),s("section",{staticClass:"content"},[t._m(0),t._l(t.topics,(function(e,o){return s("li",{key:o,staticClass:"topic-grid",on:{click:function(s){return t.showTopic(e._id)}}},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"author"},[t._v(t._s(e.username))]),s("aside",{staticClass:"created"},[t._v(t._s(e.created_at))])])}))],2)])},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-header"},[s("p",{staticClass:"topic"},[t._v("Topic")]),s("p",{staticClass:"author"},[t._v("Author")]),s("aside",{staticClass:"created"},[t._v("Created at")])])}],it={data:()=>({}),computed:{category(){return this.$store.state.getTopics.category},topics(){return this.$store.state.getTopics.topics}},methods:{postTopic(){this.$emit("postTopic")},showTopic(t){this.$store.dispatch("getTopic",t),this.$store.dispatch("getTopicReplies",t)}}},nt=it,ct=(s("d254"),Object(n["a"])(nt,ot,at,!1,null,"555459b4",null)),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category"},[s("h3",[t._v("Post new Topic")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.topic.title,expression:"topic.title"}],attrs:{type:"text",name:"title",placeholder:"Title",autocomplete:"off"},domProps:{value:t.topic.title},on:{input:function(e){e.target.composing||t.$set(t.topic,"title",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topic.description,expression:"topic.description"}],attrs:{type:"text",name:"description",autocomplete:"off"},domProps:{value:t.topic.description},on:{input:function(e){e.target.composing||t.$set(t.topic,"description",e.target.value)}}}),s("button",{staticClass:"btn",on:{click:t.postTopic}},[t._v("Post Topic")])])},pt=[],ut={data:()=>({topic:{title:"",description:""}}),computed:{category_id(){return this.$store.state.getTopics.category._id}},methods:{postTopic(){const t={category_id:this.category_id,title:this.topic.title,description:this.topic.description,created_at:new Date,user_id:localStorage.getItem("user_id")};this.$store.dispatch("postNewTopic",t)}}},dt=ut,ht=(s("5960"),Object(n["a"])(dt,lt,pt,!1,null,"d00eeb0e",null)),mt=ht.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-reply"},[s("h3",[t._v("Reply to this Topic")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",name:"description",autocomplete:"off"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),s("button",{staticClass:"btn",on:{click:t.postReply}},[t._v("Post Reply")])])},ft=[],vt={data:()=>({content:""}),computed:{topic_id(){return this.$store.state.topicReplies.topic._id}},methods:{postReply(){const t={topic_id:this.topic_id,content:this.content,created_at:new Date,user_id:localStorage.getItem("user_id")};this.$store.dispatch("postReply",t)}}},yt=vt,Ct=(s("0926"),Object(n["a"])(yt,gt,ft,!1,null,"73cb1106",null)),_t=Ct.exports,bt={components:{Topic:V,Replies:st,CategoryTopics:rt,PostTopic:mt,PostReply:_t},data:()=>({category_id:""}),methods:{postTopic(t){this.category_id=t,this.$store.state.display.showCategory=!1,this.$store.state.display.showTopic=!1,this.$store.state.display.postTopic=!0}}},Tt=bt,wt=(s("a3da"),Object(n["a"])(Tt,L,B,!1,null,"c795d2d2",null)),$t=wt.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:""+t.user.avatar,alt:""}})]),s("section",{staticClass:"user-info"},[s("p",{staticClass:"username"},[t._v(t._s(t.user.username))]),s("div",{staticClass:"register-info"},[s("p",{staticClass:"registred-since"},[t._v("Registred since:")]),s("p",[t._v(t._s(t.user.regDate))])])]),t._m(0),s("section",{staticClass:"file-upload"},[s("p",[t._v("Change Avatar")]),s("div",{staticClass:"form-group"},[s("input",{ref:"file",staticClass:"choose-file",attrs:{type:"file",name:"file",id:"input-files",single:""},on:{change:t.avatarUpload}})]),s("button",{staticClass:"save-btn btn",attrs:{type:"submit"},on:{click:t.sendFile}},[t._v(" Save ")])])])},Pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"activity"},[s("p",{staticClass:"link"},[t._v("My replies")]),s("p",{staticClass:"link"},[t._v("My started topics")])])}],xt={data:()=>({file:""}),computed:{user(){return JSON.parse(localStorage.getItem("user"))}},methods:{avatarUpload(){this.file=this.$refs.file.files[0],console.log(this.file)},async sendFile(){let t=new FormData;const e=localStorage.getItem("user_id");t.append("avatarImage",this.file),t.append("user_id",e),this.$store.dispatch("uploadAvatar",t)}}},Ot=xt,St=(s("18e3"),Object(n["a"])(Ot,jt,Pt,!1,null,"5c6323fa",null)),Et=St.exports,kt={components:{Header:A,Categories:G,Discussion:$t,Profile:Et},data:()=>({topic:""}),methods:{showCategory(t){this.topic=t}}},Nt=kt,Rt=(s("0943"),Object(n["a"])(Nt,S,E,!1,null,"79876ad2",null)),It=Rt.exports,Ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"admin-panel"},[s("Header",{staticClass:"header"}),s("section",{staticClass:"admin-controllers"},[s("Add-Category")],1)],1)},At=[],Jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category"},[s("h3",[t._v("New Category")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category.title,expression:"category.title"}],attrs:{type:"text",name:"title",placeholder:"Category Title",autocomplete:"off"},domProps:{value:t.category.title},on:{input:function(e){e.target.composing||t.$set(t.category,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category.description,expression:"category.description"}],attrs:{type:"text",name:"description",placeholder:"Category Description",autocomplete:"off"},domProps:{value:t.category.description},on:{input:function(e){e.target.composing||t.$set(t.category,"description",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category.img,expression:"category.img"}],attrs:{type:"text",name:"imgurl",placeholder:"Image URL",autocomplete:"off"},domProps:{value:t.category.img},on:{input:function(e){e.target.composing||t.$set(t.category,"img",e.target.value)}}}),t.complete?s("aside",{staticClass:"complete"},[t._v("Category successfully added!")]):t._e(),s("button",{staticClass:"btn",on:{click:t.postCategory}},[t._v("Add Category")])])},Dt=[],Mt={data:()=>({category:{title:"",description:"",img:""},complete:!1}),methods:{postCategory(){const t="http://localhost:3005/admin/addCat";fetch(t,{method:"POST",body:JSON.stringify(this.category),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{console.log(t),t.success&&(this.complete=!0)}).catch(t=>{console.error("Error:",t)}),setTimeout(()=>{this.complete=!1},3e3)}}},Ht=Mt,Ft=(s("07c0"),Object(n["a"])(Ht,Jt,Dt,!1,null,"ba10b3ca",null)),Gt=Ft.exports,Lt={name:"Admin",components:{Header:A,AddCategory:Gt}},Bt=Lt,Yt=(s("dde3"),Object(n["a"])(Bt,Ut,At,!1,null,"644ecfe7",null)),qt=Yt.exports;o["a"].use(p["a"]);const zt=[{path:"/",name:"Start",component:O},{path:"/home",name:"Home",component:It,beforeEnter:(t,e,s)=>{localStorage.getItem("user_id")?s():s("/")}},{path:"/admin",name:"Admin",component:qt}],Kt=new p["a"]({mode:"hash",base:"/",routes:zt});var Qt=Kt,Vt=s("2f62");const Wt={state:{user_id:""},mutations:{loginUser(t,e){localStorage.setItem("user_id",e.user._id),localStorage.setItem("user",JSON.stringify(e.user)),t.user_id=e}},actions:{async authenticateUser(t,e){const s="http://localhost:3005/auth/login";fetch(s,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{t.success&&this.dispatch("redirect",t)}).catch(t=>{console.error("Error:",t)})},async redirect(t,e){const s="http://localhost:3005/auth/user";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",token:e.token}}).then(t=>t.json()).then(e=>{e.success&&t.commit("loginUser",e)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var Xt=Wt;const Zt={state:{categories:[]},mutations:{clearState(t){t.categories=[]},renderCategories(t,e){t.categories=e}},actions:{async fetchCategories(t){const e="http://localhost:3005/categories/getCategories";fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(e=>{e&&t.commit("renderCategories",e)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var te=Zt;const ee={state:{category:{},topics:{}},mutations:{clearState(t){t.category={}},category(t,e){t.category=e},topics(t,e){t.topics=e,de.state.display.showTopic=!1,de.state.display.profile=!1,de.state.display.discussion=!0,de.state.display.showCategory=!0}},actions:{async getCategory(t,e){t.commit("clearState");const s="http://localhost:3005/categories/getCategory";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",category_id:e}}).then(t=>t.json()).then(e=>{e&&t.commit("category",e.category)}).catch(t=>{console.error("Error:",t)})},async getTopics(t,e){t.commit("clearState");const s="http://localhost:3005/categories/getTopicsByCategory";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",category_id:e}}).then(t=>t.json()).then(e=>{e&&t.commit("topics",e)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var se=ee;const oe={state:{},mutations:{clearState(t){t.category={}},topicPosted(t,e){de.display.postTopic=!1,de.display.showTopic=!0}},actions:{async postNewTopic(t,e){const s="http://localhost:3005/topics/postTopic";console.log(e),fetch(s,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(e=>{e&&t.commit("topicPosted")}).catch(t=>{console.error("Error:",t)})}},modules:{}};var ae=oe;const ie={state:{topic:{},replies:{}},mutations:{topic(t,e){t.topic=e,de.state.display.showTopic=!0},replies(t,e){t.replies=e},replyPosted(t,e){de.display.postReply=!1,de.display.showTopic=!0}},actions:{async getTopic(t,e){const s="http://localhost:3005/topics/getTopic";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",topic_id:e}}).then(t=>t.json()).then(e=>{e&&(console.log(e),t.commit("topic",e))}).catch(t=>{console.error("Error:",t)})},async getTopicReplies(t,e){const s="http://localhost:3005/topics/getTopicReplies";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",topic_id:e}}).then(t=>t.json()).then(e=>{e&&(console.log(e),t.commit("replies",e))}).catch(t=>{console.error("Error:",t)})},async postReply(t,e){console.log("here");const s="http://localhost:3005/topics/postReply";fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()).then(e=>{console.log(e),e&&t.commit("replyPosted")}).catch(t=>{console.error("Error:",t)})}},modules:{}};var ne=ie;const ce={state:{showTopic:!1,showCategory:!1,postTopic:!1,postReply:!1,discussion:!1,profile:!0},mutations:{},actions:{},modules:{}};var re=ce;const le={state:{},mutations:{},actions:{async uploadAvatar(t,e){const s="http://localhost:3005/upload/avatar";fetch(s,{method:"POST",body:e}).then(t=>t.json()).then(t=>{console.log(t)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var pe=le,ue=s("0e44");o["a"].use(Vt["a"]);var de=new Vt["a"].Store({plugins:[Object(ue["a"])({storage:window.sessionStorage})],state:{},mutations:{},actions:{},modules:{checkAuthenticate:Xt,getCategories:te,getTopics:se,postNewTopic:ae,topicReplies:ne,display:re,fileUpload:pe}});o["a"].config.productionTip=!1,new o["a"]({router:Qt,store:de,render:t=>t(l)}).$mount("#app")},5960:function(t,e,s){"use strict";var o=s("10a0"),a=s.n(o);a.a},"5c0b":function(t,e,s){"use strict";var o=s("9c0c"),a=s.n(o);a.a},"72e0":function(t,e,s){"use strict";var o=s("b94d"),a=s.n(o);a.a},"77d6":function(t,e,s){},8620:function(t,e,s){},"874f":function(t,e,s){},"8ef2":function(t,e,s){"use strict";var o=s("c7b5"),a=s.n(o);a.a},"99bd":function(t,e,s){"use strict";var o=s("b9b0"),a=s.n(o);a.a},"9c0c":function(t,e,s){},a3da:function(t,e,s){"use strict";var o=s("062c"),a=s.n(o);a.a},b45d:function(t,e,s){},b94d:function(t,e,s){},b9b0:function(t,e,s){},c7b5:function(t,e,s){},ce7f:function(t,e,s){},d254:function(t,e,s){"use strict";var o=s("042b"),a=s.n(o);a.a},d28f:function(t,e,s){"use strict";var o=s("e91b"),a=s.n(o);a.a},d606:function(t,e,s){"use strict";var o=s("874f"),a=s.n(o);a.a},dde3:function(t,e,s){"use strict";var o=s("353d"),a=s.n(o);a.a},e2bf:function(t,e,s){"use strict";var o=s("8620"),a=s.n(o);a.a},e3ea:function(t,e,s){"use strict";var o=s("01be"),a=s.n(o);a.a},e91b:function(t,e,s){}});
//# sourceMappingURL=app.36b537f1.js.map