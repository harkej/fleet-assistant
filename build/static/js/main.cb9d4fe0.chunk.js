(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{14:function(e,t,n){e.exports=n(31)},19:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),l=(n(19),n(1)),s=n(8),c=n.n(s),u=n(2),p=n.n(u),m=["Tata","Eicher","Ashok Leyland"],d=function(e){e.previousStep;var t=e.steps,n=Object(a.useState)(""),i=Object(l.a)(n,2),o=i[0],s=i[1],c=Object(a.useState)(""),u=Object(l.a)(c,2),d=u[0],g=u[1];return Object(a.useEffect)((function(){!function(){var e,n,a,r,i,o;p.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.multiOptions.value,n=m.includes(e)?"".concat("http://40.81.94.101:5000","/vehiclebrandcount/").concat(e):"".concat("http://40.81.94.101:5000","/vehiclecount"),a={"Content-Type":"application/json"},l.next=5,p.a.awrap(fetch(n,a));case 5:return r=l.sent,l.next=8,p.a.awrap(r.json());case 8:i=l.sent,o=i.result,s(o),g(e);case 12:case"end":return l.stop()}}))}()}),[]),r.a.createElement("div",null,"Total vehicle count"," ",m.includes(d)&&"for ".concat(d)," ","is ",o)};n(27);var g=["January","February","March","April","May","June","July","August","September","October","November","December"];var v=function(e){var t=e.previousStep,n=Object(a.useState)({}),i=Object(l.a)(n,2),o=i[0],s=i[1],c=t.value||"month";Object(a.useEffect)((function(){(function(e){var t="".concat("http://40.81.94.101:5000","/business_summary");return fetch("".concat(t,"/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))})("month"===c?"this month":"this year").then((function(e){u(e)}))}),[c]);var u=function(e){var t=e.result;s(t||{})};return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h3",null,"Summary for"," ","month"===c?g[o.Month-1]:o.Year),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"1. Trip Count"),r.a.createElement("td",null,o.Trip_Count)),r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"2. Distance Travelled (km)"),r.a.createElement("td",null,o.Km_Travelled)),r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"3. Fuel Consumed (ltr)"),r.a.createElement("td",null,o.Fuel_Trip_Consumed_Litres)),r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"4. Freight Transported (ton)"),r.a.createElement("td",null,o.Total_Ton_Transported)))))},h=(n(28),n(11)),b=(n(29),function(e){var t=e.title,n=e.options,a=e.isOpen,i=e.openSection,o=e.handleNextStep;return r.a.createElement("div",{className:"action-dropdown-container"},r.a.createElement("div",{className:"action-dropdown-header",onClick:function(){return i(t)}},r.a.createElement("h3",{className:"action-dropdown-title"},t),r.a.createElement("span",{className:"action-dropdown-".concat(a?"open":"close")},">")),a?r.a.createElement("div",{className:"options-container"},n.map((function(e){return r.a.createElement("p",{key:e.id,className:"action-dropdown-option",onClick:function(){return o(e.trigger,e.value)}},e.title)}))):null)}),f=(n(30),[{id:1,title:"Business Summary",options:[{id:11,title:"View summary for this year",trigger:"businessSummaryDetails",value:"year"},{id:12,title:"View summary for this month",trigger:"businessSummaryDetails",value:"month"}]},{id:2,title:"Business Categories",options:[{id:21,title:"Trip Details",trigger:"tripDetailsOptionsPrompt"},{id:22,title:"Indirect Expense",trigger:"indirectExpenseOptionsPrompt"},{id:23,title:"Direct Expense",trigger:"directExpenseOptionsPrompt"}]},{id:3,title:"Vehicle Count",options:[{id:31,title:"View total count",trigger:"vehicleBrandCount",value:"all"},{id:32,title:"View vehicle count for Tata",trigger:"vehicleBrandCount",value:"Tata"},{id:33,title:"View vehicle count for Eicher",trigger:"vehicleBrandCount",value:"Eicher"},{id:34,title:"View vehicle count for Ashok Leyland",trigger:"vehicleBrandCount",value:"Ashok Leyland"}]}]),E=function(e){var t=e.triggerNextStep,n=Object(a.useState)({}),i=Object(l.a)(n,2),o=i[0],s=i[1],c=function(e,n){t({trigger:e,value:n})};return r.a.createElement("div",{className:"multi-options-container"},r.a.createElement("h3",{className:"multi-options-title"},"Select an option below"),f.map((function(e){return r.a.createElement(b,{key:e.id,title:e.title,options:e.options,isOpen:o[e.title],openSection:function(e){return s(Object(h.a)({},e,!o[e]))},handleNextStep:c})})))},y=function(e){var t=e.previousStep,n=Object(a.useState)({}),i=Object(l.a)(n,2),o=i[0],s=i[1],c=Object(a.useState)(""),u=Object(l.a)(c,2),m=(u[0],u[1]);return Object(a.useEffect)((function(){!function(){var e,n,a,r,i,o;p.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.value,n="".concat("http://40.81.94.101:5000","/trip/").concat(e),a={"Content-Type":"application/json"},l.next=5,p.a.awrap(fetch(n,a));case 5:return r=l.sent,l.next=8,p.a.awrap(r.json());case 8:i=l.sent,(o=i.result)&&(s(o[0]),m(e));case 11:case"end":return l.stop()}}))}()}),[]),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h3",null,"Summary for"," ","".concat(o.Trip_Month," ").concat(o.Trip_Year)),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"1. Previous month revenue"),r.a.createElement("td",null,o.prev_month_revenue)),r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"2. Gross profit percentage"),r.a.createElement("td",null,Math.round(o.Gross_Profit_Percentage))),r.a.createElement("tr",{className:"summary-table-row"},r.a.createElement("td",null,"3. Gross margin growth"),r.a.createElement("td",null,o["Gross_Margin_Growth%"]))," ")))},w=function(e){var t=e.previousStep,n=Object(a.useState)(""),i=Object(l.a)(n,2),o=i[0],s=i[1],c=Object(a.useState)(""),u=Object(l.a)(c,2),m=u[0],d=u[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),h=v[0],b=v[1];return Object(a.useEffect)((function(){!function(){var e,n,a,r,i,o;p.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.value,n="".concat("http://40.81.94.101:5000","/direct_expense/").concat(e),a={"Content-Type":"application/json"},l.next=5,p.a.awrap(fetch(n,a));case 5:return r=l.sent,l.next=8,p.a.awrap(r.json());case 8:i=l.sent,(o=i.result)&&(s(o[0].Trip_Month),d(o[0].Trip_Year),b(o[0].Total_Direct_Expense));case 11:case"end":return l.stop()}}))}()}),[t.value]),r.a.createElement("div",null,r.a.createElement("p",null,"Direct Expense Report"),r.a.createElement("p",null,o?"".concat(o,", "):"",m," - ",h))},O=function(e){var t=e.previousStep;return Object(a.useEffect)((function(){!function(){var e,n,a,r,i;p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.value,n="".concat("http://40.81.94.101:5000","/indirect_expense/").concat(e),a={"Content-Type":"application/json"},o.next=5,p.a.awrap(fetch(n,a));case 5:return r=o.sent,o.next=8,p.a.awrap(r.json());case 8:i=o.sent,console.log(i);case 10:case"end":return o.stop()}}))}()}),[t.value]),r.a.createElement("div",null,"Indirect expense report")};var x=function(){var e=Object(a.useState)(localStorage.getItem("userName")?localStorage.getItem("userName"):""),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),u=s[0],p=(s[1],[{id:"0",message:n?"Welcome back, ".concat(n,"!"):"Welcome, please enter your name to continue.",trigger:n?"multiOptions":"promptName"},{id:"multiOptions",component:r.a.createElement(E,null),replace:!0},{id:"1",message:"What is your name?",trigger:"promptName"},{id:"promptName",user:!0,trigger:function(e){return function(e){localStorage.setItem("userName",e),i(e)}(e.value),"basicSummary"}},{id:"basicSummary",message:"Here is a summary of your business",trigger:"businessSummaryDetails"},{id:"businessSummaryDetails",component:r.a.createElement(v,null),asMessage:!0,trigger:"multiOptions"},{id:"vehicleCount",component:r.a.createElement(d,null),asMessage:!0,trigger:"vehicleCountOptionsPrompt"},{id:"vehicleCountOptionsPrompt",message:"Do you want to view vehicle count by brand?",trigger:"showVehicleBrandOptions"},{id:"showVehicleBrandOptions",options:[{value:1,label:"Yes",trigger:"vehicleCountOptions"},{value:2,label:"No",trigger:"multiOptions"}]},{id:"vehicleCountOptions",options:[{value:"Tata",label:"Tata",trigger:"vehicleBrandCount"},{value:"Eicher",label:"Eicher",trigger:"vehicleBrandCount"},{value:"Ashok Leyland",label:"Ashok Leyland",trigger:"vehicleBrandCount"}],placeholder:"Enter some detail"},{id:"vehicleBrandCount",component:r.a.createElement(d,null),asMessage:!0,trigger:"multiOptions"},{id:"businessSummaryOptions",options:[{value:"month",label:"Month",trigger:"businessSummaryDetails"},{value:"year",label:"Year",trigger:"businessSummaryDetails"}]},{id:"otherOptions",options:[{value:1,label:"Vehicle Count",trigger:"vehicleCount"},{value:2,label:"Business Summary",trigger:"businessSummaryOptions"},{value:3,label:"Revenue Details",trigger:"otherOptions"}]},{id:"tripDetailsOptionsPrompt",message:"Select an option below",trigger:"tripDetailsOptions"},{id:"tripDetailsOptions",options:[{value:"profit_margin_month_comparision",label:"Profit margin month comparison",trigger:"tripDetailsResult"},{value:"profit_margin_breakup",label:"Profit margin breakup",trigger:"tripDetailsResult"},{value:"top_3_vehicles_pm",label:"Top 3 vehicles with profit margin",trigger:"tripDetailsResult"},{value:"bottom_3_vehicles_pm",label:"Bottom 3 vehicles with profit margin",trigger:"tripDetailsResult"},{value:"trip_all_details",label:"All trip details",trigger:"tripDetailsResult"},{value:"go_back",label:"Go back",trigger:"multiOptions"}]},{id:"tripDetailsResult",component:r.a.createElement(y,null),asMessage:!0,trigger:"tripDetailsOptions"},{id:"directExpenseOptionsPrompt",message:"Select an option below",trigger:"directExpenseOptions"},{id:"directExpenseOptions",options:[{value:"this month",label:"Current month",trigger:"directExpenseResult"},{value:"this year",label:"Current year",trigger:"directExpenseResult"},{value:"go_back",label:"Go back",trigger:"multiOptions"}]},{id:"directExpenseResult",component:r.a.createElement(w,null),trigger:"directExpenseOptions"},{id:"indirectExpenseOptionsPrompt",message:"Select an option below",trigger:"indirectExpenseOptions"},{id:"indirectExpenseOptions",options:[{value:"breakup_by_vehicles",label:"Breakup by vehicles",trigger:"indirectExpenseResult"},{value:"breakup_by_expense_category",label:"Breakup by expense category",trigger:"indirectExpenseResult"},{value:"indirect_expense",label:"Indirect expense",trigger:"indirectExpenseResult"},{value:"service_expense_by_vehicles",label:"Service expense by vehicles",trigger:"indirectExpenseResult"},{value:"emi_loan_expense_by_vehicles",label:"EMI loan expense by vehicles",trigger:"indirectExpenseResult"},{value:"go_back",label:"Go back",trigger:"multiOptions"}]},{id:"indirectExpenseResult",component:r.a.createElement(O,null),trigger:"indirectExpenseOptions"}]);return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{recognitionEnable:!0,speechSynthesis:{enable:u,lang:"en"},headerTitle:"Welcome".concat(n?", ".concat(n):""),steps:p,contentStyle:{flexGrow:1},enableMobileAutoFocus:!0,enableSmoothScroll:!0}))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(x,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fleet-assistant",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/fleet-assistant","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.cb9d4fe0.chunk.js.map