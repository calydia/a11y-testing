import * as React from 'react';
import Layout from '../components/Layout';

const AnswerPage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em] lg:mx-auto">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Answers
            </h1>
            <div>
              <h2>Keyboard page</h2>
              <ul>
                <li>
                  There is a visually hidden link (href to this page) with the label "Do you know where you are?"
                </li>
                <li>
                  In the radio button set, the Javascript option's label is not attached correctly to the select field.
                </li>
                <li>
                  The select element's label is not attached correctly to the select field.
                </li>
                <li>
                  Elements with multiple links to it should be h2 since it's not related to element semantics. This will also fix the problem of the headings under this heading being the same level as the parent heading.
                  <ul>
                    <li>
                      The heading links only change color on hover. That is not enough. The url links have bolder underline on hover, which provides another visual cue.
                    </li>
                    <li>
                      The url link and the heading link have the same target. All links to the same target should have the same link text.
                    </li>
                  </ul>
                </li>
              </ul>

              <h2>Screen readers page</h2>
              <ul>
                <li>
                  Same form errors as on the keyboard page.
                </li>
                <li>
                  The first Open menu button works for sighted users but gives no information to assistive technology users.
                </li>
              </ul>

              <h2>Visuals page</h2>
              <ul>
                <li>
                  The text paragraph describing the text spacing bookmarklet prevents the user from changing the necessary values.
                </li>
                <li>
                  The toggled color contrast for the text doesn't pass the criterion.
                </li>
                <li>
                  The button "Can you access this button with a keyboard" cannot be accessed with a keyboard.
                </li>
              </ul>

              <h2>Zooming page</h2>
              <ul>
                <li>
                  The button on the page has restricted height and width in pixels, which is problematic. Avoid styling buttons like this. There can always be longer texts in buttons and zooming affects the button content as well.
                </li>
                <li>Heading level skipping.</li>
              </ul>

              <h2>Automated tools page</h2>
              <ul>
                <li>
                  Skipping heading levels.
                </li>
                <li>
                  An empty heading.
                </li>
                <li>An empty ul-element.</li>
              </ul>

              <h2>Other things</h2>
              <ul>
                <li>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AnswerPage;

export const Head = () => <title>Answers | Testing for accessibility</title>
