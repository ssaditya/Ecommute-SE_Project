# Sprint 3 Report  
## Tasks Completed for Sprint 3
- Addition of new TripRegistration APIs
- Development of TripMapping APIs
- Backend Unit testing
- New Cypress Tests
- Integration of new frontend and backend pages
- Added the login page

## BackEnd:
### Tasks Accomplished
- Developed Trip Registration APIs
- Developed Trip Mapping APIs
- Executed Unit Tests for CreateTrip API
- Executed Unit Tests for DeleteTrip API
- Executed Unit Tests for DeleteUser API
- Executed Unit Tests for EditUserProfile API

### API Documentation 
### Trip Registration API
#### 1. GetTrips API
##### Request Method:  
GET
##### URL:  
localhost:8181/getTrips
##### Sample Request:  
![GetTrips](https://user-images.githubusercontent.com/41318802/161361777-19b5c8b3-b1d6-445d-aec5-c28c641f57d7.JPG)
##### Sample Response:
![GetTripsResp](https://user-images.githubusercontent.com/41318802/161361796-b25348da-77f1-4c34-bcaa-334395e8a103.JPG)

### Trip Mapping API
#### 2. CreateTripMapping API:
##### Request Method:  
POST
##### URL:  
localhost:8181/createTripMapping
##### Sample Request:  
![CreateTripMapping](https://user-images.githubusercontent.com/41318802/161362398-a8179e5f-6a8f-4082-8b20-a8759b5d8022.JPG)

#### 3. GetDriverUpcomingTrips API:
##### Request Method:  
GET
##### URL:  
localhost:8181/getDriverUpcomingTrips/:driver_id
##### Sample Request:  
![GetUpcomingTripsByDriver](https://user-images.githubusercontent.com/41318802/161362471-22329f01-8f43-452f-bdc5-fb85759bfad4.JPG)

#### 4. GetRiderUpcomingTrips API:
##### Request Method:  
GET
##### URL:  
localhost:8181/getRiderUpcomingTrips/:rider_id
##### Sample Request:  
![GetUpcomingTripsByRider](https://user-images.githubusercontent.com/41318802/161362507-bffa2d32-2411-4547-9692-f4928b99f68d.JPG)

### Unit Tests for Backend
- TestCreateTrip 
- TestDeleteTrip
- TestDeleteUser
- TestEditUserProfile

![Backend_Unit _Tests](https://user-images.githubusercontent.com/41318802/161365191-2e2f0300-dd07-47f7-882a-e485666e3eca.PNG)
#### GO Tests:
cd src/main  
go build  
go test -v 

## FrontEnd:
### Tasks Accomplished
- Created Login Page
- Added validation to login-form and gave temporary credentials
- Used Cypress framework and added more frontend unit test cases
- Integration of Frontend and Backend

#### Integration of frontend and backend

#### Cypress Testing 
![Cypress_Testing (1)](https://user-images.githubusercontent.com/41318802/161365321-65565900-8edc-48c1-86ab-fcb471eced8d.PNG)
![Cypress_Integration_Tests](https://user-images.githubusercontent.com/41318802/161365330-18efc008-9cbc-4275-8ad9-23ef0d9131bd.PNG)

##### Steps To Run and Install:
- To install : npm add cypress --save-dev  
- In package.json,

  	"scripts": {
    		"start": "react-scripts start",
    		"build": "react-scripts build",
    	   add -> "test": "cypress open",
    		"eject": "react-scripts eject"
  	}  
- In cypress.json,
	
	{
    		"baseUrl" : "http://localhost:3000",
    		"experimentalStudio" : true
	}  
- To run cypress: npm test  

### Video Demo 
[Demo Link](https://drive.google.com/file/d/1Pfak-eBX8HVZzr5t4RVjfbU6FDE1eHJv/view?usp=drivesdk)
