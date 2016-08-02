#!/usr/bin/env python
import argparse
import os
import subprocess


HERE = os.path.abspath(os.path.dirname(__file__))


parser = argparse.ArgumentParser()
parser.add_argument("app", help="The name of the app being bootstrapped.")
args = parser.parse_args()

app_name = args.app
app_path = "{}/{}".format(HERE, app_name)
env_path = "{}/env".format(HERE)

# Create the necessary directory and files
os.mkdir(app_path)

with open('{}/index.html'.format(app_path), 'w') as f:
    boilerplate_html = '''<!DOCTYPE html>
<html ng-app="app">
  <head>
    <title>{}</title>
  </head>
  <body>
    <div ng-view></div>

    <script src="../env/bower_components/angular/angular.min.js"></script>
    <script src="../env/bower_components/angular-route/angular-route.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>'''.format(app_name)
    f.write(boilerplate_html)

with open('{}/app.js'.format(app_path), 'w') as f:
    boilerplate_angular = '''var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: "main.html",
      controller: "MainController",
      controllerAs: "main",
    }
  );
});

app.controller("MainController", function() {
  var self = this;

  self.message = "Hello, world!";
});'''
    f.write(boilerplate_angular)

with open('{}/main.html'.format(app_name), 'w') as f:
    boilerplate_ng_view = '<h1>{{main.message}}</h1>'
    f.write(boilerplate_ng_view)

subprocess.call('make start app={}'.format(app_name), shell=True)
