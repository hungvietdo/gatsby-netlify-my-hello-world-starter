import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: "1200px",
  margin: "0 auto"
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#1976d2"
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.25rem",
  lineHeight: 1.6
}

const buttonStyles = {
  backgroundColor: "#1976d2",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "4px",
  fontSize: "1rem",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block"
}

export default function Home() {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hello World from Trader Interactive Dealer Website
      </h1>
      <p style={paragraphStyles}>
        This is a simple homepage built with Gatsby and React. 
        You can customize this page to showcase your content, projects, or business.
      </p>
      <p style={paragraphStyles}>
        <strong>Features:</strong>
      </p>
      <ul style={paragraphStyles}>
        <li>Fast performance with Gatsby</li>
        <li>React components</li>
        <li>Responsive design</li>
        <li>Easy to customize</li>
      </ul>
      <a href="#" style={buttonStyles} onClick={(e) => {
        e.preventDefault()
        alert("Welcome to your homepage!")
      }}>
        Get Started
      </a>
    </main>
  )
}
