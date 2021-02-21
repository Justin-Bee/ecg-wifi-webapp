#ECG WiFi monitoring web application
#ECE 554
Authors: Justin Bee and Matias Blanc

AWS amplify application
URL: https://master.d30zp0554c2v1e.amplifyapp.com/

AWS Lambda function - ECGWiFiMonitoring

AWS API Gateway - ECG WiFiMonitoring - invoke url: https://tqmlv0dfbh.execute-api.us-east-1.amazonaws.com/dev
JSON Format = { 'serial': '', 'adc': '', 'temp': ''}

AWS DynamoDB - ECGWiFi 
primary key = 'serialNumber'
arn = arn:aws:dynamodb:us-east-1:137988547123:table/ECGWiFi

curl -i -X POST -H "Content-Type: application/json" -d '{"serial":"testSerial", "adc": "0.0", "temp": "98.0"}' https://tqmlv0dfbh.execute-api.us-east-1.amazonaws.com/dev
