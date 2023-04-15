import * as React from 'react';
import Layout from '../components/Layout';
import FormWithErrors from '../components/FormWithErrors';
import '../styles/keyboard-testing.css';
import '../styles/forms.css';

const KeyboardPage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em]">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Testing keyboard functionality
            </h1>

            <div>
              <p>Testing for keyboard accessibility boils down to a few questions:</p>
              <ul>
                <li>
                  Can you access all the content on the page? Links, buttons, etc.
                </li>
                <li>
                  If there are dialogs, is the focus maintained properly? Whenever a dialog is open, the focus should remain inside that element and not go behind the open dialog.
                </li>
                <li>
                  Do you actually know where you are on the page when you move from one element to another?
                </li>
                <li>
                  <p>Are there keyboard shortcuts that use only letter (including upper- and lower-case letters), punctuation, number, or symbol characters?</p>
                  <ul>
                    <li>
                      The user needs to be able to either turn these off or change the shortcuts.
                    </li>
                  </ul>
                </li>
                <li>
                  Is there a skip to content type link as the first focusable element on the page?
                </li>
                <li>
                  If there are more repeating blocks on the site, can those be skipped?
                </li>
                <li>
                  Is the focus order logical?
                </li>
              </ul>
              <p>
                The idea is to jump from one focusable element to the next. The focus isn't supposed to move to e.g. text content or headings. <a href="#" className="visually-hidden hidden-link">Do you know where you are?</a>
              </p>
              <p>
                The item you are focusing on should have a visible enough focus style. According to WCAG, the browser default style is enough to pass the criterion, but it's better to have more visible styles. Also, WCAG 2.2 might bring on changes.
              </p>

              <h2>How to operate the keyboard</h2>
              <ul>
                <li>
                  Use the <code>tab</code> key to move from one element to the next.
                </li>
                <li>
                  Use <code>shift</code> + <code>tab</code> to move from one element to the previous one.
                </li>
                <li>
                  To visit a link, press <code>enter</code>.
                </li>
                <li>
                  To press a button, press <code>enter</code> or <code>space</code>.
                </li>
                <li>
                  When inside a checkbox or radio button set, press arrow keys to move between the options.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <FormWithErrors />

        <div className="my-8 mx-4 max-w-[80em]">
          <div className="mx-auto max-w-[40em]">
            <h2>Element semantics</h2>
            <p>You might have heard the saying "A link is not a button" or vice versa. And this is not a minor thing. Links and buttons are semantic elements with different functions. A button does something on the page, for example, opens a modal. A link will take you somewhere, usually to another page.</p>
            <p>We all have probably met the button-looking links, which are quite common these days. While they can be great for catching people's eye and getting them to click on these "CTA buttons", there is also a downside. These can be confusing for users because you can't visually tell if is it a link or a button. And if you are a user who activates buttons with a spacebar but the element is actually a link... well. Try what happens with the link below this paragraph.</p>
            <a href="#" className="button inline-block">This is a link button</a>
            <p>Another thing that is not a button is a <code>{`<div>`}</code>. Use <code>{`<button>`}</code> for elements that open and close modals. That will save you time and reduce the number of reported bugs.</p>

            <h3 class="text-3xl	lg:text-4xl">Elements with multiple links to it</h3>

            <p>
              You might have seen implementations of cards where you have separate links to the target. For example, in an image, heading and then a link button. While this technically is allowed, it is not recommended for several reasons.
              It can get tedious to try to go through a list of items when you have multiple links for one item.
            </p>
            <p>
              This type of approach can be also often seen in search results.
            </p>

            <div className="border-t-2 mb-8">
              <a href="#"><h3>First element</h3></a>
              <p>This is some description</p>
              <a href="#">https://the-url-of-this-page</a>
            </div>
            <div className="border-t-2 mb-8">
              <a href="#"><h3>Second element</h3></a>
              <p>This is some description</p>
              <a href="#">https://the-url-of-this-page</a>
            </div>
            <div className="border-t-2 mb-8">
              <a href="#"><h3>Third element</h3></a>
              <p>This is some description</p>
              <a href="#">https://the-url-of-this-page</a>
            </div>
            <div className="border-t-2 mb-8">
              <a href="#"><h3>Fourth element</h3></a>
              <p>This is some description</p>
              <a href="#">https://the-url-of-this-page</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default KeyboardPage;

export const Head = () => <title>Testing keyboard functionality | Testing for accessibility</title>
