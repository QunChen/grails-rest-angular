//= wrapped
//= require /angular/angular
//= require /myrestapp/core/myrestapp.core
//= require /myrestapp/index/myrestapp.index
//= require /myrestapp/book/myrestapp.book
var app=angular.module("myrestapp", [
    "myrestapp.core",
    "myrestapp.index",
    "myrestapp.book"
]);
