July 28, 2022
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
July 22, 2022
-----
July 21, 2022
-----
July 20, 2022
-----
July 19, 2022
-----
July 18, 2022

"Today was a good day" -- Ice Cube
Today with Sergey as the driver we began polling for data. We used the NPS API docs to get the correct paths for the data we wanted to poll from. It was a bit nerve rackig at first because w e did not want to get stuck in an infiinite loop and max out our API key. (luckily the process to get an API key for NPS is a straight forward process).


July 15, 2022

Today we began discussing how the poller will be handled. We also began working with our API key. I figured out this needs to be stored in the gitignore file by a quick search online. We replicated the settings to successfully convert our API to a hidden file and made sure not to just "show" our API in our code. We used a template variable. A long process but I've never done it before which was cool to see. 

-----

July 14, 2022

Moswla


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

