import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {

  return (
    <Layout>
      <main>
        <div className="my-8 mx-4 max-w-[80em] lg:mx-auto">
          <div className="mx-auto max-w-[40em]">
            <h1 id="skip-target">
              Welcome to testing for accessibility!
            </h1>
            <div>
              <p>Check out the pages on this site. Each page focuses on a specific topic. There is a bit of information and tips on the page as well as some problems for you to find.</p>
              <p>Nothing beats real-life examples, so if you have some good test sites available to you, you can go ahead and use those to do the testing.</p>
              <p>We aren't focusing on the WCAG criteria or accessibility auditing here, but more on the common things to look out for while you are designing and developing websites. I've gathered more information on my <a href="https://a11y.sanna.ninja">accessibility site</a>, if you want to learn more, you can continue there.</p>
              <p>Nice to see you here. Welcome, and I hope you have fun!</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Welcome to testing for accessibility! | Testing for accessibility</title>
