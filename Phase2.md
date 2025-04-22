# Project phase 2 - Basic structure and main functionalities
The website still needs some fine tuning, but it is almost there. 

## Environment
Currently running on local virtual machine. My intention is to get it deployed on cloud, but at this phase I simply ran out of time. 

## Backend
Backend done with Node.js and Express.

## Frontend
React (+ Vite bundler)

## Database
PostgreSQL with Docker

## Basic structure and architecture
The structure and architecture is what I intended it to be in the planning.

## Functionalities
The offered services can be browsed on the website. A customer can open a booking popup on the chosen service, choose an available time from the dropdown menu, then add the asked contact info and book the service, or cancel the process. There is an admin route as well, where the admin can set new times and view the booked ones. Some minor issues with some api routes still need some attention. Again, I ran out of time.

## Code quality and documentation
Code quality could be better, but I hope that it's not completely terrible. AI used as an assistant. Each file has some comment, at least what it is used for, if not more. 

## Testing and error handling
Error handling added to code in many places and seem to be working. Middleware is set. I have done user testing as a customer and as an admin, which were my two user profiles that need the functionalities. Unit tests need to be added, and so far I have not ran the files on Zap, which I intend to do. 

## User interface and interaction
The user interface is fine on the website which is for the customers. Small adjustments needs to be done on the layout maybe. The admin side I am leaving very basic, at least right now. It just has the functionalities, no beauty, just very plain scss styles. Better to focus on the functionalities there. I ran into issues trying to set up nodemailer for the admin side, and after long struggles discarded it. The bookings must be viewed in the admin dashboard, which is bit of a downgrade to the plans I had, but serves its purpose. 
