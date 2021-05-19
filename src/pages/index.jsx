import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={container}>
        <h1 className={intro}>Welcome to the GatsbyJS + Shopify Demo Store.</h1>
        <p className={callOut}>
          It's a proof-of-concept in a box, with 500 products
          to help you get to proof-of-concept as soon as right now.
        </p>
      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
