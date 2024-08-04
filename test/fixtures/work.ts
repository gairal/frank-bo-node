import { Timestamp } from "@google-cloud/firestore";

import type { FirestoreWork } from "../../src/types/work";

export const workFixture = (): FirestoreWork[] => [
  {
    achievements: [
      {
        description:
          "Currently contributing to GraphQL APIs and NestJS/React applications",
      },
      {
        description:
          "Moved across most of the engineering teams in the organization, started in the front-end, client-facing one, migrated to the back-end, core API team to finally end up building and being tech lead / scrum master on the first feature-based, cross-stack team",
      },
      {
        description:
          "Focus on consistency, automation and scalability in our fast growing team",
        highlights: [
          "As a strong proponent of switching our code base from JS to TypeScript, I wrote the first TS library in the organization and migrated ~25%+ of the codebase to TS",
          "Migrated our unit tests from Mocha/Chai to Jest for consistency across front and back-end teams. Strongly enforcing unit testing any new contributions",
          "Significantly increased and enforced our linting rules and set up automated linter execution on CI, increasing scalability and fluency across teams",
        ],
      },
      {
        description:
          "Designed and rewrote our vehicle inventories’ ingestion flow from poll-based to pushed-based, transitioning from a twice-a-day synchronization of our database to an on-demand one",
      },
      {
        description:
          "Implemented automatic versioning through CI/CD on all our libraries saving hours of conflict merging on our pull requests due to conflicting manual version editing",
      },
      {
        description:
          "Designed and created our “vendor APIs” client library, offering a single consistent request API and response envelope for all our external API call needs",
      },
    ],
    company: "AutoFi",
    dateIn: Timestamp.fromDate(new Date("2019-04-01")),
    description:
      "AutoFi is an e-commerce software platform that moves the point of sales to wherever consumers prefer to shop for and buy vehicles.",
    id: "1",
    image: "autofi.png",
    place: "San Francisco",
    title: "Senior/lead full-stack",
    website: "https://www.autofi.com/",
  },
  {
    achievements: [
      {
        description:
          "Rewrote, re-architectured, and maintained an AI bot used as company directory on Slack (Node + IBM Watson)",
      },
      {
        description:
          "Designed and developed 4 client web applications (PHP, Twig, Tailwind CSS, Vanilla JS, Jest). E.g. download.havas.com",
      },
      {
        description:
          "Wrote business proposals and estimated workload for ~10 mid-size projects",
      },
    ],
    company: "Ekino",
    dateIn: Timestamp.fromDate(new Date("2018-01-01")),
    dateOut: Timestamp.fromDate(new Date("2018-12-31")),
    description:
      "Ekino is a digital marketing agency based in Paris. It is part of the Fullsix group.",
    id: "2",
    image: "ekino.png",
    place: "San Francisco",
    title: "Tech lead / Solution Architect",
    website: "https://www.ekino.com/",
  },
  {
    achievements: [
      {
        description:
          "Opened, built, and managed operations in a newly created agency in Vietnam",
      },
      {
        description:
          "Hired ~60 people  over 3 years including software developers (Java, PHP, front-end, automation testers, iOS/android), QC testers, and project managers",
      },
      {
        description:
          "Built and managed 5 teams, working in parallel on ~20 projects",
      },
      {
        description:
          "Designed technical solutions for dozens of business proposals, including some major agency wins: Wave Money, Renault, LCL, Mercialys, and Volkswagen",
      },
      {
        description:
          "Led and mentored team at every project level (conception, management, client communication, technical architecture, QA and code review)",
      },
      {
        description:
          "More than doubled workforce retention by implementing a knowledge sharing program: weekly presentations and/or coding challenges on new concepts and technologies",
      },
    ],
    company: "Ekino Viet Nam",
    dateIn: Timestamp.fromDate(new Date("2013-03-01")),
    dateOut: Timestamp.fromDate(new Date("2017-12-31")),
    description:
      "Ekino is a digital marketing agency based in Paris. It is part of the Fullsix group.",
    id: "3",
    image: "ekino.png",
    place: "Levallois / Ho Chi Minh",
    title: "Technical director",
    website: "http://www.ekino.com",
  },
  {
    accomplishments:
      '<h3>AGIPI (Insurance, saving, retirement)</h3><span class="projectFunction">Technical consultant, technical and functionnal conception</span><ul><li>B2B2C iPad app</li><li>B2B Trombinoscope on iPad</li></ul><h3>ERDF (Electric network distribution)</h3><span class="projectFunction">Pre-sale support</span><ul><li>Mobile website, Android and iOS app</li></ul><h3>Nespresso</h3><span class="projectFunction">Technical consultant, support on dynamisation</span><ul><li>Mobile website: <a href="https://m.nespresso.com/">m.nespresso.com</a></li></ul><h3>La Chaîne Météo (Leading French weather forecast media)</h3><span class="projectFunction">Technical consultant</span><ul><li>BlackBerry 10 app: pending...</li></ul><h3>SFR (Telecom operator)</h3><span class="projectFunction">Technical consultant, conception</span><ul><li>Conception and support on reforging their smartphone website rendering engine</li></ul>',
    achievements: [
      {
        description:
          "Led ~20 mobile projects for clients such as Dailymotion, Allociné, Yellow Pages, telecom operators, etc...",
        highlights: [
          "Functional and technical design, end-to-end project management (V-Model, Scrum), cost estimation, planning, client retention",
        ],
      },
      {
        description:
          "Became the company’s technical referent on a variety of subjects including video rendering and social plugins",
      },
    ],
    company: "Backelite",
    dateIn: Timestamp.fromDate(new Date("2009-01-04")),
    dateOut: Timestamp.fromDate(new Date("2013-02-06")),
    description:
      "Backelite is a major player on the mobile services development market in Europe.",
    id: "4",
    image: "bk.png",
    place: "Paris",
    title: "Project leader & technical consultant",
    website: "http://www.backelite.com",
  },
  {
    achievements: [
      {
        description:
          "Conceived and developed an ebooks trading webapp and its back-office (ASP.NET/C#, MS SQL Server)",
      },
    ],
    company: "Phonereader",
    dateIn: Timestamp.fromDate(new Date("2008-02-01")),
    dateOut: Timestamp.fromDate(new Date("2008-11-01")),
    description: "Development of mobile services, numeric ebooks edition.",
    id: "5",
    image: "phonereader.png",
    place: "Paris",
    title: "ASP.NET engineer - engineering school internships",
    website: "http://www.phonereader.fr",
  },
  {
    achievements: [
      {
        description:
          "Conceived and implemented a RSS feed aggregator (WPF application in C# + Silverlight website with a XML DB)",
      },
      {
        description:
          "Conceived and developed an airport passenger management application (C# + SQLServer)",
      },
    ],
    company: "EFREI",
    dateIn: Timestamp.fromDate(new Date("2007-09-03")),
    dateOut: Timestamp.fromDate(new Date("2008-05-31")),
    description: "Engineering school of IT and management.",
    id: "6",
    image: "efrei.png",
    name: "EFREI",
    place: "Villejuif",
    title: "School projects",
    website: "http://www.efrei.fr",
  },
  {
    achievements: [
      {
        description:
          "Created a community website for Orange Telecom to create and manage panels of about 10,000 testers of new products (ASP.NET/C#, MS SQL Server).",
      },
      {
        description: "Maintained and improved a mobile rendering engine in C#",
      },
    ],
    company: "Phonereader",
    dateIn: Timestamp.fromDate(new Date("2007-04-03")),
    dateOut: Timestamp.fromDate(new Date("2007-09-29")),
    description: "Development of mobile services, numeric ebooks edition.",
    id: "7",
    image: "phonereader.png",
    place: "Paris",
    title: "Designer & .NET developer - engineering school internships",
    website: "http://www.phonereader.fr",
  },
  {
    achievements: [
      {
        description:
          "Conceived and implemented a timesheeting client/server application with a log-in mechanism in PHP/MySQL",
      },
    ],
    company: "Alyzair",
    dateIn: Timestamp.fromDate(new Date("2005-07-02")),
    dateOut: Timestamp.fromDate(new Date("2005-07-30")),
    description:
      "ALYZAIR offers a comprehensive range of web-based flight data monitoring (FDM) services.",
    id: "8",
    image: "alyzair.png",
    place: "Rungis",
    title: "PHP developer - internship",
    website: "http://www.alyzair.fr",
  },
  {
    achievements: [
      {
        description:
          "Conceived and developed a VBA tool meant to automate the calculation of the sales team remuneration and bonuses (VBA + MS Access DB)",
      },
    ],
    company: "Orange / France Telecom",
    dateIn: Timestamp.fromDate(new Date("2005-01-04")),
    dateOut: Timestamp.fromDate(new Date("2005-03-01")),
    description:
      "Orange (formerly France Telecom). France Telecom brand for mobile, landline and Internet businesses.",
    id: "9",
    image: "orange.png",
    place: "Levallois",
    title: "VBA Access developer - BTS 2nd year internship",
    website: "http://www.orange.fr",
  },
  {
    achievements: [
      {
        description:
          "Conceived and implemented an VBA program to generate employees training Dashboards out of Excel datasources",
      },
    ],
    company: "RATP",
    dateIn: Timestamp.fromDate(new Date("2004-05-04")),
    dateOut: Timestamp.fromDate(new Date("2004-07-01")),
    description:
      "Régie Autonome des Transports Parisiens: French company operating Parisian public transports (Metro, Bus). I was based in the head office in Paris.",
    id: "10",
    image: "ratp.png",
    place: "Paris",
    title: "VBA Excel developer - BTS 1st year intern",
    website: "http://www.ratp.fr",
  },
];
