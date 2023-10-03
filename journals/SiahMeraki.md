August 5, 2022

Misscommunication on my part I was playing around with the styling for the parks list page however Greg was working on it as well and I opted to allow him to submit his styling for those pages. I will work some more over the weekend however I do believe after this project I am leaning more towards front-end oppossed to back-end so that was a nice self discovery moment for me. 

We were also able to get the profile page logic working with the help of zynh. Im still not 100% on replicating something like this on another project but it was nice to get an overview so I can do another deep dive on a later date. 

Wilson worked on the readMe and we assisted trouble shooting the unit test as they weren't running correctly. I was able to resolve the issue pretty quickly which I was proud and impressed of myself. 

We will submit at the end of theday. 

August 4, 2022
------
Today I finalized the styling for the landing page,login, and sign up. I'm stuck on the modal component so instead of letting that stop my progress all together. I decided to keep the background consistent so it "appears" as if its loading on the same page when in actuality its being rerouted. 

August 3, 2022
*OUT EMERGENCY*
------
August 2, 2022
    Today after class I did a deep dive into CSS and HTML. I always liked it but never "learned" the language like python and javascript. I was pretty impressed that I was able to create the landing page exactly how i invisioned in it my head. I also learned some cool stuff about indexes for CSS.

    (-) Issue:
        I want to have the login/signup form pop up in a mini screen when you click the actual login button on the landing page. 
            - I need to figure out how to create the "pop up" and hold the sign up form styling.
                (+) Resolution: Off the top of my head i can think of throwing it inside a container that lyes "on to"  of the pop up window
------
August 1, 2022

Today we decided to tackle the issue pertainning to a limited number of parks being displayed. Sergy was able to catch the error and now all parks are displaying. We are still using the original bootstrap carousel theme and i've been watching a few videos after class on HTML and CSS. I'd like to play around with that a little more.

July 28, 2022

It's official... Auth is the death of Modzilla. We've opened a few tickets to resolve the issues with Auth however we keep running into obstacles. We're also running into A LOT of merge conflicts. I feel like I need to look up git commands and watch some videos. Git seems to be a reoccuring demise. I ran into to similar issue on Project Beta with liam. We did push through and succesfully got everything merged and on the same page. 

July 27, 2022

Today, Liam and Wilson were able to complete the issue they were encountering the JWOT token and the user login. 

Sergey and I were working on implementing data to show up on the park details page. 

LAT AND LON issue is still on the table.
-----
July 26, 2022

In terms of my workload, the openWeatherAPI can succesfully grab the city weather data however some parks span accross multiple cities and are in U.S. terriritores. I believe I'm going to have to implement LAT and LON as the query instead of the city. 

Confirmed with Sergey who will help with this adjustment. Still not able to hide API key sergey suggest we hard code it and figure it out later.. still no push
-----
July 25, 2022

Today, I accepted the challenge of implementing the weather API. 

The API i decided to use was the open weather API as teh documentaiton is clear. I was able to complete the openWeatherAPI.py file and can get accurate information per city.

Ran into one issue today not being able to hide openWeatherAPI key.. not pushing to avoid key from being exposed online.
-----
July 21, 2022
Today we got the header images to load succesfully. Personally I believe we should remove the header (carousel) from every page and only have it on a few. 
Looking into other bootstrap templates/attributes we can use still. 

-----
July 20, 2022

The big topic of discussion today is still Authentication. Liam and Wilson broke off into another break out room while sergey and I worked on styling. It's interesting playing around with bootstrap under a microscope. I want to look into it more and found some helpful sites to help with bootstrap attributes. 

-----
July 19, 2022

The NPS API is giving us a weird issue. I can confirm it's properly set up as insomnia is returning the correct data for out endpoints BUT its not returning all of the data. It's only returning 50 parks. We couldn't figure this out right now and left it on the backburner as we can continue building since we are getting data. 

We do need a weather API which I would like to take ownership of. 

-----
July 18, 2022

"Today was a good day" -- Ice Cube
Today with Sergey as the driver we began polling for data. We used the NPS API docs to get the correct paths for the data we wanted to poll from. It was a bit nerve rackig at first because w e did not want to get stuck in an infiinite loop and max out our API key. (luckily the process to get an API key for NPS is a straight forward process).
----

July 15, 2022

Today we began discussing how the poller will be handled. We also began working with our API key. I figured out this needs to be stored in the gitignore file by a quick search online. We replicated the settings to successfully convert our API to a hidden file and made sure not to just "show" our API in our code. We used a template variable. A long process but I've never done it before which was cool to see. 

-----

July 14, 2022

Today I worked on the views for Users and Parks. We ran into slight issues but nothing major. We then discussed as a team how to tackle the USer Authentication part which none of us have expierence with. There was some info dropped via slack on how to tackle this. We all reviewed it and then Liam and Wilson decided to tackle this so we all wouldn't be working on the same exact thing.  


July 13, 2022

Began creating models. While creating the models we realized it was not as simple as it sounded. We ran into an "issue" regarding organization of our models. Today was more so discussing how to organize our models parks and users. We looked at pass projects and compared our new models to old ones. 

-----

July 12, 2022

Greg is succesfully up to date. 

Liam, Wilson and Myself are troubleshooting an error 
    FATAL:  password authentication failed for user "user-name"
        RESOLVED:  Liam created a help desk ticket and the issue was resolved with the help of Zynh and Yesenia
While greg begins creating the react app. 

Greg had questions creating the react and brought the issue to peer programming.
We all troubleshooted the issue. 
(-) Issue
    [x]run.sh not being recognized as a .sh file
        - RESOLVED: I remembered that all .sh files needed to have the bash command: #!/bin/bash and after adding this on line one of run.sh the file is now recognized and all erros disappeared that greg was having.
No new issues as of End of Day.
Next steps, discuss in more detail work load for each person. 

-----
July 11, 2022

Partnered with Laim in creating the required files needed to run the docker containers. 
(-) Issues
    *Dockerfile.dev*
    [x] Running into issues with requirements.txt
        - RESOLVED by eliminating double nested folders. 
    [x] Postgresql not listening on port 5432
        - RESOLVED needed to add postgres to dockerfile.dev
    [ ] Figure out windows commands to help wilson get his docker containers running.
        - Deleted volumes, recreated volumes, docker compose up --build *Not succesfull*
        - Wilson's new error: 
                /usr/local/bin/docker-entrypoint.sh: /docker-entrypoint-initdb.d/create-multiple-databases.sh: /bin/bash^M: bad interpreter: No such file or directory
        - Might create helpdesk ticket to assist.
            Jason, Yesenia, Adrian, Shelen assisting 
        - RESOLVED: Nuke .gitattributes folder and retype manually.
            Pushed incase greg encounters same issue.

        
(+) Learned 
    [x] Need to manually create volumes 
        - Docker volume create *VolName* 
            VolName is in yaml file.


To-Do 
Inform @Greg of next steps:
    docker volume create DONT-KICK-THE-BUCKET
    docker volume create postgres-data
    docker compose up --build

Accomplished Docker containers up and running for Siah, Liam, Wilson, Sergey