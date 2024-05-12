import React from "react";

function BlogLayout({ children }) {
  return (
    <div>
      <h2>This is the blog layout</h2>
      {children}
    </div>
  );
}

export default BlogLayout;
