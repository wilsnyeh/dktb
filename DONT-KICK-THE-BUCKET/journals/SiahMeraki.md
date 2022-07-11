July 11, 2022

Partnered with Laim in creating the required files needed to run the docker containers. 
(-) Issues
    *Dockerfile.dev*
    [x] Running into issues with requirements.txt
        - RESOLVED by eliminating double nested folders. 
    [x] Postgresql not listening on port 5432
        - RESOLVED needed to add postgres to dockerfile.dev