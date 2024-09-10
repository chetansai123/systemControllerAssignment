Added Backend code for System Controller Assignment.
Fron server.js we can go through the flow of code in backend and it is organised in a good structure.
server.js->middlewares->routes->contoller->services
In server.js we are connecting to DB and we use models in services for performing DB operrations (CRUD).
Genrally we also add .env to gitignore files but haven't added it yet.
