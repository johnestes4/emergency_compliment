"use strict";

(function(){
  angular
  .module("compliments", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);
// only one state is really needed for a one-page app
  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "",
      templateUrl: "js/compliments/index.html",
      controller: "complimentsController",
      controllerAs: "complimentsViewModel"
    });
  }
}());
