import * as React from 'react';
import Layout from '../components/Layout';
import MenuComponent from '../components/MenuComponent';
import MenuComponentFixed from '../components/MenuComponentFixed';
import FormWithErrors from '../components/FormWithErrors';
import CardOk from '../components/CardOk';
import CardNotOk from '../components/CardNotOk';
import '../styles/forms.css';

const ScreenReaderPage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em]">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Testing screen readers
            </h1>
            <div>
              <p>
                One thing to remember is that nothing is better than having an actual screen reader user (or even plural) do the testing. When you don't use the screen reader daily, you won't be as fluent with it as someone who relies on it. That being said, there are times when you can't have access to a person who could do the testing, and then it's up to you.
              </p>
              <p>
                In the optimal case, you would test with many screen readers and browsers. But the important thing is to test with at least one. Not all screen readers work the same, and some work better with a different browser than the other. I recommend checking out <a href="https://webaim.org/projects/screenreadersurvey9/">WebAIM's Screen Reader User Surveys</a> for some data about the most popular screen readers, browsers, and devices.
              </p>
              <p>
                Usually, keyboard and screen reader functionality go partially hand in hand. If you can access an element with a keyboard, if it's not specifically hidden from the screen readers, you should be able to access it with a screen reader as well.
              </p>
              <p>
                Here are a few things you should at least test for:
              </p>
              <ul>
                <li>
                  Access to elements.
                </li>
                <li>
                  Everything that has ARIA in it. And I mean everything. Check even the most simple elements.
                </li>
                <li>
                  Media alternative texts. Do they make sense? Are they in the correct language? Automated testing tools can check that the text is there but that's as far as they can go.
                </li>
              </ul>
              <p>
                Again, I've added some mistakes on this page for you to locate. What kind of errors can you find?
              </p>

              <h2>Want to do more testing with a screen reader?</h2>
              <p>
                If you didn't get enough, you can visit my <a href="https://a11y.sanna.ninja">accessibility site</a> for more demos. A few demos to mention are:
              </p>
              <ul>
                <li>
                  <a href="https://a11y.sanna.ninja/demo/perceivable/1-1-1-non-text-content-alt-attribute">1.1.1 Non-text content</a> - the image alternative texts
                </li>
                <li>
                  <a href="https://a11y.sanna.ninja/demo/operable/2-5-3-label-in-name">2.5.3 Label In Name</a> - the importance of having the visual information in any accessible labels
                </li>
              </ul>
              <p>
                Or you can take a look at something you've created or been a part of creating. Real-life examples are always the best to help you see potential issues in how things are done.
              </p>
            </div>
          </div>
        </div>

        <FormWithErrors />

        <div className="my-8 mx-4 max-w-[80em]">
          <div className="mx-auto max-w-[40em]">
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
              <CardNotOk index="2" title="Interesting headline for this card" ariaLabel="This is a title but of which card?" alt="dafesfadas" />
              <CardNotOk index="3" title="Super interesting card!" ariaLabel="" alt="A fluffy cat sniffs her new crocheted bed." />
              <CardNotOk index="4" title="What is this card?" />
            </ul>

            <p>One recommendation that is given in accessibility audits is to have the image below the heading.
              That way it is clear for assistive technology users that this image is related to the heading.</p>

            <p>If possible, this can be done by visually moving the image. So the structure in the DOM could be heading, text, image and then you can move the image with CSS to the correct place.</p>

            <p>If you read this far, great! Now pause for just a moment to think how you feel about these types of cards or content teasers etc. Should the whole element be clickable or just the heading or a link button?</p>

            <h2>Language</h2>

            <p>The page language must be correct, CMS like Drupal usually handles it automatically. But for any text in another language, you need to specify the language with the lang attribute. <span lang="fi">Tämä teksti on suomea</span>.</p>
            <p>When the language is marked correctly, the screen readers can read it correctly. Note that some screen readers require you to install language packages separately. So if your screen reader doesn't switch language, that might be the reason.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default ScreenReaderPage;

export const Head = () => <title>Testing screen readers | Testing for accessibility</title>
