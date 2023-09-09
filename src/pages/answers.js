import * as React from 'react';
import Layout from '../components/Layout';

const AnswerPage = () => {

  return (
    <Layout>
      <main>
        <div class="main-wrapper">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Answers
            </h1>
            <div>
              <h2>Keyboard page</h2>
              <ul>
                <li>
                  There is a visually hidden link (href to this page) with the label "Do you know where you are?
                </li>
                <li>
                  In the radio button set, the Javascript option's label is not attached correctly to the select field.
                </li>
                <li>
                  The select element's label is not attached correctly to the select field.
                </li>
                <li>
                  Elements with multiple links to it should be h2 since it's not related to element semantics.
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
