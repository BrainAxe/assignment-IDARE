(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{24:function(t,e,a){},63:function(t,e,a){},65:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(17),s=a.n(i),r=(a(24),a(4)),l=a(18),o=a.n(l),d=a(19),j=a.n(d),b=(a(63),a(0));var h=function(t){var e=Object(n.useRef)(),a=Object(n.useState)(),c=Object(r.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)(!1),d=Object(r.a)(l,2),h=d[0],u=d[1];return h?Object(b.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(j.a,{type:"ThreeDots",color:"#2BAD60",height:100,width:100})}):Object(b.jsx)("div",{children:Object(b.jsx)("form",{onSubmit:function(a){if(a.preventDefault(),i){u(!0);var n=new FormData;n.append("file",i),o.a.post("/api/v1/upload-csv/",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){u(!1),e.current.value="",t.onSubmitFormData(a)})).catch((function(t){u(!1),console.log(t)}))}else console.log("no file")},className:"form-horizontal",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"CSV File Link "}),Object(b.jsx)("input",{type:"file",name:"csv_file",id:"csv_file",className:"form-control",onChange:function(t){s(t.target.files[0])},ref:e}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(b.jsx)("button",{type:"submit",children:"Upload"})]})})})};a(65);var u=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{id:"download",children:Object(b.jsx)("a",{href:t.fLink,children:"Download CSV File"})}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:t.tHeader.map((function(t){return Object(b.jsx)("th",{children:t},t)}))})}),Object(b.jsx)("tbody",{children:t.tData.slice(0,15).map((function(t){var e=t.map((function(t,e){return Object(b.jsx)("td",{children:t},e)}));return Object(b.jsx)("tr",{children:e})}))})]})]})},x=a(7),m=a.n(x);a(69);var O=function(t){var e=function(t){var e,a,n;for(a=document.getElementsByClassName("tabContent"),e=0;e<a.length;e++)a[e].style.display="none";for(n=document.getElementsByClassName("tabLinks"),e=0;e<n.length;e++)n[e].className=n[e].className.replace(" active","");document.getElementById(t.target.value).style.display="block",t.target.className+=" active"},a="/api/v1/download-pdf/?x_data=".concat(t.x_data,"&y_data=").concat(t.y_data);return Object(b.jsxs)("div",{className:"graphs",children:[Object(b.jsx)("button",{id:"download",children:Object(b.jsx)("a",{href:a,download:!0,children:"Download PDF"})}),Object(b.jsxs)("div",{className:"tab",children:[Object(b.jsx)("button",{className:"tabLinks",value:"Scatter",onClick:e,children:"Scatter Plot"}),Object(b.jsx)("button",{className:"tabLinks",value:"Box",onClick:e,children:"Box Plot"}),Object(b.jsx)("button",{className:"tabLinks",value:"Histogram",onClick:e,children:"Histogram"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{id:"Scatter",className:"tabContent",children:Object(b.jsx)(m.a,{data:[{x:t.x_data,y:t.y_data,type:"scatter",mode:"markers",marker:{color:"red"}}],layout:{width:560,height:420,title:"A Scatter Plot"}})}),Object(b.jsx)("div",{id:"Box",className:"tabContent",children:Object(b.jsx)(m.a,{data:[{y:t.y_data,type:"box"},{y:t.x_data,type:"box"}],layout:{width:560,height:420,title:"A Box Plot"}})}),Object(b.jsx)("div",{id:"Histogram",className:"tabContent",children:Object(b.jsx)(m.a,{data:[{x:t.x_data,type:"histogram"}],layout:{width:560,height:420,title:"A Histogram Plot"}})})]})};var f=function(){var t=Object(n.useState)({}),e=Object(r.a)(t,2),a=e[0],c=e[1],i="/"+a.link;return Object.keys(a).length<1?Object(b.jsx)("div",{children:Object(b.jsx)(h,{onSubmitFormData:function(t){c(t.data)}})}):Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{tHeader:a.header,tData:a.data,fLink:i}),Object(b.jsx)(O,{x_data:a.x_data,y_data:a.y_data})]})};a(70);var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9911bf38.chunk.js.map