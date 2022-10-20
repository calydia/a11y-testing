import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';
import '../styles/keyboard-testing.css';
import '../styles/forms.css';

const KeyboardPage = ({ data }) => {

  const page = data.contentfulContentPage;

  return (
    <Layout>
      <main>
        <div className="content-wrapper">
          <h1 id="skip-target">
            { page.mainHeading }
          </h1>
          {renderRichText(page.bodyText)}

          <a href="#" className="visually-hidden hidden-link">Do you know where you are?</a>

          <h3>Form controls to test keyboard usage with</h3>

          <form>
            <label for="text">Text input</label>
            <input name="text" type="text"></input>

            <fieldset>
              <legend>Choose your favorite</legend>
              <div class="option">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">HTML</label>
              </div>
              <div class="option">
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">CSS</label>
              </div>
              <div class="option">
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label>JavaScript</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Choose your favorite</legend>
              <div class="option">
                <input type="checkbox" id="a11y" name="fav_language_multi" value="a11y" />
                <label for="a11y">A11Y</label>
              </div>
              <div class="option">
                <input type="checkbox" id="accessibility" name="fav_language_multi" value="accessibility" />
                <label for="accessibility">Accessibility</label>
              </div>
              <div class="option">
                <input type="checkbox" id="web" name="fav_language_multi" value="web" />
                <label for="web">Web accessibility</label>
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
              <button className="button" type="submit">This submit button does nothing</button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default KeyboardPage;

export const Head = ({ data }) => <title>{`${data.contentfulContentPage.mainHeading} | Sanna Mäkinen`}y</title>

export const assetQuery = graphql`
  {
    contentfulContentPage(id: {eq: "97f43501-4951-5924-981f-8d0262725f3a"}) {
      id
      mainHeading
      bodyText {
        raw
      }
    }
  }
`
