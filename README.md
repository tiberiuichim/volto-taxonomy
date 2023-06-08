# volto-taxonomy

[![Releases](https://img.shields.io/github/v/release/eea/volto-taxonomy)](https://github.com/eea/volto-taxonomy/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-taxonomy%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-taxonomy/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-taxonomy%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-taxonomy/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-taxonomy-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-taxonomy-develop)

[Volto](https://github.com/plone/volto) add-on for [Taxonomy Vocabularies](https://github.com/collective/collective.taxonomy#taxonomy-vocabularies)

## Features

Edit [collective.taxonomy](https://github.com/collective/collective.taxonomy#taxonomy-vocabularies) entries via Volto **Site Setup > Taxonomies**

## Getting started

### Add volto-taxonomy to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```BASH
   docker run -it --rm -p 8080:8080 -e ADDONS="collective.taxonomy" -e PROFILES="collective.taxonomy:default" -e SITE=Plone plone/plone-backend
   ```

1. Start Plone [Volto](https://github.com/plone/volto) frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-taxonomy"
  ],

  "dependencies": {
      "@eeacms/volto-taxonomy": "^4.0.0"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --addon @eeacms/volto-taxonomy
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to [Site Setup > Add-ons](http://localhost:3000/controlpanel/addons)

1. Install **collective.taxonomy**

1. Go to [Site Setup > Taxonomomies](http://localhost:3000/controlpanel/taxonomies)

1. Happy editing!

## Dependencies

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)
- [collective.taxonomy](https://pypi.org/project/collective.taxonomy/)

### Frontend

- [Volto](https://github.com/plone/volto)

## Release

See [RELEASE.md](https://github.com/eea/volto-taxonomy/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-taxonomy/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-taxonomy/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
