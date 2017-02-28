install:
	yarn install

migrate:
	rethink-migrate down
	rethink-migrate up

run:
	yarn run start

watch:
	yarn run watch
