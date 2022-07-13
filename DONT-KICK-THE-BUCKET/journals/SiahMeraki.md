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

July 12

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