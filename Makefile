.DEFAULT_GOAL := help

help:
	@echo 'Please read the documentation in "https://github.com/DashboardHub/Website"'

guard-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Environment variable $* is not set"; \
		exit 1; \
	fi

deploy: build.version deploy.version

build.version: pipeline.version.build.start build pipeline.version.build.finish
deploy.version: pipeline.version.deploy.start sync pipeline.version.deploy.finish

build:
	npm install
	./node_modules/gulp/bin/gulp.js

sync: guard-AWS_CLOUDFRONT_ID
	rm -fr ./node_modules/
	aws s3 sync . s3://dashboardhub.io --delete --region eu-west-2
	aws cloudfront create-invalidation --distribution-id ${AWS_CLOUDFRONT_ID} --paths /\*

pipeline.version.build.start:
	curl -XPOST -H "Content-Type: application/json" -d '{"release":"0.1.${TRAVIS_BUILD_NUMBER}"}' https://api-pipeline.dashboardhub.io/environments/4c561a20-ddc0-11e7-8be6-8d1c32f4579f/deployed/${DH_TOKEN}/startBuild

pipeline.version.build.finish:
	curl -XPOST -H "Content-Type: application/json" -d '{"release":"0.1.${TRAVIS_BUILD_NUMBER}"}' https://api-pipeline.dashboardhub.io/environments/4c561a20-ddc0-11e7-8be6-8d1c32f4579f/deployed/${DH_TOKEN}/finishBuild

pipeline.version.deploy.start:
	curl -XPOST -H "Content-Type: application/json" -d '{"release":"0.1.${TRAVIS_BUILD_NUMBER}"}' https://api-pipeline.dashboardhub.io/environments/4c561a20-ddc0-11e7-8be6-8d1c32f4579f/deployed/${DH_TOKEN}/startDeploy

pipeline.version.deploy.finish:
	curl -XPOST -H "Content-Type: application/json" -d '{"release":"0.1.${TRAVIS_BUILD_NUMBER}"}' https://api-pipeline.dashboardhub.io/environments/4c561a20-ddc0-11e7-8be6-8d1c32f4579f/deployed/${DH_TOKEN}/finishDeploy
