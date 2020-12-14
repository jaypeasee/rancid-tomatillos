(this["webpackJsonprancid-tomatillos"]=this["webpackJsonprancid-tomatillos"]||[]).push([[0],{25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var r=i(0),c=(i(25),i(9)),s=i(10),n=i(12),a=i(11),o=(i(26),i(27),i.p+"static/media/tom-front.d349118b.png"),l=i(1),j=i(7),d=function(e){return Object(r.jsxs)("div",{className:"nav-bar",children:[Object(r.jsxs)("div",{className:"nav-title",children:[Object(r.jsx)(j.c,{className:"home-link",to:"/",children:Object(r.jsxs)("h1",{className:"nav-h1",onClick:e.returnToHome,children:["Rancid Tomatillos",Object(r.jsx)("div",{className:"title-animation"})]})}),Object(r.jsx)("div",{className:"btn-container",children:Object(r.jsx)(j.c,{className:"btn-animation",to:"/",children:Object(r.jsx)("img",{src:o,alt:"rancid tomatillo logo",role:"button",className:"home-btn",onClick:e.returnToHome})})})]}),Object(r.jsx)("h3",{children:"A page to view detailed movie reviews and their trailers"})]})},h=(i(33),i.p+"static/media/search-icon.e0e7e9e3.svg"),m=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(e){var r;return Object(c.a)(this,i),(r=t.call(this,e)).updateInput=function(e){r.setState({searchTerm:e.target.value})},r.enterSearchTerm=function(e){e.preventDefault(),r.props.searchMovies(r.state.searchTerm),r.setState({searchTerm:""})},r.state={searchTerm:""},r}return Object(s.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("form",{children:[Object(r.jsx)("h2",{children:"Search Movies by Title"}),Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{placeholder:"ex. Dead Pool",name:"searchTerm",type:"text",onChange:this.updateInput,value:this.state.searchTerm}),Object(r.jsx)("img",{className:"searchImg",alt:"search image",src:h,role:"button",onClick:this.enterSearchTerm})]})]})}}]),i}(l.Component),u=(i(34),i(35),i.p+"static/media/toms-back.78f3f1c8.png"),v=function(e){var t=e.id,i=e.image,c=e.title,s=e.average_rating;return Object(r.jsx)(j.b,{to:"/movie-review/".concat(t),className:"movie-card",children:Object(r.jsxs)("section",{role:"button","data-testid":t,children:[Object(r.jsx)("img",{className:"movie-img",src:i,alt:c+" movie cover"}),Object(r.jsxs)("article",{children:[Object(r.jsx)("h2",{children:c}),Object(r.jsxs)("div",{className:"tomato-rating",children:[Object(r.jsxs)("p",{children:[Math.round(10*s),"%"]}),Object(r.jsx)("img",{src:u,className:"toms-back",height:"70px",width:"70px"})]})]})]})})},b=(i(36),function(){return Object(r.jsx)("h1",{className:"error-message",children:"Oops! This page is not found."})}),O=function(e){var t=[];if(0===e.movies.length)return Object(r.jsx)("h1",{className:"loading-message",children:"Loading..."});if(e.filteredMovies.length>0&&e.moviesSearched)t=e.filteredMovies;else{if(0===e.filteredMovies.length&&e.moviesSearched)return Object(r.jsx)(b,{});t=e.movies}var i=t.map((function(e){return Object(r.jsx)(v,{id:e.id,image:e.poster_path,title:e.title,average_rating:e.average_rating},e.id)}));return Object(r.jsx)("section",{className:"movies-container",children:i})},x=i(18),f=(i(37),i(21)),p=i.n(f),g=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(e){var r;return Object(c.a)(this,i),(r=t.call(this,e)).state={id:r.props.id,currentMovie:{},error:""},r}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var e,t=this,i=(e=this.state.id,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e)).then((function(e){return e.json()}))),r=function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e,"/videos")).then((function(e){return e.json()}))}(this.state.id);Promise.all([i,r]).then((function(e){t.setState({currentMovie:Object(x.a)(Object(x.a)({},e[0].movie),e[1])})})).catch((function(e){return t.setState({error:e})}))}},{key:"render",value:function(){if(this.state.currentMovie.error)return Object(r.jsx)(b,{});if(!this.state.currentMovie.title)return Object(r.jsx)("h1",{className:"loading-message",children:"Loading..."});var e=this.state.currentMovie,t=e.id,i=e.backdrop_path,c=e.title,s=e.average_rating,n=e.release_date,a=e.budget,o=e.genres,l=e.overview,j=e.revenue,d=e.runtime,h=e.tagline,m=e.videos;return Object(r.jsxs)("article",{"data-testid":t,className:"movie-page",children:[Object(r.jsx)("h1",{children:c}),h&&Object(r.jsx)("h2",{children:h}),Object(r.jsx)("img",{className:"movie-backdrop",src:i,alt:c+" movie poster"}),Object(r.jsx)("p",{children:l}),Object(r.jsxs)("ul",{className:"movie-specs",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Rating:"})," ",Math.round(10*s),"%"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Genres:"})," ",o.join(", ")]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Release Date:"})," ",p.a.transform(n,"YYYY-MM-DD","MMM DD, YYYY")]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Runtime:"})," ",d," minutes"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Budget:"})," $",a]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Revenue:"})," $",j]})]}),Object(r.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(m[0].key),"data-testid":m[0].id,allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video",className:"movie-trailer",alt:"".concat(c," trailer")})]})}}]),i}(l.Component),M=i(2),N=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).returnToHome=function(){e.setState({moviesSearched:!1})},e.searchMovies=function(t){var i=e.state.movies.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));e.setState({filteredMovies:i,moviesSearched:!0})},e.state={filteredMovies:[],movies:[],error:"",moviesSearched:!1},e}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.movies})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("main",{children:[Object(r.jsx)("nav",{children:Object(r.jsx)(d,{returnToHome:this.returnToHome})}),Object(r.jsxs)(M.c,{children:[Object(r.jsx)(M.a,{exact:!0,path:"/rancid-tomatillos",render:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{searchMovies:e.searchMovies}),Object(r.jsx)(O,{movies:e.state.movies,filteredMovies:e.state.filteredMovies,moviesSearched:e.state.moviesSearched})]})}}),Object(r.jsx)(M.a,{exact:!0,path:"/rancid-tomatillos/movie-review/:id",render:function(e){var t=e.match;return Object(r.jsx)(g,{id:t.params.id})}}),Object(r.jsx)(M.a,{render:function(){return Object(r.jsx)(b,{})}})]})]})}}]),i}(l.Component),k=i(22),S=i.n(k),T=Object(r.jsx)(j.a,{children:Object(r.jsx)(N,{})});S.a.render(T,document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c7dc94bc.chunk.js.map