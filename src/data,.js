
import shaporiItalianoImg from './images/recipe-app.png';
import toyCastleImg from './images/toy-castle.png';
import sportifyImg from './images/sportify-camp(2).png';


export const frontedSkills = [
    { id: 1, name: "Html5" },
    { id: 2, name: "css3" },
    { id: 3, name: "javascript" },
    { id: 4, name: "React js" },
    { id: 5, name: "React Query" },
    { id: 6, name: "Bootstrap" },
    { id: 7, name: "Tailwind css" }
]

export const backednSkills = [
    { id: 1, name: "Node js (Basic)" },
    { id: 2, name: "Express js" },
    { id: 3, name: "Mongodb" },
]

export const tools = [
    { id: 2, name: "Git" },
    { id: 1, name: "Visual studio code" },
    { id: 3, name: "Github" },
    { id: 4, name: "Firebase" },
    { id: 5, name: "Netlify" },
    { id: 6, name: "Vercel" },
]

export const learningNow = [
    { id: 1, name: "Typescript" },
    { id: 2, name: "Redux" },
    { id: 3, name: "Next Js" },
]

export const projects = [
    {
        id: 1, 
        title: "Sapori Italiano",
        img: shaporiItalianoImg,
        end: "MERN STACK",
        details:"This single-page application implements dynamic routing and Firebase authentication.The Chef Details page is protected,accessible only to logged-in users.Image performance optimization is achieved using react-lazy-load. Express.js is utilized for backend functionality, and dummy JSON data is obtained from the backend.",
        tech: ["React Js","Tailwind css","DaisyUi","React Router Dom","Express js","MongoDB","Firebase","React-Lazy-Image"],
        liveLink: "https://repice-app-6cac9.web.app/",
        githubLinkClient: "https://github.com/Sayemhaque/chef-website" ,
        githubLinkServer: "https://github.com/Sayemhaque/chef-website-backend" 
    },
    {
        id: 2, 
        title: "TOY Castle",
        img: toyCastleImg,
        stack: "MERN STACK",
        details:"Sportify is a feature-rich web app for sports enthusiasts. It offers JWT authorization, role-based routing, admin/instructor panels, Firebase authentication, and Stripe payment integration. Users can connect, explore sports classes, and make secure online payments.",
        tech: ["React Js","Tailwind css","DaisyUi","React Router Dom","Express js","MongoDB","Firebase","React Tabs","react-toastify"],
        liveLink: "https://toy-castle-409e5.web.app/",
        githubLinkClient: "https://github.com/Sayemhaque/toy-castle-client" ,
        githubLinkServer: "https://github.com/Sayemhaque/toy-castle-server" 
    },
    {
        id: 3, 
        title: "Sportify Camp",
        img: sportifyImg,
        stack: "MERN STACK",
        details:"Sportify is a feature-rich web app for sports enthusiasts. It offers JWT authorization, role-based routing, admin/instructor panels, Firebase authentication, and Stripe payment integration. Users can connect, explore sports classes, and make secure online payments.",
        tech: ["React Js","Tailwind css","DaisyUi","Axios","React Router Dom","Express js","MongoDB","JWT","Firebase","React Tabs","react-toastify","Stripe","react-hook-form","react-responsive-carousel","react-simple-typewriter","sweetalert2"],
        liveLink: "https://sportify-app-35c1c.web.app/",
        githubLinkClient: "https://github.com/Sayemhaque/sportify-camp" ,
        githubLinkServer: "https://github.com/Sayemhaque/sportify-camp-backend" 
    },

]


