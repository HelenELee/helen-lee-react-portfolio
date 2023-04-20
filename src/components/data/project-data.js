//import images for use in portfolio
import pppImage from '../../assets/ppp_20.png';
import cyberFImage from '../../assets/cyberfridge.png';
import workdaySchedImage from '../../assets/work-day-schedular.png';
import notetakerImage from '../../assets/note-taker.png';
import ecommerceImage from '../../assets/e-commerce.png';
import techblogImage from '../../assets/tech-blog.png';

//array of data for portfolio page
export const projectData = [
    {
        id: "1",
        title: "Pumping Party Planner",
        app: "https://caoimhejyoti.github.io/pumping-party-planner/",
        github: "https://github.com/caoimhejyoti/pumping-party-planner",
        img: pppImage,
        desc: "A web application which allows users to search for music or cocktails to save for their party plans. The app uses the Musicbrainz API and the CocktailDB API and is styled using Tailwind."
    },
    {
        id: "2",
        title: "Cyber-fridge",
        app: "https://stormy-cliffs-46291.herokuapp.com/",
        github: "https://github.com/HelenELee/cyber-fridge",
        img: cyberFImage,
        desc: "An inventory management application to track the food items in a users fridge. It allows logged in users to add/update/delete quantities of food items in their fridge and create recipes from these food items. It uses HandleBars and MySQL."
    },
    {
        id: "3",
        title: "Work Day Scheduler",
        app: "https://helenelee.github.io/workday-scheduler/",
        github: "https://github.com/HelenELee/workday-scheduler",
        img: workdaySchedImage,
        desc: "The work day scheduler allows the user to enter events for each hour in the work day from 9am to 5pm. Events can be added and saved row by row, or saved all together. The app was developed using a combination of HTML, CSS and Javascript, JQuery, Bootstrap, Day.js and Google Fonts."
    },
    {
        id: "4",
        title: "Note Taker",
        app: "https://note-taker-helen-lee.herokuapp.com/",
        github: "https://github.com/HelenELee/note-taker",
        img: notetakerImage,
        desc: "This is a node.js application which uses express to build the API to interact with the 'notes' which are stored in a json file. The API provides endpoints to list all 'notes', add a 'note' and to delete a 'note'."
    },
    {
        id: "5",
        title: "E-Commerce Backend",
        app: "",
        github: "https://github.com/HelenELee/ecommerce-backend",
        img: ecommerceImage,
        desc: "This is the backend of an ecommerce application and contains Restful routes to perform CRUD operations. It uses Express.js for routing and Sequelize to interact with MySQL where the data is stored. The dotenv package is utilised to store sensitive data."
    },
    {
        id: "6",
        title: "Tech Blog",
        app: "https://tech-blog-helen-lee.herokuapp.com/",
        github: "https://github.com/HelenELee/tech-blog",
        img: techblogImage,
        desc: "This is an app where developers can publish their blog posts and comment on other developers’ posts as well. It is a full stack application with the front end developed using Handlebars, routing done using Express.js and Node.js and the backend uses Sequelize to interact with MySQL where the data is stored."
    }
]