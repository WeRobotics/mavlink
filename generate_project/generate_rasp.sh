cd ./../pymavlink/generator/CPP11/test/posix
make gen
cd ./../../
cp -r include_v2.0 /home/pi/WMP-ElevatorDonut/communication/onboard_app_communication_cpp/TCP-onboard-commander/mavlink
cd ../javascript
make 
cd implementations/mavlink_release_mechanism_v2.0
npm install
cd ..
cp -r mavlink_release_mechanism_v2.0 /home/pi/nodejs_onboard_router/node_modules   
