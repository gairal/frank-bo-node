install:
	yarn

run:
	yarn start

watch:
	yarn watch

start-prod:
	pm2 start ecosystem.config.js --env production
stop-prod:
	pm2 stop ecosystem.config.js --env production
restart-prod:
	pm2 restart ecosystem.config.js --env production

deploy:
	gcloud app deploy --project com-gairal-frank-api
