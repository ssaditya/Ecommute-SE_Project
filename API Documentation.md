# API Documentation 
## User Registration API
### 1. CreateUser API: 
#### Request Method:  
POST
#### URL:  
localhost:8181/createUser
#### Functionality:  
createUser API creates a new user during registration
#### Sample Request:
![CreateUser](https://user-images.githubusercontent.com/41318802/160982150-30c754ad-d870-4757-81b7-abfdd03350fd.JPG)  
#### Sample Response:  
![CreateUserResp](https://user-images.githubusercontent.com/41318802/160982252-13310f0d-a2f7-45fa-b43d-70e2245380b2.JPG)  
#### Users Table:  
![CreateUserDB](https://user-images.githubusercontent.com/41318802/160982300-312e762d-0c4d-4f18-9382-1912aa550a6c.JPG)  

### 2. EditUser API: 
#### Request Method:  
PUT
#### URL:  
localhost:8181/edituserProfile
#### Functionality:  
editUser API lets an existing user edit their details 
#### Sample Request:  
![EditUser](https://user-images.githubusercontent.com/41318802/160983312-a35c8c9d-bf36-40e8-a27a-6aac6460382b.JPG)
#### Sample Response:  
![EditUserResp](https://user-images.githubusercontent.com/41318802/160983332-89e5144e-ee9e-4873-bf11-7f71a1049e8c.JPG)  
#### User Table:  
![EditUserDB](https://user-images.githubusercontent.com/41318802/160983378-19fd1a70-4d6d-4bdc-a2ec-f77e20bc43bd.JPG)  

### 3. DeleteUser API: 
#### Request Method:  
DELETE
#### URL:  
localhost:8181/deleteuser/:username
#### Functionality:  
DeleteUser API is to delete a user's information based on the username
#### Sample Request:  
![DeleteUser](https://user-images.githubusercontent.com/41318802/160986585-8d5f780f-05a4-4cb0-bb57-d7930af4741c.JPG)  

### 4. GetUserByUsername API: 
#### Request Method:  
GET
#### URL:  
localhost:8181/getUserByUsername/:username
#### Functionality:  
GetUserByUsername API is used to fetch the details of a user by their username
#### Sample Request:  
![GetUserByUsername](https://user-images.githubusercontent.com/41318802/160990444-befd094d-4dfc-4fa8-8f09-4d024bbdac9c.JPG)

## Trip Registration API
### 5. CreateTrip API
#### Request Method:  
POST
#### URL:  
localhost:8181/createTrip
#### Functionality:  
CreateTrip API is called to register a trip by the driver
#### Sample Request:  
![CreateTrip](https://user-images.githubusercontent.com/41318802/160988784-e58b4cc9-693d-4d14-9b8f-29d935ccff7b.JPG)  
#### Sample Response:  
![CreateTripResp](https://user-images.githubusercontent.com/41318802/160988866-18ed18af-154c-435c-a30f-bf9e86b948af.JPG)  
#### RegisteredTrips Table:
![CreateTripDB](https://user-images.githubusercontent.com/41318802/160988964-7b4d0a85-cff2-4881-ade2-ece61790e8af.JPG)  

### 6. EditTrip API
#### Request Method:  
PUT
#### URL:  
localhost:8181/editTrip
#### Functionality:  
EditTrip API is called by the driver to edit their trip details
#### Sample Request:  
![EditTrip](https://user-images.githubusercontent.com/41318802/160989302-d97f99dd-8650-4c64-9a11-cecaa90d1599.JPG)  
#### RegisteredTrips Table:
![EditTripDB](https://user-images.githubusercontent.com/41318802/160989362-a80de28c-db51-4b44-8b87-78737e74222d.JPG)  

### 7. DeleteTrip API
#### Request Method:  
DELETE
#### URL:  
localhost:8181/deleteTrip/:trip_id
#### Functionality:  
DeleteTrip API is called when the driver wants to cancel their trip
#### Sample Request:  
![DeleteTrip](https://user-images.githubusercontent.com/41318802/160989878-15cb2469-ff54-4be1-bf89-26f38e8e8eeb.JPG)  


### 8. GetAllTrips API
#### Request Method:  
GET
#### URL:  
localhost:8181/getAllTrips
#### Functionality:  
GetAllTrips API is to fetch all the registered trips
#### Sample Request:  
![GetAllTrips](https://user-images.githubusercontent.com/41318802/160990298-10939eb5-6a05-4b92-9982-4a1219942111.JPG)

### 9. GetTrips API
#### Request Method:  
GET
#### URL:  
localhost:8181/getTrips/:source/:destination/:date/:seats
#### Functionality:  
GetTrips API is to fetch all the registered trips for a given source, destination, date and no of seats
#### Sample Request:  
![GetTrips](https://user-images.githubusercontent.com/41318802/164141382-7785868a-f925-43e4-8bba-54ee629084e0.jpeg)

## Trip Mapping API
### 10. CreateTripMapping API:
#### Request Method:  
POST
#### URL:  
localhost:8181/createTripMapping
#### Functionality:  
CreateTripMapping API is to record the mapping of a rider and the trip
#### Sample Request:  
![CreateTripMapping](https://user-images.githubusercontent.com/41318802/161362398-a8179e5f-6a8f-4082-8b20-a8759b5d8022.JPG)

### 11. GetDriverUpcomingTrips API:
#### Request Method:  
GET
#### URL:  
localhost:8181/getDriverUpcomingTrips/:driver_id
#### Functionality:  
GetDriverUpcomingTrips API is to fetch the upcoming trips for the driver
#### Sample Request:  
![GetUpcomingTripsByDriver](https://user-images.githubusercontent.com/41318802/161362471-22329f01-8f43-452f-bdc5-fb85759bfad4.JPG)

### 12. GetRiderUpcomingTrips API:
#### Request Method:  
GET
#### URL:  
localhost:8181/getRiderUpcomingTrips/:rider_id
#### Functionality:  
GetDriverUpcomingTrips API is to fetch the upcoming trips for the rider
#### Sample Request:  
![GetUpcomingTripsByRider](https://user-images.githubusercontent.com/41318802/161362507-bffa2d32-2411-4547-9692-f4928b99f68d.JPG)

### 13. CreatePastTrip API:
#### Request Method:  
POST
#### URL:  
localhost:8181/createPastTrip
#### Functionality:  
CreatePastTrip API is to add completed or cancelled trips to the PastTripMapping table.
#### Sample Request:  
![CreatePastTrip](https://user-images.githubusercontent.com/41318802/164144018-0bb72f2c-00f7-4ba6-8fcf-83c078798c4b.JPG)
#### PastTripMapping Table:
![CreatePastTripDB](https://user-images.githubusercontent.com/41318802/164144089-2f428bf2-5dce-4f2d-bff4-62154a11051d.JPG)

### 14. getPastTripsById API:
#### Request Method:  
GET
#### URL:  
localhost:8181/getPastTripsById/:Mode/:Id
#### Functionality:  
getPastTripsById API is to fetch the past trips for both the driver or rider
#### Sample Request:  
![GetPastTrips](https://user-images.githubusercontent.com/41318802/164145542-c80594d4-3442-488e-9062-e506964f2d4d.JPG)
![GetPastTripsbyRider](https://user-images.githubusercontent.com/41318802/164152996-815bb4ae-21a0-46e6-8612-cb7418938aa2.JPG)


### 15. DeleteTripMappingByRider API:
#### Request Method:  
DELETE
#### URL:  
localhost:8181/deleteTripMappingByRider/:trip_id/:rider_id
#### Functionality:  
DeleteTripMappingByRider API is called when the rider wants to cancel their scheduled trip
#### Sample Request:  
![DeleteTripMappingByRider](https://user-images.githubusercontent.com/41318802/164152580-f5e54834-57e0-4f67-9401-87860fb32144.JPG)

### 16. DeleteTripMappingByDriver API:
#### Request Method:  
DELETE
#### URL:  
localhost:8181/deleteTripMappingByDriver/:trip_id
#### Functionality:  
DeleteTripMappingByDriver API is called when the driver wants to cancel their scheduled trip
#### Sample Request:  
![DeleteTripMappingByDriver](https://user-images.githubusercontent.com/41318802/164156097-30a271ce-5226-4290-adb8-aa62356fb4f3.JPG)

## Login API
### 17.Login API:
#### Request Method:  
POST
#### URL:  
localhost:8181/login
#### Functionality:  
Login API is to log the user into the application
#### Sample Request:  
![Login](https://user-images.githubusercontent.com/41318802/164156724-449439f1-b432-4959-9774-597f6569537a.JPG)

### 18.Logout API:
#### Request Method:  
POST
#### URL:  
localhost:8181/logout
#### Functionality:  
Login API is to log the user out of the application
#### Sample Request:  
![Logout](https://user-images.githubusercontent.com/41318802/164156810-a5b00cd8-1a6f-4963-8b64-1655e3c90734.JPG)
