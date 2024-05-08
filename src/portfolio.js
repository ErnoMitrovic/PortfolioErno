/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ernesto's Portfolio",
  description:
    "There is only one accurate word to describe myself: curiosity. I am a computer science student with a passion for learning and creating new things. I am always looking for new challenges and opportunities to grow.",
  og: {
    title: "Ernesto Miranda Portfolio",
    type: "website",
    url: "http://erno-portfolio.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ernesto Miranda",
  logo_name: "ErnoMitrovic",
  nickname: "Erno Mitrovic",
  subTitle:
    "There is only one accurate word to describe myself: curiosity. I am a computer science student with a passion for learning and creating new things. I am always looking for new challenges and opportunities to grow.",
  resumeLink:
    "https://tecmx-my.sharepoint.com/:b:/g/personal/a01656828_tec_mx/ETgbAdS_1jRIk5b4n7MOkBEBnTD1UkRuMhfD_ZMCaqF3aQ?e=JRrOcd",
  portfolio_repository: "https://github.com/ernomotrivic/masterPortfolio",
  githubProfile: "https://github.com/ernomitrovic",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ernomitrovic",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ernomitrovic/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /* {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  }, */
  {
    name: "Gmail",
    link: "mailto:emirandas1003@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /* {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  }, */
  {
    name: "Facebook",
    link: "https://www.facebook.com/ErnoMitrovic/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ernomitrovic/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React Typescript",
        "⚡ Developing mobile applications using Android Studio in Java",
        "⚡ Creating application backend in Node, Express, Django, Spring Boot and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#007ACC",
          },
        },
        {
          skillName: "ReactTS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on GCP, Azure and AWS cloud platforms",
        "⚡ Hosting and maintaining services on functions and containers on cloud platforms",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        "⚡ Monitoring and maintaining cloud infrastructure with the help of Stackdriver and CloudWatch",
        "⚡ Orchestrating both monolithic and microservices applications using Containers on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Pentesting",
      fileName: "PenTestingImg",
      skills: [
        "⚡ Experience in Web Application Security and Network Security",
        "⚡ Performing security assessments of web applications and RESTful APIs",
        "⚡ Experience in performing security assessments of network infrastructure",
      ],
      softwareSkills: [
        {
          skillName: "Bash",
          fontAwesomeClassname: "mdi:bash",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: {
            color: "#ed5813",
          },
        },
        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:metasploit",
          style: {
            color: "#159818",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "file-icons:nmap",
          style: {
            color: "#4B8BBE",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#1679A7",
          },
        },
      ],
    },
    {
      title: "Game Development",
      fileName: "GameDevImg",
      skills: [
        "⚡ Developing 2D and 3D games using Unity3D and C#",
        "⚡ Creating game logic and mechanics for games",
        "⚡ Experience in creating game assets and animations",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "simple-icons:blender",
          style: {
            color: "#F5792A",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/ErnoMitrovic/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ernomitrovic",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ernomitrovic",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/a01656828",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Tecnologico y de Estudios Superiores de Monterrey",
      subtitle: "International Baccalaureate - German as Second Language",
      logo_path: "ibLogo.png",
      alt_name: "International Baccalaureate",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Algorithms, DBMS, OS, and Networking.",
        "⚡ I took a Computer Science course during the International Baccalaureate program.",
        "⚡ I was the main programmer of the robotics team Nautilus 4010, where we won a regional competition with the First Tech Challenge team Hardlus 15704.",
      ],
      website_link: "https://tec.mx/en",
    },
    {
      title: "Insituto Tecnologico y de Estudios Superiores de Monterrey",
      subtitle: "B.S. in Computer Science and Technology",
      logo_path: "logoITESM.svg",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Algorithms, DBMS, OS, Networking, Software Development and Quality Assurance.",
        "⚡ I have also completed various online courses on Full Stack Development, Pentesting and Cloud Computing.",
        "⚡ During my time at university, I was the president of the student council.",
        "⚡ I am currently a mentor for the robotics team Nautilus 4010.",
      ],
      website_link: "https://tec.mx/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ethical Hacking",
      subtitle: "- Certjoin",
      logo_path: "certjoinLogo.png",
      certificate_link:
        "https://tecmx-my.sharepoint.com/:b:/g/personal/a01656828_tec_mx/ETaHd5fdxtdIid_BGp9mLnwB-CLjnbchHCj0jw9LzHuKjw?e=2PkeQw",
      alt_name: "Certjoin",
      color_code: "#FFFFFF",
    },
    {
      title: "Google Cloud Computing Foundations",
      subtitle: "- Google",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3914a5a7-7f57-4e53-b6f1-385593c2b535",
      alt_name: "Google",
      color_code: "#4285F4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in software development in the field of web and cloud development. I have also worked in the field of cybersecurity and pentesting. I have also volunteered as a mentor for the robotics team Nautilus 4010.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Pernexium SA de CV.",
          company_url: "https://www.pernexium.com/",
          logo_path: "pernexium_logo.jpeg",
          duration: "November 2023 - March 2024",
          location: "Mexico City, Mexico",
          description:
            "Working on the development of a chatbot application for contact centers. Developed in the AWS Cloud and using OpenAI for the AI responses. The web page was developed using React and the backend was developed using Node and Express.",
          color: "#000000",
        },
      ],
    },
    /*
    {
      title: "Internships",
      experiences: [
        /* {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        }, 
      ],
    },
    */
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Programming mentor",
          company: "Nautilus",
          company_url: "https://www.nautilus4010.com/",
          logo_path: "nautilus_logo.png",
          duration: "August 2021 - Present",
          location: "Mexico City, Mexico",
          description:
            "I am a mentor for the robotics team Nautilus 4010. I help the team with programming and teach them about robotics and programming on Java and/or LabView.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools, going from Full Stack Development to Cloud Infrastructure. I have also worked on Game Development and Pentesting. I love to learn new technologies and create projects that can make our life easier and that can be seen in my Hackathons projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "My Projects",
  description:
    "Some of the projects that I have worked on are listed below. These projects are a mix of Full Stack Development, Cloud Computing, Pentesting and Game Development. I have also worked on some projects that are related to AI and ML.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "computational-biology",
      name: "Computational Biology SARCOV project",
      createdAt: "2022-05-06T00:00:00Z",
      description:
        "Categorize and analyse different types of SARS-CoV-2 genomes using R and the NCBI databases.",
      url: "https://github.com/ErnoMitrovic/BioSituacionProblema",
    },
    {
      id: "vote-chain",
      name: "Vote Chain DAO Hackathon",
      createdAt: "2022-12-15T00:00:00Z",
      description:
        "A DAO project that intends to be used in national elections, where we obtained the hackathon's 2nd place.",
      url: "https://github.com/ErnoMitrovic/VoteChain",
    },
    {
      id: "webseekers",
      name: "WebSeekers IoT Project",
      createdAt: "2022-11-9T00:00:00Z",
      description:
        "A project that uses the MQTT protocol to send data to drones in emergency situations.",
      url: "https://github.com/ErnoMitrovic/WebSeekers",
    },
    {
      id: "hackmx",
      name: "HackMX Hackathon Webpage",
      createdAt: "2023-09-26T00:00:00Z",
      description:
        "The webpage of the HackMX hackathon, where I was in charge of the full stack development.",
      url: "https://github.com/hackmx-temp",
    },
    {
      id: "sel4c",
      name: "SEL4C Swift and Web Development",
      createdAt: "2023-08-20T00:00:00Z",
      description:
        "A project that uses the SEL4C methodology to create a web dashboard for supervisors and an iOS app for entrepreneurs.",
      url: "https://github.com/SEL4C-451-1",
    },
    {
      id: "zoonic",
      name: "Zoonic Game Development",
      createdAt: "2023-07-15T00:00:00Z",
      description:
        "A 3D game developed in Unity3D where the player must learn fractions while interacting with zoo animals and different game dynamics.",
      url: "https://github.com/ZoonicFractions",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "connor.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
