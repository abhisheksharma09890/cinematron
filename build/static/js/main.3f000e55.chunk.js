(this.webpackJsonpcinematron=this.webpackJsonpcinematron||[]).push([[0],{102:function(e,t,c){},103:function(e,t){},104:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(34),i=c.n(s),r=(c(47),c(48),c(35)),o=c.n(r).a.create({baseURL:"https://api.themoviedb.org/3"}),l=(c(66),c(10)),j=c.n(l),d=c(16),b=c(9),h=function(e){var t=Object(a.useState)([]),c=Object(b.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(null),r=Object(b.a)(i,2),l=r[0],h=r[1];return Object(a.useEffect)((function(){var t=new AbortController;function c(){return(c=Object(d.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get(e);case 2:return c=t.sent,s(c.data.results),h(c.data.results[Math.floor(Math.random()*c.data.results.length-1)]),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){return t.abort()}}),[e]),{movies:n,random:l}},O=c(12),v=c(0),u="https://image.tmdb.org/t/p/original/";var m=function(e){var t=e.title,c=e.fetchUrl,a=e.isLargeRow,n=h(c),s=n.movies;return n.random,console.log(s),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("div",{className:"row__posters",id:t,children:s.map((function(e){return Object(v.jsx)(O.b,{to:{pathname:"/MovieDetails/".concat(e.id),state:{poster:"".concat(u).concat(e.poster_path),backdrop:e.backdrop_path,title:e.name||e.title||e.original_name,overview:e.overview,rating:e.vote_average,releaseDate:e.release_date,popularity:e.popularity,adult:e.adult,movie:e}},children:Object(v.jsx)("img",{className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat(u).concat(e.poster_path),alt:e.name},e.id)})}))})]})},p="e1fc0e161ab3dd25a101919aa21d3dee",x={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};c(31);var f=function(){var e,t,c=h(x.fetchTrending),a=c.movies,n=c.random;return console.log(a),Object(v.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backdropPosition:"center center"},children:["                                        ",Object(v.jsxs)("div",{className:"banner__contents",children:[Object(v.jsx)("h1",{className:"banner__title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(v.jsxs)("div",{className:"banner__buttons",children:["  ",Object(v.jsx)(O.b,{to:{pathname:"/MovieDetails/".concat(null===n||void 0===n?void 0:n.id),state:{poster:"".concat("https://image.tmdb.org/t/p/original/").concat(null===n||void 0===n?void 0:n.poster_path),backdrop:null===n||void 0===n?void 0:n.backdrop_path,title:(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.original_name),overview:null===n||void 0===n?void 0:n.overview,rating:null===n||void 0===n?void 0:n.vote_average,releaseDate:null===n||void 0===n?void 0:n.release_date,popularity:null===n||void 0===n?void 0:n.popularity,adult:null===n||void 0===n?void 0:n.adult,movie:n}},children:Object(v.jsx)("button",{className:"banner__button",children:"More Info"})})]}),Object(v.jsx)("h1",{className:"banner__description",children:(e=null===n||void 0===n?void 0:n.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(v.jsx)("div",{className:"banner--fadeBottom"})]})},g=(c(74),c(75),c(37)),_=c.n(g);var N=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(b.a)(s,2),r=i[0],o=i[1];Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>100?n(!0):n(!1)}))}),[]);var l=function(e){var t=document.querySelector(".banner__button"),c=document.querySelector(".cancel__logo");0==r?(e.preventDefault(),o(!0),t.style.display="none",c.style.display="block"):(o(!1),t.style.display="block",c.style.display="none")};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"nav ".concat(c&&"nav__black"),children:[Object(v.jsx)("img",{className:"nav__logo",src:"/images/freeLogo.jpeg",alt:"Cinematron Logo"}),Object(v.jsx)("button",{onClick:l,className:"banner__button",children:"Contact"}),Object(v.jsx)("img",{onClick:l,className:"cancel__logo",src:"/images/cancel.png"})]}),r&&Object(v.jsxs)(_.a,{top:!0,children:[" ",Object(v.jsx)("div",{className:"contact__fill",children:Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"firstName",children:"First Name"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"firstname__input",type:"text",class:"form-control",id:"firstName"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"LastName",children:"Last Name"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"lastname__input",type:"text",class:"form-control",id:"LastName"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"email",children:"Email address"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"email__input",type:"email",class:"form-control",id:"email",placeholder:"name@example.com"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"textarea",children:"Your Message"}),Object(v.jsx)("br",{}),Object(v.jsx)("textarea",{className:"textarea__input",class:"form-control",id:"teaxtarea",rows:"6"})]}),Object(v.jsx)("div",{class:"form-group",children:Object(v.jsx)("button",{onClick:function(e){e.preventDefault()},children:"SEND"})})]})})]})]})},y=c(3),w=(c(77),c(38)),k=c.n(w),M=c(39),R=(c(93),c(13)),E=c.n(R),S=c(42),I=c.n(S);var C=function(){var e,t=Object(y.f)(),c=Object(a.useState)(""),n=Object(b.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)("Play"),l=Object(b.a)(r,2),h=l[0],O=l[1],u=t.state,p=u.poster,f=u.backdrop,g=u.title,_=u.overview,N=u.rating,w=u.releaseDate,R=u.popularity,S=u.adult,C=u.movie,D=N/10*5;e="true"===S||""===S;var T=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=5;break}i(""),O("Play"),e.next=10;break;case 5:return e.next=7,o.get("/movie/".concat(t.id,"/videos?api_key=e1fc0e161ab3dd25a101919aa21d3dee"));case 7:a=e.sent,i(null===(c=a.data.results[0])||void 0===c?void 0:c.key),O("Close");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"movie__details",children:[Object(v.jsxs)("div",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(f,'")'),backdropPosition:"center center"},children:["                                        ",Object(v.jsx)("div",{className:"banner__contents",children:Object(v.jsx)("h1",{className:"banner__title",children:g})}),Object(v.jsx)("div",{className:"banner--fadeBottom"})]}),Object(v.jsxs)("div",{className:"review",children:[Object(v.jsx)("div",{className:"review__poster",children:Object(v.jsx)(E.a,{left:!0,children:Object(v.jsx)("img",{className:"row__poster row__posterNew",src:p,alt:g})})}),Object(v.jsxs)("div",{className:"movie__rating",children:[Object(v.jsxs)(E.a,{right:!0,children:[Object(v.jsxs)("p",{className:"rating__no",children:[D," "]}),Object(v.jsx)(k.a,{className:"star__ratings",rating:D,starRatedColor:"yellow",starDimension:"30px",numberOfStars:5,name:"rating"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Release Date: "}),w]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Overview:  "}),Object(v.jsx)("br",{})," ",_]}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("button",{onClick:function(){return T(C)},className:"banner__button mid__button",children:[h," Trailer"]}),s&&Object(v.jsx)(I.a,{children:Object(v.jsx)("p",{className:"see__bottom",children:"Click the Button again to close the Video"})})]})]}),s&&Object(v.jsx)(M.a,{videoId:s,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}),Object(v.jsxs)("div",{className:"detail__icon",children:[Object(v.jsx)("div",{className:"wrap",children:Object(v.jsxs)(E.a,{left:!0,children:[Object(v.jsx)("img",{src:"/images/release.png"}),Object(v.jsxs)("p",{children:["Release Date:",Object(v.jsx)("br",{}),w]})]})}),Object(v.jsx)("div",{className:"wrap",children:Object(v.jsxs)(E.a,{right:!0,children:[Object(v.jsx)("img",{src:"/images/popularity.png"}),Object(v.jsxs)("p",{children:["Popularity:",Object(v.jsx)("br",{}),R]})]})}),e&&Object(v.jsx)("div",{className:"wrap",children:Object(v.jsx)("img",{src:"/images/age-limit.png"})})]}),Object(v.jsxs)("div",{className:"reusing__row",children:[Object(v.jsx)(m,{title:"ACTION MOVIES",fetchUrl:x.fetchActionMovies}),Object(v.jsx)(m,{title:"TRENDING NOW",fetchUrl:x.fetchTrending})]})]})};c(102);var D=function(){return Object(v.jsxs)("div",{className:"contact",children:[Object(v.jsx)("img",{src:"/images/freeLogo.jpeg"}),Object(v.jsxs)("div",{className:"quick__links",children:[Object(v.jsx)("h4",{children:"Quick links:"}),Object(v.jsx)("a",{href:"/#NETFLIX ORIGINALS",children:"Netflix Originals |"}),Object(v.jsx)("a",{href:"/#TRENDING NOW",children:"Trending now |"}),Object(v.jsx)("a",{href:"/#TOP RATED",children:"Top Rated |"}),Object(v.jsx)("a",{href:"/#ACTON MOVIES",children:"Action Movies |"}),Object(v.jsx)("a",{href:"/#COMEDY MOVIES",children:"Comedy Movies |"}),Object(v.jsx)("a",{href:"/#HORROR MOVIES",children:"Horror Movies |"}),Object(v.jsx)("a",{href:"/#ROMANCE MOVIES",children:"Romance Movies |"}),Object(v.jsx)("a",{href:"/#DOCUMENTARIES",children:"Documentaries"})]}),Object(v.jsx)("div",{className:"copyright",children:Object(v.jsx)("p",{children:"Copyright \xa9 2021. Cinematron-All Rights Reserved"})})]})};c(103);var T=function(){return Object(v.jsx)(O.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(N,{}),Object(v.jsxs)(y.c,{children:[Object(v.jsxs)(y.a,{exact:!0,path:"/",children:[Object(v.jsx)(f,{}),Object(v.jsx)(m,{title:"TRENDING NOW",fetchUrl:x.fetchTrending,isLargeRow:!0}),Object(v.jsx)(m,{title:"NETFLIX ORIGINALS",fetchUrl:x.fetchNetflixOriginals}),Object(v.jsx)(m,{title:"TOP RATED",fetchUrl:x.fetchTopRated}),Object(v.jsx)(m,{title:"ACTION MOVIES",fetchUrl:x.fetchActionMovies}),Object(v.jsx)(m,{title:"COMEDY MOVIES",fetchUrl:x.fetchComedyMovies}),Object(v.jsx)(m,{title:"HORROR MOVIES",fetchUrl:x.fetchHorrorMovies}),Object(v.jsx)(m,{title:"ROMANCE MOVIES",fetchUrl:x.fetchRomanceMovies}),Object(v.jsx)(m,{title:"DOCUMENTARIES",fetchUrl:x.fetchDocumentaries})]}),Object(v.jsx)(y.a,{exact:!0,path:"/MovieDetails/:id",children:Object(v.jsx)(C,{})})]}),Object(v.jsx)(D,{})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,105)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root")),A()},31:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},66:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.3f000e55.chunk.js.map