import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';

const AutomatedToolPage = ({ data }) => {

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
export default AutomatedToolPage;

export const Head = ({ data }) => <title>{`${data.contentfulContentPage.mainHeading} | Sanna Mäkinen`}y</title>

export const assetQuery = graphql`
  {
    contentfulContentPage(id: {eq: "c0a5967e-f4bd-5eac-967b-ec9748c6017f"}) {
      id
      mainHeading
      bodyText {
        raw
      }
    }
  }
`
