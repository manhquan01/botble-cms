!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=147)}({147:function(e,t,n){e.exports=n(148)},148:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,r;return t=e,r=[{key:"initCharts",value:function(){var e=$("div[data-stats]").data("stats"),t=$("div[data-country-stats]").data("country-stats"),n=$("div[data-lang-pageviews]").data("lang-pageviews"),a=$("div[data-lang-visits]").data("lang-visits"),r=[];$.each(e,function(e,t){r.push({axis:t.axis,visitors:t.visitors,pageViews:t.pageViews})}),new Morris.Area({element:"stats-chart",resize:!0,data:r,xkey:"axis",ykeys:["visitors","pageViews"],labels:[a,n],lineColors:["#DD4D37","#3c8dbc"],hideHover:"auto",parseTime:!1});var i={};$.each(t,function(e,t){i[t[0]]=t[1]}),$(document).find("#world-map").vectorMap({map:"world_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#e4e4e4","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1}},series:{regions:[{values:i,scale:["#C64333","#dd4b39"],normalizeFunction:"polynomial"}]},onRegionLabelShow:function(e,t,n){void 0!==i[n]&&t.html(t.html()+": "+i[n]+" "+a)}})}}],(a=null)&&n(t.prototype,a),r&&n(t,r),e}();$(document).ready(function(){BDashboard.loadWidget($("#widget_analytics_general").find(".widget-content"),route("analytics.general"),null,function(){a.initCharts()}),$(document).on("click","#widget_analytics_general .portlet > .portlet-title .tools > a.reload",function(e){e.preventDefault(),BDashboard.loadWidget($("#widget_analytics_general").find(".widget-content"),route("analytics.general"),null,function(){a.initCharts()})}),BDashboard.loadWidget($("#widget_analytics_page").find(".widget-content"),route("analytics.page")),BDashboard.loadWidget($("#widget_analytics_browser").find(".widget-content"),route("analytics.browser")),BDashboard.loadWidget($("#widget_analytics_referrer").find(".widget-content"),route("analytics.referrer"))})}});