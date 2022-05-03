# Younique

## <a href="https://younique-store.herokuapp.com/">DEMO</a>

## Installation

Clone repository into a newly created folder

```
git clone https://github.com/honcho-man/Younique
 
```
npm install 

```

## Deploy & Run

If mongodb is available locally, create a new database with any name, then create a new .env file in the root directory of the application folder and add the following environment details:
    
    PORT=3500 or any port numer
    MONGODB_URI_DEV=mongodb://localhost:27017/database-name goes here!

Then edit the index.js file in the config folder and set application mode to development (i.e `return config[env] || config.development`)

Or if mongodb is not available locally, a cluster has been provided, create a new .env file with the following environment details

    PORT=3500 or any port numer
    MONGODB_URI=mongodb+srv://users:iamawesome!@pro-finders.kv9fa.mongodb.net/chat-app?retryWrites=true&w=majority

Then edit the index.js file in the config folder and set application mode to production (i.e `return config[env] || config.production`)

run the command to start the server:
```
npm start

```
open the link in your browser:

http://localhost:3500 or any port number that must be the same as the one in the .env file

## License

MIT © [KdFusion]
