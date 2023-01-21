import FoodWebsiteImg from './images/Untitled design.jpg';
import G3ArchitectsImg from './images/Untitled design (2).jpg';
import DonateTodayImg from './images/Untitled design (3).jpg';
import CoffeShopImg from './images/Untitled design (4).jpg';


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
    { id: 1, name: "Node js" },
    { id: 2, name: "Express js" },
    { id: 3, name: "Mongodb" },
]

export const tools = [
    { id: 2, name: "Git" },
    { id: 1, name: "Visual studio code" },
    { id: 3, name: "Github" },
    { id: 4, name: "Firebase" },
    { id: 5, name: "Netlify" },
    { id: 6, name: "Heroku" },
]

export const learningNow = [
    { id: 1, name: "Typescript" },
    { id: 2, name: "Redux" },
    { id: 3, name: "React testing" },
]

export const projects = [
    {
        id: 1,
        title:"Mobile Resonsive Burger shop website using vanila Html and css",
        img: FoodWebsiteImg,
        end: "Frontend",
        tech: ["Html5", "css3", "Grid" , "Flexbox", "Media Query"],
        liveLink: "https://sayemhaque.github.io/Food-website2/",
        githubLink: "https://github.com/Sayemhaque/Food-website2"
    },

    {
        id: 2,
        title:"Mobile Resonsive website using vanila Html and css",
        img: G3ArchitectsImg,
        end: "Frontend",
        tech: ["Html5", "css3", "Grid" , "Flexbox", "Media Query"],
        liveLink: "https://sayemhaque.github.io/G3-Architects/",
        githubLink: "https://github.com/Sayemhaque/G3-Architects"
    },
    {
        id: 3, 
        title: "Mobile Resonsive website using vanila Html and css",
        img: DonateTodayImg,
        end: "Frontend",
        tech: ["Html5", "css3", "Grid" , "Flexbox", "Media Query"],
        liveLink: "https://sayemhaque.github.io/Donate-Today/",
        githubLink: "https://github.com/Sayemhaque/Donate-Today" 
    },
    {
        id: 4, 
        title: "Resonsive coffee shop website using  Html,Bootstrap and css.",
        img: CoffeShopImg,
        end: "Frontend",
        tech: ["Html5", "css3", "Bootstrap"],
        liveLink: "https://sayemhaque.github.io/Coffee-shop-Bootstrap/",
        githubLink: "https://github.com/Sayemhaque/Coffee-shop-Bootstrap" 
    },

]


