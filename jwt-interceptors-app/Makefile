ROOT = $(CURDIR)
BROWSER_SYNC = $(ROOT)/node_modules/browser-sync/bin/browser-sync.js

start: deps
	$(BROWSER_SYNC) start --server --files "$(ROOT)/*"

deps:
	npm install && bower install