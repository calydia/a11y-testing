import * as React from 'react';
import Layout from '../components/Layout';

const AutomatedToolPage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em] lg:mx-auto">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Testing pages with automated tools
            </h1>
            <div>
              <p>There are a lot of automated tools out there. Many of them achieve the same results, but their user experience varies.</p>
              <p>According to Deque in a blog post from 2021, their automated testing tool can identify 57% of digital accessibility issues. If true, that is quite a lot. Though manual testing is still needed. The common belief is that automated tools can find about 20-30 percent. </p>
              <h2>Some of my favorite tools</h2>
              <ul>
                <li>
                  Siteimprove is available both as a whole service to crawl your entire site and as a browser plugin
                </li>
                <li>
                  Chrome and Edge have Lighthouse built-in
                </li>
                <li>
                  Firefox also has some accessibility tools by default
                </li>
                <li>
                  <a href="https://www.deque.com/axe/">Deque's axe</a>
                </li>
                <li>
                  <a href="https://squizlabs.github.io/HTML_CodeSniffer/">HTML_Codesniffer bookmarklet</a>
                </li>
              </ul>
                <p>Pick one automated tool and take a look at this site to see what kind of errors the automated tool will find. It will find most of the mistakes added to this site.</p>
                <h4>Code validity</h4>
                <p>Remember to also check your code with a markup validator, like <a href="https://validator.w3.org/">The W3C Markup Validation Service</a>. Valid and semantically correct HTML is a huge part of accessible web development. You can avoid several problems just by using the correct elements and the default functionalities for them.</p>
              <h6></h6>
              <p></p>
            </div>

            <div class="mt-12 lg:-ml-12 lg:-mr-12 p-12 border-solid border-4 border-lt-code-border dark:border-dk-code-border">
              <h2 class="mt-0 mb-8">Your tasks</h2>
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
export default AutomatedToolPage;

export const Head = () => <title>Testing pages with automated tools | Testing for accessibility</title>
