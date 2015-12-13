# Radiology-IR

 This is a prototype application that applies Information Retrieval principles and techniques to support radiologic findings. This tool will allow radiologists to find documents, journal articles, and sample cases similar cases to a case they are currently reviewing. By providing patient context aware and case specific information to radiologists at the point of case review, this system will aid their decision making process.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) - Used Node v0.12.7 and NPM 2.11.3 for this project.
* [Bower](http://bower.io/) - Used 1.6.5 for this project
* [Ember CLI](http://www.ember-cli.com/) - Used 1.13.8 for this project.
* [PhantomJS](http://phantomjs.org/)

## Installation

* Verify you have all prerequisites already installed
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* Install and run [RadiologyIRServer](https://github.com/magic-lantern/RadiologyIRServer) as per project instructions.
* Change apiHost variable in ./config/environment.js to point to correct host and port of RadiologyIRServer.
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building for deployment

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## License

For code written by [magic-lantern](https://github.com/magic-lantern), see the [LICENSE](LICENSE.md) file for license rights and limitations (Apache License, Version 2.0).
Code from other parties may have different licensing terms.
