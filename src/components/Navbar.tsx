import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
        fontSize: "1.2rem",
        borderRadius: "1rem",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          transition: "color 0.3s ease",
        }}
      >
        NewsAPI
      </Link>
    </div>
  )
}

export default Navbar
