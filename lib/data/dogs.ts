import { Dog } from "../types";

export const dogs: Dog[] = [
  {
    slug: "kaito",
    callName: "Kaito",
    registeredName: "Yujira Sou Kaito Go",
    japaneseName: "海斗",
    sex: "Male",
    dateOfBirth: "2021-03-15",
    color: "Sesame (Goma)",
    breeder: "Yujira Sou",
    sire: "Takeshi Go of Shikoku Mountain",
    dam: "Yujira Sou Hana Go",
    titles: ["NIPPO CH", "AKC FSS", "IABCA CH"],
    healthTests: [
      { name: "OFA Hips", result: "Good" },
      { name: "OFA Patellas", result: "Normal" },
      { name: "OFA Eyes", result: "Clear" },
      { name: "GM1 Gangliosidosis", result: "Clear" },
    ],
    bio: "Kaito is our foundation male — a dog of exceptional structure and steady temperament. He embodies the Shikoku ideal: alert, athletic, and quietly confident. His movement is effortless, covering ground with the easy reach and drive that speaks to proper angulation and conditioning. In the home, he is calm and watchful. In the field, he is tireless.",
    achievements: [
      "NIPPO Grand National — Excellent rating",
      "First Shikoku Ken to earn IABCA International Champion in Northern California",
      "Multiple Best of Breed wins at AKC Open Shows",
    ],
    featured: true,
  },
  {
    slug: "suki",
    callName: "Suki",
    registeredName: "Yujira Sou Suki Go",
    japaneseName: "好き",
    sex: "Female",
    dateOfBirth: "2021-06-22",
    color: "Red Sesame (Aka-Goma)",
    breeder: "Yujira Sou",
    sire: "Takeshi Go of Shikoku Mountain",
    dam: "Yujira Sou Hana Go",
    titles: ["NIPPO Excellent", "AKC FSS"],
    healthTests: [
      { name: "OFA Hips", result: "Good" },
      { name: "OFA Patellas", result: "Normal" },
      { name: "OFA Eyes", result: "Clear" },
      { name: "GM1 Gangliosidosis", result: "Clear" },
    ],
    bio: "Suki is Kaito's littermate and our primary breeding female. Where Kaito is deliberate, Suki is quick — she has the keen alertness and sharp intelligence that the Shikoku is known for. Her structure is feminine and balanced, with a beautiful head and correct proportions throughout. She is deeply bonded to her people while maintaining the independent spirit that defines the breed.",
    achievements: [
      "NIPPO Regional — Excellent rating",
      "AKC Open Show — multiple Best of Opposite Sex",
    ],
    featured: true,
  },
  {
    slug: "ren",
    callName: "Ren",
    registeredName: "Kinokuni Ren Go",
    japaneseName: "蓮",
    sex: "Male",
    dateOfBirth: "2020-01-10",
    color: "Black Sesame (Kuro-Goma)",
    breeder: "Kinokuni Kensha",
    sire: "Kinokuni Daichi Go",
    dam: "Kinokuni Momiji Go",
    titles: ["NIPPO CH", "JKC CH"],
    healthTests: [
      { name: "OFA Hips", result: "Excellent" },
      { name: "OFA Patellas", result: "Normal" },
      { name: "OFA Eyes", result: "Clear" },
      { name: "GM1 Gangliosidosis", result: "Clear" },
    ],
    bio: "Ren is a Japanese import and our outcross male. Bred by the respected Kinokuni Kensha in Kochi Prefecture, he brings mountain-bred vigor and correct Nihon Ken type. His dark sesame coat and powerful frame speak to his working heritage. Ren has a quiet dignity that earns respect from every dog he meets — he is never reactive, never uncertain. He is simply present.",
    achievements: [
      "JKC Champion — finished in three shows",
      "NIPPO Grand National qualifier",
      "Imported from Kochi Prefecture, Japan",
    ],
  },
  {
    slug: "mochi",
    callName: "Mochi",
    registeredName: "Yujira Sou Mochi Go",
    japaneseName: "餅",
    sex: "Female",
    dateOfBirth: "2023-05-01",
    color: "Sesame (Goma)",
    breeder: "Yujira Sou",
    sire: "Kinokuni Ren Go",
    dam: "Yujira Sou Suki Go",
    titles: [],
    healthTests: [
      { name: "OFA Hips", result: "Pending" },
      { name: "GM1 Gangliosidosis", result: "Clear" },
    ],
    bio: "Mochi is the future of Yujira Sou. The best of both her parents — Ren's substance and correct type combined with Suki's elegance and keen expression. Still maturing, she already shows the balanced structure and confident temperament we breed for. We look forward to watching her develop.",
    achievements: [
      "Yujira Sou's first Ren x Suki offspring",
    ],
  },
];

export function getDogBySlug(slug: string): Dog | undefined {
  return dogs.find((d) => d.slug === slug);
}

export function getAllDogSlugs(): string[] {
  return dogs.map((d) => d.slug);
}
