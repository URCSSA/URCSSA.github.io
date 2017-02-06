# cssa
A place to put some cssa code



Deploy on Bluemix:
  The CSSA site is hosted using IBM Bluemix. We currently use Cloud foundry and git to achieve deployment.
  Instructions on what files to download and what command line commands to make are listed at: https://new-console.ng.bluemix.net/docs/starters/install_cli.html
  
  steps 1-4 are pretty self explanatory.
    for step 3: use: bluemix api https://api.ng.bluemix.net
  
  when you get to step 5, take a second to make sure your code is committed to GitHub (and in sync). 
    commits to develop branch, instead of master branch, have been successful...
      open an issue if you find it unsuccessful.
  execute step 5 by entering: cf push urCssa
  
  wait for it to completely finish. then refresh. site should work...
