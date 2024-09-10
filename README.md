Added Backend code for System Controller Assignment.
From server.js we can go through the flow of code in backend and it is organised in a good structure.
server.js->middlewares->routes->contoller->services
In server.js we are connecting to DB and we use models in services for performing DB operrations (CRUD).
Genrally we also add .env to gitignore files but haven't added it yet.


// Go to backend sub-directory and start running backend with these commands entered in root directory 
cd ./backend
npm i
npm start
