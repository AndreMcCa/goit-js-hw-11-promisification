(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("L1EO"),e("JBxO"),e("FdtR");var a=function(n){return new Promise((function(t){setTimeout((function(){t(n)}),n)}))},o=function(n){return console.log("Task_1:","Resolved after "+n+"ms")};a(2e3).then(o),a(1e3).then(o),a(1500).then(o);e("lmye"),e("D/wG"),e("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table("Task_2:",n)};c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){var t,e,a=n.id,o=(n.amount,t=200,e=500,Math.floor(Math.random()*(e-t+1)+t)),i=Math.random()>.3;return new Promise((function(n,t){setTimeout((function(){i&&n({id:a,time:o}),t(a)}),o)}))},s=function(n){var t=n.id,e=n.time;console.log("Task_3:","Transaction "+t+" processed in "+e+"ms")},m=function(n){console.warn("Task_3:","Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7e5e90357d8db2c5f21b.js.map