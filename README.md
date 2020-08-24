

 # Description
 Generate mavlink libraries is a project which will generate and put mavlink libraries inside nodejs_onboard_router project and tcp_commander. Also it will create and place a file with commands created by mavlink generator for javascript webinterface, inside javascript_webinterface project. The code could be found here:
 
<a href="https://github.com/WeRobotics/mavlink">werobotics_mavlink</a>

 # Installation on the machine

There should be python installed on the machine where the generator is run. Also, nodejs and npm should be installed. 

# Running a generator

To generate mavlink libraries for nodejs_onboard_router and tcp_commander run inside /generate_project:

./generate_rasp.sh

To generate mavlink commands for javascript_interface project run inside /generate_project:

./generate_interface.sh











