# Phase 4 – Project Presentation


##  Project title

My project is called The Farmhouse Experience

---

##  Project overview

The purpose of this project was to build a website for a farm which sells 'experiences'. The page should have introduction, information about the bookable activities and the booking ability. There also needs to be an admin side to set, view and control the bookings. The target users are customers and the admin running the website.

---

##  Use case summary

<a href="https://github.com/satukauppinen/AdvWebDev-project/blob/main/Phase1.md">The link to Phase 1</a>

| Use Case | Implemented (Yes/No) | Demonstration / Notes |
|----------|----------------------|------------------------|
| User browses the website | Yes | Website is designed to be logical, easy to navigate and nice to look at |
| User can book an activity | Yes | A pop up opens for the booking option, user fills in the required info and books a resource |
| User gets confirmation of the booking they made | Yes | First, the browser tells if the booking was successful or not, and when not, gives indication what went wrong. When successful, user gets a confirmation email too. |
| A booked resource will disappear from the menu | Yes, but fails | The code must be fixed, something broke when I did changes elsewhere, so there is probably a misspelling somewhere, I'll fix this |
| Admin can set available dates for booking | Yes | The admin dashboard has a function for this, where a calendar and a clock opens and a suitable time will be set. It can also be typed in. The chosen time is saved, the browser gives confirmation whether or not it was successful and the time will be available for booking. |
| Admin can remove dates from the dashboard | No | I did not realise in the planning process that this too could be a useful feature. I will add it later. Of course, a date can be removed using the database if necessary before the fix is implemented. |
| Admin can view booked resources | Yes | Admin dashboard has a table for booked resources where the bookings will appear once a user makes one. Also, the admin gets it in their email. |
| Admin can delete bookings | Yes | On the bookings table there is the option to remove the booking. |


---

##  Technical implementation

I used Node.js, Express, React, RESTful Apis, Docker and PostgreSQL to build this project. I imported a number of different features for different purposes, like CORS, Bcrypt, Nodemailer, and helmet. I have quite a lot of files for this project so I set it so, that the root has just the docker-compose.yml, md-files, gitignore and then the frontend and backend directories, which then have many subdirectories in somewhat logical manner, so I can manage the project. I can show that when presenting.



---

##  Development process

The start was easy, I set up the backend and frontend because using Node.js, Express and React was fresh in my memory. I wanted to do the project so that I have nothing on my local machine, just in Github, so I accessed the project remotely using VSCode. I had built the project a while, when I realised I don't have the database set up at all, I had forgotten. I had the Docker extension on my VSCode and decided to set up the PostgreSQL with that. I had to dig up some instructions, but I managed. After that, the built when on quite nicely, I added feature by feature, according to my plan. At the phase 2 I had to discard the Nodemailer because I just could not make it work, but successfully added that later. Then I had a small break because I had to finish other course projects with earlier deadlines, and coming back to the project I made a load of mistakes, which lead to terrible problems and I almost deleted the whole thing out of frustration. Luckily I didn't do that, and eventually, after many many hours I overcame the difficulties. Then again, I proceeded according to my plan and with minor fixes to be made, the project is ready.


---

##  Reflection and future work

As mentioned, there were a lot of challenges. The latest, and the biggest ones were with apis and especially PostgreSQL, but they were only caused by my stupidity and could have been overcome super simply if I had only noticed what was the issue at once. Certainly that was a learning experience, I have gained a lot of skills with debugging and testing for faults. The UI on the client side was quite fine since the beginning, I made some small changes and resolved a small layout issue. I want to fix the two things I noticed were missing/not working when looking through my use cases and make the admin side UI nicer, that is not looking too good right now.

---

##  Work Hours Log

# Project Logbook

| Date | Hours | Description |
| --- | --- |--- |
| 25.3. | 1,5h |- Project Introduction lecture|
| 30.3. | 1h |- Trying to get ideas and plan the project |
| 5.4. | 4h |- Idea locked in </br> - Content for the framework for the Phase 1 |
| 8.4. | 4h |- Figma prototyping done</br>- Writing and finalizing content for the Phase 1 |
| 12.4. | 2h |- Setting up the structure for the project</br>- First bits of code for the backend |
| 16.4. | 4h |- More code, frontend installations</br> |
| 19.4. | 2h |- Code code code |
|20.4. | 8h |- A lot of code</br>- Problem solving </br>- Suddenly realized I had forgot to set up the database, but now that is also done |
| 21.4. | 8h |- After a lot of issues, basic functionality is ok</br>- Trying to meet as many of my goals and plans as possible |
| 22.4. | 3h |- Zap test, some fixes added based on that </br>- Writing the report for the Phase 2 |
| 26.4. | 2h |- Fixing the frontend layout </br> |
| 29.4. | 3h |- Still some tweakes on the layout </br>- Thought about changing the grid a little |
| 2.5. | 2h |- Changes for the grid, added links </br> |
| 12.5. | 12h |- Okay nothing works. That's just fantastic </br>
| 13.5. | 12h |- Figured finally out the API issue. Now the admin login is not working |
| 14.5. | 12h |- FINALLY!!! Now things are working again </br>- Ran the unit tests now that the whole is kinda complete |
| 15.5. | 8h |- Did some modifications still, not too much problems anymore thankfully </br>- Wrote the reports and the presentation |
| **Total**| **80,5h** |... |

---

## 🪢 Presentation link

I am presenting during the lecture.