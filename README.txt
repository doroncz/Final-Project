GIT instructions:

- To check to which repository you are uploading files use: "git config --get remote.origin.url"

- in order to upload one or more files to the repository you need to do 2 things:
1. add the files to the staging area:
"git add <<name of file1>> <<name of file2>> etc... "
- note that you can upload all the files to the repository by this: "git add ."

NOTICE - before you push also use this: 
git commit -m "your comment" - it will help us know what you had in mind when you uploaded it
2. push the files to the remote server (called origin)
git push -u origin master
origin is the name of our repository and master is the name of the branch

- if you are not sure if you added the files (phase 1 written above) to the staging area do this:
git status
you can see if you added the files or not (green you did upload, red you didnt upload)

- if you want to pull changes from the server use this:
git pull

that's it (I hope)