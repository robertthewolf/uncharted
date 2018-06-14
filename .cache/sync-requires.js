// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Robert/uncharted/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Robert/uncharted/src/templates/blog-post.js")),
  "component---src-templates-package-js": preferDefault(require("/Users/Robert/uncharted/src/templates/package.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/Robert/uncharted/src/templates/tags.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Robert/uncharted/src/pages/404.js")),
  "component---src-pages-concept-js": preferDefault(require("/Users/Robert/uncharted/src/pages/concept.js")),
  "component---src-pages-confirmation-js": preferDefault(require("/Users/Robert/uncharted/src/pages/confirmation.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Robert/uncharted/src/pages/contact.js")),
  "component---src-pages-faq-js": preferDefault(require("/Users/Robert/uncharted/src/pages/faq.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Robert/uncharted/src/pages/index.js")),
  "component---src-pages-stories-js": preferDefault(require("/Users/Robert/uncharted/src/pages/stories.js")),
  "component---src-pages-terms-js": preferDefault(require("/Users/Robert/uncharted/src/pages/terms.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.json": require("/Users/Robert/uncharted/.cache/json/blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.json": require("/Users/Robert/uncharted/.cache/json/blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex.json": require("/Users/Robert/uncharted/.cache/json/blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "packages-fullnatureadventure.json": require("/Users/Robert/uncharted/.cache/json/packages-fullnatureadventure.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "packages-medieval-and-wild-adventure.json": require("/Users/Robert/uncharted/.cache/json/packages-medieval-and-wild-adventure.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "packages-the-wild-carpathians.json": require("/Users/Robert/uncharted/.cache/json/packages-the-wild-carpathians.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "packages-saxonia-gastronomical-getaway.json": require("/Users/Robert/uncharted/.cache/json/packages-saxonia-gastronomical-getaway.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "tags-flavor.json": require("/Users/Robert/uncharted/.cache/json/tags-flavor.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "tags-tasting.json": require("/Users/Robert/uncharted/.cache/json/tags-tasting.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "tags-jamaica.json": require("/Users/Robert/uncharted/.cache/json/tags-jamaica.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "tags-green-beans.json": require("/Users/Robert/uncharted/.cache/json/tags-green-beans.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "tags-brewing.json": require("/Users/Robert/uncharted/.cache/json/tags-brewing.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "tags-chemex.json": require("/Users/Robert/uncharted/.cache/json/tags-chemex.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "404.json": require("/Users/Robert/uncharted/.cache/json/404.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "concept.json": require("/Users/Robert/uncharted/.cache/json/concept.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "confirmation.json": require("/Users/Robert/uncharted/.cache/json/confirmation.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "contact.json": require("/Users/Robert/uncharted/.cache/json/contact.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "faq.json": require("/Users/Robert/uncharted/.cache/json/faq.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "index.json": require("/Users/Robert/uncharted/.cache/json/index.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "stories.json": require("/Users/Robert/uncharted/.cache/json/stories.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "terms.json": require("/Users/Robert/uncharted/.cache/json/terms.json"),
  "layout-index.json": require("/Users/Robert/uncharted/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/Robert/uncharted/.cache/json/404-html.json")
}