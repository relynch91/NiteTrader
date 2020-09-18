NiteTrader README:

NiteTrader is an application built implementing the MERN Stack Software Model.  Node.js is used as the application runtime that the stack runs on, mongoDB is used as the backend database, express router is implemented as the backend application router, and lastly NiteTrader uses react as the frontend web application framework.  API requests are dispatched as AJAX requests to the AlphaVantage stock api providing real-time and up-to-date information on any publicly traded company.  

Users are able to create an account which sets up a default profile value of 50,000$.  The user will be able to buy and sell stock with current up to date prices of the actual stock price.  Users will be able to see their overall return on not only each individual company that they invest in, but also they are able to track their profile and portfolio growth over time.

The application impelments Heroku Cloud Services as the hosting platform, and also uses Heroku Dynos to run microservices that update all currently owned stocks by users.  When users login, a simple database request is made to fetch information for that specific user, instead of fetching information from a third party api.  This improves both the speed and the reliability of the website.
