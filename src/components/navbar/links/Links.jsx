import Link from "next/link";
import React from "react";

function Links() {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
