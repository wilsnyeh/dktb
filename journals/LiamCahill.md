# Journal entries for MOD 3 group project

## July 20, 2022
* Started working on React pages
Completed setting up routes and paths for user login and signup pages. Still not completed. pair programmed with Wilson
used hooks and created an auth.js file to authenticate our JWT tokens and user sessions.

* React parks list
Siah and Sergey pair programmed to create and populate the main list page with react.

## July 19, 2022
*Finished Poller.py file
Completed both endpoints for list and detail GET requests for Parks poller.
**Poller completed successfully** 

## July 18, 2022
*Error handled database issues
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
