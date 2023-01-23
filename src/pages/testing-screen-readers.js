import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';
import MenuComponent from '../components/MenuComponent';
import MenuComponentFixed from '../components/MenuComponentFixed';
import Button from '../components/Button';
import CardOk from '../components/CardOk';
import CardNotOk from '../components/CardNotOk';
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
          <p>With cards the most common mistake we make is to decide for the user what content is important in the card.
            The accessible name should contain the visually shown text. And this means all of it.
          </p>

          <p>One reason we make the mistake of restricting the content is that we feel it will be too heavy for the listener.
            But we often also forget that screen reader users listen to the content with much faster pace than we do.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8" role="list">
            <CardOk index="1" />
            <CardNotOk index="2" />
          </ul>

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
