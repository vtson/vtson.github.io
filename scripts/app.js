"use strict";
angular.module('myApp',[])
	.controller('MenuController',['$scope',function($scope){
		$scope.imgs=[
		{
			img:'image/html5.png',
			url:'#'
			
		},
		{
			img:'image/css.jpg',
			url:'#'
		},
		{
			img:'image/javascript.png',
			url:'#'
		},
		{
			img:'image/bootstrap.png',
			url:'mybootstrap/bootstrap.html',
			des:'Bootstrap is the world’s most popular framework for building responsive, mobile-first sites and applications. Inside you’ll find high quality HTML, CSS, and JavaScript to make starting any project easier than ever.'
		},
		{
			img:'image/jquery.jpg',
			url:'#'
		}
	];
	}]);