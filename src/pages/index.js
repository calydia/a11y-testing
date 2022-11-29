import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const page = data.contentfulContentPage;

  return (
    <Layout>
      <main>
        <div className="content-wrapper">
          <h1 id="skip-target">
            { page.mainHeading }
          </h1>
          {renderRichText(page.bodyText)}
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => <title>{`${data.contentfulContentPage.mainHeading} | Sanna Mäkinen`}y</title>

export const assetQuery = graphql`
  {
    contentfulContentPage(id: {eq: "450b0585-4494-55c1-8e02-8f9e28d6e82f"}) {
      id
      mainHeading
      bodyText {
        raw
      }
    }
  }
`