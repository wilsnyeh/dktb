## August 05, 2022
*Worked on tidying up the README with wireframes and more detailed info about our project
*Worked on getting some unit tests for testing various parts of our project

Cleaned up our README, since this hasnt been changed since our initial inception of this project and updated the information to better reflect what works/ what doesnt/ and what we hope to continue to develop.
## August 04, 2022
*The project is finally able to append to a users list through insomnia, there were some changes that needed to be made for our views to handle this information for accounts - and spend the rest half of the day to get everyone else up to speed, because since there were MAJOR changes in our models, previously cached data from our containers were throwing many errors. 
## August 03, 2022
*We did not anticpate how users account would handle the information to add them to their list; and thus we needed to create a poller that would handle the polling from our parks api, which polls from NPS. Essentially, we needed something on the users side to poll this information and needed a poller from users to poll parkvo data. 
## August 02, 2022
*Worked on park search functionality 

We were looking for ways to implement some sort of search functionality as we originally intended - we found at least for now, using our ability to filter through search parameters in our parks based on state was our best option of making this work. 
## August 01, 2022
*Frontend styling

Liam and I have been working on front-end styling of our signup forms and login forms, and were making a lot of progress on getting things to look how we want and the benefit of us working together ensures our forms are cohesive and look like they belong to the same website. 
## July 28, 2022
*Merge conflicts

We were finally able to get everything up and running and we had noticed we were very behind with everyones branches so we spent the day getting all the merge conflicts resolved and everyone up to speed so we could have up to date working branches that included everyones work up to this point. 
## July 27, 2022
*AUTH IS WORKING

With some help and guidance we were able to get user logins / signup fully functional and with tokens properly created and deleted up on logout. 
## July 26, 2022
*Fixed 500 Server Error

Made some changes in the views and encoders, everything is still working as it was before, except 500 errors have been resolved with /accounts. We are still not able to figure out why the JWT tokens are not showing up - although they are being created with the auth. 

useEffect for user signup is unecessary, as this really should be something for users logging in, and signup inherits from login **which should be the func using the useeffect - we really just need something to handle the submit when users are signing up.
## July 25, 2022
Was able to troubleshoot some user signup issues today - signup still returns 500 server error but still posts - tokens are still grandted to users on login, later in the day we were also able to get login to redirect properly. 
## July 22, 2022
Still working on users signup/logout - we ran into some conflicts this time around where once Liam and I merged functionality for user sign up stopped working.
## July 21, 2022

Not a lot of news today - Liam and I continue to make progress on the user authentication; We are both very close to completion with users signing up and users logging in. 
## July 20, 2022

Today Liam and I worked on user auth. Liam was able to get the user login form rendered, while I worked on rendering sign up form, and we felt it was important to get this part working before we could test users/user auth.

## July 19, 2022

Today I think we were finally able to resolve the issues with our poller. With a lot of troubleshooting, we have gotten the NPS_API_KEY to be hidden and recognized in our poller dynamically, and is no longer shown when someone pulls the most recent commits. 

*Tomorrow, I believe we can now begin to divide the work - some of us could perhaps go move into the work of user authentication and the others could move into front-end development. 
## July 18, 2022

Lots of troubleshooting today, but we made some progress - needed to revert back to an old YAML and test from there. 

## July 15, 2022

We were trying to troubleshoot issues we were having with getting user authentication working properly. 

## July 14, 2022

I was able to take on the role of driver this afternoon, while Liam was the navigator. This allowed me to take a shot at what felt like 'true' pair programming talking through my thought process and having someone else be the sort of eyes, incase I had missed something. We were able to get our requests to return what we had expected and only experienced a small hic-up that was quickly resolved. 

## July 13, 2022

We had taken roles as driver/navigators for today to help develop our models and taking some time to work through this type of coding to gain some experience talking through our code and our logic of getting something to work the way we intend. These seemingly 'easy' tasks can prove to be quite difficult when the spotlight is shining on us. 
## July 12, 2022

* Worked through merge conflicts, got postgres db working - change from sqlite, ghi React implemented

We were able to troubleshoot through the issues we were having moving from sqlite into postgres db. And worked through getting default React. 

## July 11, 2022

* Setting up Docker and Journal entries

Working through getting docker setup and running
Was having some compatibility issues some how missed the 'gitattributes' 
and could not get docker containers working properly on PC. Although
this was not an issue for Sergey. Grateful for Adrian for pointing this out, Jason's assistance and the teams help for all the extra eyes. In the end, it took nuking the repo from my local machine and having Liam push the gitattributes so I could clone the repo again. 

https://tsalikis.blog/posts/gitattributes/ that goes over the gitattribute file