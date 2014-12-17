## Overview
This section covers some documentation related to implementations or features of the DPN REST API specific to the EarthDiver Application.  The API itself is a stand alone standard that can be implemented as a developer sees fit in their local environment.  EarthDiver is a python/django implementation of the API and implements various tools and features to support extended features to work with local implementations.

## Admin Web Interface
EarthDiver uses the native Django Admin interface for basic editing and management of back end models and data through a web browser.  This is primarily intended for application admins to brows and modify data as needed, add or manage users and authentication tokens, or anything else requiring access to application data.

This interface can always be accessed at http[s]://<application root url>/admin/

You should login with the [superuser](https://docs.djangoproject.com/en/dev/ref/django-admin/#createsuperuser) account you created for the application admin.

## Users
Add users through the normal user interface provided by the admin back end.

A user will need to be added for each Node you wish to configure so a token can be individual assigned.  You **must** add a user first before you can assign them to a node or generate a token.

### Assigning a user to a Node
In order for the authorization code to associate a user token with a node, the user needs to be assigned a node in their profile.   After you create a user, edit them through the admin backend.  At the bottom of the form click on 'Profile' for the user and you should see a dropdown box to assign them to a node.

### Assigning a user to a usergroup
As detailed in the API documentation there are two basic permissions that effect what fields can be edited or what records can be seen, api_users and api_admins.  You assign a user to a group by editing that user through the admin backend, selecting the group to add them to and clicking the arrow to add them to that group.  In almost all cases users will be assigned to api_users

### Generate a user Token
API authorization is done through an API token.  For security reasons, users are not assigned a token by default.  To create a token go to the front of the admin backend and click 'Token', then click 'create token' and you will see a dropdown where you select the user name you wish to create a token for.  Do so and click save.