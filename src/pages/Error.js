import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops its a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back to home
        </Link>
      </div>
    </section>
  );
}
