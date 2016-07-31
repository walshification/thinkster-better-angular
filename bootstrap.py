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

# Create the necessary directory and files
os.mkdir(app_path)
with open('{}/package.json'.format(app_path), 'w') as f:
    boilerplate_npm = '''{{
  "name": "{}",
  "version": "1.0.0",
  "description": "A practice app for me to learn about Angular",
  "main": "app.js",
  "dependencies": {{
    "bower": "^1.7.9",
    "browser-sync": "^2.13.0"
  }},
  "devDependencies": {{}},
  "scripts": {{
    "test": ""
  }},
  "repository": {{
    "type": "git",
    "url": "git+https://github.com/walshification/thinkster-better-angular.git"
  }},
  "author": "Christopher Walsh <walshification@gmail.com>",
  "license": "MIT",
  "bugs": {{
    "url": "https://github.com/walshification/thinkster-better-angular/issues"
  }},
  "homepage": "https://github.com/walshification/thinkster-better-angular#readme"
}}'''.format(app_name)
    f.write(boilerplate_npm)

with open('{}/bower.json'.format(app_path), 'w') as f:
    boilerplate_bower = '''{{
  "name": "{}",
  "description": "A practice app for me to learn about Angular",
  "main": "app.js",
  "authors": [
    "Christopher Walsh <walshification@gmail.com>"
  ],
  "license": "MIT",
  "homepage": "https://github.com/walshification/thinkster-better-angular",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {{
    "angular": "^1.5.8",
    "angular-route": "^1.5.8"
  }}
}}'''.format(app_name)
    f.write(boilerplate_bower)

with open('{}/index.html'.format(app_path), 'w') as f:
    boilerplate_html = '''<!DOCTYPE html>
<html ng-app="app">
  <head>
    <title>{}</title>
  </head>
  <body>
    <div ng-view></div>

    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-route/angular-route.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>'''.format(app_name)
    f.write(boilerplate_html)

with open('{}/app.js'.format(app_path), 'w') as f:
    boilerplate_angular = '''var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/',
    {
      templateUrl: "test.html",
      controller: "TestController",
      controllerAs: "test",
    }
  );
});

app.controller("TestController", function(){
  var self = this;

  this.message = "Hello, world!";
});'''
    f.write(boilerplate_angular)

with open('{}/test.html'.format(app_name), 'w') as f:
    boilerplate_ng_view = '<h1>{{test.message}}</h1>'
    f.write(boilerplate_ng_view)

with open('{}/Makefile'.format(app_name), 'w') as f:
    boilerplate_make = '''ROOT = $(CURDIR)
BROWSER_SYNC = $(ROOT)/node_modules/browser-sync/bin/browser-sync.js

start: deps
	$(BROWSER_SYNC) start --server --files "$(ROOT)/*"

deps:
	npm install && bower install'''.format(app_name)
    f.write(boilerplate_make)

os.chdir("{}/{}".format(HERE, app_name))
subprocess.call('make start', shell=True)
