import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from 'gatsby-plugin-theme-switcher';
import ThemeSwitcher from './themeSwitcher';

const Layout = ({ location, title, children }) => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div style={{ position: "relative" }}>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
      <ThemeSwitcher theme={theme} setTheme={switchTheme} />
      </div>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
