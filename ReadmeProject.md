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



# The App
### For creating , editing and displaying post
-  i  have to watch videos because it includes react quill or any rich text editor , then it also have to display it
- how i am going to connect it , so my images uploaded goes to the firebase , with a link and the image link will 
be saved inside the html code send to backend and then that image can be fetched when displaying the post into the 
frontend with help of that same link
- the gap between each heading and title and text , the formatting so the blog looks professional and not just text displaying
- there should be an edit blog which includes the other data such as title , summary that are seperate from the rest of the blog
and then the blog post itself that can be edited the rich text editor will be going to use for that
- at end its the text / html content that is been edited at the time of post , and not just some representational pre existing 
format of the website or code itself , but the post created in that way , the hyperlink the image , its position and its size , the colours applied etc. 