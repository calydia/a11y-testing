import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';

const zoomButton = {
  height: '60px',
  width: '160px'
}

const ZoomPage = ({ data }) => {

  const page = data.contentfulContentPage;

  return (
    <Layout>
      <main>
        <div className="content-wrapper">
          <h1 id="skip-target">
            { page.mainHeading }
          </h1>
          {renderRichText(page.bodyText)}

          <div>
            <button class="button" style={zoomButton}>I am a button</button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default ZoomPage;

export const Head = ({ data }) => <title>{`${data.contentfulContentPage.mainHeading} | Sanna Mäkinen`}y</title>

export const assetQuery = graphql`
  {
    contentfulContentPage(id: {eq: "f4b88e58-4723-5d68-b486-3d2892d44d61"}) {
      id
      mainHeading
      bodyText {
        raw
      }
    }
  }
`
