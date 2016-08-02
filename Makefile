ROOT = $(CURDIR)
BROWSER_SYNC = $(ROOT)/env/node_modules/browser-sync/bin/browser-sync.js

start: deps
	$(BROWSER_SYNC) start --server --startPath /$(app) --files $(ROOT)/$(app)/*

deps:
	npm --prefix ./env install && bower install
