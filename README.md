# Lab: Class 16

## Gui Deployment
1. In AWS, navigate to the Elastic Beanstalk service.
1. Click on "Create New Application" and provide the name of the application.
1. Upload your code by clicking on "Upload and Deploy" (I used a compressed file structure)
1. Once the application is deployed, click on the URL provided in the Elastic Beanstalk console to the deployed application.
- [GUI Deployed Link](http://cflab-env.eba-hypnmk5m.us-west-2.elasticbeanstalk.com/bikes)

## CLI Deployment
1. `aws configure` will ask for my AWS access key ID and secret (obtainable when I create a cli user that has `AdministratorAccess-AWSElasticBeanstalk` access)
1. Navigate to the directory with my code (and Archive.zip)
1. `eb init` - this initializes the EB config locally by asking some questions
1. For `Select an application to use`, I chose to `create a new application`, and names if cflab-cli
1. I chose the default options for the platform
1. I didn't need to make use of a source control setup
1. Once everything is ready `eb create cflab-cli-env`
  - I added the 'env' part to remind myself that this is the environment, and not the app
1. if i make any changes to the code, I can just say `eb deploy`
- [CLI Deployed Link](http://cflab-cli-env.eba-vdrj9c3d.us-west-2.elasticbeanstalk.com/bikes)
