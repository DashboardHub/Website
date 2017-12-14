.DEFAULT_GOAL := help

help:
	@echo 'Please read the documentation in "https://github.com/DashboardHub/Website"'

guard-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Environment variable $* is not set"; \
		exit 1; \
	fi

deploy: build sync

build:
	bundle exec jekyll build

sync: guard-AWS_CLOUDFRONT_ID
	aws s3 sync _site s3://dashboardhub.io --delete --region eu-west-2
	aws cloudfront create-invalidation --distribution-id ${AWS_CLOUDFRONT_ID} --paths /\*
