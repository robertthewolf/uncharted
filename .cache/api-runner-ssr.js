var plugins = [{
      plugin: require('/Users/Robert/uncharted/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Robert/uncharted/node_modules/gatsby-plugin-styled-components/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Robert/uncharted/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Robert/uncharted/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-120131576-1","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]},
    },{
      plugin: require('/Users/Robert/uncharted/node_modules/gatsby-plugin-facebook-pixel/gatsby-ssr.js'),
      options: {"plugins":[],"pixelId":"540313399720280"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

const apis = require(`./api-ssr-docs`)

module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }
  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
