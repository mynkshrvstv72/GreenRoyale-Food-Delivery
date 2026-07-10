import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0d2f1c",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "80px" }}>404</h1>

      <h2>Page Not Found</h2>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#ffb300",
          color: "#000",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;