import React from 'react'

export const Header = () => {
  return (
    <header className="header-section">
      <div className="project-overlay" />
      <div className="header-content" />

      <div className="header-text">
        <div className="presentation">
          <p className="portfolio-name">Portfolio: <span>Kim Svensson</span></p>
          <h1 className="frontend-developer">frontend developer</h1>
          <h2>+ administration</h2>
        </div>
      </div>
    </header>
  )
}