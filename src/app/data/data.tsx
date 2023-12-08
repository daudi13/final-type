import { ICards, IData, IData2, IDevTools, IFeaturedProfiles, ILogos, IAboutUs } from "../types/types";

export const logos: ILogos = [
  '/image28.png',
  '/image30.png',
  '/image31.png',
  '/image73.png',
  '/image74.png',
  '/image75.png',
  '/image76.png',
  '/image79.png',
  '/image80.png',
]


export const data: IData = [
  {
    id: 1,
    title: "Tech Savy",
    img: "/cloud-add.svg",
    desc: "Ready to shine in tech & product roles",
    color: "#6DCDE7"
  },
  {
    id: 2,
    title: "Fluent in English",
    img: "/message.svg",
    desc: "Ready to shine in tech & product roles",
    color: "#FFD478"
  },
  {
    id: 3,
    title: "Timezone aligned",
    img: "/global.svg",
    desc: "Seamless collaboration with global teams",
    color: "#6DCDE7"
  },
  {
    id: 4,
    title: "Cost-effective",
    img: "/wallet-add.svg",
    desc: "Ready to shine in tech & product roles",
    color: "#FFD478"
  },
];


export const data2: IData2 = [
  {
    id: 1,
    img: '/SpiderGraph.png',
    title: "Quality you can count on",
    content: <p>Our intensive screening process admits <strong>only the top 2%</strong> of STEM graduates, assessed across technical skills, soft skills, and growth mindset</p>,
    hrefLink: "",
    linkName: "why Tana",
    right: true,
    activeBtn: false,
  },
  {
    id: 2,
    img: "/OnlineInterview.png",
    title: "Full control over hiring",
    content: <p>We’ll present finalists to interview and <strong>you choose exactly who to bring onboard</strong> interview and you choose exactly who to bring onboard. Talent is 100% dedicated to you and fully embedded into your team</p>,
    hrefLink: "",
    linkName: "How it works",
    right: false,
    activeBtn: false,
  },
  {
    id: 3,
    img: "/SlackConversation.png",
    title: "Hit the ground running",
    content: <p>We provide hands-on training in the fundamentals for the job & global business culture, so that your <strong>talent is ready to go on day one</strong>.</p>,
    hrefLink: "",
    linkName: "Our roles",
    right: true,
    activeBtn: false,
  },
  {
    id: 4,
    img: "/04_HRChecklist.png",
    title: "No admin, no stress",
    content: <p>We handle all the ins-and-outs of hiring abroad, <strong>so you can focus on building</strong></p>,
    hrefLink: "",
    linkName: "Get Started",
    right: false,
    activeBtn: true,
  }
  
]

export const cards: ICards = [
  {
    id: 1,
    img: "/4115.png",
    img2: "/quote1.png",
    content: "Adriana’s done fantastic work. She’s so proactive I just explain what we need, and she comes back with the solution.",
    managerName: "Johanna Strutzenberger",
    position: "Head of Engineering, LEVY Health",
  },
  {
    id: 2,
    img: "/4116.png",
    img2:"/quote2.png",
    content: "Adriana’s done fantastic work. She’s so proactive I just explain what we need, and she comes back with the solution.",
    managerName: "Johanna Strutzenberger",
    position: "Head of Engineering, LEVY Health",
  },
  {
    id: 3,
    img: "/4117.png",
    img2: "/quote3.png",
    content: "Adriana’s done fantastic work. She’s so proactive I just explain what we need, and she comes back with the solution.",
    managerName: "Johanna Strutzenberger",
    position: "Head of Engineering, LEVY Health",
  },
]

export const featuredProfiles: IFeaturedProfiles = [
  {
    name: "Mathew",
    job: "QA Engineer",
    education: "BSc in Information Technology",
    companyHq: "San Francisco, USA",
    hobbies: "Music, Hiking",
    img: "/mathew.png",
    techSkills: ["Python", "Java", "C++", "JavaScript", "React", "Node.js", "HTML", "CSS", "SQL", "MongoDB", "Git", "AWS"],
    profile: "Mathew is a QA Engineer with 2 years of experience in the field. He has a BSc in Computer Science and is currently working as a QA Engineer at a startup in San Francisco. He is looking for a new challenge and is open to relocation.",
    card: "/BackgroundBlue.png",
    findLink: "",
    fontColorwhite: true 
  },
  {
    name: "Rose",
    job: "Software Engineer",
    education: "BSc in Computer Science",
    companyHq: "Bangalore, India",
    hobbies: "Biking, Hiking, camping",
    img: "/rose.png",
    techSkills: ["Python", "Java", "C++", "JavaScript", "React", "Node.js", "HTML", "CSS", "SQL", "MongoDB", "Git", "AWS"],
    profile: "Rose is a Software Engineer with 2 years of experience in the field. She has a BSc in Computer Science and is currently working as a Software Engineer at a startup in Bangalore. She is looking for a new challenge and is open to relocation.",
    card: "/BackgroundYellow.png",
    findLink: "",
    fontColorwhite: false
  }
]

export const devTools: IDevTools = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue.js",
  "Svelte",
  "Bootstrap",
  "TypeScript",
  "Sass",
  "Redux",
  "Webpack",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Ruby on Rails",
  "ASP.NET",
  "Laravel (PHP)",
  "Spring Boot (Java)",
  "GraphQL",
  "RESTful APIs",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "MariaDB",
  "Oracle",
  "Microsoft SQL Server",
  "Firebase",
  "Couchbase",
  "React Native",
  "Flutter",
  "Swift (iOS)",
  "Kotlin (Android)",
  "Xamarin",
  "PhoneGap/Cordova",
  "NativeScript",
  "Ionic",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitLab CI/CD",
  "Travis CI",
  "CircleCI",
  "Ansible",
  "Docker Compose",
  "SonarQube",
  "Gradle",
  "Apache Maven",
];

export const aboutUs: IAboutUs = [
  {
    id: 1,
    title: "QA engineers",
    content: ["Ensure high-quality software through functional, usability, performance, API, regression, and exploratory testing", "Collaborate with engineers and PMs to define requirements, identify bugs, and track resolution", "Continually improve QA processes for greater efficiency and efficacy, including via QA automation"],
    getInTouchLink: "",
    img1: "/Group107.png",
    primaryImage: "/Rectangle203.png",
    absoluteImage: "/Ellipse689.png",
    right: true
  },
  {
    id: 2,
    title: "Technical support engineers",
    content: ["Support customers in implementing, learning, and troubleshooting software through phone, email, and chat", "Educate customers via product demos, webinars, user guides, and FAQs", "Coordinate with internal teams to ensure timely resolution, customer satisfaction, and product improvements"],
    getInTouchLink: "",
    img1: "/group202.png",
    primaryImage: "/Rectangle202.png",
    absoluteImage: "/Ellipse202.png",
    right: false
  },
  {
    id: 3,
    title: "Data analysts",
    content: ["Work with cross-functional teams to understand business objectives, identify key metrics, and foster data-driven decision-making ", "Generate insights on market trends, business performance, risk assessment, revenue optimisation, etc ", "Communicate findings through reports, dashboards, and data visualizations"],
    getInTouchLink: "",
    img1: "/Group203.png",
    primaryImage: "/Rectangle203.png",
    absoluteImage: "/Ellipse203.png",
    right: true
  },
]
