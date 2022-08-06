## August 3, 2022

Today, I worked on:

* Favorite Functionality Day 3

Managed to get the poller.py for Users to work today, spent 
most of the day trying to find a solution to the favorite feature
The whole team split up into groups to tackle the problem from
different sides. Still struggling with the feature. At the end of the 
day, all my branches no longer work when trying to sign in. Something 
is wrong with my Auth/Tokens but cannot pin point the issue.
## August 2, 2022

Today, I worked on:

* Favorite Functionality Day 2

Spent the whole day on the the favorite feature, to little avail.
Having issues with poller.py file. Attempting to pull data from the
ParksVO.

## August 1, 2022

Today, I worked on:

* Favorite Functionality

Started on creating a new feature. The favorite button will 
allow users toi dave parks that they see through the detail 
page and store it in their "Bucket List". Ran into a wall with 
saving the state after the button click
## July 28, 2022

Today, I worked on:

* Merge Conflicts

We successfully handled and finished the Auth file and have a 
working login and JWT token functionality. The team collectively handled the merged 
## July 27, 2022

Today, I worked on:

* Weather API Pair Programming & adjusting GHI

Found a working alternative for a URL for the OpenWeatherAPI.
Now we can narrow by city/state in the US. The Footer is now fixed 
the BrowserRouter/App.js. 

## July 26, 2022

Today, I worked on:

* NavLinks and Routing

Routing was very disorganized, so today was spent refactoring
the routes and reassigning some variables tpo make the code dry.
Had some trouble tracing a URL path for the list & detail park pages.
Implemented useParams() to get the id for each park and hyperlink the 
name as a clickable event.

## July 25, 2022

Today, I worked on:

* Authorization Pair Programming

We had a major merge conflict at the end of last week which broke the 
sign up form. We managed to get it working. We still have a 500 error
for the login page. 

## July 21, 2022

Today, I worked on:

* Front-end styling

I managed to get the carousel images to be responsive.
Learned a bit more about Bootstrap features with padding/margins.
Need to fix sizing issue with the 3 images on top of the home page.
## July 20, 2022

Today, I worked on:

* Front-end / Authentication 
Working on the front end, paired programming with Liam and Wilson 
to working on the login / sign up forms. Still struggling working with 
Authentication issues in order for our users to log in, log out, etc. 
## July 19, 2022

Today, I worked on:

* Fixing issues with API calls - Set up PGadmin

Having issues with API calls. API call only retrieves one park out 
of hundreds of parks. Attempted to adjust poller.py and Park model.
Decided to run the poller once every 24hrs since national parks don't 
update often. Going to add the weather API that will update more 
frequently on the hour. Went into PGadmin and set up the volume.
testing**
## July 18, 2022

Today, I worked on:

* Setting up poller

Struggled a lot today with the poller. We had some issues with what we think 
was naming our database variables. We learned about script files that can 
run multiple commands and make the process of stopping, building and running 
the docker containers much faster. We separated the poller into its own 
container. 
## July 15, 2022

Today, I worked on:

* Trying to solve authentication issues with Django

Made progress on the views for users and parks, the authentication is 
put off until next week, for today we are focused on finishing the models 
and views

## July 14, 2022
Today, I worked on:

* Created poller files/ started on Views

Made some small adjustments to the YAML file to account for GHI/Back 
end communication. Continuing to brainstorm ideas for functionality. 
Created out first views for Parks and Users. Coming up with a plan to 
user django authentication

## July 13, 2022
Today, I worked on:

* Started creating models for the Parks and Users apps

We had a driver and multiple navigators to test out paired programming 
today, it seemed to work very well with the group. We got a lot done 
in term of the models. Tomorrow we continue with testing the migrations
## July 12, 2022

Today, I worked on:

* Updating Docker and creating the React App

We fixed PostgresSQL errors while transitioning from SQLite. YAML 
file needed some adjusting to satisfy the PostgreSQL requirements. 
I created the React App and tested the local host. Adjusted the 
directories to be more organized. Everything is working as of now. 
Meeting with the team to discuss functionality.
## July 11, 2022

Today, I worked on:

* Setting up Docker and Journal entries

Got with the team to begin setting up the Docker Setup and came up 
with a plan for our micro services.
