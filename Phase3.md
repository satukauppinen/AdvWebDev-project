# Project phase 3 - Further Development
Fixing issues, accidentally creating more issues, then trying to fix those. What a struggle.

## Environment
 My intention was to get it deployed on cloud, but I since all my resources went into debugging some incredibly stupid mistakes I had to leave this part be as it is. I did look into it and I was going to go for AWS as I have completed a couple of courses in AWS development, but that won't happen at this stage, the deadline comes too fast. The project has been running on local virtual machine since the beginning as that was the way I set it up, and that's where it'll stay for now.

## Backend
This is Node.js and Express, as that's how I set the whole thing up in the first place. The backend structure remained pretty much the same since the phase 2. However, I noticed I had mistakenly placed my API directory in the frontend structure. That had to be moved, if not for other reasons but clarity, and that then resulted in some problems with the paths, but in the end I made it work. Though, a lot of time was spent with the APIs, looking at dev tools on browser and backend logs on vscode terminal and using Postman as well. First they worked, then something happened and nothing worked, but eventually the errors were solved. 

## Frontend
React (+ Vite bundler). I had some layout issues for the home page in the phase 2, and those are now solved. The UI is quite ok I think. I added an embedded Google Maps to my contact section, although it is just one random forest location I chose, but I wanted to have the map feature there. I made the banner logo/name to be a link to the top of the page, modified the activities grid. One thing that is still stylewise not too pleasing, is the admin route, but that I did not list to be of great importance in the beginning, so that can wait for even further development. 

## Database
Docker, PostgreSQL. Oh my did this part turn into a mess. After I had been solving the problems with my bookings api, I turned into, or tried to turn into the admin side. For some reason, I could not log in, which was weird because I had had that working beautifully earlier. I added about a million console.logs into my codefiles to help with debugging and basically went through every bit of the project multiple times and tried using AI to detect the issue too but nothing help. I erased redid the database multiple times Embarrasingly this problem took days(!!!) to solve, and in the end it turned out the problem was not it the code at all, I just had not connected to the correct database. I felt enormously stupid, and still do.

## Basic structure and architecture
The structure and architecture is what it was in the phase 2, just some layout and UI changes and fixes made.

## Functionalities
The offered services can be browsed on the website. A customer can open a booking popup on the chosen service, choose an available time from the dropdown menu, then add the asked contact info and book the service, or cancel the process. In the phase 2 I failed with the Nodemailer set up, but I tried again and that is working now, so customer get an email confirmation of their reservation, and the admin has the reservation in their mail too. I am very happy this is now functional. There is an admin route as well, where the admin can set neew times available for booking, and view bookings, as well as delete them.

## Code quality and documentation
Code quality is okay I hope, there is probably some inconsistancies, and places to improve but in conclusion, it should be fine.

## Testing and error handling
Error handling added to code in many places and seem to be working, and as mentioned, a lot of console.logs are there too to help with debugging. Middleware is set. I have done user testing as a customer and as an admin, which were my two user profiles that need the functionalities. I have run ZAP-tests for security, and added unit test (Jest, React Testing Library). I have successfully ran the unit tests. 

## UI/UX
As mentioned, the customer side is nice to look at and functional, the admin side is functional but not nice to look at. I will get back to it.

