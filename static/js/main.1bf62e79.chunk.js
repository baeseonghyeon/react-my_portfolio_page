(this.webpackJsonpgithub_page=this.webpackJsonpgithub_page||[]).push([[0],{37:function(e,t,n){e.exports={"dark-theme":"Header_dark-theme__1bYTk","light-theme":"Header_light-theme__2Xx_0",container:"Header_container__21wXn",toggle:"Header_toggle__uhQns",active:"Header_active__3GX0s",center:"Header_center__3KSi7"}},39:function(e,t,n){e.exports={"dark-theme":"Popup_dark-theme__2pD6z","light-theme":"Popup_light-theme__2JsHv",container:"Popup_container__2sKLz",title:"Popup_title__dkxtC","btn--close":"Popup_btn--close__Ovdu2",content:"Popup_content__3RkdC","content--isPadding":"Popup_content--isPadding__eioiu",highlight:"Popup_highlight__1-qTc",hide:"Popup_hide__kaq16"}},41:function(e,t,n){e.exports={container:"Layout_container__1qghn"}},42:function(e,t,n){e.exports={"dark-theme":"Card_dark-theme__2JYXp","light-theme":"Card_light-theme__3ZxMy",container:"Card_container__2U80V",wrapper:"Card_wrapper__1V7DQ","icon--pointer":"Card_icon--pointer__3uIpT",bounce:"Card_bounce__2tanL","iframe--wrapper":"Card_iframe--wrapper__24EMg","iframe--video":"Card_iframe--video__1yoql",image:"Card_image__VZTa-",placeholder:"Card_placeholder__18Wnw","mobile-btn":"Card_mobile-btn__vXngg"}},43:function(e,t,n){e.exports={"dark-theme":"CardHover_dark-theme__2pK97","light-theme":"CardHover_light-theme__2Ta36",container:"CardHover_container__30I6k",cate:"CardHover_cate__pklQ5"}},44:function(e,t,n){e.exports={"dark-theme":"Work_dark-theme__1al91","light-theme":"Work_light-theme__1pxSc","list--footnote":"Work_list--footnote__O6CyH","list--link":"Work_list--link__1nHWw"}},45:function(e,t,n){e.exports={"dark-theme":"Detail_dark-theme__2PC6x","light-theme":"Detail_light-theme__1NC6f",container:"Detail_container__35co8",video:"Detail_video__3W9H-","video--wrapper":"Detail_video--wrapper__N354_",image:"Detail_image__2DWOK"}},46:function(e,t,n){e.exports=n(78)},55:function(e,t,n){},60:function(e,t,n){},68:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),c=n(6),l=(n(51),n(52),n(55),n(13)),s=n(3),d=n(2),u=n(37),m=n.n(u),p=n(5),h=n.n(p),g=h.a.bind(m.a),f=o.a.memo((function(){var e=Object(d.g)();return e.pathname.includes("/works/")?o.a.createElement("div",{className:g("container","center")},o.a.createElement("span",{className:g("toggle","m-auto","text-center")},o.a.createElement(c.b,{to:"/works",className:"mt-0"},"\u2190 Back to home"))):o.a.createElement("div",{className:g("container")},o.a.createElement(c.c,{to:"/about",className:g("toggle","mr-3","/"===e.pathname&&"active"),activeClassName:g("active")},"Bae Seonghyeon"),o.a.createElement(c.c,{to:"/works",className:g("toggle"),activeClassName:g("active")},"Works"))})),b=(n(60),n(29)),v=n(17);n(68);var k=o.a.memo((function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY;r(e>150?1:0)}))})),o.a.createElement("span",{className:"go-top-btn",style:{opacity:n},onClick:function(){v.animateScroll.scrollToTop()}},"\u2191")}));var w=o.a.memo((function(e){var t=e.langs,n=e.darkState;return o.a.createElement("div",{className:"footer"},o.a.createElement(k,null),o.a.createElement("span",{className:"copy-right"},"\xa9",o.a.createElement("a",{href:"https://analytics.google.com/analytics/web/?authuser=1#/report-home/a174985234w242601509p226122997",target:"blank",rel:"noopener noreferrer"}," "),"2020 Bae Seonghyeon (github.io)"),o.a.createElement("span",{className:"toggle-box"},o.a.createElement("span",{className:"dark-toggle-box"},o.a.createElement("span",{className:n?"dark-toggle":"dark-toggle dark-active",onClick:function(){return e.darkModeToggle(!1)}},o.a.createElement(b.b,{size:"18"})),o.a.createElement("span",{className:n?"dark-toggle dark-active":"dark-toggle",onClick:function(){return e.darkModeToggle(!0)}},o.a.createElement(b.a,{size:"18"}))),o.a.createElement("span",{className:"dividing-line"},"|"),t.map((function(t,n){return o.a.createElement("span",{className:"lang-toggle-box",key:n},o.a.createElement("span",{className:"KR"===t.set?"lang-toggle active":"lang-toggle",onClick:function(){return e.langToggle("KR")}},"KR"),o.a.createElement("span",{className:"EN"===t.set?"lang-toggle active":"lang-toggle",onClick:function(){return e.langToggle("EN")}},"EN"))}))))})),y=n(19),E=n(18),_={width:"14px",height:"10px",fill:"currentColor",position:"relative",top:"-1px"},S=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:_,viewBox:"0 0 408.4 408.4"},o.a.createElement("g",null,o.a.createElement("circle",{className:"cls-1",cx:"58.18",cy:"58.18",r:"58.18"}),o.a.createElement("circle",{className:"cls-1",cx:"204.2",cy:"58.18",r:"58.18"}),o.a.createElement("circle",{className:"cls-1",cx:"204.2",cy:"204.2",r:"58.18"}),o.a.createElement("circle",{className:"cls-1",cx:"204.2",cy:"350.22",r:"58.18"}),o.a.createElement("circle",{className:"cls-1",cx:"350.22",cy:"58.18",r:"58.18"})))},x=n(39),N=n.n(x),I=n(40),C=n.n(I),T=function(){var e=Object(a.useState)([0,0]),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.useLayoutEffect)((function(){function e(){o([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},O=h.a.bind(N.a),j=o.a.memo((function(e){var t=e.id,n=e.children,r=e.highlight,i=e.title,c=e.width,l=e.maxWidth,d=e.top,u=e.left,m=e.isPadding,p=void 0===m||m,h=e.isFixed,g=e.onClickCloseBtn,f=T(),b=Object(s.a)(f,1)[0],v=Object(a.useRef)(null);Object(a.useEffect)((function(){h||d&&u||k()}),[]);var k=function(){v.current&&(v.current.style.left="".concat(Math.random()*(.8*(window.innerWidth-v.current.offsetWidth))+.13*window.innerWidth,"px"),v.current.style.top="".concat(Math.random()*(.7*(window.innerHeight-v.current.offsetHeight))+.12*window.innerHeight,"px"))},w=Object(a.useState)(!1),y=Object(s.a)(w,2),E=y[0],_=y[1],S=function(){_(!0),setTimeout((function(){v.current&&v.current.remove()}),250)},x=Object(a.useState)(r?100:5),N=Object(s.a)(x,2),I=N[0],j=N[1];return o.a.createElement(C.a,{disabled:!(b>769),axis:"both",handle:".handleTarget",defaultPosition:{x:0,y:0},position:null,grid:[25,25],scale:1,onDrag:function(){return j(9999)}},o.a.createElement("div",{className:O("container","handleTarget",r&&"highlight",E&&"hide"),id:"popup".concat(t),style:{width:"".concat(c,"px"),maxWidth:"".concat(l,"px"),top:"".concat(d&&d,"px"),left:"".concat(u&&u,"px"),zIndex:"".concat(I&&I+t)},onMouseEnter:function(){return j(999)},onTouchStart:function(){return b>769&&j(999)},onMouseLeave:function(){return j(r?100:5)},onTouchEnd:function(){return b>769&&j(r?100:5)},ref:v},o.a.createElement("div",{className:O("title")},i,o.a.createElement("span",{className:O("btn--close"),onClick:function(){return g?g():S()},onTouchStart:function(){return b>769&&S()}},"\xd7")),o.a.createElement("div",{className:O("content",p&&"content--isPadding")},n)))})),L=function(e,t){t>769&&(window.location.href=e)},P=(n(76),n(41)),A=n.n(P),B=function(e){Object(a.useEffect)((function(){e.current&&(e.current.style.opacity=1,e.current.style.transform="initial")}),[])},R=h.a.bind(A.a);var H=function(e){var t=e.children,n=e.className,r=Object(a.useRef)(null);return B(r),o.a.createElement("div",{className:R("container",n),ref:r},t)};var W=o.a.memo((function(e){var t=e.data,n=T(),a=Object(s.a)(n,1)[0],r=[{text:"baesh.dev@gmail.com",url:"mailto:baesh.dev@gmail.com"},{text:"Github",url:"https://github.com/baeseonghyeon",icon:[o.a.createElement(E.a,{icon:y.a})]},{text:"Blog",url:"https://baeseongh.tistory.com/",icon:[o.a.createElement(S,null)]},{text:"Linkedin",url:"https://www.linkedin.com/in/%EC%84%B1%ED%98%84-%EB%B0%B0-abb1441a4/",icon:[o.a.createElement(E.a,{icon:y.c})]},{text:"Instagram",url:"https://www.instagram.com/baeshash/",icon:[o.a.createElement(E.a,{icon:y.b})]}],i=[{title:"BAE-SEONGHYEON",width:350,top:50,left:26,isHighlight:!0,children:[o.a.createElement("p",null,t.intro)]},{title:"CONTACT",width:250,top:195,left:50,children:[o.a.createElement("ul",null,r.map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:e.url,rel:"noopener noreferrer",onTouchStart:function(){return L(e.url,a)}},e.icon&&e.icon," ",e.text))})))]},{title:"COMMENT",width:400,children:[o.a.createElement("p",{className:"about-align-left"},t.comment)]},{title:"CAREER",width:500,children:[o.a.createElement("span",{className:"style-list"},o.a.createElement("ul",null,t.career.map((function(e){return o.a.createElement("li",null,e.url?o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",onTouchStart:function(){return L(e.url,a)}},e.title," ( ",e.date," )"):"".concat(e.title," ( ").concat(e.date," )"))}))))]},{title:"SKILL",width:500,children:[o.a.createElement("span",{className:"style-list"},o.a.createElement("ul",null,t.stack.map((function(e){return o.a.createElement("li",null,e.category,"(",e.stacks,")")}))))]},{title:"INFORMATION",width:300,children:[o.a.createElement("span",null,t.footer.map((function(e,n){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,e.text),n!==t.footer.length-1&&o.a.createElement("br",null))})))]}];return o.a.createElement(H,null,i.map((function(e,t){return o.a.createElement(j,{id:t,title:e.title,width:e.width,top:e.top&&e.top,left:e.left&&e.left,highlight:e.isHighlight},e.children)})))})),D=n(42),M=n.n(D),G=function(e){return"web"===e?"Visit the website \u2192":"mobile"===e?"Visit the website(Mobile Only) \u2192":"github"===e?"Visit the Github Code \u2192":"Visit the link \u2192"},U=n(43),J=n.n(U),z=h.a.bind(J.a),Q=o.a.memo((function(e){var t=e.item,n=Object(d.f)(),a=T(),r=Object(s.a)(a,1)[0],i=function(e,t){r>769&&(t?window.location.href=e:n.push(e))};return o.a.createElement("div",{className:z("container","ft-s-s"),id:"desc".concat(t.id)},o.a.createElement(j,{id:"desc".concat(t.id),title:"".concat(t.info.cate," - ").concat(t.info.role),isPadding:!0,isFixed:!0,onClickCloseBtn:function(){document.getElementById("desc".concat(t.id)).removeAttribute("style")}},o.a.createElement("span",null,o.a.createElement("p",{className:"desc"},t.content.text.substr(0,t.eg?110:65),t.content.text.length>(t.eg?110:65)?o.a.createElement("span",null,"...",o.a.createElement(c.b,{to:"/works/".concat(t.id),onTouchStart:function(){return i("/works/".concat(t.id))}}," ","read more")):"",o.a.createElement("br",null))),o.a.createElement("span",null,t.links&&t.links.map((function(e){return o.a.createElement("a",{href:e.src,target:"_blank",rel:"noopener noreferrer",className:"d-block",onTouchStart:function(){return i(e.src,!0)}},G(e.type),o.a.createElement("br",null))})),t.content.text.length<(t.eg?110:65)&&o.a.createElement(c.b,{className:"more-btn d-block",to:"/works/".concat(t.id),onTouchStart:function(){return i("/works/".concat(t.id))}},"Read More \u2192"))))}));var Y=function(e){var t=e.src,n=e.className,a=e.width,r=e.height;return o.a.createElement("iframe",{title:"youtube_video",className:n,width:a,height:r,src:"".concat(t,"?autoplay=1&showinfo=0&loop=1&mute=1&rel=0"),frameBorder:"0",allow:"autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},K=h.a.bind(M.a),F=o.a.memo((function(e){var t=e.item,n=(e.targetId,e.onMouseEnter),r=e.onMouseLeave,i=e.onClickIcon,c=Object(a.useRef)(null),l=Object(a.useRef)(null);Object(a.useEffect)((function(){s()}),[]);var s=function(){c.current&&l.current&&(l.current.style.left="".concat(Math.random()*(c.current.offsetWidth-l.current.offsetWidth),"px"),l.current.style.top="".concat(Math.random()*(c.current.offsetHeight-l.current.offsetHeight),"px"))};return o.a.createElement("div",{className:K("container")},o.a.createElement("div",{className:K("card","wrapper"),id:"work".concat(t.id),onMouseEnter:function(){return n(t.id)},onMouseLeave:function(){return r(t.id)},ref:c},o.a.createElement("span",{className:K("icon--pointer"),id:"pointer".concat(t.id),onClick:function(){return i(t.id)},onTouchStart:function(){return i(t.id)},ref:l}),t.videos?o.a.createElement("div",{className:K("iframe--wrapper")},o.a.createElement(Y,{className:K("iframe--video"),width:550,height:344,src:t.videos[0].src})):t.thumb||t.images?o.a.createElement("img",{src:t.thumb?t.thumb:t.images[0].src,className:K("image"),alt:t.title}):o.a.createElement("div",{className:K("placeholder")},o.a.createElement("span",null,"Thumbnail is Empty :-(")),o.a.createElement(Q,{item:t})))})),X=n(44),V=n.n(X),q=h.a.bind(V.a),Z=o.a.memo((function(e){var t=e.data,n=T(),a=Object(s.a)(n,1)[0],r=Object(d.f)(),i=function(e){m(),document.getElementById("popup".concat(e))?(l(e),document.getElementById("popup".concat(e)).style.zIndex=9999,p(e)):r.push("/works/".concat(e))},l=function(e){m(),document.getElementById("pointer".concat(e)).style.opacity=0,document.getElementById("desc".concat(e)).style.opacity=1,document.getElementById("desc".concat(e)).style.zIndex=1},u=function(e){m()},m=function(){t.map((function(e){return document.getElementById("popup".concat(e.id))&&(document.getElementById("popup".concat(e.id)).style.zIndex=5+e.id),document.getElementById("desc".concat(e.id)).removeAttribute("style")}))},p=function(e){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=document.getElementById("popup".concat(e)).offsetHeight;v.animateScroll.scrollTo(document.getElementById("popup".concat(e)).offsetTop-(t/2-n/2))};return o.a.createElement(H,null,o.a.createElement(j,{title:"All works",width:"400",top:"50",left:"26",highlight:!0},t.slice(0).reverse().map((function(e){return o.a.createElement("span",{className:q("list--wrapper","mr-2"),key:e.id},o.a.createElement("span",{className:q("list--footnote"),onClick:function(){return i(e.id)},onTouchStart:function(){return i(e.id)}},"[",e.id,"]"),o.a.createElement(c.b,{to:"/works/".concat(e.id),className:q("list--link"),onTouchStart:function(){return L("/works/".concat(e.id),a)}},e.title," ( ",e.info.date," ) [",e.info.cate,"]"))}))),o.a.createElement("div",{className:"bd-t"}),t.slice(0).reverse().map((function(e){return o.a.createElement(j,{id:e.id,key:e.id,title:e.title,width:"500",isPadding:!1},o.a.createElement(F,{key:e.id,item:e,onClickIcon:l,onMouseEnter:l,onMouseLeave:u}))})))})),$=n(45),ee=n.n($),te=(n(77),function(){var e=Object(a.useState)(5),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(d.f)();return Object(a.useEffect)((function(){var e=setInterval((function(){n>0&&r(n-1),0===n&&clearInterval(e)}),1e3);return function(){return clearInterval(e)}}),[n]),Object(a.useEffect)((function(){var e=setTimeout((function(){i.push("/")}),5e3);return function(){return clearTimeout(e)}}),[]),o.a.createElement("div",{className:"NotFound"},o.a.createElement("h1",null,"404"),o.a.createElement("h1",null,"Page Not Found"),o.a.createElement("p",null,"uh-oh! Nothing here.."),o.a.createElement("p",null,"After ",o.a.createElement("strong",null,n)," seconds, move to main."),o.a.createElement(c.b,{to:"/",className:"mt-0"},"\u2190 Back to home"))}),ne=h.a.bind(ee.a);var ae=function(e){var t=e.match,n=e.data,a=n[t.params.id-1],r=T(),i=Object(s.a)(r,1)[0],c=function(e){i>769&&(window.location.href=e)};if(t.params.id<1||n.length<t.params.id||t.params.id.match(/[^0-9]/))return o.a.createElement(te,null);var l=[{content:a.info.date,type:"Date"},{content:a.info.cate,type:"Category"},{content:a.info.role,type:"Role"},{content:a.info.stack,type:"Stack"},{content:a.info.collabor,type:"Collaborator"}],d=[{width:350,position:!0,top:25,left:20,isHighlight:!0,children:[o.a.createElement("ul",{className:"work-info"},l.map((function(e){return e.content?o.a.createElement("li",null,o.a.createElement("strong",null,e.type,":")," ",e.content):null})))]},{width:450,position:!0,top:270,left:40,isHighlight:!1,children:[o.a.createElement("div",{className:"desc px-0"},o.a.createElement("p",null,a.content.text,a.content.links&&a.content.links.map((function(e,t){return o.a.createElement("a",{href:e.src,target:"_blank",rel:"noopener noreferrer",onTouchStart:function(){return c(e.src)}},0===t&&" (",e.title,t!==a.content.links.length-1?", ":") ")}))),a.links&&a.links.map((function(e){return o.a.createElement("a",{href:e.src,target:"_blank",rel:"noopener noreferrer",onTouchStart:function(){return c(e.src)}},G(e.type),o.a.createElement("br",null))})))]}];return o.a.createElement(H,{className:ne("container")},d.map((function(e,t){return o.a.createElement(j,{id:t,title:a.title,width:e.width,position:!!e.position&&e.position,top:e.top&&e.top,left:e.left&&e.left,highlight:e.isHighlight},e.children)})),o.a.createElement("div",{className:"row mt-5 m-auto justify-content-center"},a.videos&&a.videos.map((function(e){return o.a.createElement("div",{className:"col-md-6 mb-0 p-0"},o.a.createElement("div",{className:ne("video--wrapper")},o.a.createElement(Y,{className:ne("video"),width:550,height:350,src:e.src})))}))),o.a.createElement("div",{className:"row mb-4 m-auto justify-content-center"},a.images&&a.images.map((function(e){return o.a.createElement("div",{className:"\n                  ".concat(e.fullSize?"col-md-12":"col-md-6"," mb-0 p-0\n                ")},o.a.createElement("img",{src:e.src,className:ne("image"),alt:a.title}))}))))},oe=function(e){var t=e.id-1;return{id:e.id,title:e.title,content:{text:e.text,get links(){if(re[0].data[t].content.links){var n=JSON.parse(JSON.stringify(re[0].data[t].content.links));return e.descLinks&&e.descLinks.map((function(e,t){return n[t].title=e.title,null})),n}}},get info(){if(re[0].data[t].info.collabor){var n=JSON.parse(JSON.stringify(re[0].data[t].info));return e.collabor&&(n.collabor=e.collabor),n}return re[0].data[t].info},get links(){return re[0].data[t].links},get thumb(){return re[0].data[t].thumb},get images(){return re[0].data[t].images},get videos(){return re[0].data[t].videos},eg:!0}},re=[{lang:"kr",data:[{id:1,title:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc at \uc0bc\uc721\ub300\ud559\uad50",info:{date:"2018-2019",cate:"Website",role:"development / planning / design",stack:"HTML5, CSS3, JavaScript, jQuery, Ruby on Rails, SQLite, Git, AWS(EC2, bucket), Heroku",collabor:null},content:{text:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc at \uc0bc\uc721\ub300\ud559\uad50 \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc \ud65c\ub3d9 \uc911 \uba64\ubc84\uad00\ub9ac, \uacf5\uc9c0\uc0ac\ud56d\uac8c\uc2dc, \uacfc\uc81c\uac8c\uc2dc, \uc218\uc5c5\uc790\ub8cc\uac8c\uc2dc, \ud65c\ub3d9\ud64d\ubcf4\ub97c \ubaa9\uc801\uc73c\ub85c \uc81c\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8\uc758 \uae30\ud68d\uacfc \uc124\uacc4, \ub514\uc790\uc778, \uae30\ub2a5\uac1c\ubc1c, \uc11c\ubc84 \ubc30\ud3ec\ub97c \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4."},links:[{type:"web",src:"http://sahmyook.likelion.org/"},{type:"github",src:"https://github.com/baeseonghyeon/likelion_syu_website"}],thumb:"https://ww.namu.la/s/3f55b7c22bebc146f5b172e73512b8951690eb1012225cb764f2a104dcf26aa541388fe5373b9c044365f71a2c4b505aa61c87c504a7e74bbe9e2e4a14bb9304f10c59bd1a3d8a0f5f787edb19905b45fd69c92c122a0b13675932867818dfb0",images:null,videos:[{src:"https://www.youtube.com/embed/9405iJIMVEo"},{src:"https://www.youtube.com/embed/QQvG98s9LVI"}]},{id:2,title:"\uc0bc\uc721\ub300\ud559\uad50 \ud559\uc220\uc815\ubcf4\uc6d0 \ucd9c\uc11d \uc774\ubca4\ud2b8",info:{date:"2019",cate:"Website",role:"development / planning ",stack:"HTML5, CSS3, JavaScript, jQuery, PHP, phpMyAdmin",collabor:"\uc624\ud508\ubc84\uc2a4"},content:{text:"\uc0bc\uc721\ub300\ud559\uad50 \ud559\uc220\uc815\ubcf4\uc6d0 \ucd9c\uc11d \uc774\ubca4\ud2b8 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4. \uae30\uac04\ub3d9\uc548 \uc774\ubca4\ud2b8 \ucc38\uc5ec\ud6c4 \ucd9c\uc11d\uccb4\ud06c \uc9c4\ud589 \ubc0f \ucd9c\uc11d\ub0b4\uc5ed\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd9c\uc11d\uccb4\ud06c \uc774\ubca4\ud2b8 \uae30\ub2a5\uacfc, \uad00\ub9ac\uc790 \uae30\ub2a5, \uc11c\ubc84 \ubc0f \ud654\uba74\uc124\uacc4, UI\ub97c \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."},links:[{type:"web",src:"http://syulib.suedumi.com/bbs/event.php"}],thumb:"https://drive.google.com/uc?export=view&id=1q5YBrzaW25dIq5_67alYj-87MkXzIuWV",images:[{src:"https://drive.google.com/uc?export=view&id=1laO33PX7qyR4KrTJEFLNGBEDJ35WroMi",fullSize:!0},{src:"https://drive.google.com/uc?export=view&id=1q5YBrzaW25dIq5_67alYj-87MkXzIuWV",fullSize:!0}],videos:null},{id:3,title:"\ud31c\ud074\ub77c\uc6b0\ub4dc",info:{date:"2018-2019",cate:"Website",role:"development / planning ",stack:"HTML5, CSS3, JavaScript, jQuery, PHP, phpMyAdmin",collabor:"\uc624\ud508\ubc84\uc2a4"},content:{text:"\ud31c\ud074\ub77c\uc6b0\ub4dc\uc758 \uc720\uc800 \uc6f9 \ubaa8\ub4c8 \uc785\ub2c8\ub2e4. \uc6f9 \uae30\ubc18 \ubaa8\ub4c8\uc744 \ud1b5\ud574 \ubb34\uc778 \uc2a4\ub9c8\ud2b8\ud31c\uc758 \uc7ac\ubc30 \ud658\uacbd\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc5c5\ucd08\uae30 \uc6f9 \ubaa8\ub4c8 \ud504\ub85c\ud1a0\ud0c0\uc785\uc758 \uae30\ud68d\uacfc \ud654\uba74\uc124\uacc4, \ud504\ub860\ud2b8 \uc5d4\ub4dc \uac1c\ubc1c\uc744 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4."},links:[{type:"web",src:"http://dfarmcloud.com/"}],thumb:"https://drive.google.com/uc?export=view&id=1wJTQsc703hGdbF-zHOPYDXfjBoi-dOjh",images:[{src:"https://drive.google.com/uc?export=view&id=19zCQJ46CRhF0BBI5YuZCJVZsx0MVGr88"},{src:"https://drive.google.com/uc?export=view&id=1QuaaumhJQEp2WBZKPufNAIduVPnKSUW_"},{src:"https://drive.google.com/uc?export=view&id=1bcHdwg1JFkXBq41jFo78cSf9xxlIXrMh",fullSize:!0},{src:"https://drive.google.com/uc?export=view&id=1kYbEGZJSsfoIR8qSL26TytSRIlfyHn8S",fullSize:!0}],videos:null},{id:4,title:"\ud56d\ub9cc \uc790\uc728\uc8fc\ud589 \uc6b4\ubc18\ucc28\ub7c9 \uc778\ud130\ud398\uc774\uc2a4",info:{date:"2019",cate:"Web",role:"development / planning / design",stack:"HTML5, CSS3, JavaScript, jQuery, Django, Restful API, MySQL, Git",collabor:"YAHAIT(\ud55c\uc815\uc6b0, \ubc15\uc21c\ud638, \uae40\uc900\ud615, \uae40\ud0dc\uc591)"},content:{text:"\ud56d\ub9cc \uc790\uc728\uc8fc\ud589 \uc6b4\ubc18\ucc28\ub7c9 \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uc81c\uc5b4 \uc6f9 \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4. \uc6f9 \uae30\ubc18 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \uc544\ub450\uc774\ub178\ub85c \uac1c\ubc1c\ub41c \ud504\ub85c\ud1a0\ud0c0\uc785 \uc790\uc728\uc8fc\ud589 \uc790\ub3d9\ucc28\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \uad00\ub9ac\ud558\uba70 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. YAHAIT\ud300\uacfc \ud611\uc5c5\ud558\uba70 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub514\uc790\uc778\uacfc \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 \uacb0\uacfc\ub85c, 2019 \uc2a4\ub9c8\ud2b8 \ud574\uc0c1\ubb3c\ub958 \ud504\ub85c\uc81d\ud2b8 \uacbd\uc9c4\ub300\ud68c(\uc2a4\ub9c8\ud2b8 \ud56d\ub9cc\ubb3c\ub958 \uacf5\ubaa8\uc804) \u2018\ud56d\ub9cc \uc9c0\ub2a5\ud615 \uc790\uc728 \uc6b4\ubc18 \uc2a4\ub9c8\ud2b8 \ucc28\ub7c9\u2019 \ub3d9\uc0c1 \uc218\uc0c1\uacfc \uc6b8\uc0b0\ud56d\ub9cc\uacf5\uc0ac \uc2a4\ub9c8\ud2b8\ud56d\ub9cc\ubb3c\ub958\uc9c0\uc6d0\uc13c\ud130 \uc8fc\uad00\u20182019 \uc2a4\ub9c8\ud2b8 \ud56d\ub9cc\ubb3c\ub958 \ucc3d\uc5c5\uc544\uc774\ud15c \ubc1c\uad74 \uc9c0\uc6d0\uc0ac\uc5c5\u2019\uc5d0 \uc120\uc815\ub418\uc5b4, 2640\ub9cc\uc6d0 \uc218\uc8fc\ud558\uc600\uc2b5\ub2c8\ub2e4.",links:[{title:"\uc870\uc120\uc77c\ubcf4",src:"http://news.chosun.com/pan/site/data/html_dir/2019/11/06/2019110601298.html"},{title:"\uc911\uc559\uc77c\ubcf4",src:"https://news.joins.com/article/23625842"}]},links:[{type:"github",src:"https://github.com/baeseonghyeon/hanium-smartcar"}],thumb:null,images:[{src:"https://drive.google.com/uc?export=view&id=1o4BkXnkMhu1sZovfJbaP8I2FzgByQzSC"}],videos:[{src:"https://www.youtube.com/embed/56Nr-upcPYU"},{src:"https://www.youtube.com/embed/v3SlDoEIcBo"}]},{id:5,title:"SYUFESTA",info:{date:"2019",cate:"Website",role:"development / planning",stack:"HTML5, CSS3, JavaScript, jQuery, Django, Git, AWS(Elastic Beanstalk, bucket, RDS)",collabor:"\uba4b\uc7c1\uc774\uc0ac\uc790\ucc98\ub7fc at \uc0bc\uc721\ub300\ud559\uad50"},content:{text:"\uc0bc\uc721\ub300\ud559\uad50 \ucc9c\ubcf4\ucd95\uc804 & \uccb4\uc721\ub300\ud68c \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \uc0bc\uc721\ub300\ud559\uad50 \ucd95\uc81c(\ucc9c\ubcf4\ucd95\uc804)\uc640 \uccb4\uc721\ub300\ud68c\uc758 \ud64d\ubcf4, \uc815\ubcf4\uac8c\uc2dc, \uc774\ubca4\ud2b8 \uc9c4\ud589\uc744 \ubaa9\uc801\uc73c\ub85c \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uba54\uc778\ud398\uc774\uc9c0\ub97c \ud1b5\ud574 \uac01\uac01 \ub2e4\ub978 \ucee8\uc149\uacfc \ub514\uc790\uc778\uc758 \ucd95\uc81c \uc6f9\uc0ac\uc774\ud2b8\uc640 \uccb4\uc721\ub300\ud68c \uc6f9\uc0ac\uc774\ud2b8\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0bc\uc721\ub300\ud559\uad50 \ucd1d\ud559\uc0dd\ud68c\uc640 \uba4b\uc7c1\uc774\uc0ac\uc790\ucc98\ub7fc at \uc0bc\uc721\ub300\ud559\uad50\uac00 \ud611\uc5c5\ud558\uc5ec \uc81c\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc640 \uc6f9\uc0ac\uc774\ud2b8\uc758 \uae30\ud68d\uacfc \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ucd1d\uad04\ud558\uc600\uc2b5\ub2c8\ub2e4."},links:[{type:"github",src:"https://github.com/likelion-syu/syufesta"}],thumb:null,images:[{src:"https://drive.google.com/uc?export=view&id=158QoYY-KWHzXAD_GZKTELeSiEOPHAEr1"},{src:"https://drive.google.com/uc?export=view&id=1LE4HyxyAyJyUy2eDf7GqBvkDGZNDKWyv"}],videos:[{src:"https://www.youtube.com/embed/_8kgo70qmbA"},{src:"https://www.youtube.com/embed/Zq1rC8LJ6oE"}]},{id:6,title:"\uc62c\ub4dc\ub8e8\ud0a4(\ud504\ub85c\ud1a0\ud0c0\uc785)",info:{date:"2019",cate:"Website",role:"development / planning",stack:"React, scss, Git",collabor:"OldRookie(\uc720\uacbd\uc218, \uacfd\uc608\ub9b0)"},content:{text:"(\uc8fc)\uc62c\ub4dc\ub8e8\ud0a4\uc758 \uae30\uc5c5 \ud648\ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4. \ud68c\uc0ac\uc758 \uc815\ubcf4\uac8c\uc2dc\ub97c \uc704\ud574 \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8 \uae30\ud68d\uacfc \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. (\uc544\uc9c1 \uac1c\ubc1c\uc911\uc778 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.)"},links:[{type:"web",src:"https://www.oldrookiecorp.com/"}],thumb:null,images:null,videos:[{src:"https://www.youtube.com/embed/UeceY8Muza4"}]},{id:7,title:"\ub9c8\uc2a4\ud130\ud53c\uc2a4(\ud504\ub85c\ud1a0\ud0c0\uc785)",info:{date:"2020",cate:"Application",role:"development / planning / design",stack:"React Native, scss, Git",collabor:"OldRookie(\uc720\uacbd\uc218, \uacfd\uc608\ub9b0)"},content:{text:"\ubbf8\uc220\uc804\uc2dc, \uad00\ub78c \uc11c\ube44\uc2a4 \ub9c8\uc2a4\ud130\ud53c\uc2a4\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\ud1a0\ud0c0\uc785 \uc785\ub2c8\ub2e4."},links:null,thumb:null,images:null,videos:[{src:"https://www.youtube.com/embed/lwBelR3pVNk"}]},{id:8,title:"\ub450\uc720 Know \uc794\ub514?",info:{date:"2020",cate:"Website",role:"development / planning / design",stack:"HTML5, CSS3, JavaScript, jQuery, Django, MySQL, Docker, Git, GCP(Compute Engine)",collabor:"\ubc15\uae30\ud64d"},content:{text:"Developer Student Clubs \uc0bc\uc721\ub300\ud559\uad50 \uc5d0\uc11c \uc9c4\ud589\ud55c Github \uc815\uc6d0\uc0ac\ub4e4('\ub450\uc720 Know \uc794\ub514?)\uc774\ubca4\ud2b8 \ucd9c\uc11d\ubd80 \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. GDG \ud310\uad50\uc758 \uc815\uc6d0\uc0ac\ub4e4 \uc2dc\uc98c5 \ucd9c\uc11d\ubd80\uc758 \ucf54\ub4dc \ubc0f \ub514\uc790\uc778 \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud1b5\ud574 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",links:[{title:"junho85 Github Link",src:"https://github.com/junho85/garden4"}]},links:[{type:"github",src:"https://github.com/DSC-Sahmyook/SYU_Garden"}],thumb:null,images:null,videos:[{src:"https://www.youtube.com/embed/m8TAnOVKJnI"},{src:"https://www.youtube.com/embed/ZmYICebhaoQ"}]},{id:9,title:"\ub514\uc824\ud2b8\ub7ed",info:{date:"2021",cate:"Application, Website",role:"development",stack:"ReactNative, React, TypeScript, SCSS, StoryBook, Git, GraphQL",collabor:"OldRookie(\uc720\uacbd\uc218, \ubc15\uae30\ud64d, \uae40\ud61c\uc6d0), \uc720\ubbf8\uc2a4"},content:{text:"\ud654\ubb3c \uac70\ub798 \ud50c\ub7ab\ud3fc \ub514\uc824\ud2b8\ub7ed(Diesel Truck)\uc758 \ub51c\ub7ec\uc571, \uc140\ub7ec\uc571 \ud074\ub77c\uc774\uc5b8\ud2b8, \uad00\ub9ac\uc790 \uc6f9 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc678\uc8fc \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",links:[{title:"GooglePlay(\ub51c\ub7ec)",src:"https://play.google.com/store/apps/details?id=net.dstruck.dieseltruckDealer"},{title:"GooglePlay(\uc140\ub7ec)",src:"https://play.google.com/store/apps/details?id=net.dstruck.dieseltruckSeller"}]},links:null,thumb:"https://drive.google.com/uc?export=view&id=1QRhdOFpdSWytIMEuv2LuwACKRJ8uWzB2",images:[{src:"https://drive.google.com/uc?export=view&id=1WnzXpSgqGDgLwUHFIbyJAiMEAAlmzXAr"},{src:"https://drive.google.com/uc?export=view&id=1Aa-Uy-jepOf0lIOvPusXA6pgpfTGB6Y_",fullSize:!0},{src:"https://drive.google.com/uc?export=view&id=1YR8EtN8ecO-_HXxI-fHAWV-SHdPDg-L1",fullSize:!0}],videos:null},{id:10,title:"\ud074\ub7ec\ubc84",info:{date:"2021",cate:"Application, Website",role:"development",stack:"ReactNative, React, TypeScript, SCSS, StoryBook, Git, GraphQL",collabor:"OldRookie(\uc720\uacbd\uc218, \ubc15\uae30\ud64d, \uae40\ud61c\uc6d0), \uc720\ubbf8\uc2a4"},content:{text:"\ud074\ub7fd \ubaa8\uc784 \ucee4\ubba4\ub2c8\ud2f0, \uc5f0\uacb0 \ud50c\ub7ab\ud3fc \ud074\ub7ec\ubc84(Diesel Truck)\uc758 \uc571 \ud074\ub77c\uc774\uc5b8\ud2b8, \uad00\ub9ac\uc790 \uc6f9 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc678\uc8fc \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",links:[{title:"GooglePlay",src:"https://play.google.com/store/apps/details?id=com.wonitclient"},{title:"AppStore",src:"https://apps.apple.com/kr/app/clubber/id1561355313"}]},links:null,thumb:"https://drive.google.com/uc?export=view&id=17qWFUoWSJtMzN1sdSD_-Don0jKweUTTs",images:[{src:"https://drive.google.com/uc?export=view&id=1RgCr-0OUuRKLjAghej719wXrUCbbW9pO"},{src:"https://drive.google.com/uc?export=view&id=1P8ULJQiJaQ31Gk4I_8BPowTHr3w0ReXV"}],videos:null}]},{lang:"eg",data:[oe({id:1,title:"Likelion at Sahmyook University",text:"It is a website of Likelion at Sahmyook University. It is produced for the purpose of managing members, posting notices, posting assignments, posting class materials, and promoting activities during activities Likelion. I was in charge of planning, design, function development, and server deploy of the website."}),oe({id:2,title:"Sahmyook University Library Event",text:"This is the attendance check event page of Sahmyook University Academic Information Service. After participating in the event, you can attendance and check attendance details. I developed attendance check event function, administrator function, server and screen design, and UI.",collabor:"OPENBUS"}),oe({id:3,title:"FarmCloud",text:"It is User Web module for the farm cloud. The Web-based modules allow to monitor and control the growing environment of unattended smart farms. I was responsible for planning, screen design, and front-end development of early web module prototypes.",collabor:"OPENBUS"}),oe({id:4,title:"Port Self-driving Car Interface",text:"This is the web interface for monitoring and control of port self-driving vehicles. Web-based interfaces allow you to monitor, manage and control prototype self-driving vehicles developed use Arduino. I worked with the YAHAIT team to design the interface and develop the front end. As a result of this project, we won the 2019 Smart Port Logistics Project Competition (Smart Port Logistics Contest) 'Port Intelligent Autonomous Transport Smart Vehicle' and was selected as the '2019 Smart Port Logistics Startup Item Discovery Support Project' by Ulsan Port Corporation. Through this, we received business funds 26.4 million won.",collabor:"YAHAIT",descLinks:[{title:"ChosunMedia"},{title:"JoongAng Ilbo"}]}),oe({id:5,title:"SYUFESTA",text:"This is the website of the Cheonbo Festival & Athletic Competition of Sahmyook University. It was developed for the purpose of promoting Sahmyook University Festival (Cheonbo Festival) and Athletic Competition, posting information, and support events. Through the one main page, you can experience two website with a different design and concept. Like the student council of Sahmyook University and Likelion at Sahmyook University collaborated and produced it. I taken the lead of planning the project and front-end developing the front-end.",collabor:"LIKELION at SYU"}),oe({id:6,title:"OldRookie Corp.(Prototype)",text:"This is website of the OldRookie corporate. It is designed to publish the company's information. I was in charge of website planning and front-end development. (This project is still in development.)",collabor:"OldRookie"}),oe({id:7,title:"Masterpiece(Prototype)",text:"This is an application prototype for the 'Masterpiece' of the art exhibition and viewing service.",collabor:"OldRookie"}),oe({id:8,title:"Do you Know Jandi?",text:"This is the Github gardener's ('Do you Know Grass?') event attendance website held by the Developer Student Clubs Sahmyook University. This website was developed through code and design refactoring of Gardeners season5 of GDG Pangyo.",collabor:"Gihong-Park"}),oe({id:9,title:"Diesel Truck",text:"We have developed a dealer app, seller app client, and admin web client for the cargo trading platform named Diesel Truck.",collabor:"OldRookie, Yumis",descLinks:[{title:"GooglePlay(Dealer)"},{title:"GooglePlay(Seller)"}]}),oe({id:10,title:"CLUBBER",text:"We have developed the app client, and admin web client for the club party connection platform named Clubber.",collabor:"OldRookie, Yumis"})]}],ie=re,ce=[{lang:"kr",data:{intro:"\ubc30\uc131\ud604\uc740 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790, UI\uac1c\ubc1c\uc790, \uc6f9/\uc571 \uac1c\ubc1c\uc790, UI/UX \uae30\ud68d\uc790, IT\uc11c\ube44\uc2a4 \uae30\ud68d\uc790, \ud504\ub85c\ub355\ud2b8 \ub9e4\ub2c8\uc800\uc785\ub2c8\ub2e4.",comment:"\ub514\uc790\uc774\ub108\uc758 \uc2dc\uc120\uc73c\ub85c \uae30\ud68d\ud558\uba70, \uae30\ud68d\uc790\uc758 \uc0dd\uac01\uc73c\ub85c \uac1c\ubc1c\ud569\ub2c8\ub2e4. \uc2ec\ubbf8\uc801\uc73c\ub85c \uc544\ub984\ub2f5\uace0 \uae30\ub2a5\uc801\uc73c\ub85c \ud6a8\uacfc\uc801\uc778 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub300\ud55c\ubbfc\uad6d\uc5d0 \uac70\uc8fc\ud558\uba70 \uc0bc\uc721\ub300\ud559\uad50\uc5d0\uc11c \uacbd\uc601\uc815\ubcf4\ud559\uacfc\ub97c \uc804\uacf5\ud588\uc2b5\ub2c8\ub2e4.",career:[{title:"(\uc8fc)\uc62c\ub4dc\ub8e8\ud0a4 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790, \uc11c\ube44\uc2a4 \uae30\ud68d\uc790",date:"2019-2021",url:"https://nt.oldrookiecorp.com/6b2d9843993f4cf4adc434d686f86cfa"},{title:"Google Developer Student Clubs Lead",date:"2019-2020",url:"https://google.dev/badges/community/dsc/2019/lead?fbclid=IwAR0bSPj_62TH30Xa5ZbkIfVdjsXLmX9V_yt2oei95m-lfQqTz3veIk5Ry9A"},{title:"\uba4b\uc7c1\uc774\uc0ac\uc790\ucc98\ub7fc at \uc0bc\uc721\ub300\ud559\uad50 6\uae30, 7\uae30 \ub300\ud45c",date:"2018-2019",url:"http://sahmyook.likelion.org/users/2"},{title:"\uc624\ud508\ubc84\uc2a4(\uc8fc) \uac1c\ubc1c\ud300 \uc778\ud134",date:"2018-2019",url:"http://www.openbus.me/index.php"}],stack:[{category:"\uc6f9",stacks:"HTML5, CSS3, SCSS, React, Svelte, StoryBook, A-frame, Django, Ruby on Rails, CodeIgniter"},{category:"\uc571",stacks:"React Native"},{category:"\ud504\ub85c\uadf8\ub798\ubc0d\uc5b8\uc5b4",stacks:"JavaScript, TypeScript, Python, PHP, Ruby, C++"},{category:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",stacks:"MySQL, GraphQL, MongoDB, SQLite, PostgreSQL"},{category:"\uc778\ud504\ub77c",stacks:"Git, AWS, GCP, Docker"}],footer:[{text:"\uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 React.js\ub97c \ud1b5\ud574 \uac1c\ubc1c\ub418\uc5b4 Github.io\uc5d0 \ubc30\ud3ec \ub418\uc5c8\uc2b5\ub2c8\ub2e4."},{text:"\uc6f9\uc0ac\uc774\ud2b8 \uac1c\ubc1c \ubc0f \ub514\uc790\uc778 (\ubc30\uc131\ud604)"}]}},{lang:"eg",data:{intro:"Bae Seonghyeon is a Front-end Developer, UI Developer, WEB/APP Developer, UI/UX Planner, IT Service Planner, Product Manager.",comment:"I plan with the eyes of the designer and develop with the idea of the planner. I'm interested in creating a service that is aesthetically beautiful and functionally effective. I live in Korea and majored in Management Information Systems at Sahmyook University.",career:[{title:"OldRookie Corp FE Developer, Service Planner ",get date(){return ce[0].data.career[0].date},get url(){return ce[0].data.career[0].url}},{title:"Google Developer Student Clubs Lead",get date(){return ce[0].data.career[1].date},get url(){return ce[0].data.career[1].url}},{title:"LIKELION at Sahmyook University 6th, 7th Leader",get date(){return ce[0].data.career[2].date},get url(){return ce[0].data.career[2].url}},{title:"OPENBUS Development Team Intern",get date(){return ce[0].data.career[3].date},get url(){return ce[0].data.career[3].url}}],stack:[{category:"WEB",get stacks(){return ce[0].data.stack[0].stacks}},{category:"APP",get stacks(){return ce[0].data.stack[1].stacks}},{category:"LANGUAGE",get stacks(){return ce[0].data.stack[2].stacks}},{category:"DATABASE",get stacks(){return ce[0].data.stack[3].stacks}},{category:"INFRA",get stacks(){return ce[0].data.stack[4].stacks}}],footer:[{text:"This website was developed using React.js and Deployed on Github.io"},{text:"Website developed and designed by Bae Seonghyeon"}]}}],le=ce;var se=Object(d.h)((function(e){var t=Object(d.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[t]),e.children}));var de=function(){var e={profile:{kr:le[0],en:le[1]},work:{kr:ie[0],en:ie[1]}},t=Object(a.useState)([{set:"KR",work_data:e.work.kr,profile_data:e.profile.kr}]),n=Object(s.a)(t,2),r=n[0],i=n[1],c=Object(a.useMemo)((function(){return window.matchMedia("(prefers-color-scheme: dark)")}),[]),u=Object(a.useState)(),m=Object(s.a)(u,2),p=m[0],h=m[1];return Object(a.useEffect)((function(){p?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"))}),[p]),Object(a.useEffect)((function(){c.matches?h(!0):h(!1)}),[c.matches]),o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(se,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/",exact:!0,render:function(){return o.a.createElement(W,{data:r[0].profile_data.data})}}),o.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return o.a.createElement(W,{data:r[0].profile_data.data})}}),o.a.createElement(d.a,{path:"/works",exact:!0,render:function(){return o.a.createElement(Z,{data:r[0].work_data.data})}}),o.a.createElement(d.a,{path:"/works/:id",render:function(e){return o.a.createElement(ae,Object.assign({data:r[0].work_data.data},e))}}),o.a.createElement(d.a,{path:"*",component:te}))),o.a.createElement(w,{langs:r,langToggle:function(t){i(r.map((function(n){return"EN"===t?Object(l.a)(Object(l.a)({},n),{},{set:"EN",work_data:e.work.en,profile_data:e.profile.en}):Object(l.a)(Object(l.a)({},n),{},{set:"KR",work_data:e.work.kr,profile_data:e.profile.kr})})))},darkModeToggle:function(e){return h(e)},darkState:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{basename:""},o.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.1bf62e79.chunk.js.map