# DigitalTwin Demonstrator
 Digital Twin Demonstrator using Nodejs, MongoDb and Docker
 # Architecture, Overview and Steps  
 ![Introduction, Overview and Steps] 
 1. We are building a Digital Twin demonstrator.
 For Details, click on Link below    
![Architecture Overview]
# Current State
![Current State]
1. Prerequistes:  
  1.1 - Nodejs installed  
  1.2 - VSCode installed  
  1.3 - MongoDb installed  
  1.4 - Docker installed  
2. Getting Started 
	2.0 Clone or Download the Source Code from GitHub
	2.1 Build API Docker image by using command:    
	docker build ./devicetwin/ -t dtwin-api
	2.2 Run Docker - Compose by using command:  
	docker-compose up -d
	2.3 See if your service is running:  
	Navigate to http://localhost:8082/  
	Browser should show {"message":"Welcome to Device Twin Service."}
	