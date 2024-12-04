export default ({ title, children }: Lume.Data) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Kot's Website" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://kot.pink" />
      <meta property="og:image" content="https://kot.pink/img/avatar.jpg" />
      <meta name="theme-color" content="#ec4899" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />

      <link rel="sitemap" href="/sitemap-index.xml" />
      <link rel="me" href="https://awau.social/@kot" />
      <link rel="webmention" href="https://webmention.io/kot.pink/webmention" />

      <link rel="stylesheet" href="/fonts.css" />
      <link rel="stylesheet" href="/site.css" />
    </head>
    <body class="bg-neutral-950 font-sans text-white">{children}</body>
  </html>
);
