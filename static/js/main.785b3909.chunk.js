(this.webpackJsonpwatchlater=this.webpackJsonpwatchlater||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(7),i=c.n(s),o=c(9),l=c(6),j=c.n(l),d=c(8),u=c(4),m=function(e){var t=e.favoriteComponent;return Object(a.jsx)(r.a.Fragment,{children:e.movies.map((function(c,n){return Object(a.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(a.jsx)("img",{src:c.Poster,alt:"movie"}),Object(a.jsx)("div",{onClick:function(){return e.handleFavoritesClick(c)},className:"overlay d-flex align-items-center justify-content-center",children:Object(a.jsx)(t,{})})]})}))})},h=c.p+"static/media/wllogo.ecc408dd.png",b=function(e){return Object(a.jsx)("div",{className:"col logoimage",children:Object(a.jsx)("img",{src:h,alt:"Logo"})})},f=function(e){return Object(a.jsx)("div",{className:"col col-sm-4",children:Object(a.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Search for movies to add to your watchlist here!"})})},v=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"AddToList",children:Object(a.jsx)("span",{className:"mr-2",children:" Add to Watchlist"})})})},O=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsxs)("div",{className:"tag",children:[Object(a.jsx)("span",{children:"Remove from Watchlist"}),Object(a.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-bookmark-x",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"}),Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708z"})]})]})})},x=(c(16),c(17),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),l=i[0],h=i[1],x=Object(n.useState)(""),p=Object(u.a)(x,2),g=p[0],w=p[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(t){var c,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://www.omdbapi.com/?s=".concat(t,"&apikey=c5171cf5"),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).Search&&r(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(g)}),[g]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("app-favorites"));e&&h(e)}),[]);var N=function(e){localStorage.setItem("app-favorites",JSON.stringify(e))};return Object(a.jsxs)("div",{className:"container-fluid movie-app",children:[Object(a.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(a.jsx)(b,{}),Object(a.jsx)(f,{searchValue:g,setSearchValue:w})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(m,{movies:c,handleFavoritesClick:function(e){var t=[].concat(Object(o.a)(l),[e]);h(t),N(t)},favoriteComponent:v})}),Object(a.jsx)("div",{className:"row d-flex align-items-center watchlist",children:Object(a.jsx)("h1",{children:"Watchlist"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(m,{movies:l,handleFavoritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));h(t),N(t)},favoriteComponent:O})})]})});i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.785b3909.chunk.js.map