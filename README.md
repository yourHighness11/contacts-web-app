# About project

This project is created to send random otp(or sms) to a person.
Project is based on node.js, ejs , mongoose, twilio and express,

# Database setup

1. Create an account in mongoDb and setup required files in pc, copy your mongoDB "localhost" or "cloud" string.
2. Save that string in "/models/dbConect.js", or you can create environment variable in ".env" file.

# For twilio

1. first type 'npm i twilio' then create ".env" file, add you twilio accounts id as "ACCOUNDSID", auth token as "AUTHTOKEN" and twilio no as "TWILIO_NO".

# Run the project

1. Open terminal and type "npm install" to download all dependencies.
2. Type "node server.js" or "npm start" or "npm run dev" in terminal to run the project.
3. Then type localhost:3000 in your browser's url.

# For error

If you find any error check logs
