(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{129:function(e,t,a){},147:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),c=a(16),s=a.n(c),l=(a(129),a(130),a(116)),d=a(10),o=a(47),u=a(48),j=a(55),b=a.n(j),h=a(209),p=a(212),O=a(213),x=a(214),f=a(121),m=a(210),g=a(211),y=a(208),_=(a(147),!0),v=h.a.Option,S=[],C=[],z=null,q=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)([{id:"",item_name:"",rate:"",quantity:"",discounted_rate:"",subtotal:"",item_unit:""}]),s=Object(u.a)(c,2),l=s[0],d=s[1],j=Object(i.useState)(0),q=Object(u.a)(j,2),w=q[0],F=q[1],N=Object(i.useState)(""),P=Object(u.a)(N,2),A=P[0],J=P[1],T=Object(i.useState)(""),k=Object(u.a)(T,2),E=k[0],B=k[1],R=Object(i.useState)("CASH"),D=Object(u.a)(R,2),H=D[0],I=D[1],L=Object(i.useState)(0),$=Object(u.a)(L,2),Q=$[0],U=$[1];Object(i.useEffect)((function(){b.a.get("http://0.0.0.0:8000/api/items/",{headers:{"Content-Type":"application/json"}}).then((function(e){_=!1,r(e.data.results)})).catch((function(e){alert(e)}))}),[]);var M=function(){d([].concat(Object(o.a)(l),[{id:"",item_name:"",rate:"",quantity:"",discounted_rate:"",subtotal:"",item_unit:""}]))},G=function(e,t){if(""===e.target.value||/^[\d.]+$/.test(e.target.value)){var a=e.target,n=a.name,i=a.value,r=Object(o.a)(l);"."===e.target.value&&""===r[t][n]?r[t][n]="0.":r[t][n]=i,""!==r[t].quantity&&""!==r[t].rate&&""===r[t].discounted_rate&&(r[t].subtotal=(r[t].quantity*r[t].rate).toFixed(2)),""!==r[t].quantity&&""!==r[t].rate&&""!==r[t].discounted_rate&&(r[t].subtotal=(r[t].quantity*r[t].discounted_rate).toFixed(2)),""===r[t].quantity&&""===r[t].discounted_rate&&(r[t].subtotal=""),d(r),F(parseFloat(r.reduce((function(e,t){return e+parseFloat(t.subtotal)}),0).toFixed(2)))}};return Object(n.jsxs)("div",{className:"sales-div",children:[Object(n.jsx)("center",{}),Object(n.jsxs)(O.a,{gutter:12,children:[Object(n.jsx)(x.a,{span:6,children:Object(n.jsx)(f.a,{size:"large",onClick:function(){d([{id:"",item_name:"",rate:"",quantity:"",discounted_rate:"",subtotal:"",item_unit:""}]),F(0),B(""),J(""),U(0),I("CASH")},style:{width:"100%",height:"50px"},danger:!0,children:"New Receipt / Clear Fields"})}),Object(n.jsx)(x.a,{span:12}),Object(n.jsx)(x.a,{span:6,children:Object(n.jsx)(f.a,{type:"primary",size:"large",onClick:function(){for(var e=0,t=/^\d+(\.\d{0,2})?$/;e<l.length;){if(""===l[e].item_name)return alert("Error! Empty row not allowed!");if(""===l[e].quantity)return alert("Error! Quantity not specified!");if(!t.test(l[e].quantity))return alert("Error! Quantity is invalid!");if(!t.test(l[e].discounted_rate)&&""!==l[e].discounted_rate)return alert("Error! Discounted Rate is invalid!");e++}if(0===Q){var a={biller:1,customer_name:A,customer_phone:E,total:w,mode_of_payment:H},n=JSON.stringify(a);try{b.a.post("http://0.0.0.0:8000/api/sales/addorder/",n,{headers:{"Content-Type":"application/json"}}).then((function(e){U(e.data.id);for(var t=[],a={quantity:"",item_rate:"",discounted_rate:"",order:"",item:""},n=0;n<l.length;)a=""===l[n].discounted_rate?{quantity:l[n].quantity,item_rate:l[n].rate,discounted_rate:0,order:e.data.id,item:l[n].id}:{quantity:l[n].quantity,item_rate:l[n].rate,discounted_rate:l[n].discounted_rate,order:e.data.id,item:l[n].id},t.push(a),n++;var i=JSON.stringify(t);try{b.a.post("http://0.0.0.0:8000/api/sales/addorderitems/",i,{headers:{"Content-Type":"application/json"}}).then((function(t){p.b.success("Order Created Successfully!");for(var a=0,n=Object(o.a)(l);a<n.length;)S.push(n[a]),a++;z=JSON.stringify(S),window.open("http://0.0.0.0:8000/receipt/"+e.data.id+"/")}))}catch(r){alert(r)}}))}catch(r){alert(r)}}else{e=0,C=[];for(var i=Object(o.a)(l);e<i.length;)C.push(i[e]),e++;if(JSON.stringify(C)===z)window.open("http://0.0.0.0:8000/receipt/"+Q+"/");else{a={biller:1,customer_name:A,customer_phone:E,total:w,mode_of_payment:H},n=JSON.stringify(a);try{b.a.put("http://0.0.0.0:8000/api/sales/updateorder/"+Q+"/",n,{headers:{"Content-Type":"application/json"}})}catch(r){alert(r)}try{b.a.get("http://0.0.0.0:8000/api/sales/deleteorderitems/"+Q+"/",{headers:{"Content-Type":"application/json"}}).then((function(e){for(var t=[],a={quantity:"",item_rate:"",discounted_rate:"",order:"",item:""},n=0;n<l.length;)a=""===l[n].discounted_rate?{quantity:l[n].quantity,item_rate:l[n].rate,discounted_rate:0,order:Q,item:l[n].id}:{quantity:l[n].quantity,item_rate:l[n].rate,discounted_rate:l[n].discounted_rate,order:Q,item:l[n].id},t.push(a),n++;var i=JSON.stringify(t);console.log(i);try{b.a.post("http://0.0.0.0:8000/api/sales/addorderitems/",i,{headers:{"Content-Type":"application/json"}}).then((function(e){p.b.success("Order Updated Successfully!");for(var t=0,a=Object(o.a)(l);t<a.length;)S.push(a[t]),t++;z=JSON.stringify(S),window.open("http://0.0.0.0:8000/receipt/"+Q+"/")}))}catch(r){alert(r)}}))}catch(r){alert(r)}}}},style:{width:"100%",height:"50px"},disabled:""===l[0].id,children:"Save and Print"})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(O.a,{gutter:24,children:[Object(n.jsx)(x.a,{span:8,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Customer Name"})}),Object(n.jsx)(x.a,{span:6,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Phone Number"})}),Object(n.jsx)(x.a,{span:5,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Payment Mode"})}),Object(n.jsx)(x.a,{span:5,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Bill Number"})})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(O.a,{gutter:24,children:[Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(m.a,{placeholder:"Customer Name",size:"large",onChange:function(e){return function(e){(""===e.target.value||/^[a-zA-Z ]*$/.test(e.target.value))&&J(e.target.value)}(e)},value:A,maxLength:"100"})}),Object(n.jsx)(x.a,{span:6,children:Object(n.jsx)(m.a,{placeholder:"Phone Number",size:"large",onChange:function(e){return function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&B(e.target.value)}(e)},value:E,maxLength:"10"})}),Object(n.jsx)(x.a,{span:5,children:Object(n.jsxs)(g.a.Group,{defaultValue:"CASH",buttonStyle:"solid",onChange:function(e){return function(e){I(e.target.value)}(e)},value:H,size:"large",children:[Object(n.jsx)(g.a.Button,{value:"CASH",children:"Cash"}),Object(n.jsx)(g.a.Button,{value:"CARD",children:"Card"}),Object(n.jsx)(g.a.Button,{value:"UPI",children:"UPI"})]})}),Object(n.jsx)(x.a,{span:5,children:Object(n.jsx)(m.a,{size:"large",value:Q,disabled:!0})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(O.a,{gutter:24,children:[Object(n.jsx)(x.a,{span:2}),Object(n.jsx)(x.a,{span:6,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Particulars"})}),Object(n.jsx)(x.a,{span:4,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Quantity"})}),Object(n.jsx)(x.a,{span:4,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Rate"})}),Object(n.jsx)(x.a,{span:4,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Discounted Rate"})}),Object(n.jsx)(x.a,{span:4,style:{fontSize:"16px"},children:Object(n.jsx)("b",{children:"Subtotal"})})]}),Object(n.jsx)("br",{}),_&&Object(n.jsx)("center",{children:Object(n.jsx)(y.a,{})}),!_&&l.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(O.a,{gutter:24,children:[Object(n.jsx)(x.a,{span:2,children:1!==l.length&&Object(n.jsx)(f.a,{size:"large",onClick:function(){return function(e){var t=Object(o.a)(l);t.splice(e,1),d(t),F(parseFloat(t.reduce((function(e,t){return e+parseFloat(t.subtotal)}),0).toFixed(2)))}(t)},danger:!0,children:"Remove"})}),Object(n.jsx)(x.a,{span:6,children:Object(n.jsx)(h.a,{showSearch:!0,placeholder:"Select an item",optionFilterProp:"children",size:"large",style:{width:300},onSelect:function(e){return function(e,t){var n=Object(o.a)(l);n[t].id=a[e-1].id,n[t].rate=a[e-1].rate,n[t].item_name=a[e-1].item_name,n[t].item_unit=a[e-1].unit,n[t].discounted_rate="",n[t].subtotal="",n[t].quantity="",d(n)}(e,t)},value:e.item_name,name:"id",children:Object(n.jsx)(n.Fragment,{children:a.map((function(e){return Object(n.jsxs)(v,{children:[e.item_name," "]},e.id)}))})})}),Object(n.jsx)(x.a,{span:4,children:Object(n.jsx)(m.a,{name:"quantity",size:"large",suffix:e.item_unit,value:e.quantity,onChange:function(e){return G(e,t)},disabled:!e.item_name})}),Object(n.jsx)(x.a,{span:4,children:Object(n.jsx)(m.a,{name:"rate",size:"large",prefix:""===e.item_unit?"":"\u20b9",suffix:""===e.item_unit?"":" / "+e.item_unit,value:e.rate,onChange:function(e){return G(e,t)},disabled:!0})}),Object(n.jsx)(x.a,{span:4,children:Object(n.jsx)(m.a,{name:"discounted_rate",placeholder:"Optional",size:"large",prefix:""===e.item_unit?"":"\u20b9",suffix:""===e.item_unit?"":" / "+e.item_unit,value:e.discounted_rate,onChange:function(e){return G(e,t)},disabled:!e.item_name})}),Object(n.jsx)(x.a,{span:4,children:Object(n.jsx)(m.a,{name:"subtotal",size:"large",prefix:""===e.item_unit?"":"\u20b9",value:e.subtotal,onChange:function(e){return G(e,t)},disabled:!0})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),l.length-1===t&&Object(n.jsx)(f.a,{type:"primary",size:"large",onClick:M,style:{width:"100%",background:"#12cc18",borderColor:"#12cc18",height:"50px"},children:"Add"})]})})),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(O.a,{gutter:24,children:[Object(n.jsx)(x.a,{span:2}),Object(n.jsx)(x.a,{span:6}),Object(n.jsx)(x.a,{span:4}),Object(n.jsx)(x.a,{span:4}),Object(n.jsx)(x.a,{span:4,style:{textAlign:"right",fontSize:"30px"},children:Object(n.jsx)("b",{children:"Total"})}),Object(n.jsx)(x.a,{span:4,style:{textAlign:"right",fontSize:"30px"},children:Object(n.jsxs)("b",{children:[" \u20b9 ",w]})})]}),Object(n.jsx)("br",{})]})};var w=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(d.c,{children:Object(n.jsx)(d.a,{exact:!0,path:"/",component:q})})})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,215)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),F()}},[[205,1,2]]]);
//# sourceMappingURL=main.d3c54197.chunk.js.map