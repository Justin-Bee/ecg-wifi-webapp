#ECG WiFi monitoring web application
#ECE 554
Authors: Justin Bee and Matias Blanc

NodeJS application


AWS amplify application

URL: https://master.d30zp0554c2v1e.amplifyapp.com/


AWS Lambda function - ECGWiFiMonitoring


AWS API Gateway - ECG WiFiMonitoring - invoke url: https://tqmlv0dfbh.execute-api.us-east-1.amazonaws.com/dev

JSON Format = { 'serial': '', 'adc': '', 'temp': ''}


AWS DynamoDB - ECGWiFiMonitors 

primary key = 'eventDateTime' secondary = 'serial'

arn = arn:aws:dynamodb:us-east-1:137988547123:table/ECGWiFiMonitors


curl -i -X POST -H "Content-Type: application/json" -d '{"serial":"testSerial", "adc": "10.0", "temp": "108.0"}' https://tqmlv0dfbh.execute-api.us-east-1.amazonaws.com/dev

curl -H "Content-Type:application/json" -X GET  https://tqmlv0dfbh.execute-api.us-east-1.amazonaws.com/dev/
