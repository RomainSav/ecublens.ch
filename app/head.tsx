const Head = () => {
  const tags = {
    title: "Ville d'Ecublens",
    description: "La Ville d'Ecublens est située dans le district de l'Ouest Lausannois dans le canton de Vaud.",
    url: "https://ecublens.romainsav.ch/",
    siteName: "Ville d'Ecublens"
  };

  return (
    <>
      <title>{tags.title}</title>
      <meta name="title" content={tags.title} />
      <meta name="description" content={tags.description} />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="icon" href="/favicon.ico" />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta charSet="utf-8" />

      {/* Open Graph */}
      <meta name="og:title" content={tags.title} />
      <meta name="og:description" content={tags.description} />
      <meta name="og:url" content={tags.url} />
      <meta name="og:locale" content="fr_FR" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content={tags.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={tags.url} />
      <meta name="twitter:title" content={tags.title} />
      <meta name="twitter:description" content={tags.description} />
    </>
  )
}

export default Head;