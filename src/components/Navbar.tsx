import React from "react"
import { Link } from "react-router-dom"

const headerNav = [
  {
    display: "Indonesia News",
    path: "/id",
  },
  {
    display: "United Stated News",
    path: "/us",
  },
]

const Navbar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        backgroundColor: "#333",
        color: "#fff",
        fontSize: "1.2rem",
        borderRadius: "0.5rem",
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
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {headerNav.map((e, i) => (
          <li
            key={i}
            style={{
              marginRight: "1rem",
            }}
          >
            <Link
              to={e.path}
              style={{ color: "white", textDecoration: "none" }}
            >
              {e.display}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
