(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),r=n(11),s=n.n(r),i=(n(9),n(10),n(12)),c=n(2),l=n(3),u=n(5),d=n(4),h=n(0),j=function(t){var e=t.todos,n=t.onDeleteTodos;return Object(h.jsx)("ul",{className:"todo__list",children:e.map((function(t){var e=t.id,o=t.text;return Object(h.jsxs)("li",{className:"todo__item",children:[Object(h.jsxs)("p",{className:"todo__text",children:[" ",o," "]}),Object(h.jsx)("button",{type:"button",className:"todo__btn",onClick:function(){return n(e)},children:"delete"})]},e)}))})},b=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 ",Object(h.jsx)("input",{type:"text",onChange:n,value:e})]})},f=n(7),v=n.n(f),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={message:""},t.inputId=v.a.generate(),t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.reset()},t.handleChange=function(e){t.setState({message:e.target.value})},t.reset=function(){t.setState({message:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.message;return Object(h.jsxs)("form",{className:"todo-editor__form",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{htmlFor:this.inputId,children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",Object(h.jsx)("input",{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",id:this.inputId,type:"text",value:t,onChange:this.handleChange,required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(o.Component),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toLocaleTimeString()},t.intervalId=null,t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalId=setInterval((function(){return t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:this.state.time})}}]),n}(o.Component),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],filter:""},t.addTodo=function(e){var n={id:v.a.generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[].concat(Object(i.a)(e),[n])}}))},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleTodos=function(){var e=t.state,n=e.filter,o=e.todos,a=n.toLowerCase();return o.filter((function(t){return t.text.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t){this.state.todos!==t.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleTodos();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(p,{}),Object(h.jsx)(m,{onSubmit:this.addTodo}),Object(h.jsx)(b,{value:t,onChange:this.changeFilter}),Object(h.jsx)(j,{todos:e,onDeleteTodos:this.deleteTodo})]})}}]),n}(o.Component);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.ff27c053.chunk.js.map