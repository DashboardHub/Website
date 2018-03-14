[![Build Status](https://travis-ci.org/DashboardHub/Website.svg?branch=master)](https://travis-ci.org/DashboardHub/Website)

# DashboardHub Website

Information website about Dashboard Hub

Url: https://dashboardhub.io

---

Currently using theme: https://github.com/IronSummitMedia/startbootstrap-creative

---

## Installation

* Install [Jekyll](http://jekyllrb.com)
* Clone this repo
* Start Jekyll server `jekyll serve`

### Jeyll with Docker

```
export JEKYLL_VERSION=3.5
docker run --rm --volume=$PWD:/srv/jekyll -p 35729:35729 -p 4000:4000 -it jekyll/builder:$JEKYLL_VERSION jekyll serve
```

More info https://github.com/envygeeks/jekyll-docker

## Deploy

AWS_CLOUDFRONT_ID=ABC...XYZ make deploy
