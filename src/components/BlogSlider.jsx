// BlogSlider.js
import React from "react";

const blogs = [
  { title: "Blog 1", description: "Blog description 1", img: "blog1.jpg" },
  { title: "Blog 2", description: "Blog description 2", img: "blog2.jpg" },
  { title: "Blog 3", description: "Blog description 3", img: "blog3.jpg" },
];

function BlogSlider() {
  return (
    <div className="container-fluid">
      <div className="art-section-title">
        <div className="art-title-frame">
          <h4>Newsletter</h4>
        </div>
      </div>
      <div className="art-blog-slider">
        {blogs.map((blog, idx) => (
          <div key={idx} className="art-a art-card">
            <img src={`img/blog/${blog.img}`} alt={blog.title} />
            <div className="art-card-body">
              <h5>{blog.title}</h5>
              <p>{blog.description}</p>
              <a href="#." className="art-link art-color-link art-w-chevron">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSlider;
