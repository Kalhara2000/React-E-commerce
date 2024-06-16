import React from "react";
import "./News.css";

export default function News() {
  return (
    <div>
      <main>
        <h1>News Page</h1>
        <div className="news-container">
          <article className="news-item">
            <h2>News Title 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
              amet turpis vel lorem feugiat consequat.
            </p>
          </article>
          <article className="news-item">
            <h2>News Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
              amet turpis vel lorem feugiat consequat.
            </p>
          </article>
          <article className="news-item">
            <h2>News Title 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
              amet turpis vel lorem feugiat consequat.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
