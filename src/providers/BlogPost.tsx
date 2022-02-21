import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import React from "react";
import { StaticPost } from "../types";

export const BlogPost: React.FC<{ meta: StaticPost }> = (p) => {
  const { children, meta } = p;
  const { description, src } = meta;

  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <meta name="author" content={p.meta.author}></meta>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title}></meta>
        <meta property="og:description" content={description}></meta>
        {/* <meta property="og:image" content={imageSrc}></meta> */}
        {/* <meta property="og:image:secure_url" content={imageSrc} /> */}

        <meta name="twitter:title" content={meta.title}></meta>
        <meta name="twitter:description" content={description}></meta>
        {/* <meta name="twitter:image:src" content={imageSrc}></meta> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        {/* <meta name="twitter:site" content="@pilarenko"></meta> */}
      </Head>
      <MDXProvider>{children}</MDXProvider>
    </main>
  );
};
