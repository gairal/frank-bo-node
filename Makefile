install:
	yarn install

migrate:
	rethink-migrate down --all
	rethink-migrate up --all

run:
	yarn run start

watch:
	yarn run watch
