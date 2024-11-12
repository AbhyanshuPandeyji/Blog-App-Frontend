# Learning while building
## Docker 
#### What is docker
- docker is the contanarization for the app to run it as an image anywhere 
- the kubernetes are the solution for the management of these containerization and container service and maintanence
- these all come under microservices
- docker is to wrap an app and everything needed to run that app in form of an image , or as a box
- docker is our way to containerize the application for easier to distribute method
- there are many different things to do with the docker , in terms of contanarization 
- it seems same as vercel for now where there is a base template , according to my personal requirements and the 
app i am building and then there is the advance version , more specific and detailed i can go if i learn it more 
- currently i am only doing the react app with it
- the docker is use to follow and execute the commands related to the app we are trying to distribute , such as react
- its an empty folder , can install things inside of it , or create folders in it
#### How to use docker with react - quick method
- first create a file named - DockerFile
- start with specifieing the commands needed to run the app - eg for react the packages , build folder , version etc
- first node , so use - FROM node: [now here you need a docker image of the version of node i am using in my react build , eg - 20 alpine , alpine is light weight image to use] - so check node version , use docker image related to it
