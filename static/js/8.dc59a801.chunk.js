(window["webpackJsonpmonster-rolodex"]=window["webpackJsonpmonster-rolodex"]||[]).push([[8],{318:function(e,t,a){"use strict";a.r(t);var n=a(118),r=a.n(n),s=a(120),c=a(25),o=a(26),l=a(28),i=a(27),u=a(29),m=a(0),h=a.n(m),p=a(8),d=a(315),b=a(313),f=a(304),g=a(316),v=a(314),E=a(303),y=function(e){var t=e.onSearchChange;return h.a.createElement("div",{className:"sticky-top"},h.a.createElement(v.a.Group,null,h.a.createElement(E.a,{type:"text",placeholder:"Search monsters...",onChange:t})))},w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={monsterData:[],searchField:"",alertMessage:!1},a.handleSearchChange=function(e){var t=e.target.value;a.setState({searchField:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({monsterData:a,alertMessage:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsterData,a=e.searchField,n=e.alertMessage,r=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return h.a.createElement(h.a.Fragment,null,h.a.createElement("p",null,t.length," monsters are in the Database."),h.a.createElement(y,{onSearchChange:this.handleSearchChange}),0===r.length&&n&&h.a.createElement(d.a,{variant:"danger"},"Sorry! No such monster founds in a list."),h.a.createElement(b.a,null,r.map((function(e){return h.a.createElement(f.a,{sm:3,key:e.id},h.a.createElement(g.a,{className:"monsterCard"},h.a.createElement(g.a.Img,{variant:"top",src:"https://robohash.org/".concat(e.id,"?set=set2"),alt:"monster_img_".concat(e.id)}),h.a.createElement(g.a.Body,null,h.a.createElement(g.a.Title,null,"".concat(e.title.substr(0,20),"...")),h.a.createElement(g.a.Text,null,"".concat(e.body.substr(0,60),"...")),h.a.createElement(p.b,{to:"/monsters/".concat(e.id),className:"btn btn-primary btn-sm"},"Read More"))))}))))}}]),t}(m.Component);t.default=w}}]);
//# sourceMappingURL=8.dc59a801.chunk.js.map