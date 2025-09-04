export const professionalBlock = [
  {
    id: 10,
    title: "Renditeliegenschaften",
    price: 69,
  },
  {
    id: 11,
    title: "Mehrfamilienhaus",
    price: 69,
  },
  {
    id: 12,
    title: "Verpfändung & Vorsorgeguthaben",
    price: 69,
  },
  {
    id: 13,
    title: "Eigenmietwert & Grundstückgewinnsteuer",
    price: 69,
  },
  {
    id: 14,
    title: "Bauland",
    price: 69,
  },
  {
    id: 15,
    title: "Kreditverträge & Produktvereinbarung",
    price: 69,
  },
];

export const expertBlock = [
  {
    id: 21,
    title: "Hypothekarmodelle & Strukturierung Hypothek",
    price: 89,
  },
  {
    id: 22,
    title: "Baurecht",
    price: 89,
  },
  {
    id: 23,
    title: "Büro & Gewerbe",
    price: 89,
  },
  {
    id: 24,
    title: "Schuldbriefe",
    price: 89,
  },
  {
    id: 25,
    title: "Reservations- und Kaufvertrag",
    price: 89,
  },
  {
    id: 26,
    title: "Renovationen & Umbau",
    price: 89,
  },
  {
    id: 27,
    title: "Wohnrecht & Nutzniessung",
    price: 89,
  },
  {
    id: 28,
    title: "Eigenleistungen",
    price: 89,
  },
];

export const getCourses = function (t: (key: string) => string) {
  return [
    {
      id: 1,
      title: t("course.assessment.title"),
      description: t("course.assessment.description"),
      price: 499,
      categories: [
        "Der Hypothekarmarkt",
        "Verkehrswertschätzung",
        "Regulatorische Vorgaben",
        "Tragbarkeitsberechnung",
        "Refinanzierungsgeschäft",
        "Neufinanzierungsgeschäft",
        "Unterlagen für Hypothekarfinanzierung",
        "Plattform «Chamäleon - H»",
      ],
      tags: [t("course.tags.4weeks"), t("course.tags.beginner")],
    },
    {
      id: 2,
      title: t("course.professional.title"),
      description: t("course.professional.description"),
      price: 345,
      categories: [
        "Renditeliegenschaften",
        "Mehrfamilienhaus",
        "Verpfändung & Vorsorgeguthaben",
        "Kreditverträge & Produktvereinbarung",
        "Bauland",
        "Eigenmietwert & Grundstückgewinnsteuer",
      ],
      tags: [t("course.tags.3weeks"), t("course.tags.advanced")],
    },
    {
      id: 3,
      title: t("course.expert.title"),
      description: t("course.expert.description"),
      price: 534,
      categories: [
        "Hypothekarmodelle & Strukturierung Hypothek",
        "Baurecht",
        "Büro & Gewerbe",
        "Schuldbriefe",
        "Reservations- und Kaufvertrag",
        "Renovationen & Umbau",
        "Wohnrecht & Nutzniessung",
        "Eigenleistungen",
      ],
      tags: [t("course.tags.4weeks"), t("course.tags.advanced")],
    },
  ];
};

// export const getProfessionalBlock = function (t: (key: string) => string) {
//   return [
//     { id: 10, title: t("course.professionalBlock.0"), price: 69 },
//     { id: 11, title: t("course.professionalBlock.1"), price: 69 },
//     { id: 12, title: t("course.professionalBlock.2"), price: 69 },
//     { id: 13, title: t("course.professionalBlock.3"), price: 69 },
//     { id: 14, title: t("course.professionalBlock.4"), price: 69 },
//     { id: 15, title: t("course.professionalBlock.5"), price: 69 },
//   ];
// };

// export const getExpertBlock = function (t: (key: string) => string) {
//   return [
//     { id: 21, title: t("course.expertBlock.0"), price: 89 },
//     { id: 22, title: t("course.expertBlock.1"), price: 89 },
//     { id: 23, title: t("course.expertBlock.2"), price: 89 },
//     { id: 24, title: t("course.expertBlock.3"), price: 89 },
//     { id: 25, title: t("course.expertBlock.4"), price: 89 },
//     { id: 26, title: t("course.expertBlock.5"), price: 89 },
//     { id: 27, title: t("course.expertBlock.6"), price: 89 },
//     { id: 28, title: t("course.expertBlock.7"), price: 89 },
//   ];
// };
