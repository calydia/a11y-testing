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
            <ol class="list-decimal	ml-4">
              <li>
                Practice keyboard usage. Check the <a href="/testing-keyboard-accessibility">keyboard page</a> for specific elements to test. The page also has some basic keyboard accessibility information and tips for you if you'd like to read it!
              </li>
            </ol>

            <h2>Screen reader usage</h2>

            <ol class="list-decimal	ml-4">
              <li><a href="/testing-screen-readers">Familiarise yourself with the screen reader testing page</a>. If you don't want to read the whole page, why not use a screen reader to listen to it?</li>
              <li>Choose a screen reader you want to test with. Note: for phones the most popular screen reader is VoiceOver while for desktop it is Windows with NVDA or JAWS. If you don't have access to those, testing with whatever you have is still valuable. So here are some tips for VoiceOver on desktop:</li>
            </ol>

            <h2>Visuals</h2>
            <ol class="list-decimal	ml-4">
              <li></li>
            </ol>


            <h2>Zooming</h2>
            <ol class="list-decimal	ml-4">
              <li></li>
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
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default TaskPage

export const Head = () => <title>Workshop tasks | Testing for accessibility</title>
