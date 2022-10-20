import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';
import '../styles/visuals.css';

const VisualsPage = ({ data }) => {

  const page = data.contentfulContentPage;

  return (
    <Layout>
      <main>
        <div className="content-wrapper">
          <h1 id="skip-target">
            { page.mainHeading }
          </h1>
          {renderRichText(page.bodyText)}

          <p className="important">
            You can use a <a href="https://cdpn.io/stevef/debug/YLMqbo">text spacing bookmarklet</a> to ensure the users can alter the text spacing as defined in the WCAG. Just add the bookmarklet and then press it. If you see no changes on the page, it most likely means that the site prevents the user from setting the values.
          </p>
        </div>
      </main>
    </Layout>
  )
}
export default VisualsPage;

export const Head = ({ data }) => <title>{`${data.contentfulContentPage.mainHeading} | Sanna Mäkinen`}y</title>

export const assetQuery = graphql`
  {
    contentfulContentPage(id: {eq: "d9a4b499-5c45-578b-9e45-bf360ec7e321"}) {
      id
      mainHeading
      bodyText {
        raw
      }
    }
  }
`
