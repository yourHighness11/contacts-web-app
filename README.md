# About project

This project is based on node.js, ejs and express.

# Database setup

1. Create an account in mongoDb and setup required files in pc, copy your mongoDB "localhost" or "cloud" string.
2. Save that string in "/models/dbConect.js", or you can create environment variable in ".env" file.
3. Open the dbConnect.js for futher details, i have added comments in the file;

# For twilio

1. create a ".env" file in root directory, add you accounts id as "ACCOUNDSID" and auth token as "AUTHTOKEN".
2. you can setup twilio in "controllers/allControllers.js", i have added comments also.
3. As i have only trial account so i can only send messsage to my own number, so add your number from home page input form, but make sure that the number should be in "+918XXXXXXXX9" format other wise the message will not be sent, so enter details carefully.
4. The input number will get random OTP message that you will see in text area on Contact Info Page before sending the message. If you edit the message the person will get that message. Also the otp will not be shown in the "List of messages sent" on Home Page.

# Check the project

1. Open terminal in root directory and type "npm install" to download all dependencies.
2. Type "node server.js" or "npm start" or "npm run dev" in terminal to run the project.
3. Then type localhost:3000 in your browser's url.

# For error

If you find any error check logs
