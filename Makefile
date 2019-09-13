all: test

lint:
	vendor/bin/parallel-lint --exclude vendor .php_cs.dist .

test:
	vendor/bin/phpunit

fix:
	vendor/bin/php-cs-fixer fix -v

js-build:
	npx babel --watch public/assets/vendor/foresters/js-src/ --out-dir public/assets/vendor/foresters/js
# TODO add parameter to transpile ES6 to ES5.

.PHONY: all lint test fix
