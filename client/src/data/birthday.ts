// Style reminder: this data layer feeds the quiet love-letter experience. Keep copy personal, concise, and easy to swap without changing layout code.

export type QuizOption = {
  id: string;
  name: string;
  image: string;
};

export type MovieQuiz = {
  id: string;
  title: string;
  mood: string;
  statement: string;
  image: string;
  objectPosition: string;
  correctId: string;
  options: QuizOption[];
};

const hostedAsset = (filename: string) => {
  const hostname = typeof window === "undefined" ? "" : window.location.hostname;
  const isManusPreview = hostname === "localhost" || hostname.includes("manus");
  return isManusPreview ? `/manus-storage/${filename}` : `/assets/${filename}`;
};

const placeholderPortraits = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=560&q=82",
];

const suppliedMovieAssets = {
  alexis: hostedAsset("alexis-portrait_aabe04b4.jpg"),
  bonesCard: hostedAsset("bones-and-all-card_40d8f21c.jpg"),
  charlie: hostedAsset("charlie-portrait_a5f61f17.jpg"),
  emily: hostedAsset("emily-portrait_994bc573.jpg"),
  lee: hostedAsset("lee-portrait_21a80521.jpg"),
  maren: hostedAsset("maren-portrait_e0e09eaa.jpg"),
  patrick: hostedAsset("patrick-portrait_805154ca.jpg"),
  perksCard: hostedAsset("perks-of-being-a-wallflower-card_3bbd0ef6.jpg"),
  sam: hostedAsset("sam-portrait_eb9b0e72.jpg"),
  sully: hostedAsset("sully-portrait_f44ea4e7.jpg"),
  tyler: hostedAsset("tyler-portrait_5bde1878.jpg"),
  wavesCard: hostedAsset("waves-card_b44f20fc.jpg"),
  tvGirl1: hostedAsset("TV-Girl1_bacbbce6.jpg"),
  tvGirl2: hostedAsset("TV-Girl2_c49a4f38.jpg"),
  tvGirl3: hostedAsset("TV-Girl3_c728f869.jpg"),
  tvGirlForeground: hostedAsset("tvgirl_a69c2618.png"),
};

export const birthdayContent = {
  logo: hostedAsset("clara-flower-mark_008578ec.png"),
  heroImage: hostedAsset("clara-hero-botanical_22a8aff1.jpg"),
  movieImage: hostedAsset("clara-movie-triptych_2e3177b6.jpg"),
  sushiImage: hostedAsset("clara-sushi_bb7a6b6c.jpg"),
  italyImage: hostedAsset("clara-italy_96316a1f.jpg"),
  bandImage: suppliedMovieAssets.tvGirlForeground,
  flowerImages: [
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=86",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=86",
  ],
  italyDetails: [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=84",
    "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=700&q=84",
  ],
  bandImages: [suppliedMovieAssets.tvGirl1, suppliedMovieAssets.tvGirl2, suppliedMovieAssets.tvGirl3],
  letter:
    "I really appreciate u for being so patient here. ik its not easy aise. ngl we both thought we wouldnt work after you realised how forgetful i am but at the end of the day we still love each other. Je vous aime",
  movies: [
    {
      id: "waves",
      title: "Waves",
      mood: "big feelings, blue hours",
      statement: "Most likely to make a terrible decision while genuinely believing it’s the right thing to do.",
      image: suppliedMovieAssets.wavesCard,
      objectPosition: "center center",
      correctId: "tyler",
      options: [
        { id: "tyler", name: "Tyler", image: suppliedMovieAssets.tyler },
        { id: "emily", name: "Emily", image: suppliedMovieAssets.emily },
        { id: "alexis", name: "Alexis", image: suppliedMovieAssets.alexis },
      ],
    },
    {
      id: "bones",
      title: "Bones and All",
      mood: "strange roads, soft hearts",
      statement: "Would probably be the hardest person to completely figure out, even after knowing them for years.",
      image: suppliedMovieAssets.bonesCard,
      objectPosition: "center center",
      correctId: "sully",
      options: [
        { id: "lee", name: "Lee", image: suppliedMovieAssets.lee },
        { id: "maren", name: "Maren", image: suppliedMovieAssets.maren },
        { id: "sully", name: "Sully", image: suppliedMovieAssets.sully },
      ],
    },
    {
      id: "perks",
      title: "The Perks of Being a Wallflower",
      mood: "mixtapes, growing up",
      statement: "Best at making everyone else feel understood while quietly having their own problems.",
      image: suppliedMovieAssets.perksCard,
      objectPosition: "center center",
      correctId: "patrick",
      options: [
        { id: "patrick", name: "Patrick", image: suppliedMovieAssets.patrick },
        { id: "sam", name: "Sam", image: suppliedMovieAssets.sam },
        { id: "charlie", name: "Charlie", image: suppliedMovieAssets.charlie },
      ],
    },
  ] satisfies MovieQuiz[],
};
