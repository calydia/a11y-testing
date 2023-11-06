import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
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
                  Is some meaning indicated only by color?
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

            <h2>Hover and focus styles</h2>

            <p>Hover styles aren't required by WCAG. But if they are present, they need to comply with the rules. It is usually recommended to have at least two visual cues. Hover styles are recommended because they provide useful information for sighted users.</p>

            <p>Focus styles do have requirements. Check that all interactive elements have focus styles that are visible enough. There are multiple styles of focuses on this site just to demonstrate different types of options.</p>

            <h2>Image alternative texts</h2>

            <p>While most of the image alternative texts are content, some images are added by us. Those need to have a good alternative text or they should be hidden from assistive technologies. And translations are super important! (For everything we add: images, texts etc)</p>

            Here are some examples of alternative texts. Do you think they are descriptive enough? Did your expectations match the images?

            <h3>Example: Logo</h3>

            <p>A made up example: The logos shown would be links. All of the logo images have an alt "Logo". Do you as a user know where the link will take you?</p>

            <div className="flex wrap gap-2">
              <StaticImage
                src="../images/lut-logo-example.png"
                alt=""
                width={1194}
                height={270}
              />
            </div>

            <p>With logos, add the text as the alt or in the case of links, describe the target. For example: LUT University front page/website.</p>

            <h3>Example: Water</h3>

            <p>Both of these images have alt of "Water".</p>
            <div className="flex wrap gap-2">
              <StaticImage
                src="../images/water-example.webp"
                alt="Water"
                width={500}
                height={300}
              />
              <StaticImage
                src="../images/water-example-2.webp"
                alt="Water"
                width={500}
                height={300}
              />
            </div>
            <p>While technically true, maybe they could be a bit more descriptive?</p>

            <h3>Example: Summer/Spring/Autumn image</h3>

            <p>These are real example images taken from their context. In their use case, the alt should be empty. But since there are alts, they should be descriptive, right? Two of the images have alt text "Spring image". One "Summer image" and one "Autumn image". Can you tell which is which?</p>

            <div className="flex wrap gap-2 mb-2">
              <StaticImage
                src="../images/summer-image.webp"
                alt="Spring image"
                width={500}
                height={300}
              />
              <StaticImage
                src="../images/summer-image-2.webp"
                alt="Summer image"
                width={500}
                height={300}
              />
              </div>
              <div className="flex wrap gap-2">
              <StaticImage
                src="../images/summer-image-4.webp"
                alt="Autumn image"
                width={500}
                height={300}
              />
              <StaticImage
                src="../images/summer-image-3.webp"
                alt="Spring image"
                width={500}
                height={300}
              />
            </div>

            <p>Again, technically yes, but my guesses wouldn't have been right. And not everyone has the same types of things in mind when they think of the seasons, right? Also, the word "image" is unnecessary because assistive technologies announce it by default and now it will be said twice.</p>

            <h3>What should a good alt text have, then?</h3>
            <p>Some recommendations:</p>
            <ul>
              <li>Don't add the word "image".</li>
              <li>Don't add the word "logo". If it is a logo, just add the company name.</li>
              <li>Describe what is in the image from the point-of-view of the context where it is used.</li>
              <li>If the image is a link, describe the target instead of the image.</li>
            </ul>

            <p>And finally, if the image really doesn't bring any meaning to the context where it is used, just leave the alt text empty. That way you'll reduce unnecessary clutter from the users.</p>

            <div class="mt-12 lg:-ml-12 lg:-mr-12 p-12 border-solid border-4 border-lt-code-border dark:border-dk-code-border">
              <h2 class="mt-0 mb-8">Your tasks</h2>
              <ol class="list-decimal	ml-4">
                <li>
                  Test the text spacing bookmarklet (or use a CSS snippet type solution to tweak the site code). If you test it on the <a href="/testing-visuals">testing visuals page</a>, you can see how it behaves when you have an issue.
                </li>
                <li>
                 Let's think about image alternative texts for a moment. Think of this image //IMAGE NEEDED//. What would be a good alt text for this? What about context where it is used, would you change something?
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
