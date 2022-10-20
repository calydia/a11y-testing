import * as React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

export default function Header() {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              id
            }
          }
        }
      }
    `
  );

  return (
    <div>
      <div className="site-name">
        Testing for accessibility
      </div>

      <nav>
        <ul className="nav-list">
          {data.site.siteMetadata.menuLinks.map((item) => {
            return (
              <li className="main-menu-item" key={item.id}>
                <Link
                  to={item.link}
                  activeClassName="active"
                  partiallyActive={ item.id === 'menu-1' ? false : true }
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
