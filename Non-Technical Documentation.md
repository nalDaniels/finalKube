# Purpose:
To make an application accessible to Kura Labs students and instructors by creating and managing infrastructure to host it. This document is intended to provide an overview of the deployment

# Steps to Production:
1. Create the Network
In order for our application to have access to the Internet as well as to other infrastructure elements, we had to create a virtual network. Some elements had access to the internet, while others were isolated from the internet to increase security.
The network was duplicated in another region, in order to improve the user experience of those not in close proximity to the primary region.

3. Separate the Application
To be able to scale and secure certain application code, the application was broken down into 3 tiers - a web server, application server, and database.

5. Deploy Application
Now that we have the code, it is essential to determine if it actually works. We used a platform that allowed engineers to build and deploy the application.

7. Access the Application
In order to distribute and balance traffic to both regions, a URL was created. This URL routed traffic based on the location of the user. 
http://adcdbe84a75074af3.awsglobalaccelerator.com/#/ 
