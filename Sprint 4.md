# Sprint 4 Report  

### Description: 
ECommute is a ride-sharing application that provides the users a platform to find commuters that share a common travel route. The main aim of this web application is to create an environment-friendly and network-building travel platform. Users can be matched manually with other users who are taking a considerably mutual route. The users can log in as either a Driver or a Rider and offer rides in their vehicle or request/accept rides from other users respectively. Key features of the application include - Posting new trips by a driver, querying and requesting rides by a rider, and editing or canceling existing trips.

### Team Members:    
#### Backend
- Sai Aditya Sandupatla 
- Vaishnavi Donepudi 
#### Frontend
- Raj Gopala Vamsee Jaggaraju
- Sai Swaroop Nimmagadda

### Tasks Completed for Sprint 4
- Addition of Login APIs
- Addition of new PastTripMapping APIs
- Development of Delete Functionality APIs
- Enhancement and Bug Fixes for APIs
- Backend Unit testing
- New Cypress Tests
- Integration of new frontend and backend pages
- Preparing Videoos for Project Deliverables
- API Documentation

### BackEnd:
#### Tasks Accomplished
- Developed Upcoming Trip APIs
- Developed Past Trip APIs
- Developed Login APIs
- Developed DeleteTripMappings by Rider and Driver APIs
- Integration of Session Logic in Backend
- Enhancements and bug fixes for GetTrips API
- Unit Tests for APIs


#### API Documentation 
Please refer to [API Documentation](https://github.com/ssaditya/Ecommute-SE_Project/blob/main/API%20Documentation.md)

#### Sprint Board 
Please refer to [Sprint Board](https://github.com/ssaditya/Ecommute-SE_Project/projects/5)

#### Unit Tests for Backend
- TestGetUserByUsername 
- TestLogin
- TestGetTrips
- TestEditTrip
- TestCreateTripMapping
- GetPastTripById
- GetDriverUpcomingTrips
- GetRiderUpcomingTrips
- DeleteTripMappingByDriver
- DeleteTripMappingByRider
 
#### Video Demo for Unit Tests
[Backend Unit Tests](https://youtu.be/1C6F1_qyRU4)

##### GO Tests:
cd src/main  
go build  
go test -v 
