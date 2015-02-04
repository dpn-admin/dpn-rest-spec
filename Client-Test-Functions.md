There is a simple DPN client in the EarthDiver repository under https://github.com/APTrust/EarthDiver/tree/master/dpnode/dpn/client 

This client has three functions:

* accept_transfers - This queries other nodes for transfers and marks them all as accepted.
* get_all_registry_entries - Gets a list of repository entries from other nodes.
* get_registry_updates - Gets all repository updates since the last check from other nodes.

I'm not sure these function are robust enough for production, but they should work in test. 

Here's how you can use them. This assumes you have a command prompt at the top level of your local EarthDiver directory.

Assuming you created a virtual environment, activate it with this:

> source .venv/earthdiver/bin/activate

Run any of the commands using python manage:

* python dpnode/manage.py get_registry_updates
* python dpnode/manage.py get_all_registry_entries
* python dpnode/manage.py accept_transfers

Until you configure EarthDiver's Nodes table with the necessary information to connect to other nodes (url, api token, port, etc), these commands will just produce the following message:

CommandError: No nodes found to query.