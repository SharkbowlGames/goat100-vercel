const path = require('path')

module.exports = {
  reactStrictMode: true,
}
module.exports = {

//  assetPrefix: 'https://cdn.royalcoster.com',
  images: {
    minimumCacheTTL: 86400,
    domains: ["cdn.shopify.com","royalcoster.com:81","royalcoster.com","cdn.royalcoster.com","royalcoster.b-cdn.net"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
