(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=(n(15),n(4)),l=n(5),u=n(7),s=n(6),v=n(8),h=n(1),d=(n(17),function(t){return 2===t.length?t:"0".concat(t)}),f=function(t){if(!t)return null;var e=t.split(".");return"00:".concat(d(e[0]),":").concat(d(e[1]),",").concat(e[2])};function m(t){return t.split("\n").map(function(t){return t.split("\t")}).filter(function(t){return!!t[0]}).map(function(t,e,n){return["".concat(f(t[0])," --\x3e ").concat(f(n[e+1]&&n[e+1][0])),t[1]]}).reduce(function(t,e){return t+"\n\n"+e[0]+"\n"+e[1]},"")}var b=function(){},p={display:"inline-block",width:"45%",verticalAlign:"top"},w={width:"80%"},g=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={tsvContent:"",tsvResult:"",error:null},n.tsvConvert=n.tsvConvert.bind(Object(h.a)(Object(h.a)(n))),n}return Object(v.a)(e,t),Object(l.a)(e,[{key:"tsvConvert",value:function(t){try{this.setState({tsvResult:m(t),error:null})}catch(e){this.setState({error:e.toString()})}}},{key:"render",value:function(){var t=this,e=this.state,n=e.error,r=e.tsvResult,o=n?a.a.createElement("div",null,n):a.a.createElement("textarea",{onDoubleClick:function(t){return t.target.select()},style:w,value:r,onChange:b});return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement("div",{style:p},a.a.createElement("h1",null,"1. Please insert .tsv content here"),a.a.createElement("textarea",{style:w,onChange:function(e){return t.tsvConvert(e.target.value)}})),a.a.createElement("div",{style:p},a.a.createElement("h1",null,"2. Grab your converted srt here (double click to select all)"),o))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.5936c744.chunk.js.map