import * as React from 'react';
import Layout from '../components/Layout';

const ResourcePage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em] lg:mx-auto">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Resources
            </h1>
            <div>
              <ul>
                <li>
                  <a href="https://www.w3.org/WAI/ARIA/apg/">ARIA Authoring Practices</a>
                </li>
                <li>
                  <a href="https://www.w3.org/WAI/WCAG21/quickref/">How to Meet WCAG (Quick Reference)</a>
                </li>
                <li>
                  <a href="https://accessibility.huit.harvard.edu/describe-content-images">Write helpful Alt Text to describe images</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default ResourcePage;

export const Head = () => <title>Resources | Testing for accessibility</title>
