import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';
import MenuComponent from '../components/MenuComponent';
import MenuComponentFixed from '../components/MenuComponentFixed';
import Button from '../components/Button';
import '../styles/forms.css';

const ScreenReaderPage = ({ data }) => {

  const page = data.contentfulContentPage;

  return (
    <Layout>
      <main>
        <div className="content-wrapper">
          <h1 id="skip-target">
            { page.mainHeading }
          </h1>
          {renderRichText(page.bodyText)}

          <h3>Form controls to test with</h3>

          <form>
            <label htmlFor="text">Text input</label>
            <input name="text" type="text"></input>

            <fieldset>
              <legend>Choose your favorite</legend>
              <div className="option">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">HTML</label>
              </div>
              <div className="option">
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label htmlFor="css">CSS</label>
              </div>
              <div className="option">
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label>JavaScript</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Choose your favorite</legend>
              <div className="option">
                <input type="checkbox" id="a11y" name="fav_language_multi" value="a11y" />
                <label htmlFor="a11y">A11Y</label>
              </div>
              <div className="option">
                <input type="checkbox" id="accessibility" name="fav_language_multi" value="accessibility" />
                <label htmlFor="accessibility">Accessibility</label>
              </div>
              <div className="option">
                <input type="checkbox" id="web" name="fav_language_multi" value="web" />
                <label htmlFor="web">Web accessibility</label>
              </div>
            </fieldset>

            <label>Choose a color:</label>
            <select name="colors" id="colors">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>

            <div>
              <Button />
            </div>
          </form>

          <h2>Menus</h2>
          <MenuComponent />

          <MenuComponentFixed />

          <h2>Cards</h2>
          <p>With cards we often see developers try to be clever and use aria-label to restrict the info screen reader users get. This is done in good faith but the end results usually are less than optimal.</p>

        </div>
      </main>
    </Layout>
  )
}
export default ScreenReaderPage;

export const Head = ({ data }) => <title>{`${data.contentfulContentPage.mainHeading} | Sanna Mäkinen`}y</title>

export const assetQuery = graphql`
  {
    contentfulContentPage(id: {eq: "5e4918f0-cc1f-5796-b2cf-ce21c56b1978"}) {
      id
      mainHeading
      bodyText {
        raw
      }
    }
  }
`
