import * as React from 'react';
import Layout from '../components/Layout';

const TaskPage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em] lg:mx-auto">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Workshop tasks
            </h1>
            <div>
              <p>If you prefer to proceed solo, here is a list of tasks for you. If you'd like to tag along with me, I'll tell you about the tasks in each phase.</p>

            <h2>Keyboard accessibility</h2>
            <p>Practice keyboard usage. Check the <a href="/testing-keyboard-accessibility">keyboard page</a> for specific elements to test. The page also has some basic keyboard accessibility information and tips for you if you'd like to read it!</p>
            <ol class="list-decimal	ml-4">
              <li>
                Basic usage: move from one element both forwards and backwards, activate buttons and links.
              </li>
              <li>
                Navigate forms. Make sure you know how to use the different types of basic form elements.
              </li>
            </ol>

            <h2>Visuals</h2>
            <ol class="list-decimal	ml-4">
              <li>
                Test the text spacing bookmarklet (or use a CSS snippet type solution to tweak the site code). If you test it on the <a href="/testing-visuals">testing visuals page</a>, you can see how it behaves when you have an issue.
              </li>
              <li>
                Sometimes you might want to verify color contrast. Automated tools usually catch text and background issues, but in some cases the tools might not be enough. Using a tool like <a href="https://webaim.org/resources/contrastchecker/">WebAIM's Contrast Checker might help you</a>.
              </li>
            </ol>

            <h2>Zooming</h2>
            <p>Get familiar with browser zooming.</p>
            <ol class="list-decimal	ml-4">
              <li>Use "regular" zooming. Set your browser width to 1280 pixels and then zoom to 400%.</li>
              <li>Then switch to Text only zooming. See how it behaves. Firefox and Safari support this by default.</li>
            </ol>

            <h2>Automated tools</h2>
            <ol class="list-decimal	ml-4">
              <li>
                Choose an automated tool of your liking. If you aren't familiar with any tools, here are a couple of options for you:
                <ul>
                  <li>
                    <a href="https://www.deque.com/axe/">Axe</a> by Deque is installed as a plugin.
                  </li>
                  <li>
                    <a href="https://wave.webaim.org/">Wave</a> by WebAIM can be used in a browser.
                  </li>
                  <li>
                    Lighthouse is available by default in Chrome.
                  </li>
                  <li>
                    <a href="https://www.siteimprove.com/integrations/browser-extensions/">Sightimprove has a free Accessibility Checker extension for Firefox, Chrome, Opera and Edge. As well as a Browser Extension for Chrome and Firefox.</a>
                  </li>
                </ul>
              </li>
              <li>
                Take a look at this site with the tool. I've hidden some mistakes for you to find. Take note of what kinds of mistakes the tool finds. Are the mistakes related to WCAG 2.1 A or AA level? Or are they labelled as best practices?
              </li>
              <li>
                Choose another site, possibly the one you've been working on most recently. How do the tool findings compare to this test site?
              </li>
              <li>
                If you are fast, take yet another site as a test case and see if the findings will be similar.
              </li>
            </ol>

            <h2>Screen reader usage</h2>
            <p>Choose a screen reader you want to test with. Our laptops have VoiceOver in them you can use. If you've never used a screen reader before, let's start from the very beginning.</p>

            <ol class="list-decimal	ml-4">
              <li>Take a look at the screen reader settings. If you'll use VoiceOver, they are located under Accessibility > VoiceOver</li>
              <li>You can find a VoiceOver Training on the settings page, but don't focus on it now. VoiceOver Utility has much more VoiceOver settings. What you want to do now is to check that you use the VoiceOver modifier you prefer. VoiceOver modifier is shortened in a lot of guides to VO.</li>
              <li>Learn to toggle VoiceOver on and off. You can do it in the settings or use keyboard shortcuts.</li>
              <li>Press VO + shift + F11. What happens?</li>
              <li>Press VO + a. What happens? To stop, press crtl.</li>
            </ol>

            <h3>Now on to the actual usage:</h3>
            <ol class="list-decimal	ml-4">
              <li> I've hidden some mistakes on <a href="/testing-screen-readers">the screen reader testing page</a>. Check the examples with a screen reader.</li>
              <li>
                Open up the VoiceOver rotor: VO + u. You can switch between different lists with the arrow keys (there are settings to define what lists are available in the Web settings, where the last tab is Web Rotor).<br>
                </br>
                With the rotor you can check for page headings and their levels much easier (you can press a number to show only that level of headings), you can check the page links and landmarks among many others.
              </li>
            </ol>

            <h3>Some homework for you:</h3>

            <ol class="list-decimal	ml-4">
              <li>Familiarise yourself with desktop VoiceOver settings. You can tweak them to your liking.</li>
              <li>Apple has a lot of good instructions for VoiceOver on all their devices, those can be helpful as well, at least check them out so you know where to find them if you need them.</li>
              <li>Familiarise yourself a bit with whatever screen reader is available on your phone. iOs has VoiceOver and Android has TalkBack.
                <ol class="list-decimal	ml-4">
                  <li>Learn to turn it on an off.</li>
                  <li>Learn how you should move from one element to another and how you can activate elements.</li>
                  <li>Learn to start and stop reading content.</li>
                </ol>
              </li>
            </ol>

            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default TaskPage

export const Head = () => <title>Workshop tasks | Testing for accessibility</title>
