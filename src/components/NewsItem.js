import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="mx-2 my-2">
      <div
        className="card"
        style={{
          color: "antiquewhite",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(51,44,57,1)74%)",
        }}
      >
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <a
              href={newsUrl}
              className="btn btn-sm btn-outline-danger p-2 mb-2"
            >
              Full Article
            </a>
            <p className="card-text mt-2">
              <small style={{ color: "antiquewhite" }}>
                Published At: {new Date(date).toGMTString()}
              </small>
            </p>
            <p className="card-text mt-2">
              <small style={{ color: "antiquewhite" }}>
                Authored By: {author ? author : "unknown"}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
