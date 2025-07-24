const menu = [
  {
    title: 'Vorspeisen',
    image: './assets/img/starters.webp',
    items: [
      {
        name: 'Satay Gai',
        price: 6.9,
        description: 'Gegrillte Hähnchenspießen mit Erdnusssauce.',
      },
      {
        name: 'Frühlingsrollen',
        price: 4.5,
        description: 'Knusprig gefüllt mit Gemüse und Glasnudeln.',
      },
      {
        name: 'Tom Yum Gung',
        price: 5.9,
        description: 'Scharf-saure Garnelensuppe mit Zitronengras.',
      },
      {
        name: 'Gyoza',
        price: 5.5,
        description: 'Knusprige Teigtaschen mit Gemüsefüllung und Sojasauce.',
      },
      {
        name: 'Edamame',
        price: 4.2,
        description: 'Gedämpfte Sojabohnen, leicht gesalzen.',
      },
      {
        name: 'Glasnudelsalat',
        price: 6.2,
        description: 'Frischer Glasnudelsalat mit Koriander, Limette und Erdnüssen.',
      },
    ],
  },
  {
    title: 'Hauptgerichte',
    image: './assets/img/main.webp',
    items: [
      {
        name: 'Pad Thai',
        price: 11.9,
        description: 'Gebratene Reisnudeln mit Ei, Gemüse, Erdnüssen und Hähnchen oder Tofu.',
      },
      {
        name: 'Gaeng Daeng (Rotes Curry)',
        price: 12.9,
        description: 'Rotes Curry mit Kokosmilch, Hähnchen und Gemüse.',
      },
      {
        name: 'Khao Pad',
        price: 10.9,
        description: 'Gebratener Jasminreis mit Ei, Frühlingszwiebeln und wahlweise Huhn oder Tofu.',
      },
      {
        name: 'Massaman Curry',
        price: 13.5,
        description: 'Mildes Curry mit Kartoffeln, Erdnüssen, Zwiebeln und Rindfleisch.',
      },
      {
        name: 'Gebratener Lachs mit Thai-Gemüse',
        price: 14.9,
        description: 'Lachsfilet auf knackigem Wokgemüse mit Limettensauce.',
      },
      {
        name: 'Ente süß-sauer',
        price: 15.9,
        description: 'Knusprige Ente mit fruchtig-süßer Sauce und Ananas.',
      },
    ],
  },
  {
    title: 'Desserts',
    image: './assets/img/desserts.webp',
    items: [
      {
        name: 'Mango Sticky Rice',
        price: 5.9,
        description: 'Süßer Klebreis mit frischer Mango und Kokosmilch.',
      },
      {
        name: 'Thai-Kokos-Pudding',
        price: 4.5,
        description: 'Cremiger Pudding mit Kokosmilch und Tapioka.',
      },
      {
        name: 'Frittierte Banane',
        price: 4.9,
        description: 'Mit Honig und Sesam, außen knusprig, innen weich.',
      },
      {
        name: 'Sesambällchen',
        price: 4.2,
        description: 'Klebreisbällchen mit roter Bohnenpaste, umhüllt von Sesam.',
      },
      {
        name: 'Lychee Sorbet',
        price: 4.8,
        description: 'Erfrischendes Sorbet aus Litschi-Frucht.',
      },
    ],
  },
  {
    title: 'Veggie & Vegan',
    image: './assets/img/vegan.webp',
    items: [
      {
        name: 'Grünes Curry mit Tofu',
        price: 11.9,
        description: 'Würziges Kokoscurry mit Gemüse und Tofu.',
      },
      {
        name: 'Gemüsewok mit Erdnusssauce',
        price: 10.9,
        description: 'Frisches Wokgemüse in cremiger Erdnusssauce.',
      },
      {
        name: 'Auberginen-Basilikum-Wok',
        price: 11.2,
        description: 'Gebratene Auberginen mit Thai-Basilikum, Chili und Knoblauch.',
      },
      {
        name: 'Vegane Glasnudelsuppe',
        price: 8.9,
        description: 'Klare Suppe mit Glasnudeln, Tofu und Frühlingsgemüse.',
      },
    ],
  },
  {
    title: 'Scharfe Spezialitäten',
    image: './assets/img/spicy.webp',
    items: [
      {
        name: 'Som Tam',
        price: 7.9,
        description: 'Scharfer Papayasalat mit Limette, Chili und Erdnüssen.',
      },
      {
        name: 'Thai-Basilikum-Huhn',
        price: 12.5,
        description: 'Gebratenes Huhn mit Thai-Basilikum, Chili und Knoblauch.',
      },
      {
        name: 'Nam Tok Rind',
        price: 13.9,
        description: 'Scharfer Rindfleischsalat mit frischen Kräutern, Limette und Chili.',
      },
      {
        name: 'Pad Prik King',
        price: 12.2,
        description: 'Gebratene grüne Bohnen mit roter Currypaste und Erdnüssen.',
      },
    ],
  },
  {
    title: 'Getränke',
    image: './assets/img/drinks.webp',
    items: [
      {
        name: 'Thai Iced Tea',
        price: 3.5,
        description: 'Gesüßter schwarzer Tee mit Kondensmilch und Eis.',
      },
      {
        name: 'Kokoswasser',
        price: 3.0,
        description: 'Erfrischend direkt aus der Kokosnuss.',
      },
      {
        name: 'Lemongras-Limo',
        price: 3.2,
        description: 'Hausgemachte Limonade mit Zitronengras und Limette.',
      },
      {
        name: 'Lychee Limo',
        price: 3.5,
        description: 'Spritzige Limonade mit Litschi und Minze.',
      },
      {
        name: 'Ingwertee (heiß oder kalt)',
        price: 2.9,
        description: 'Frisch aufgebrühter Ingwertee, wahlweise heiß oder auf Eis.',
      },
    ],
  },
];

let cart = [];
