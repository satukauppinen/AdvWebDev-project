# Project phase 4 - Project Presentation
The final stage of the Advanced Web Development project

## Use Cases
I had defined four use cases on my phase 1. This is how each one of those turned out.

### 1. Browsing the website

The set objectives were:

User: Customer
Functionality: 
+ The website is easy to navigate, logical and nice to look at
Outcome: 
+ The user gets the information they came to look for

The end result:

+ Built with React, the booking pop up fetches availability data from backend api
+ The website is logical and nice to look at. I set on a colour theme (green/yellow, white, black/dark brown for the text) which I though was suitable for the project, as it is quite nature connected. 
+ The page is a single page website. The banner stays on top of the page all the time. There are links in the banner to take the user straight to the desired topic if they don't want to scroll. The banner's logo works as a link to take the user to the top of the page.
+ The layout is the following: banner, big logo, about us (slighlty transparent info box on top of aerial view of a farmhouse environment), contact info (with phone number, email and an embedded Google Maps), a preview of the activities in a grid style (they work as links to the more detailed info) and then the big info parts of the activities in the same style as the about us-section but with the booking link included.
+ The booking possibility is a pop-up, appears when 'Book Now' button on a chosen activity is clicked
+ All the pictures are from copyright-free sources and the logo I made with AI
+ The info texts are also AI written, I decided that was a little bit of time saved for me
+ In conclusion, the set objectives were met

### 2. Setting bookable dates on the website

The set objectives were:

User: Admin
Functionality:
+ Choosing the date and time to appear on the website's "Booking" section
+ Publishing the dates
Outcome:
+ A form appears for the admin to fill/choose the dates
+ Confirmation is asked ("Are you sure you want to publish these dates?") before publishing
+ The published dates will appear on the "Booking" section of the website

The end result:

+ The dashboard view was built with React. The admin side handles the functions for different booking related activities so, data is fetched from backend apis. Working database is also essential, here using PostgreSQL
+ The admin dashboard has 'Set Available Times' section
+ The section has dropdown menu with calendar and clock where a date and time can be chosen. The date and time can also be written there if that is the way the admin wants to do it.
+ Once chosen, 'Save' should be clicked and the time will be saved on database and be visible on the booking popup
+ There is no confirmation are you sure.
+ In conclusion, almost all objectives were met, one thing I need to add is a functionality to remove a set date. It can be done via the database of course but that is not the best option.

### 3. Booking

The set objectives were:

User: Customer
Functionality:
+ Customer browses the available dates on the website
+ Customer chooses the the date they want and book it
Outcome:
+ When a "Book this" is clicked, a form will appear where the customer is to add their contact info
+ Confirmation after successful booking on the browser
+ The booked resource will no longer be available on the website
+ Booking info will be sent to the customers' given email address

The end result:

+ This relies on working database, an functional api call. The front was built with React and is in pop-up form because I wanted to keep the single page website approach.
+ The available dates can be browsed easily on the pop up menu which opens upon 'Book now'
+ customer can choose the date they want to
+ All fields must be filled before booking can be done
+ The browser will show successful/failed confirmation after the booking is done
+ A confirmation will also be sent to the email address the customer used to make the booking (nodemailer)
+ The booked resource seems to be still available on the site, so that must be fixed. I had it there but it is not working right now, probably due to some changes I made elsewhere and forgot to change the corresponding parts in the file handling that function.
+ In conclusion, all but one objectives were met. I will fix the 'no longer available' resource thing asap.

### 4. Viewing the booked resources

The set objectives were:

User: Admin
Functionality:
+ The admin can see the booked resources
Outcome:
+ The booked resources will appear in the admin view, their email/calendar

The end result:

+ Functional apis and database connection
+ The admin can see the booked resources
+ They are visible in the admin dashboard
+ A booking confirmation will come to the admin email too (nodemailer)
+ I also added a button to remove the bookings from the admin dashboard table

## Conclusion

This was a journey. It started well, things went smoothly, errors were manageable. Then I made mistakes, or could not find my mistakes and a lot of time was spent to get everything working. According to my use cases, two things need fixing ( the admin can remove the set dates easily on the browser, and the booked resources must disappear from the bookable menu) but other than those, I have managed to hit the use case goals. I can confidently say that I have learned a lot about debugging and postgresql through my struggles. 

The environment would have ideally been cloud, now it is just local virtual machine. I have used Node.js, Express, APIs, React and PostgreSQL to build this project. The design is responsive. There is error handling and security headers middleware. I have done manual testing, unit testing and ZAP testing.

## Presentation

Presentation page:

## Time spent:

A lot