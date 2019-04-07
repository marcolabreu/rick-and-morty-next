import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://rickandmortyapi.com', label: 'Rick and Morty API' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a><i className="material-icons">first_page</i></a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/">
          <a><i className="material-icons">chevron_left</i></a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About the app</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href} target="_blank">
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <li>
        <Link prefetch href="/">
          <a><i className="material-icons">chevron_right</i></a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/">
          <a><i className="material-icons">last_page</i></a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
