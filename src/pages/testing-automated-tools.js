import * as React from 'react';
import Layout from '../components/Layout';

const AutomatedToolPage = () => {

  return (
    <Layout>
      <main>
        <div class="main-wrapper">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Testing pages with automated tools
            </h1>
            <div>
              <p>There are a lot of automated tools out there. Many of them achieve the same results, but their user experience varies.</p>
              <p>According to deque in a blog post from 2021, their automated testing tool can identify 57% of digital accessibility issues. If true, that is quite a lot. Though manual testing is still needed. The common belief is that automated tools can find about 20-30 percent. </p>
              <h2>Some of my favorite tools</h2>
              <ul>
                <li>
                  SiteImprove is available both as a whole service to crawl your entire site and as a browser plugin
                </li>
                <li>
                  Chrome and Edge have Lighthouse built-in
                </li>
                <li>
                  Firefox also has some accessibility tools by preventDefault
                </li>
                <li>
                  <a href="https://wave.webaim.org/">WebAIM's WAVE</a> (Web Accessibility Evaluation Tool)
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
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AutomatedToolPage;

export const Head = () => <title>Testing pages with automated tools | Testing for accessibility</title>
