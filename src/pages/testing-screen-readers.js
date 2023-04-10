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

          <p>Listen to the menu functionalities. Here ARIA really makes a difference for the user.</p>

          <MenuComponent />

          <MenuComponentFixed />

          <h2>Cards</h2>
          <p>With cards the most common mistake we make is to decide for the user what content is important in the card.
            The accessible name should contain the visually shown text. And this means all of it.
          </p>

          <p>One reason we make the mistake of restricting the amount of content is that we feel it will be too heavy for the listener.
            But we often also forget that screen reader users listen to the content with much faster pace than we do.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8" role="list">
            <CardOk index="1" alt="" />
            <CardNotOk index="2" title="Interesting headline for this card" ariaLabel="This is a title but of which card?" alt="Image of a cat." />
            <CardNotOk index="3" title="Super interesting card!" ariaLabel="" alt="A fluffy cat sniffs her new crocheted bed." />
            <CardNotOk index="4" title="What is this card?" ariaLabel="" alt="Image of a cat." />
          </ul>

          <p>One recommendation that is given in accessibility audits is to have the image below the heading.
            That way it is clear for assistive technology users that this image is related to the heading.</p>

          <p>If possible, this can be done by visually moving the image. So the structure in the DOM could be heading, text, image and then you can move the image with CSS to the correct place.</p>

          <p>If you read this far, great! Now pause for just a moment to think how you feel about these types of cards or content teasers etc. Should the whole element be clickable or just the heading or a link button?</p>

          <h2></h2>

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
