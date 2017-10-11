install:
	yarn install

migrate:
	rethink-migrate down --all
	rethink-migrate up --all

run:
	npm run start

watch:
	npm run watch

start-prod:
	pm2 start ecosystem.config.js
stop-prod:
	pm2 stop ecosystem.config.js
restart-prod:
	pm2 restart ecosystem.config.js
