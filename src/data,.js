
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
        details:"This single page application utilizes dynamic routing and incorporates Firebase authentication. The Chef Details page is protected, meaning that access to it is restricted. If a user is logged in and clicks on the View Recipe button, they will be redirected to the Chef Details page. However, if the user is not logged in and attempts to access the recipe details page, they will be redirected to the login page. To handle the backend functionality, Express.js is used, and dummy JSON data is obtained from the backend. Additionally, the website optimizes image performance by employing react-lazy-load",
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
        details:"The Toy Castle web application is a full stack application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The website utilizes Firebase for authentication purposes. Users are required to register to explore all features of the website. Once logged in, users can add toys and access protected pages such as the toy details page. If a user is not logged in and tries to view the details page, they will be redirected to the login page. On the My Toys page, logged-in users can update and delete their own toys, while the All Toys page features a search system allowing users to search for toys by name.",
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
        details:"Sportify is a feature-rich web application designed specifically for sports enthusiasts. It offers a range of functionalities including JWT authorization for secure user authentication, role-based routing to ensure appropriate access levels, dedicated admin and instructor panels for streamlined management, Firebase authentication for reliable user verification, and seamless payment integration with Stripe. With its comprehensive set of features, Sportify provides a robust platform where users can connect, explore various sports classes, and make online payments with ease and confidence.",
        tech: ["React Js","Tailwind css","DaisyUi","Axios","React Router Dom","Express js","MongoDB","JWT","Firebase","React Tabs","react-toastify","Stripe","react-hook-form","react-responsive-carousel","react-simple-typewriter","sweetalert2"],
        liveLink: "https://sportify-app-35c1c.web.app/",
        githubLinkClient: "https://github.com/Sayemhaque/sportify-camp" ,
        githubLinkServer: "https://github.com/Sayemhaque/sportify-camp-backend" 
    },

]


