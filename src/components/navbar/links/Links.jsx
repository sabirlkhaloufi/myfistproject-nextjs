import Link from "next/link";
import React from "react";

function Links() {
  const links = [
    {
      url: "/",
      title: "home",
    },
    {
      url: "/about",
      title: "about",
    },

    {
      url: "/contact",
      title: "contact",
    },
    {
      url: "/blog",
      title: "blog",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.url} key={link.url}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
