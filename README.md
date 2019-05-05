# Welcome to my personal site!
![Website Home Page](http://tylerroesler.com/assets/media/metaIcons/title-screenshot.jpg)
This repository hosts my personal site, [tylerroesler.com](https://tylerroesler.com) which serves the purpose of a 
short online portfolio and soon to be blogging space (once I find the time to figure out how [GatsbyJS](https://www.gatsbyjs.org/) works that is).

## How
This website leverages some of the latest and greatest technologies. Here are a few of the big ones used:

1. [React.js](https://reactjs.org/)
2. [Webpack 4](https://webpack.js.org/)
3. [React Bootstrap](https://react-bootstrap.github.io/)
4. [Font Awesome 5 React Components](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
5. [Sass](https://sass-lang.com/)

And of course the [NodeJs](https://nodejs.org/) runtime combined with several amazing Webpack loaders and plugins. 
See my [webpack.config.js](https://github.com/Troesler95/Troesler95.github.io/blob/ReactRework/webpack.config.js) for more information on how they are used (and pardon the mess).
It is hosted on (you guessed it) [GitHub Pages](https://pages.github.com/) which makes hosting static webpages free and easy for developers.

The design for this page was done by the lovely and amazing [Rebecca Masiker](http://www.rebeccamasiker.com/). If you like this design or
other work she has done, she's [open for commissions](http://www.rebeccamasiker.com/contact/)!

## Source Code
The source for this site is available in the [ReactRework](/troesler95/Troesler95.github.io/tree/ReactRework) branch. This project,
as most are, is a work in progress and I am constantly looking for new ways to make this site more performant and content rich.

Here are some of my ideas for the future if you want to stay tuned:

1. Using the `<img />` tag's [srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) attribute
to improve performance on varying screen sizes. Most of the background images are _massive_ at the moment, which looks great on my Surface Book 2,
but is completely useless on a 1366x768 laptop and just wastes bandwidth!
2. Improve load speeds by [lazy-loading the background images](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)
3. Get the website looking better on mobile devices using Bootstrap. (By the way don't go to this website on your mobile device, it's not a pretty site at the moment XD)
4. Get the blog up and running using [GatsbyJS](https://www.gatsbyjs.org/)
