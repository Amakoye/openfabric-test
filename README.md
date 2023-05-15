# Openfabric-test
Welcome! and thank you for giving me this opportunity to interview with you!
## Overview
### Frontend
1. Angular
2. Bootstrap
### Backend
1. MongoDB
2. Express
3. Node
4. Typescript
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
```
 npm run dev
 ```
## Deploying the application
Kindly note that the steps provided in this section, is from a reasearch I've done on how to deploy the application as I have no experience in deployment yet. For this I chose to research on deploying on AWS.
1. Prepare your Angular app for production, by building the Angular CLI command
```
ng build --prod
```
2. Set up an EC2 instance for the backend, and configure security groups to allow inbound traffic on the required ports for your backend application (e.g., HTTP, HTTPS, SSH).
3. Connect to your EC2 instance for the backend using SSH and upload your backend code to the EC2 instance
4. Install and configure the necessary dependencies on the backend server and run the appropriate command to start your backend server.
  - Install Node.js and any other dependencies required by your backend application (e.g., Express, MongoDB driver).
5. Set up an S3 bucket for the frontend and Create a new S3 bucket to host your frontend files. Upload the contents of the dist folder (generated in step 1) to the S3 bucket.
6. Configure the S3 bucket for static website hosting, by enabling static website hosting and set the index document to the appropriate file
7. Set up CloudFront, create  a new distribution and configure the distribution to use your S3 bucket as the origin
8. Point your domain to CloudFront
9. Test the deployment and verify that both the frontend and backend are working correctly.


