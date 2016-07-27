"use strict";angular.module("yeomanAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","chart.js"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/chart",{templateUrl:"views/chart.html",controller:"ChartCtrl",controllerAs:"chart"}).otherwise({redirectTo:"/"})}]),angular.module("yeomanAngularApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yeomanAngularApp").config(["ChartJsProvider",function(a){a.setOptions({chartColors:["#FF5252","#FF8A80"]}),a.setOptions("line",{showLines:!1})}]).controller("ChartCtrl",["$scope",function(a){}]).directive("fileread",function(){return{template:'<canvas id="bar" class="chart chart-bar" chart-data="data" chart-labels="labels" chart-series="series"></canvas>',link:function(a,b,c){a.labels=["China","Japan","France (European Territory)","United States","Taiwan"],a.series=["Series A"],a.data=[[65,59,80,81,56]],b.on("change",function(c){var d=new FileReader;d.onload=function(c){a.$apply(function(){for(var d=c.target.result,e=XLSX.read(d,{type:"binary"}),d=(XLSX.utils.sheet_to_json(e.Sheets[e.SheetNames[0]],{header:1})[0],XLSX.utils.sheet_to_json(e.Sheets[e.SheetNames[0]])),f=[],g=[],h=[],i=0;i<d.length;i++){var j=d[i];f.push(j.Score),g.push('"'+j.Country+'"'),h.push(j.Applicant)}a.data=[f],a.labels=g,b.val(null)})},d.readAsBinaryString(c.target.files[0])})}}}),angular.module("symmetricalEngineApp").run(["$templateCache",function(a){a.put("views/chart.html",'<div ng-controller="ChartCtrl as vm"> <input type="file" accept=".xls,.xlsx,.ods" fileread="" multiple> <p fileread></p> </div>'),a.put("views/main.html",'<div class="jumbotron"> <p class="lead"> <img src="http://www.telcron.net/wp-content/themes/theme1490/images/logo.png" alt="Telcron"><br> A smarter way to product compliance. </p> </div>')}]);