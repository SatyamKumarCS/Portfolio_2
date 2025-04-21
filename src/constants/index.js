const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Coding Experience"},
  { value: 200, suffix: "+", label: "LeetCode Question", link: "https://leetcode.com/u/Saty_Satyam1122/"},
  { value: 61, suffix: "+", label: "GitHub Contribution", link:"https://github.com/SatyamKumarCS" },
  { value: 1500, suffix: "+", label: "LeetCode Contest Rate", link: "https://leetcode.com/u/Saty_Satyam1122/" },
];

const logoIconsList = [
  {
    // imgPath: "/images/logos/company-logo-1.png",
  },
  {
    // imgPath: "/images/logos/company-logo-2.png",
  },
  {
    // imgPath: "/images/logos/company-logo-3.png",
  },
  {
    // imgPath: "/images/logos/company-logo-4.png",
  },
  {
    // imgPath: "/images/logos/company-logo-5.png",
  },
  {
    // imgPath: "/images/logos/company-logo-6.png",
  },
  {
    // imgPath: "/images/logos/company-logo-7.png",
  },
  {
    // imgPath: "/images/logos/company-logo-8.png",
  },
  {
    // imgPath: "/images/logos/company-logo-9.png",
  },
  {
    // imgPath: "/images/logos/company-logo-10.png",
  },
  {
    // imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "I contributed to improving frontend performance during Hacktoberfest by leveraging my skills in HTML, CSS, and JavaScript. My work focused on optimizing the UI for speed and responsiveness, resulting in a smoother and more efficient user experience.",
    imgPath: "/images/exp1.svg",
    logoPath: "/images/logo1.png",
    title: "Open Source Contribution",
    date: "September 2024 - October 2024",
    responsibilities: [
      "Contributed to open-source projects as part of Hacktoberfest 2024.",
      "Made 2 PR Merged, collaborating with maintainers and understanding large codebases.",
      "Gained hands-on experience with Git, GitHub workflows, and the collaborative open-source development process.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  }
];

const testimonials = [
  {
    name: "Husain Khorakiwala",
    mentions: "@husainkhorakiwala",
    review:
      "Working with Satyam was an amazing experience. His dedication, leadership, and innovative ideas truly set him apart. I learned a lot just by observing his approach to solving problems and handling team coordination.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Shivam Gupta",
    mentions: "@shivamgupta",
    review:
      "Satyam has a natural ability to bring people together and get things done. His vision during the GoForGold ICPC camp was clear, and his execution was flawless.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Shitanshu Kumar Singh",
    mentions: "@shitanshukumarsingh",
    review:
      "Whether it's coding, organizing, or leading—Satyam excels at it all. He’s someone you can count on, no matter what. His enthusiasm is contagious and uplifting for the entire team.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
