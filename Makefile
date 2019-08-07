all: test

lint:
	vendor/bin/parallel-lint --exclude vendor .php_cs.dist .

test:
	vendor/bin/phpunit

fix:
	vendor/bin/php-cs-fixer fix -v

.PHONY: all lint test fix
