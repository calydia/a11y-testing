import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/visuals.css';

const VisualsPage = () => {

  const [isActive, setActive] = useState(false);

  const changeColor = () => {
    setActive(!isActive);
  }

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em] lg:mx-auto">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Testing visuals
            </h1>
            <div>
              <ul>
                <li>
                  <p>
                    Check the colors on the site against each background color they are used with.
                  </p>
                  <ul>
                    <li>
                      For large text (24px regular or 19px bold), the contrast needs to be 3:1.
                    </li>
                    <li>
                      For regular text, the contrast needs to be 4.5:1. (For AAA level 7:1.)
                    </li>
                    <li>
                      For non-text elements (UI components, graphical objects), the contrast needs to be 3:1.
                    </li>
                  </ul>
                </li>
                <li>
                  Is the font readable?
                </li>
                <li>
                  <p>
                    Is there enough spacing for the text? Recommendation:
                  </p>
                  <ul>
                    <li>
                      1.5 line height for blocks of text.
                    </li>
                    <li>
                      1-1.3 line height for headings (depends on the font and font size).
                    </li>
                  </ul>
                </li>
                <li>
                  The user needs to be able to set the spacing following the text paragraphs to at least 2 times the font size. The actual value on the site doesn't need to follow this.
                </li>
                <li>
                  Is the page structure logical?
                </li>
              </ul>
            </div>

            <p className="important">
              You can use a <a href="https://cdpn.io/stevef/debug/YLMqbo">text spacing bookmarklet</a> to ensure the users can alter the text spacing as defined in the WCAG. Just add the bookmarklet and then press it. If you see no changes on the page, it most likely means that the site prevents the user from setting the values.
            </p>

            <p className={`text-demo ${isActive ? 'color-contrast' : ''}`}>Just to demonstrate the effect of color contrast, you can press the next button to change the color contrast of this text paragraph to a lesser contrast. If you have a good screen and color vision, you might still be able to read the text. But not everyone is so lucky.</p>
            <button className="button demo-button" onClick={changeColor}>Press this button to toggle color contrast</button>

            <div class="mt-12 lg:-ml-12 lg:-mr-12 p-12 border-solid border-4 border-lt-code-border dark:border-dk-code-border">
              <h2 class="mt-0 mb-8">Your tasks</h2>
              <ol class="list-decimal	ml-4">
                <li>
                  Test the text spacing bookmarklet (or use a CSS snippet type solution to tweak the site code). If you test it on the <a href="/testing-visuals">testing visuals page</a>, you can see how it behaves when you have an issue.
                </li>
                <li>
                  Sometimes you might want to verify color contrast. Automated tools usually catch text and background issues, but in some cases the tools might not be enough. Using a tool like <a href="https://webaim.org/resources/contrastchecker/">WebAIM's Contrast Checker might help you</a>.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default VisualsPage;

export const Head = () => <title>Testing visuals | Testing for accessibility</title>
