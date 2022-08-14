const domain = "costerdiamonds.myshopif.com";
const storefrontAccessToken = "263aa4426be9105da5128496c1a774c2";

async function ShopifyData(query) {
  const URL = `https://costerdiamonds.myshopify.com/api/2021-10/graphql.json`
  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": "263aa4426be9105da5128496c1a774c2",
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data =  fetch(URL, options).then(response => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error("Products not fetched")
  }
}
export async function getCollectionProducts(hndl) {
  const query = `
  {
    collectionByHandle( handle: "` + hndl + `") {
        products(first: 50) {
          pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
                id
                title
                handle
                tags
                vendor
                productType
                metafields(first:1) {
                     edges {
                         node {
                            key
                             value

                         }
                     }
                 }
                images(first:1,  maxWidth:360) {
                  edges {
                    node {
                      src
                    }
                  }
                }
                handle
                variants(first:5) {
                  edges {
                    node {
                      id
                      sku
                      price

                    }
                  }
                }
              }
            }
          }
    }
}
`
  const response = await ShopifyData(query)
  const collectionProducts = response.data.products.edges ? response.data.products.edges : []

  return collectionProducts;
}
