# Sprint 2 Report  
## Tasks Completed for Sprint 2
- Development of Trip Registration APIs
- Unit Tests for APIs in backend
## BackEnd:
### Tasks Accomplished
- Developed the Trip Registration APIs
- Developed the Trip Mapping APIs
- Executed Db Tests
- Executed Unit Tests for CreateUser API
- Executed Unit Tests for GetAllTrips API

### API Documentation 
### User Registration API
#### 1. CreateUser API: 
##### Request Method:  
POST
##### URL:  
localhost:8181/createUser
##### Sample Request:
![CreateUser](https://user-images.githubusercontent.com/41318802/160982150-30c754ad-d870-4757-81b7-abfdd03350fd.JPG)  
##### Sample Response:  
![CreateUserResp](https://user-images.githubusercontent.com/41318802/160982252-13310f0d-a2f7-45fa-b43d-70e2245380b2.JPG)  
##### Users Table:  
![CreateUserDB](https://user-images.githubusercontent.com/41318802/160982300-312e762d-0c4d-4f18-9382-1912aa550a6c.JPG)  

#### 2. EditUser API: 
##### Request Method:  
PUT
##### URL:  
localhost:8181/edituserProfile
##### Sample Request:  
![EditUser](https://user-images.githubusercontent.com/41318802/160983312-a35c8c9d-bf36-40e8-a27a-6aac6460382b.JPG)
##### Sample Response:  
![EditUserResp](https://user-images.githubusercontent.com/41318802/160983332-89e5144e-ee9e-4873-bf11-7f71a1049e8c.JPG)  
##### User Table:  
![EditUserDB](https://user-images.githubusercontent.com/41318802/160983378-19fd1a70-4d6d-4bdc-a2ec-f77e20bc43bd.JPG)  

#### 3. DeleteUser API: 
##### Request Method:  
DELETE
##### URL:  
localhost:8181/deleteuser/:username
##### Sample Request:  
![DeleteUser](https://user-images.githubusercontent.com/41318802/160986585-8d5f780f-05a4-4cb0-bb57-d7930af4741c.JPG)  

#### 3. GetUserByUsername API: 
##### Request Method:  
GET
##### URL:  
localhost:8181/getUserByUsername/:username
##### Sample Request:  
![GetUserByUsername](https://user-images.githubusercontent.com/41318802/160990444-befd094d-4dfc-4fa8-8f09-4d024bbdac9c.JPG)

### Trip Registration API
#### 4. CreateTrip API
##### Request Method:  
POST
##### URL:  
localhost:8181/createTrip
##### Sample Request:  
![CreateTrip](https://user-images.githubusercontent.com/41318802/160988784-e58b4cc9-693d-4d14-9b8f-29d935ccff7b.JPG)  
##### Sample Response:  
![CreateTripResp](https://user-images.githubusercontent.com/41318802/160988866-18ed18af-154c-435c-a30f-bf9e86b948af.JPG)  
##### RegisteredTrips Table:
![CreateTripDB](https://user-images.githubusercontent.com/41318802/160988964-7b4d0a85-cff2-4881-ade2-ece61790e8af.JPG)  

#### 5. EditTrip API
##### Request Method:  
PUT
##### URL:  
localhost:8181/editTrip
##### Sample Request:  
![EditTrip](https://user-images.githubusercontent.com/41318802/160989302-d97f99dd-8650-4c64-9a11-cecaa90d1599.JPG)  
##### RegisteredTrips Table:
![EditTripDB](https://user-images.githubusercontent.com/41318802/160989362-a80de28c-db51-4b44-8b87-78737e74222d.JPG)  

#### 6. DeleteTrip API
##### Request Method:  
DELETE
##### URL:  
localhost:8181/deleteTrip/:trip_id
##### Sample Request:  
![DeleteTrip](https://user-images.githubusercontent.com/41318802/160989878-15cb2469-ff54-4be1-bf89-26f38e8e8eeb.JPG)  


#### 6. GetAllTrips API
##### Request Method:  
GET
##### URL:  
localhost:8181/getAllTrips
##### Sample Request:  
![GetAllTrips](https://user-images.githubusercontent.com/41318802/160990298-10939eb5-6a05-4b92-9982-4a1219942111.JPG)

## FrontEnd:
