let info = {
  name: "Morel Malcom",
  logo_name: "Malcom Morel",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Je suis actuellement en deuxième année d'un BTS SIO. Motivé, curieux et investi, j'aime apprendre, développer et découvrir de nouveaux environnements !",
  links: {
    linkedin: "https://www.linkedin.com/in/malcom-morel-5a99a31b7/",
    github: "https://github.com/Malcomle",
    resume: require("./src/assets/CVdev.png"),
  },
  education: [
    {
      name: "Lycée Chevrollier",
      place: "Angers",
      date: "2020 - 2022",
      degree: "BTS SIO - SLAM",
      description:
          "En cours d'obtention.",
      skills: [
        "Javascript",
        "Php",
        "Laravel",
        "C#",
        "SQL",
      ]
    },
    {
      name: "Lycée Raphaël Elizé",
      place: "Sablé sur Sarthe",
      date: "2017 - 2020",
      degree: "Baccalauréat STI2D - SIN",
      description:
          "Obtention du baccalauréat mention assez bien. Découverte du metier de developpeur.",
      skills: [
        "Arduino",
        "C++",
      ]
    },
    {
      name: "Collège Saint Anne",
      place: "Sablé sur Sarthe",
      date: "2016",
      degree: "Brevet des collèges.",
      skills: []
    },

  ],
  experience: [

    {
      name: "Grumpy Guy",
      place: "Angers",
      date: "FÉVRIER 2022 - AVRIl 2022",
      position: "Web / Mobile Developer",
      description:
          "Stage de 7 semaines dans lequel j'ai conçu une application mobile ayant pour objectif d’optimiser le processus de signalement à la police, le plus rapidement et avec le moins de clic possible.",

      skills: [
        "Flutter",
        "Dart",
        "Vue",
        "JS",
      ]
    },
    {
      name: "MeilleurTaux",
      place: "Le Mans",
      date: "MAI 2021 - AOÛT 2021",
      position: "Full Stack Web Developer",
      description:
        "Stage de 6 semaines dans lequel j'ai du concevoir une API permettant l'automatisation de création d'un utilisateur dans un Active Directory. Authentification windows, gestion de tokens, de permissions et de rôles. Le backend est développé en .net core tandis que le frontend est codé en Angular.",

        skills: [
          "Angular",
          ".Net",
          "C#",
          "JS",
          "Active Directory",
        ]
    },

  ],
  skills: [
    {
      title: "Langages",
      info: [
        "Javascript",
        "Php",
        "Dart",
        "C#",

      ],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks",
      info: ["Flutter", "Vue.js", "Laravel", "Angular.js", ".Net", "SpringBoot"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Base de données",
      info: ["MongoDB", "MySQL", "SQL Server",],
      icon: "fa fa-database"
    },
  ],
  portfolio: [
    {
      name: "AskHim",
      pictures: [
        {
          img: require("./src/assets/portfolio/askhim/askhim.png")
        },
        {
          img: require("./src/assets/portfolio/askhim/detail.png")
        },
        {
          img: require("./src/assets/portfolio/askhim/chat.png")
        },

      ],
      technologies: ["Vue.js", "Javascript", "SpringBoot"],
      github: "https://github.com/AskHim-SIO/AskHimWebApp",
      visit: "https://askhim.ctrempe.fr/",
      description:
        "Besoin d'aide ? Ask him ! Proposez ou resolvez des services !"
    },

    {
      name: "Des bruits dans la rue",
      pictures: [
        {
          img: require("./src/assets/portfolio/desbruitsdanslarue/home.jpg")
        },

      ],
      technologies: ["Flutter", "Vue.js"],
      category: "Application de gestion",
      date: "Fev, 2022 - Avril, 2022",
      description:
          "Réalisation d’applications ayant pour objectif d’optimiser le processus de signalement à la police, le plus rapidement et avec le moins de clic possible. Un utilisateur effectue un signalement d’un problème typé. Ce problème est remonté et précisé à l’aide de captation audio ou vidéo. Sur une seconde application destinée à la police, sur une tablette sont affichés les différents problèmes remontés."
    },

    {
      name: "Formulaire d'entrée dans l'entreprise",
      pictures: [
        {
          img: require("./src/assets/portfolio/meilleurtaux/illustration.jpg")
        },

      ],
      technologies: ["Angular.js", ".Net"],
      description:
          "Automatiser l'arrivée de nouveaux employées dans l'entreprise. Générer une adresse email, une session, les ajouters dans différentes base de données etc."
    },

    {
      name: "Formaflix",
      pictures: [
        {
          img: require("./src/assets/portfolio/formaflix/formaflix.png")
        },

      ],
      technologies: ["C#", ".net"],
      category: "Application de gestion",
      github: "https://github.com/Malcomle/Formaflix_backend",
      date: "Sept, 2021 - Nov, 2021",
      description:
        "Développement d'une application de gestion d'un site web avec WindowsForm. L'application permet de gerer et d'ajouter des formations, de moderer des commentaires par formations. "
    },

  ],
   recommendations: [
    {
      title:
        "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway"
    }
  ]
};

export default info;




