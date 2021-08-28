export const projects = [
  {
    title: "Group Chat App",
    description:
      "This is a full-stack chat app that I developed in order to learn Socket.IO. Users are able to communicate in real-time in any of the site's channels, as well as create their own channels for particular topics. I built the server with Node.js and Express, utilizing a relational database created with SQLite. Finally, I used Socket.IO to create real-time event-based communication between the front and backend of the app.",
    image: "/images/chat.png",
    tags: ["React", "Node", "Express", "Socket.IO"],
    code: "https://github.com/LoganSorensen/group-chat-app-fe",
    backend: "https://github.com/LoganSorensen/group-chat-app-be",
    demo: "https://group-chat-app-fe.vercel.app/",
    id: 0,
  },
  {
    title: "React Shopping List",
    description:
      "This full-stack shopping list application was built using React, Node.js, and a MongoDB database. Users can view a list of items in the database and add them to their current shopping list. Additionally, a user can add a new item to the database if the list doesn't contain what they're looking for. The history tab shows the details of past lists, including their date, status, and contents.",
    image: "/images/shopping.png",
    tags: ["React", "MongoDB", "Node", "Express"],
    code: "https://github.com/LoganSorensen/shopping-list-fe",
    backend: "https://github.com/LoganSorensen/shopping-list-be",
    demo: "https://shopping-list-fe.vercel.app/",
    id: 1,
  },
  {
    title: "C4ADS Sanctions Explorer",
    description:
      "As part of my education, I had the opportunity to work with the Center for Advanced Defense Studies (C4ADS) to develop their Sanctions Explorer application. The focus of this project was to help consolidate and track sanctions data from a number of different authorities and present it to the user in a digestible way. I collaborated with a cross-functional team that included web developers, data scientists, and a UX designer, to both refactor existing code, and implement new features.",
    image: "/images/sanctions.png",
    tags: ["React", "Redux"],
    demo: "https://sanctionsexplorer.org/",
    id: 2,
  },
  {
    title: "Weather App",
    description:
      "This front-end app was built with React and uses Redux for global state management. It interacts with a 3rd-party weather API to retrieve data based on a location query. The app initially attempts to use the Geolocation API to obtain the user's current coordinates but will fall back to a default location if permission is not given. Additionally, users can enter a location manually to see data from other parts of the world, and are able to easily toggle between temperature scales.",
    image: "/images/weather.png",
    tags: ["React", "Redux"],
    code: "https://github.com/LoganSorensen/weather-app",
    demo: "https://weather-app-virid-nine.vercel.app/",
    id: 3,
  },
];

export const TimeLineData = [];
