import { FirestoreWork } from "../../src/types/work";

export const workFixture = (): FirestoreWork[] => [
  {
    accomplishments: "...",
    dateIn: "2018-01-01T23:35:18.667Z",
    description:
      "Ekino is a digital marketing agency based in Paris. It is part of the Fullsix group.",
    id: "4874953371418624",
    image: {
      id: "5722646637445120",
      kind: "image",
      path: ["image", "5722646637445120"],
    },
    name: "Ekino",
    order: 0,
    place: "San Francisco",
    title: "Tech lead / Solution Architect",
    website: "https://www.ekino.com/",
  },
  {
    accomplishments:
      '<ul><li><span class="bold">Need:</span> Monthly automaticaly generated dashboards from raw Excel tables. Used by the Human Resources department concerning employee trainings.</li><li><span class="bold">Solution:</span> Creation in VBA of a generation tools of dashboards after the acquisition of the necessary data on Excel.</li></ul>',
    dateIn: "2004-05-04T00:48:52.000Z",
    dateOut: "2004-07-01T00:48:52.000Z",
    description:
      "Régie Autonome des Transports Parisiens: French company operating Parisian public transports (Metro, Bus). I was based in the head office in Paris.",
    id: "5631383682678784",
    image: {
      id: "5707702298738688",
      kind: "image",
      path: ["image", "5707702298738688"],
    },
    name: "RATP",
    order: 7,
    place: "Paris",
    title: "VBA Excel developer - BTS 1st year intern",
    website: "http://www.ratp.fr",
  },
  {
    accomplishments:
      '<h3>Allociné (Provide information on cinema and TV productions)</h3><span class="projectFunction">Project leader, technical and functionnal conception</span><ul><li>iPhone/iPad app: <a href="http://itunes.apple.com/fr/app/allocine/id351184863?mt=8">Itunes</a></li><li>Android app: <a href="https://play.google.com/store/apps/details?id=com.allocine.androidapp">Google Play</a></li><li>Windows Phone app: <a href="http://www.windowsphone.com/en-us/store/app/allocin%C3%A9/ac48ad21-a8d7-df11-a844-00237de2db9e">Zune</a></li><li>Mobile &amp; tablet website: pending...</li><li>HP Touchpad app</li><li>HP Photosmart Printer: <a href="https://h30495.www3.hp.com/detail/706.1">ePrint Center</a></li><li>+ international versions for Sensacine, Screenrush, Filmstarts, Beyazperde</li></ul><h3>Dailymotion</h3><span class="projectFunction">Project leader, technical and functionnal conception</span><ul><li>iPhone/iPad app: <a href="http://itunes.apple.com/fr/app/dailymotion-video-stream/id336978041?mt=8">Itunes</a></li><li>Android app: <a href="https://play.google.com/store/apps/details?id=com.dailymotion.dailymotion">Google Play</a></li><li>+ Android pre-install apps on smartphone sells by Orange Telecom</li><li>Windows Phone app: <a href="http://www.windowsphone.com/en-us/store/app/dailymotion/e7fcb197-cc2e-e011-854c-00237de2db9e">Zune</a></li><li>HP Touchpad and webOS app</li><li>Nokia QT app</li></ul><h3>Accor Hotels (World\'s leading hotel operator and market leader in Europe)</h3><span class="projectFunction">Technical consultant, front developer</span><ul><li>Mobile website: <a href="http://www.accorhotels.mobi/">accorhotels.mobi</a></li></ul><h3>BNP Cardif (Insurance sector of BNP PARIBAS group)</h3><span class="projectFunction">Technical consultant</span><ul><li>iPhone app: <a href="http://itunes.apple.com/fr/app/cardif-sante/id495158716?mt=8">Itunes</a></li></ul><h3>Pages Jaunes (French phone directory of businesses)</h3><span class="projectFunction">Project leader, technical and functionnal conception</span><ul><li>Mobile website V2 &amp; V3: <a href="http://pagesjaunes.fr/">pagesjaunes.fr</a></li><li>PVI mobile: <a href="http://www.pack-visibilite-internet.fr/">pack-visibilite-internet.fr</a></li></ul><h3>Fnac (International entertainment retail chain offering cultural and electronic products)</h3><span class="projectFunction">Technical consultant</span><ul><li>iPhone App: <a href="http://itunes.apple.com/fr/app/fnac/id377379474?mt=8">Itunes</a></li></ul><h3>Mappy (maps service)</h3><span class="projectFunction">Project leader, technical and functionnal conception</span><ul><li>Mobile rendering service adapted to the device capabilities</li></ul><h3>Eurosport (European television sport network)</h3><span class="projectFunction">Technical consultant, functionnal conception</span><ul><li>iPhone app: <a href="http://itunes.apple.com/fr/app/eurosport/id324021126?mt=8">Itunes</a></li><li>Android app: <a href="https://play.google.com/store/apps/details?id=com.eurosport">Google Play</a></li><li>Mobile website: <a href="http://m.eurosport.fr">m.eurosport.fr</a></li></ul><h3>France 24 / RFI (International news television and radio channel)</h3><span class="projectFunction">Technical consultant, functionnal conception</span><ul><li>iPhone/iPad app: <a href="http://itunes.apple.com/fr/app/france-24/id364379394?mt=8">Itunes</a></li><li>Android app: <a href="https://play.google.com/store/apps/details?id=com.france24.androidapp">Google Play</a></li></ul><h3>SNCF (France\'s national railway company)</h3><span class="projectFunction">Technical consultant, functionnal conception</span><ul><li>Mobile website: <a href="http://www.sncf.mobi/">sncf.mobi</a></li></ul><h3>Voyages SNCF (French internet travel agency, owned by SNCF)</h3><span class="projectFunction">Technical consultant</span><ul><li>Mobile website: <a href="http://voyages-sncf.mobi/">voyages-sncf.mobi</a></li></ul><h3>Française des jeux (Operator of France\'s national lottery games)</h3><span class="projectFunction">Technical consultant</span><ul><li>iPhone app: <a href="http://itunes.apple.com/fr/app/les-cotes/id360945239?mt=8">Itunes</a></li></ul><h3>eVOD (Project intended to create a French mobile video platform)</h3><span class="projectFunction">Technical consultant, story-board</span>',
    dateIn: "2009-04-02T02:44:23.000Z",
    dateOut: "2012-02-11T02:44:23.000Z",
    description:
      "Backelite is a major player on the mobile services development market in Europe.",
    id: "5636318331666432",
    image: {
      id: "5697423099822080",
      kind: "image",
      path: ["image", "5697423099822080"],
    },
    name: "Backelite",
    order: 2,
    place: "Paris",
    title: "Project leader & technical consultant",
    website: "http://www.backelite.com",
  },
  {
    accomplishments:
      '<ul><li><span class="bold">Need:</span> Controling and keeping track of employees\' schedules.</li><li><span class="bold">Solution:</span> Creation of a management and recording client/server tool coded in PHP/MySQL using a secured nominative connection.</li></ul>',
    dateIn: "2005-07-02T02:53:01.000Z",
    dateOut: "2005-07-30T02:53:01.000Z",
    description:
      "ALYZAIR offers a comprehensive range of web-based flight data monitoring (FDM) services.",
    id: "5646239437684736",
    image: {
      id: "5739407210446848",
      kind: "image",
      path: ["image", "5739407210446848"],
    },
    name: "Alyzair",
    order: 5,
    place: "Rungis",
    title: "PHP developer - internship",
    website: "http://www.alyzair.fr",
  },
  {
    accomplishments:
      '<h3>AGIPI (Insurance, saving, retirement)</h3><span class="projectFunction">Technical consultant, technical and functionnal conception</span><ul><li>B2B2C iPad app</li><li>B2B Trombinoscope on iPad</li></ul><h3>ERDF (Electric network distribution)</h3><span class="projectFunction">Pre-sale support</span><ul><li>Mobile website, Android and iOS app</li></ul><h3>Nespresso</h3><span class="projectFunction">Technical consultant, support on dynamisation</span><ul><li>Mobile website: <a href="https://m.nespresso.com/">m.nespresso.com</a></li></ul><h3>La Chaîne Météo (Leading French weather forecast media)</h3><span class="projectFunction">Technical consultant</span><ul><li>BlackBerry 10 app: pending...</li></ul><h3>SFR (Telecom operator)</h3><span class="projectFunction">Technical consultant, conception</span><ul><li>Conception and support on reforging their smartphone website rendering engine</li></ul>',
    dateIn: "2012-10-10T23:58:23.000Z",
    dateOut: "2013-02-06T00:58:23.000Z",
    description:
      "Backelite is a major player on the mobile services development market in Europe.",
    id: "5649050225344512",
    image: {
      id: "5697423099822080",
      kind: "image",
      path: ["image", "5697423099822080"],
    },
    name: "Backelite",
    order: 0,
    place: "Paris",
    title: "Project leader & technical consultant",
    website: "http://www.backelite.com",
  },
  {
    accomplishments:
      "<h3>Conception of a RSS feed aggregator</h3><ul><li>Organization of a five-engineer team.</li><li>Editing of technical specifications (Architecture document, user manual).</li><li>Development of the application in C#3.5 (WPF Application) and a website in Silverlight with a XML database.</li></ul><br/><h3>Realization of an application to simplify the management of airports passengers</h3><ul><li>Organization of the project superintendence by iterations for a seven-engineer team.</li><li>Analysis of the market and of the technical and juridical needs then edition of a business plan.</li><li>Edition of an architecture document, a quality plan, a user manual and a software specifications document in English.</li><li>Development in C# on Visual Studio 2005 with a SQL Server database.</li></ul>",
    dateIn: "2007-09-03T00:52:59.000Z",
    dateOut: "2008-05-31T00:52:59.000Z",
    description: "Engineering school of IT and management.",
    id: "5668600916475904",
    image: {
      id: "5725107787923456",
      kind: "image",
      path: ["image", "5725107787923456"],
    },
    name: "EFREI",
    order: 8,
    place: "Villejuif",
    title: "School projects",
    website: "http://www.efrei.fr",
  },
  {
    accomplishments:
      '<ul><li><span class="bold">Need:</span> Increase the proficiency in calculating employees\' commissions.</li><li><span class="bold">Solution:</span> Development of a VBA application which calculated the final remuneration dependant on products sold by each employee. Display of various statistical graphs by transferring the sales data on an Access base.</li></ul>',
    dateIn: "2005-01-04T00:45:27.000Z",
    dateOut: "2005-03-01T00:45:46.000Z",
    description:
      "Orange (formerly France Telecom). France Telecom brand for mobile, landline and Internet businesses.",
    id: "5684666375864320",
    image: {
      id: "5715999101812736",
      kind: "image",
      path: ["image", "5715999101812736"],
    },
    name: "Orange / France Telecom",
    order: 6,
    place: "Levallois",
    title: "VBA Access developer - BTS 2nd year internship",
    website: "http://www.orange.fr",
  },
  {
    accomplishments: "pending...",
    dateIn: "2013-03-02T00:56:38.000Z",
    dateOut: "2017-12-31T23:37:49.230Z",
    description:
      "Ekino is a digital marketing agency based in Paris. It is part of the Fullsix group.",
    id: "5741031244955648",
    image: {
      id: "5722646637445120",
      kind: "image",
      path: ["image", "5722646637445120"],
    },
    name: "Ekino Viet Nam",
    order: 0,
    place: "Levallois / Ho Chi Minh",
    title: "Technical director",
    website: "http://www.ekino.com",
  },
  {
    accomplishments:
      '<ul><li>Web and wap application development in ASP.NET/C#</li><li>Development and optimisation of company libraries</li><li>Databases design and modelization (SQL Server and MySQL)</li><li>Assisting commercial proposals and meetings</li></ul><br><h3>Orange</h3><ul><li><span class="bold">Target:</span> Create a communitarian website for the telecom company "Orange" to create and manage panels of about 10,000 testers of new products.</li><li><span class="bold">Solution:</span> Conception and development of an ASP/C# website attached to a SQL Server database with a Flash interface.</li><li>Server setting up, website integration, analysis of client needs.</li></ul>',
    dateIn: "2007-04-03T02:51:06.000Z",
    dateOut: "2007-09-29T02:51:06.000Z",
    description: "",
    id: "5752754626625536",
    image: {
      id: "5769015641243648",
      kind: "image",
      path: ["image", "5769015641243648"],
    },
    name: "Phonereader",
    order: 4,
    place: "Paris",
    title: "Designer & .NET developer - engineering school internships",
    website: "http://www.phonereader.fr",
  },
  {
    accomplishments:
      '<ul><li>Web and wap application development in ASP.NET/C#</li><li>Development and optimisation of company libraries</li><li>Databases design and modelization (SQL Server and MySQL)</li><li>Assisting commercial proposals and meetings</li></ul><br><h3>Phonereader</h3><ul><li><span class="bold">Target:</span> Conception and development of a trade website intended at first to distribute eBooks. Then adaptation of this website to sell or display any other kind of products or services.</li><li><span class="bold">Solution:</span> Conception and creation of the linked database with MS SQL Server, ASP.NET website with AJAX interfaces to improved user experience. Development of back office applications (desktop and web) in C#3.5.</li><li><a href="http://www.frenchtheory.fr/">www.frenchtheory.fr</a></li></ul>',
    dateIn: "2008-02-02T02:48:32.000Z",
    dateOut: "2008-11-01T02:48:32.000Z",
    description: "Development of mobile services, numeric ebooks edition.",
    id: "5757715179634688",
    image: {
      id: "5769015641243648",
      kind: "image",
      path: ["image", "5769015641243648"],
    },
    name: "Phonereader",
    order: 3,
    place: "Paris",
    title: "Asp.NET engineer - engineering school internships",
    website: "http://www.phonereader.fr",
  },
];
