# Project phase 2 - Basic structure and main functionalities
The website still needs some fine tuning, but it is almost there. 

## Environment
Currently running on local virtual machine. My intention is to get it deployed on cloud, but at this phase I simply ran out of time. 

## Backend
For the backend directory I installed Node.js and Express. Other installations for some functionalities and safety were bcrypt, jsonwebtoken, pg, dotenv, helmet and cors. Some of these can be seen at use here in the <a href="https://github.com/satukauppinen/AdvWebDev-project/blob/main/backend/app.js">app.js file.</a>

## Frontend
React (+ Vite bundler). The frontend directory is quite big. The sub-directories include api, assets, components, pages and styles. API calls are made from there, visual elements are stored, all the different components for the website layout and functionalities. For better routing I set up react router dom. The frontend app.jsx looks like <a href="https://github.com/satukauppinen/AdvWebDev-project/blob/main/frontend/src/App.jsx">this</a>, and what I am quite happy about is this <a href="https://github.com/satukauppinen/AdvWebDev-project/blob/main/frontend/src/pages/HomePage.jsx">homepage</a> code.

## Database
For database I am using postgresql. That I set up using the Docker extension in VSCode. I am trying to avoid using local machine and so far I have managed. The project files are only in Github which I access via VSCode remote connection and use extensions when needed. I had to dig up some instructions, but I managed the db set up. Also I tested the the functionalities first from the terminal, and after troubles it started to work and I succesfully made for example test admin user for myself. I have this <a href="https://github.com/satukauppinen/AdvWebDev-project/blob/main/docker-compose.yml">docker-compose yml-file</a> in the root directory of the project.

## Basic structure and architecture
The structure is what I intended it to be in the planning. Some elements I discarded, when I just could not make them work.

## Functionalities
The offered services can be browsed on the website. A customer can open a booking popup on the chosen service, choose an available time from the dropdown menu, then add the asked contact info and book the service, or cancel the process. There is an admin route as well, where the admin can set new times and view the booked ones. Some minor issues with some api routes still need some attention. Again, I ran out of time.

## Code quality and documentation
Code quality is okay I hope, not perfect but not completely terrible either. AI was used as an assistant. Each file has some comment, at least what it is used for, if not more. Some fixing needs still to be done. 

## Testing and error handling
Error handling added to code in many places and seem to be working. Middleware is set. I have done user testing as a customer and as an admin, which were my two user profiles that need the functionalities. I made a couple of runs with ZAP, and uploaded the first report from there, <a href="https://github.com/satukauppinen/AdvWebDev-project/blob/main/testfiles/firstZAP-Report-.md">this one</a>, and made the suggested improvements. To solve some of the problems I had I used CURL and Postman too. The unit tests are still not there.

## User interface and interaction
The user interface is fine on the website which is for the customers. Small adjustments needs to be done on the layout. The admin side I am leaving very basic, at least right now. It just has the functionalities, no beauty, just very plain scss styles. Better to focus on the functionalities there. I ran into issues trying to set up nodemailer for the admin side, and after long struggles discarded it. The bookings must be viewed in the admin dashboard, which is bit of a downgrade to the plans I had, but serves its purpose. 
