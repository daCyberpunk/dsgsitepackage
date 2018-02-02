# dsgsitepackage
TYPO3 sitepackage extension with https://github.com/daCyberpunk/dead-simple-grid and some basic configurations and content elements

## DEMO
https://www.roeder-webdesign.berlin

## What it does
* adds a simple flexbox grid CSS to your page
* Content Elements can have a flexbox basic width
* includes three gridelements using flexbox grid
* adds a field for sources/References to sys File Metadata, You can add the indication of source for your images there and use it in templates
* adds two Content Elements made only with TYPO3 Core functionality: ToTop Button and Cookie Consent Element
* does a lot of basic configurations in pageTS and TypoScript
* page Template gets a simple responsive menu with minimal JavaScript
* provides a ready to use configuration for cs_seo extension, means sitemaps, metadata etc, everything works fine out of the box I think
* adds a basic Backend Layout
* enables the ckeditor without making special configurations on it

### All written with
* -out usage of jQuery or any other framework
* BEM for my css as far as it wasnt provided from third party like the cookie consent.
* using sass for CSS and Browserify for JS (provided my gulp file)

> It's basically a work-in-progress extension even works already! That means it can be there some unused code, I let it there for later development, like the FileReference Model f.e.

## Requirements

* TYPO3 8.7
* gridelements 8
* cs_seo
* realUrl (recommended)


## How Flexbox Grid is used
Each GridElement gets some flexform configurations. There is always one for the row and one for each column. There you make the basic configuration how the flexbox model should be used in Frontend.
> If you dont know what Flexbox is, you should read about first to understand the behavior of elements in Frontend. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Each Content Element can get a Flex Basis Size. If you pput it in a gridelement it gets it right flexbox behavior based on that size.



## You're free ...
* to contribute, fork, use as you want..


## credits
Most of the code I wrote by myself but still there are some pieces from other people. So credits to

* Benjamin Kott, I've re-used some of his bootstrap_package stuff like a viewhelper and Backend Layout Icons.
* https://cookieconsent.insites.com for ... cookieconsent. :-)
* TYPO3 Team and Community... you all are the reason I could do that!
