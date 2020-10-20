(this["webpackJsonpu9-weather-app"]=this["webpackJsonpu9-weather-app"]||[]).push([[0],{12:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/sweden.01e2bf34.png"},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(20),l=a.n(i),r=(a(27),a(28),a(14)),s=a(1),o=a(5),m=a(6),h=a(10),d=a(8),u=a(7),p=(a(12),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={home_classname:"home_clicked",search_classname:"search_not_clicked"},n.handle_home_click=n.handle_home_click.bind(Object(h.a)(n)),n.handle_search_click=n.handle_search_click.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"handle_home_click",value:function(e){this.setState({home_classname:"home_clicked",search_classname:"search_not_clicked"}),e.preventDefault()}},{key:"handle_search_click",value:function(e){this.setState({search_classname:"search_clicked",home_classname:"home_not_clicked"}),e.preventDefault()}},{key:"render",value:function(){var e=this.state;e.hem_clicked,e.search_clicked;return c.a.createElement("nav",{className:"nav_bar"},c.a.createElement("div",{onClick:this.handle_home_click},c.a.createElement(r.b,{to:"/u09-react-weather-app/"},c.a.createElement("li",{className:this.state.home_classname},"Hem"))),c.a.createElement("div",{onClick:this.handle_search_click},c.a.createElement(r.b,{to:"/u09-react-weather-app/search"},c.a.createElement("li",{className:this.state.search_classname},"S\xf6ka"))))}}]),a}(c.a.Component)),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={five_day_forecast:[],is_loaded:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/forecast?q="+this.props.city+"&appid=16ce40370539cf4b81309fbb19b4fcda&units="+this.props.unit+"&lang=sv").then((function(e){return e.json()})).then((function(t){e.setState({is_loaded:!0,five_day_forecast:t.list})}))}},{key:"render",value:function(){var e=this.state,t=e.is_loaded,a=e.five_day_forecast;return t?c.a.createElement("div",null,a.map((function(e){return c.a.createElement("div",{key:e.dt},e.weather.map((function(t){return c.a.createElement("div",{className:"each_forecast",key:t.id},c.a.createElement("div",{className:"data_time"},c.a.createElement("h3",null,(n=e.dt,new Date(1e3*n).toLocaleTimeString("sv-SE").split(":").slice(0,-1).join(":"))),c.a.createElement("p",null,(a=e.dt,new Date(1e3*a).toLocaleDateString("sv-SE")))),c.a.createElement("div",null,c.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+t.icon+"@2x.png",alt:"weather_icon"}),c.a.createElement("p",null,t.description)),c.a.createElement("div",null,c.a.createElement("h2",null,Math.round(e.main.temp),"\xb0")));var a,n})))}))):c.a.createElement("div",{className:"loading_api"},"Loading...")}}]),a}(c.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(m.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return 1!=this.state.hasError?this.props.children:c.a.createElement("h1",null,"Something went wrong.")}}]),a}(c.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",date:"",weather:[],main:[],wind:[],sys:[],is_loaded:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.props.city+"&appid=16ce40370539cf4b81309fbb19b4fcda&units="+this.props.unit+"&lang=sv").then((function(e){return e.json()})).then((function(t){e.setState({is_loaded:!0,name:t.name,date:t.dt,weather:t.weather,main:t.main,wind:t.wind,sys:t.sys})}))}},{key:"render",value:function(){var e=this.state,t=e.is_loaded,a=e.name,n=e.date,i=e.weather,l=e.main,r=e.wind,s=e.sys;function o(e){return new Date(1e3*e).toLocaleTimeString("sv-SE").split(":").slice(0,-1).join(":")}return t?c.a.createElement("div",null,c.a.createElement("div",{className:"current_weather_div"},i.map((function(e){return c.a.createElement("div",{className:"left_side_div",key:e.id},c.a.createElement("h2",null,a,", ",s.country),c.a.createElement("p",null,new Date(1e3*n).toLocaleDateString("sv-SE")),c.a.createElement("p",null,e.description),c.a.createElement("div",null,c.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+e.icon+"@2x.png",alt:"current_weather_icon"}),c.a.createElement("h1",null,l.temp,"\xb0")))})),c.a.createElement("div",{className:"right_side_info"},c.a.createElement("div",null,c.a.createElement("li",null,"Maximum Temperatur:  ",l.temp_max,"\xb0"),c.a.createElement("li",null,"Minimum Temperatur:  ",l.temp_min,"\xb0"),c.a.createElement("li",null,"K\xe4nns som:  ",l.feels_like,"\xb0")),c.a.createElement("div",null,c.a.createElement("li",null,"Vindhastighet:  ",r.speed," m/s"),c.a.createElement("li",null,"Soluppg\xe5ng:  ",o(s.sunrise)),c.a.createElement("li",null,"Solnedg\xe5ng:  ",o(s.sunset))))),c.a.createElement(v,null,c.a.createElement(_,{city:this.props.city||"stockholm",unit:this.props.unit||"metric"}))):c.a.createElement("div",{className:"loading_api"},"Loading...")}}]),a}(c.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handel_map_click=function(e){a.setState({map_clicked:!0,city:e})},a.state={map_clicked:!1,city:"stockholm"},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.map_clicked,n=e.city;return t?c.a.createElement(E,{city:n,unit:"metric"}):c.a.createElement("div",{className:"home_page"},c.a.createElement("div",{className:"sweden_img",style:{backgroundImage:"url(".concat(a(34),")")}},c.a.createElement("div",{id:"lulea",onClick:this.handel_map_click.bind(this,"lule\xe5")}),c.a.createElement("div",{id:"umea",onClick:this.handel_map_click.bind(this,"ume\xe5")}),c.a.createElement("div",{id:"harnosand",onClick:this.handel_map_click.bind(this,"h\xe4rn\xf6sand")}),c.a.createElement("div",{id:"gavle",onClick:this.handel_map_click.bind(this,"g\xe4vle")}),c.a.createElement("div",{id:"uppsala",onClick:this.handel_map_click.bind(this,"uppsala")}),c.a.createElement("div",{id:"stockholm",onClick:this.handel_map_click.bind(this,"stockholm")}),c.a.createElement("div",{id:"nykoping",onClick:this.handel_map_click.bind(this,"nyk\xf6ping")}),c.a.createElement("div",{id:"goteborg",onClick:this.handel_map_click.bind(this,"g\xf6teborg")}),c.a.createElement("div",{id:"halmstad",onClick:this.handel_map_click.bind(this,"halmstad")}),c.a.createElement("div",{id:"malmo",onClick:this.handel_map_click.bind(this,"malm\xf6")})))}}]),n}(c.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={value:"",is_loaded:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({is_loaded:!0}),e.preventDefault()}},{key:"render",value:function(){return!0===this.state.is_loaded?c.a.createElement(v,null,c.a.createElement(E,{city:this.state.value||"stockholm",unit:"metric"})):c.a.createElement("form",{className:"search_form",onSubmit:this.handleSubmit},c.a.createElement("input",{className:"search_input",type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"t.ex. Barcelona"}),c.a.createElement("input",{className:"search_submit",type:"submit",value:"S\xf6ka"}))}}]),a}(c.a.Component);var b=function(){return c.a.createElement(r.a,null,c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/u09-react-weather-app/",exact:!0,component:k}),c.a.createElement(s.a,{path:"/u09-react-weather-app/search",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c4ff03d1.chunk.js.map