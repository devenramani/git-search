(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(44),o=t.n(r),s=(t(95),t(71)),l=t(72),i=t(85),m=t(73),u=t(86),h=t(30),d=t(74),p=t.n(d),g=(t(96),t(198)),E=t(82),f=t.n(E),b=t(84),v=t.n(b),w=t(19),y=t.n(w),S=t(202),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e)))._handleSearch=function(e){var a=Object(h.a)(Object(h.a)(t));fetch("https://api.github.com/search/repositories?q="+e).then(function(e){return e.json()}).then(function(t){console.log(t),a.setState({searchResults:t.items,searchQuery:e})})},t.state={searchQuery:"",searchResults:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),c.a.createElement(g.a,{placeholder:"Search",onSearch:this._handleSearch}),this.state.searchResults.length>0&&this.state.searchResults.map(function(e,a){return c.a.createElement("div",{key:a,className:"ParentCard"},c.a.createElement(f.a,{className:1&a?"card_odd":"card_even"},c.a.createElement(v.a,null,c.a.createElement(y.a,{className:"classes",color:"textSecondary",gutterBottom:!0},a+1),c.a.createElement(y.a,{variant:"h5",component:"h2"},e.name),c.a.createElement(y.a,{component:"p"},e.description),c.a.createElement(y.a,{className:"pos",color:"textSecondary"},"Owner : ",c.a.createElement("b",null,e.owner.login)),c.a.createElement(y.a,{className:"pos",color:"textSecondary"},"Language : ",c.a.createElement("b",null,e.language)),c.a.createElement(y.a,{className:"pos",color:"textSecondary"},"Score : ",c.a.createElement("b",null,e.score)),c.a.createElement(S.a,{target:"_blank",href:e.svn_url},"link"))))})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},90:function(e,a,t){e.exports=t(173)},95:function(e,a,t){},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.47aa7080.chunk.js.map