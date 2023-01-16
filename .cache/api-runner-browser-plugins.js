module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-bootstrap-5","short_name":"gb5-starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"standalone","icon":"src/images/logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"067eb6430c4126bf7b8e11cfff561d6b"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
