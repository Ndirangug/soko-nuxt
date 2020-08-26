export default async (context, locale) => {
  await resolve({
    links: {
      home: 'Accueil',
      about: 'À propos',
      english: 'Version Anglais',
      french: 'Version Française',
    },
    home: {
      title: 'Bienvenue',
      introduction: "Ceci est un texte d'introduction en Français.",
    },
    about: {
      title: 'À propos',
      introduction:
        "Cette page est faite pour vous donner plus d'informations.",
    },
  })
}
