package main

import (
	m "github.com/ssaditya/Ecommute-SE_Project/src/main/models"
	v "github.com/ssaditya/Ecommute-SE_Project/src/main/views"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	// Connection to the database with default configuration
	db, err := gorm.Open(sqlite.Open("EcommuteDB.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the User model to the db
	db.AutoMigrate(&m.USERS{})
	db.AutoMigrate(&m.REGISTEREDTRIPS{})
	db.AutoMigrate(&m.TRIPMAPPINGS{})
	// setting up the webserver with default config
	r := gin.New()

	// Adding logger to the middleware
	//r.Use(gin.Logger())

	// Using default recovery mechanism in case of any unexpected crashes in webserver
	//r.Use(gin.Recovery())

	// **** END POINTS ****
	r.POST("/createUser", v.CreateUser(db))
	r.GET("/getUserByUsername/:username", v.GetUserByUsername(db))
	r.PUT("/edituserprofile", v.EditUserProfile(db))
	r.DELETE("/deleteuser/:username", v.DeleteUser(db))
	r.POST("/createTrip", v.CreateTrip(db))
	r.GET("/getAllTrips", v.GetAllTrips(db))
	r.PUT("/editTrip", v.EditTrip(db))
	r.DELETE("/deleteTrip/:trip_id", v.DeleteTrip(db))
	r.POST("/createTripMapping", v.CreateTripMapping(db))
	r.GET("/getTrips", v.GetTrips(db))
	// starts server and listens on port 8181
	r.Run(":8181")
}
