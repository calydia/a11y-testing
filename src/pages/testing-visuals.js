import * as React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';
import '../styles/visuals.css';

const VisualsPage = ({ data }) => {

  const page = data.contentfulContentPage;

  const [isActive, setActive] = useState(false);

  const changeColor = () => {
    setActive(!isActive);
  }

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

          <p className={`text-demo ${isActive ? 'color-contrast' : ''}`}>Just to demonstrate the effect of color contrast, you can press the next button to change the color contrast of this text paragraph to a lesser contrast. If you have a good screen and color vision, you might still be able to read the text. But someone might not be so lucky.</p>
          <button className="button demo-button" onClick={changeColor}>Press this button to toggle color contrast</button>
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
