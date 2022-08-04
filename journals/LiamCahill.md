# Journal entries for MOD 3 group project

## August 3, 2022
* paired programmed with Greg again to try and solve issue with account detail favorites list
* created ParkVO poller that polls data
* will be pursuing REACT client side rendering for favorites list for a specific user tomorrow.
**issue with parkVO poller not being hosted to the correct port in the project settings**


## August 2, 2022
* pair programmed with Greg on account detail page pulling list of ParkVO's list.
* parks list filter by state working currently, just needs to be styled.
**issues with not being able to post to list of ParkVO's but able to retrieve them from JSONResponse.**


## August 1, 2022
* worked on css for login and splash page
* used bootstrap form-control for form containers styling
**issue with buttons not linking path to signup page correctly. will fix tommorrow.**


## July 28, 2022
*used the day to catch up with whole team and solve all merge conflicts and merge with main 


## July 27, 2022
* Fixed user auth using authToken function 
* started to write new logic for front end react files
**Auth working to full functionality, linking to other files with <navigate> tags**


## July 26, 2022
* pair programmed with Wilson and worked on Login/logout and Signup functionality. 
* Fixed useAuthcontext from Auth cookbook and imported correct react components into login, logout files
* nested <app/> into an <AuthProvider/> inside index to correctly allow authcontext.
**issues with token being null, would not track**

## July 25, 2022
* rerouted paths for login page to accurately match endpoints in back-end.
* pair programmed with wilson again to help troubleshoot signup page.
* Started writing paths/endpoint and .js file for logout
**ran into errors with route paths for singup and login. navigate still causing issues**

## July 22, 2022
* Got login page to cache JWT tokens and track logged in vs not.
* pair programmed with Wilson and assisted error handling with signup form page.
**issues with route paths to redirect for both login and signup pages using navigate**

## July 21, 2022
* Continued working on Login and Signup authentication with Wilson.
Implemented JWT token authentication for user sessions and tracking cache memory.

**ran in to multiple errors with Index and App files being inside of <StrictRouter> tags. Also had to install CORS headers.**
**Login page is currently accepting JWT token and stroing it. Just needs to be finished so it redirects the page to main.**

## July 20, 2022
* Started working on React pages
Completed setting up routes and paths for user login and signup pages. Still not completed. pair programmed with Wilson
used hooks and created an auth.js file to authenticate our JWT tokens and user sessions.

* React parks list
Siah and Sergey pair programmed to create and populate the main list page with react.

## July 19, 2022
* Finished Poller.py file
Completed both endpoints for list and detail GET requests for Parks poller.
**Poller completed successfully** 

## July 18, 2022
* Error handled database issues
PostgreSQL in our YML file was established incorrectly, reverted back to previous version on my computer and adjusted accordingly. Working now.

* Reformatted Poller.py
still working on poller file but it is grabbing correct information and applying it to a model. Only polling one instance currently.

**Database currently working and established correctly and speaking to both microservices**

## July 15, 2022
*Completed API view endpoints for both microservices
Wrote and registered views for all request types needed
**All endpoints working**

*Started writing 3rd party poller for NPS microservice
Creating a poller file that has a polling function to grab data from 3rd party API and register a model we have created which is essentially a VO.

## July 14, 2022
*Resolved User model framing
Decided to go with djangos AbstractUser model that comes with some built in authentication features to help with sessions.

* Started creating API views
Paired programmed API views for both microservices and solidified endpoints on insomnia.

# 07/13/2022
- Started creating GitLab issues formatting project structure
- Started writing Django model classes for both microservices and discussed functionality.


# 07/12/2022
- Created both backend microservices and integrated to POSTGRES from defualt SQLite3.
- Created React app frontend
**All 3 ports running and working**
### problems that occurred
- Had errors with DATABASE_URL username being incorrect. Changed it to the name of the microservice and it worked.
- Had errors with .sh files not having !bin/bash/ at the top to indicate it being a shell script file. 

## 07/11/2022
- Setting up Docker Images and Containers
- running into issues with requirements.txt commands
