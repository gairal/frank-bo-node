exports.up = function (r, connection) {
  return Promise.all([
    // categories
    r.table('category').insert([
      {
        "id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8",
        "name": "IDE",
        "order": 10
      },
      {
        "id": "4fd91b70-d8a7-417f-ac27-8dcc91910118",
        "name": "Miscellaneous",
        "order": 5
      },
      {
        "id": "58918841-ca49-4845-95bb-f3ce26dfd4f9",
        "name": "Modelling",
        "order": 9
      },
      {
        "id": "15e67856-c821-4a41-9604-cb9792352210",
        "name": "Back-end development",
        "order": 7
      },
      {
        "id": "09867420-a2ab-467c-a8b8-a6d5e5164f97",
        "name": "Source Control",
        "order": 13
      },
      {
        "id": "0aa50384-a762-4644-b612-4f6b4ff90bd0",
        "name": "Project Management",
        "order": 2
      },
      {
        "id": "a8bbc220-84b9-4df7-8295-87776397bba5",
        "name": "Front-end development",
        "order": 6
      },
      {
        "id": "b394b3e6-a946-423a-942c-c20cec4164b3",
        "name": "Sports",
        "order": 4
      },
      {
        "id": "7665b866-5268-43fa-a44d-fbc7e45bab99",
        "name": "Database",
        "order": 8
      },
      {
        "id": "e3b48672-439b-4e78-a057-9af431e25148",
        "name": "languages",
        "order": 1
      },
      {
        "id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7",
        "name": "Others",
        "order": 14
      },
      {
        "id": "0f324966-dd16-4082-a5f2-c01f4756c1e6",
        "name": "Server administration",
        "order": 12
      },
      {
        "id": "a4214650-1495-47cc-bf56-da7e7732be03",
        "name": "Operating Systems",
        "order": 11
      },
      {
        "id": "a9102ab0-608e-419a-a0ea-b3827298c06d",
        "name": "Travel",
        "order": 3
      }]).run(connection),

    // images
    r.table('image').insert([
      {
        "name": "alyzair.png"
      }, {
        "name": "bk.png"
      }, {
        "name": "efrei.png"
      }, {
        "name": "ekino.png"
      }, {
        "name": "orange.png"
      }, {
        "name": "phonereader.png"
      }, {
        "name": "ratp.png"
      }, {
        "name": "spf.png"
      }, {
        "name": "enc.jpg"
      }
    ]).run(connection),

    // educations
    r.table('education').insert([
      {
        "name": "Saint-Pierre Fourier",
        "short_description": "High school",
        "year_in": "2000-09-01",
        "year_out": "2001-06-30",
        "place": "Paris 12th",
        "diploma": "Baccalauréat S (High-school degree specialized in Science) with distinction",
        "website": "http://www.spfparis12.fr",
        "image_id": "39a86918-79e1-41da-8079-6cbfa496c69a"
      }, {
        "name": "ENC",
        "short_description": "National School of Business",
        "year_in": "2003-09-01",
        "year_out": "2005-06-30",
        "place": "Paris 17th",
        "diploma": "BTS (Two-year university degree in Information Technology and Management) - Option application developer",
        "website": "http://www.enc-bessieres.org",
        "image_id": "24475c8e-bf8d-4f00-a5a8-3c9c891e2daa"
      }, {
        "name": "Efrei",
        "short_description": "Engineering school of IT and management",
        "year_in": "2005-09-01",
        "year_out": "2008-06-30",
        "place": "Villejuif",
        "diploma": "Master in engineering specialized in Information Technology - Option software engineering",
        "website": "http://www.efrei.fr",
        "extra": "Tutored mathematics to middle school students (14 yrs) with the association EAH (EFREI's humanitarian association).",
        "image_id": "0082d6f9-6c99-4010-a57a-10d877c61f9c"
      }
    ]).run(connection),

    // experiences
    r.table('experience').insert([
      {
        "name": "Orange / France Telecom",
        "description": "Orange (formerly France Telecom). France Telecom brand for mobile, landline and Internet businesses.",
        "date_in": "2005-01-03",
        "date_out": "2005-02-28",
        "place": "Levallois",
        "website": "http://www.orange.fr",
        "title": "VBA Access developer - BTS 2nd year internship",
        "accomplishments": "<ul><li><span class=\"bold\">Need:</span> Increase the proficiency in calculating employees' commissions.</li><li><span class=\"bold\">Solution:</span> Development of a VBA application which calculated the final remuneration dependant on products sold by each employee. Display of various statistical graphs by transferring the sales data on an Access base.</li></ul>",
        "display": 6,
        "image_id": "fdf1b7e3-9ad6-42f8-a158-668a46ae991b"
      }, {
        "name": "RATP",
        "description": "Régie Autonome des Transports Parisiens: French company operating Parisian public transports (Metro, Bus). I was based in the head office in Paris.",
        "date_in": "2004-05-03",
        "date_out": "2004-06-30",
        "place": "Paris",
        "website": "http://www.ratp.fr",
        "title": "VBA Excel developer - BTS 1st year intern",
        "accomplishments": "<ul><li><span class=\"bold\">Need:</span> Monthly automaticaly generated dashboards from raw Excel tables. Used by the Human Resources department concerning employee trainings.</li><li><span class=\"bold\">Solution:</span> Creation in VBA of a generation tools of dashboards after the acquisition of the necessary data on Excel.</li></ul>",
        "display": 7,
        "image_id": "d86aa9f9-eeb2-4991-a936-fc64fb542b09"
      }, {
        "name": "EFREI",
        "description": "Engineering school of IT and management.",
        "date_in": "2007-09-02",
        "date_out": "2008-05-30",
        "place": "Villejuif",
        "website": "http://www.efrei.fr",
        "title": "School projects",
        "accomplishments": "<h3>Conception of a RSS feed aggregator</h3><ul><li>Organization of a five-engineer team.</li><li>Editing of technical specifications (Architecture document, user manual).</li><li>Development of the application in C#3.5 (WPF Application) and a website in Silverlight with a XML database.</li></ul><br/><h3>Realization of an application to simplify the management of airports passengers</h3><ul><li>Organization of the project superintendence by iterations for a seven-engineer team.</li><li>Analysis of the market and of the technical and juridical needs then edition of a business plan.</li><li>Edition of an architecture document, a quality plan, a user manual and a software specifications document in English.</li><li>Development in C# on Visual Studio 2005 with a SQL Server database.</li></ul>",
        "display": 8,
        "image_id": "0082d6f9-6c99-4010-a57a-10d877c61f9c"
      }, {
        "name": "Ekino",
        "description": "Ekino is a digital marketing agency based in Paris. It is part of the Fullsix group.",
        "date_in": "2013-03-01",
        "place": "Levallois / Ho Chi Minh",
        "website": "http://www.ekino.com",
        "title": "Project Director",
        "accomplishments": "pending...",
        "display": 0,
        "image_id": "6899b4a0-6648-4ff0-8f02-3b6337bf8931"
      }, {
        "name": "Backelite",
        "description": "Backelite is a major player on the mobile services development market in Europe.",
        "date_in": "2012-10-10",
        "date_out": "2013-02-15",
        "place": "Paris",
        "website": "http://www.backelite.com",
        "title": "Project leader & technical consultant",
        "accomplishments": "<h3>AGIPI (Insurance, saving, retirement)</h3><span class=\"projectFunction\">Technical consultant, technical and functionnal conception</span><ul><li>B2B2C iPad app</li><li>B2B Trombinoscope on iPad</li></ul><h3>ERDF (Electric network distribution)</h3><span class=\"projectFunction\">Pre-sale support</span><ul><li>Mobile website, Android and iOS app</li></ul><h3>Nespresso</h3><span class=\"projectFunction\">Technical consultant, support on dynamisation</span><ul><li>Mobile website: <a href=\"https: //m.nespresso.com/\">m.nespresso.com</a></li></ul><h3>La Chaîne Météo (Leading French weather forecast media)</h3><span class=\"projectFunction\">Technical consultant</span><ul><li>BlackBerry 10 app: pending...</li></ul><h3>SFR (Telecom operator)</h3><span class=\"projectFunction\">Technical consultant, conception</span><ul><li>Conception and support on reforging their smartphone website rendering engine</li></ul>",
        "display": 1,
        "image_id": "f4a9f654-3504-4dc9-aa5d-945a7054afa9"
      }, {
        "name": "Phonereader",
        "description": "Development of mobile services, numeric ebooks edition.",
        "date_in": "2008-02-01",
        "date_out": "2008-10-31",
        "place": "Paris",
        "website": "http://www.phonereader.fr",
        "title": "Designer & .NET developer - engineering school internships",
        "accomplishments": "<ul><li>Web and wap application development in ASP.NET/C#</li><li>Development and optimisation of company libraries</li><li>Databases design and modelization (SQL Server and MySQL)</li><li>Assisting commercial proposals and meetings</li></ul><br><h3>Phonereader</h3><ul><li><span class=\"bold\">Target:</span> Conception and development of a trade website intended at first to distribute eBooks. Then adaptation of this website to sell or display any other kind of products or services.</li><li><span class=\"bold\">Solution:</span> Conception and creation of the linked database with MS SQL Server, ASP.NET website with AJAX interfaces to improved user experience. Development of back office applications (desktop and web) in C#3.5.</li><li><a href=\"http: //www.frenchtheory.fr/\">www.frenchtheory.fr</a></li></ul>",
        "display": 3,
        "image_id": "5e9600ce-f2e5-40ea-839c-8f85931bdfcb"
      }, {
        "name": "Alyzair",
        "description": "ALYZAIR offers a comprehensive range of web-based flight data monitoring (FDM) services.",
        "date_in": "2005-07-01",
        "date_out": "2005-07-29",
        "place": "Rungis",
        "website": "http://www.alyzair.fr",
        "title": "PHP developer - internship",
        "accomplishments": "<ul><li><span class=\"bold\">Need:</span> Controling and keeping track of employees' schedules.</li><li><span class=\"bold\">Solution:</span> Creation of a management and recording client/server tool coded in PHP/MySQL using a secured nominative connection.</li></ul>",
        "display": 5,
        "image_id": "1288a805-31f6-4001-8a80-f17be9189a6e"
      }, {
        "name": "Backelite",
        "description": "Backelite is a major player on the mobile services development market in Europe.",
        "date_in": "2009-04-01",
        "date_out": "2012-02-10",
        "place": "Paris",
        "website": "http://www.backelite.com",
        "title": "Project leader & technical consultant",
        "accomplishments": "<h3>Allociné (Provide information on cinema and TV productions)</h3><span class=\"projectFunction\">Project leader, technical and functionnal conception</span><ul><li>iPhone/iPad app: <a href=\"http: //itunes.apple.com/fr/app/allocine/id351184863?mt=8\">Itunes</a></li><li>Android app: <a href=\"https://play.google.com/store/apps/details?id=com.allocine.androidapp\">Google Play</a></li><li>Windows Phone app: <a href=\"http://www.windowsphone.com/en-us/store/app/allocin%C3%A9/ac48ad21-a8d7-df11-a844-00237de2db9e\">Zune</a></li><li>Mobile &amp; tablet website: pending...</li><li>HP Touchpad app</li><li>HP Photosmart Printer: <a href=\"https://h30495.www3.hp.com/detail/706.1\">ePrint Center</a></li><li>+ international versions for Sensacine, Screenrush, Filmstarts, Beyazperde</li></ul><h3>Dailymotion</h3><span class=\"projectFunction\">Project leader, technical and functionnal conception</span><ul><li>iPhone/iPad app: <a href=\"http://itunes.apple.com/fr/app/dailymotion-video-stream/id336978041?mt=8\">Itunes</a></li><li>Android app: <a href=\"https://play.google.com/store/apps/details?id=com.dailymotion.dailymotion\">Google Play</a></li><li>+ Android pre-install apps on smartphone sells by Orange Telecom</li><li>Windows Phone app: <a href=\"http://www.windowsphone.com/en-us/store/app/dailymotion/e7fcb197-cc2e-e011-854c-00237de2db9e\">Zune</a></li><li>HP Touchpad and webOS app</li><li>Nokia QT app</li></ul><h3>Accor Hotels (World's leading hotel operator and market leader in Europe)</h3><span class=\"projectFunction\">Technical consultant, front developer</span><ul><li>Mobile website: <a href=\"http://www.accorhotels.mobi/\">accorhotels.mobi</a></li></ul><h3>BNP Cardif (Insurance sector of BNP PARIBAS group)</h3><span class=\"projectFunction\">Technical consultant</span><ul><li>iPhone app: <a href=\"http://itunes.apple.com/fr/app/cardif-sante/id495158716?mt=8\">Itunes</a></li></ul><h3>Pages Jaunes (French phone directory of businesses)</h3><span class=\"projectFunction\">Project leader, technical and functionnal conception</span><ul><li>Mobile website V2 &amp; V3: <a href=\"http://pagesjaunes.fr/\">pagesjaunes.fr</a></li><li>PVI mobile: <a href=\"http://www.pack-visibilite-internet.fr/\">pack-visibilite-internet.fr</a></li></ul><h3>Fnac (International entertainment retail chain offering cultural and electronic products)</h3><span class=\"projectFunction\">Technical consultant</span><ul><li>iPhone App: <a href=\"http://itunes.apple.com/fr/app/fnac/id377379474?mt=8\">Itunes</a></li></ul><h3>Mappy (maps service)</h3><span class=\"projectFunction\">Project leader, technical and functionnal conception</span><ul><li>Mobile rendering service adapted to the device capabilities</li></ul><h3>Eurosport (European television sport network)</h3><span class=\"projectFunction\">Technical consultant, functionnal conception</span><ul><li>iPhone app: <a href=\"http://itunes.apple.com/fr/app/eurosport/id324021126?mt=8\">Itunes</a></li><li>Android app: <a href=\"https://play.google.com/store/apps/details?id=com.eurosport\">Google Play</a></li><li>Mobile website: <a href=\"http://m.eurosport.fr\">m.eurosport.fr</a></li></ul><h3>France 24 / RFI (International news television and radio channel)</h3><span class=\"projectFunction\">Technical consultant, functionnal conception</span><ul><li>iPhone/iPad app: <a href=\"http://itunes.apple.com/fr/app/france-24/id364379394?mt=8\">Itunes</a></li><li>Android app: <a href=\"https://play.google.com/store/apps/details?id=com.france24.androidapp\">Google Play</a></li></ul><h3>SNCF (France's national railway company)</h3><span class=\"projectFunction\">Technical consultant, functionnal conception</span><ul><li>Mobile website: <a href=\"http://www.sncf.mobi/\">sncf.mobi</a></li></ul><h3>Voyages SNCF (French internet travel agency, owned by SNCF)</h3><span class=\"projectFunction\">Technical consultant</span><ul><li>Mobile website: <a href=\"http://voyages-sncf.mobi/\">voyages-sncf.mobi</a></li></ul><h3>Française des jeux (Operator of France's national lottery games)</h3><span class=\"projectFunction\">Technical consultant</span><ul><li>iPhone app: <a href=\"http://itunes.apple.com/fr/app/les-cotes/id360945239?mt=8\">Itunes</a></li></ul><h3>eVOD (Project intended to create a French mobile video platform)</h3><span class=\"projectFunction\">Technical consultant, story-board</span>",
        "display": 2,
        "image_id": "f4a9f654-3504-4dc9-aa5d-945a7054afa9"
      }, {
        "name": "Phonereader",
        "description": "Development of mobile services, numeric ebooks edition.",
        "date_in": "2007-04-02",
        "date_out": "2007-09-28",
        "place": "Paris",
        "website": "http://www.phonereader.fr",
        "title": "Designer & .NET developer - engineering school internships",
        "accomplishments": "<ul><li>Web and wap application development in ASP.NET/C#</li><li>Development and optimisation of company libraries</li><li>Databases design and modelization (SQL Server and MySQL)</li><li>Assisting commercial proposals and meetings</li></ul><br><h3>Orange</h3><ul><li><span class=\"bold\">Target:</span> Create a communitarian website for the telecom company \"Orange\" to create and manage panels of about 10,000 testers of new products.</li><li><span class=\"bold\">Solution:</span> Conception and development of an ASP/C# website attached to a SQL Server database with a Flash interface.</li><li>Server setting up, website integration, analysis of client needs.</li></ul>",
        "display": 4,
        "image_id": "5e9600ce-f2e5-40ea-839c-8f85931bdfcb"
      }
    ]).run(connection),

    // interests
    r.table('interest').insert([
      {
        "name": "6 months travel around Southeast Asia",
        "display": 0,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Iceland",
        "display": 1,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Ecuador",
        "display": 2,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Thailand",
        "display": 3,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Myanmar (Burma)",
        "display": 4,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Brazil",
        "display": 5,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Spain",
        "display": 6,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "China",
        "display": 7,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "United States",
        "display": 8,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "And more",
        "display": 9,
        "category_id": "a9102ab0-608e-419a-a0ea-b3827298c06d"
      }, {
        "name": "Scuba Diving",
        "description": "advanced PADI diver",
        "display": 10,
        "category_id": "b394b3e6-a946-423a-942c-c20cec4164b3"
      }, {
        "name": "Mountain & road bicycling",
        "display": 11,
        "category_id": "b394b3e6-a946-423a-942c-c20cec4164b3"
      }, {
        "name": "Trekking",
        "display": 12,
        "category_id": "b394b3e6-a946-423a-942c-c20cec4164b3"
      }, {
        "name": "Roller skating",
        "display": 13,
        "category_id": "b394b3e6-a946-423a-942c-c20cec4164b3"
      }, {
        "name": "Tennis",
        "display": 14,
        "category_id": "b394b3e6-a946-423a-942c-c20cec4164b3"
      }, {
        "name": "Reading",
        "description": "SF, Fantasy, Manga/Comics",
        "display": 15,
        "category_id": "4fd91b70-d8a7-417f-ac27-8dcc91910118"
      }, {
        "name": "Cinema",
        "description": "Favorites: Stanley Kubrick's & Terry Gilliam's",
        "display": 16,
        "category_id": "4fd91b70-d8a7-417f-ac27-8dcc91910118"
      }, {
        "name": "Animation",
        "display": 17,
        "category_id": "4fd91b70-d8a7-417f-ac27-8dcc91910118"
      }, {
        "name": "Photography",
        "display": 18,
        "category_id": "4fd91b70-d8a7-417f-ac27-8dcc91910118"
      }, {
        "name": "Cooking",
        "display": 19,
        "category_id": "4fd91b70-d8a7-417f-ac27-8dcc91910118"
      }
    ]).run(connection),
    r.table("interest").indexCreate("category_id").run(connection),

    // skills
    r.table('skill').insert([
      {
        "name": "French",
        "description": "native language",
        "level": 100,
        "category_id": "e3b48672-439b-4e78-a057-9af431e25148"
      }, {
        "name": "English",
        "description": "fluent - TOEIC: 820pts",
        "level": 75,
        "category_id": "e3b48672-439b-4e78-a057-9af431e25148"
      }, {
        "name": "Vietnamese",
        "description": "Learning...",
        "level": 10,
        "category_id": "e3b48672-439b-4e78-a057-9af431e25148"
      }, {
        "name": "Pre-sales",
        "description": "Technical expertise, comercial proposal, quotation of cost",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "Conception",
        "description": "Brainstorming, storyboard, managing graphic design, ...",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "Technical specifications",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "Planning & cost",
        "description": "Post-conception cost quantification, Optimisation of cost and time",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "SCRUM Management",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "MS project",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "Team motivation",
        "category_id": "0aa50384-a762-4644-b612-4f6b4ff90bd0"
      }, {
        "name": "HTML 5",
        "level": 100,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "CSS3",
        "level": 100,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "JavaScript",
        "level": 75,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "PHP5",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "Java/J2ee",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "XML",
        "level": 100,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "XSLT",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "OML",
        "description": "Orange mobile Meta Language",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "PML",
        "description": "SFR mobile Meta Language",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": ".NET/C#/WPF",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "Java/Android API",
        "level": 25,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "C#/Windows Phone",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "C/GTK+",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "Visual Basic",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "C++",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "Flex",
        "level": 25,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "VBA Excel & Access",
        "level": 75,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "SQL",
        "level": 75,
        "category_id": "7665b866-5268-43fa-a44d-fbc7e45bab99"
      }, {
        "name": "MySQL",
        "level": 100,
        "category_id": "7665b866-5268-43fa-a44d-fbc7e45bab99"
      }, {
        "name": "MS SQLServer",
        "level": 75,
        "category_id": "7665b866-5268-43fa-a44d-fbc7e45bab99"
      }, {
        "name": "Access",
        "level": 75,
        "category_id": "7665b866-5268-43fa-a44d-fbc7e45bab99"
      }, {
        "name": "Oracle",
        "level": 75,
        "category_id": "7665b866-5268-43fa-a44d-fbc7e45bab99"
      }, {
        "name": "UML",
        "category_id": "58918841-ca49-4845-95bb-f3ce26dfd4f9"
      }, {
        "name": "MERISE",
        "category_id": "58918841-ca49-4845-95bb-f3ce26dfd4f9"
      }, {
        "name": "MERISE2",
        "category_id": "58918841-ca49-4845-95bb-f3ce26dfd4f9"
      }, {
        "name": "Eclipse",
        "category_id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8"
      }, {
        "name": "MS Visual Studio",
        "category_id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8"
      }, {
        "name": "Expression Blend",
        "category_id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8"
      }, {
        "name": "Dev-C++",
        "category_id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8"
      }, {
        "name": "Linux other distrbs.",
        "category_id": "a4214650-1495-47cc-bf56-da7e7732be03"
      }, {
        "name": "Employment law",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "Probabilities",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "Electronics",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "Nano-science",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "Quality control",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "Marketing",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "Economics",
        "category_id": "0ec30aa8-7033-4e19-9162-0e93f85bf5c7"
      }, {
        "name": "JQuery, JQuery Mobile",
        "level": 25,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "Symfony2 Framework",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "Angular",
        "level": 80,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "sass, less",
        "level": 100,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "Grunt, Gulp",
        "level": 90,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "Material Design",
        "level": 90,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "GIT, Gitlab",
        "level": 80,
        "category_id": "09867420-a2ab-467c-a8b8-a6d5e5164f97"
      }, {
        "name": "SVN",
        "level": 80,
        "category_id": "09867420-a2ab-467c-a8b8-a6d5e5164f97"
      }, {
        "name": "Shell Script",
        "level": 50,
        "category_id": "0f324966-dd16-4082-a5f2-c01f4756c1e6"
      }, {
        "name": "Apache httpd",
        "level": 70,
        "category_id": "0f324966-dd16-4082-a5f2-c01f4756c1e6"
      }, {
        "name": "Apache Tomcat",
        "level": 50,
        "category_id": "0f324966-dd16-4082-a5f2-c01f4756c1e6"
      }, {
        "name": "CentOS",
        "level": 80,
        "category_id": "a4214650-1495-47cc-bf56-da7e7732be03"
      }, {
        "name": "Spring Framework",
        "level": 40,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "MacOS 10.x",
        "level": 100,
        "category_id": "a4214650-1495-47cc-bf56-da7e7732be03"
      }, {
        "name": "Windows xp, Vista, 7, 8",
        "level": 100,
        "category_id": "a4214650-1495-47cc-bf56-da7e7732be03"
      }, {
        "name": "Ubuntu / Debian",
        "level": 100,
        "category_id": "a4214650-1495-47cc-bf56-da7e7732be03"
      }, {
        "name": "IntelliJ, PHPStorm",
        "level": 90,
        "category_id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8"
      }, {
        "name": "Twitter Bootstrap 3.x",
        "level": 75,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "Foundation",
        "level": 80,
        "category_id": "a8bbc220-84b9-4df7-8295-87776397bba5"
      }, {
        "name": "Netbeans",
        "category_id": "47ef1592-95c0-4037-b2ef-721feb7eb4f8"
      }, {
        "name": "Python",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }, {
        "name": "Django",
        "level": 50,
        "category_id": "15e67856-c821-4a41-9604-cb9792352210"
      }
    ]).run(connection),
    r.table("skill").indexCreate("category_id").run(connection),

    // travels
    r.table('travel').insert([
      {
        "place": "Paris",
        "lat": 48.8566000000000003,
        "lng": 2.35221999999999998,
        "order": 0
      }, {
        "place": "Biarritz",
        "lat": 43.4831999999999965,
        "lng": -1.55861999999999989,
        "order": 1
      }, {
        "place": "Hendaye",
        "lat": 43.3594000000000008,
        "lng": -1.76612999999999998,
        "order": 2
      }, {
        "place": "Barcelone",
        "lat": 41.3879000000000019,
        "lng": 2.16990999999999978,
        "order": 3
      }, {
        "place": "Bale",
        "lat": 47.5574000000000012,
        "lng": 7.59259000000000039,
        "order": 4
      }, {
        "place": "Amsterdam",
        "lat": 52.370199999999997,
        "lng": 4.89517000000000024,
        "order": 5
      }, {
        "place": "Meteora",
        "lat": 39.7177000000000007,
        "lng": 21.642199999999999,
        "order": 6
      }, {
        "place": "Reykjavik",
        "lat": 64.1353000000000009,
        "lng": -21.8951999999999991,
        "order": 7
      }, {
        "place": "New York",
        "lat": 40.7143999999999977,
        "lng": -74.0060000000000002,
        "order": 8
      }, {
        "place": "Washington",
        "lat": 38.8950999999999993,
        "lng": -77.0364000000000004,
        "order": 9
      }, {
        "place": "Miami",
        "lat": 25.7890000000000015,
        "lng": -80.2263999999999982,
        "order": 10
      }, {
        "place": "Rio de Janeiro",
        "lat": -22.9035000000000011,
        "lng": -43.2096000000000018,
        "order": 11
      }, {
        "place": "Igaçu",
        "lat": -25.6892999999999994,
        "lng": -54.4329999999999998,
        "order": 12
      }, {
        "place": "Salvador",
        "lat": -12.9703999999999997,
        "lng": -38.5123999999999995,
        "order": 13
      }, {
        "place": "Quito",
        "lat": -0.216670000000000001,
        "lng": -78.5165999999999968,
        "order": 14
      }, {
        "place": "Galapagos",
        "lat": -0.625626000000000015,
        "lng": -90.3579000000000008,
        "order": 15
      }, {
        "place": "New Delhi",
        "lat": 28.6353000000000009,
        "lng": 77.2249999999999943,
        "order": 16
      }, {
        "place": "Darjeeling",
        "lat": 27.0360000000000014,
        "lng": 88.2626999999999953,
        "order": 17
      }, {
        "place": "Kolkata",
        "lat": 22.5726000000000013,
        "lng": 88.363900000000001,
        "order": 18
      }, {
        "place": "Mumbai",
        "lat": 19.0760000000000005,
        "lng": 72.877600000000001,
        "order": 19
      }, {
        "place": "Goa",
        "lat": 15.0424000000000007,
        "lng": 73.9876000000000005,
        "order": 20
      }, {
        "place": "Bangalore",
        "lat": 12.9716000000000005,
        "lng": 77.5945999999999998,
        "order": 21
      }, {
        "place": "Varkala",
        "lat": 8.73329999999999984,
        "lng": 76.716700000000003,
        "order": 22
      }, {
        "place": "Yangon",
        "lat": 16.8000000000000007,
        "lng": 96.1500000000000057,
        "order": 23
      }, {
        "place": "Bagan",
        "lat": 21.3665999999999983,
        "lng": 95.4665999999999997,
        "order": 24
      }, {
        "place": "Inle Lake",
        "lat": 20.5863000000000014,
        "lng": 96.9102000000000032,
        "order": 25
      }, {
        "place": "Chiang Mai",
        "lat": 18.7896999999999998,
        "lng": 98.984499999999997,
        "order": 26
      }, {
        "place": "Pak Chong",
        "lat": 14.7125000000000004,
        "lng": 101.421999999999997,
        "order": 27
      }, {
        "place": "Bangkok",
        "lat": 13.7522000000000002,
        "lng": 100.494,
        "order": 28
      }, {
        "place": "Koh Tao",
        "lat": 10.0955999999999992,
        "lng": 99.8404000000000025,
        "order": 29
      }, {
        "place": "Vientiane",
        "lat": 17.9628000000000014,
        "lng": 102.614000000000004,
        "order": 30
      }, {
        "place": "Luang Prabang",
        "lat": 19.8856000000000002,
        "lng": 102.135000000000005,
        "order": 31
      }, {
        "place": "Sa Pa",
        "lat": 22.3364000000000011,
        "lng": 103.843999999999994,
        "order": 32
      }, {
        "place": "Ha Noi",
        "lat": 21.0333000000000006,
        "lng": 105.849999999999994,
        "order": 33
      }, {
        "place": "Ha Long",
        "lat": 20.7921000000000014,
        "lng": 106.992000000000004,
        "order": 34
      }, {
        "place": "Hoi An",
        "lat": 15.8801000000000005,
        "lng": 108.337999999999994,
        "order": 35
      }, {
        "place": "Da Lat",
        "lat": 11.9404000000000003,
        "lng": 108.457999999999998,
        "order": 36
      }, {
        "place": "Ho Chi Minh City",
        "lat": 10.8231000000000002,
        "lng": 106.629999999999995,
        "order": 37
      }, {
        "place": "Can Tho",
        "lat": 10.0318000000000005,
        "lng": 105.784000000000006,
        "order": 38
      }, {
        "place": "Beijing",
        "lat": 39.904200000000003,
        "lng": 116.406999999999996,
        "order": 39
      }, {
        "place": "Shanghai",
        "lat": 31.2303999999999995,
        "lng": 121.474000000000004,
        "order": 40
      }, {
        "place": "Emeishan",
        "lat": 29.6011999999999986,
        "lng": 103.484999999999999,
        "order": 41
      }, {
        "place": "Yangshuo",
        "lat": 24.7785000000000011,
        "lng": 110.497,
        "order": 42
      }, {
        "place": "Hong Kong",
        "lat": 22.3039999999999985,
        "lng": 114.165000000000006,
        "order": 43
      }, {
        "place": "Kunming",
        "lat": 25.037700000000001,
        "lng": 102.721999999999994,
        "order": 44
      }, {
        "place": "Kota Bharu",
        "lat": 6.12199999999999989,
        "lng": 102.251999999999995,
        "order": 45
      }, {
        "place": "Pulau Perenthian",
        "lat": 5.91779999999999973,
        "lng": 102.721999999999994,
        "order": 46
      }, {
        "place": "Pulau Tioman",
        "lat": 2.78492000000000006,
        "lng": 104.203999999999994,
        "order": 47
      }, {
        "place": "Kuala Lumpur",
        "lat": 3.13899000000000017,
        "lng": 101.686999999999998,
        "order": 48
      }, {
        "place": "Yogyakarta",
        "lat": -7.79722999999999988,
        "lng": 110.369,
        "order": 49
      }, {
        "place": "Jakarta",
        "lat": -6.2115499999999999,
        "lng": 106.844999999999999,
        "order": 50
      }, {
        "place": "Bukittinggi",
        "lat": -0.266909999999999981,
        "lng": 100.382999999999996,
        "order": 51
      }, {
        "place": "Danau Toba",
        "lat": 2.32350000000000012,
        "lng": 98.7280999999999977,
        "order": 52
      }, {
        "place": "Pulau Weh",
        "lat": 5.88018000000000018,
        "lng": 95.2532999999999959,
        "order": 53
      }, {
        "place": "Ubud",
        "lat": -8.49740000000000073,
        "lng": 115.266000000000005,
        "order": 54
      }, {
        "place": "Batur",
        "lat": -8.24197999999999986,
        "lng": 115.375,
        "order": 55
      }, {
        "place": "Nusa Penida",
        "lat": -8.72780000000000022,
        "lng": 115.543999999999997,
        "order": 56
      }, {
        "place": "San Francisco",
        "lat": 37.7704433522853975,
        "lng": -122.42374420166,
        "order": 57
      }, {
        "place": "Tahoe",
        "lat": 39.091699613104602,
        "lng": -120.031127929687997,
        "order": 58
      }
    ]).run(connection)
  ])
};

exports.down = function (r, connection) {
  return true
};
