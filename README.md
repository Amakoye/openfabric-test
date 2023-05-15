# Openfabric-test
Welcome! and thank you for giving me this opportunity to interview with you!
## Set up the application
* Clone the application from github using this repo link https://github.com/Amakoye/openfabric-test.git
* cd into the root directory and run
1. npm install
2. npm run dev-install
* Add the appropriate env variables for the backend by creating a .env file in the backend root directory. Add the following variables
1. ACCESS_TOKEN_SECRET - A random access string for authentication
2. MONGODB_URI - Your MongoDB connection string
* Also provide the appropriate env variables for the frontend, by creating an environment.ts file in the environments directory
```
export const environment = {
  apiUrl: '', //example http://localhost:3000/api
};

```
## Running the application
* While in the root directory, run
. npm run dev