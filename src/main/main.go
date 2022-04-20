package main

import (
	m "github.com/ssaditya/Ecommute-SE_Project/src/main/models"
	v "github.com/ssaditya/Ecommute-SE_Project/src/main/views"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, PATCH, DELETE")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}

func SetupRouter(db *gorm.DB, storeName string, sessionName string) *gin.Engine {
	// setting up the webserver with default config
	r := gin.New()

	// Check every request if allowed for CORS
	r.Use(CORSMiddleware())

	// Adding logger to the middleware
	//r.Use(gin.Logger())

	// Using default recovery mechanism in case of any unexpected crashes in webserver
	r.Use(gin.Recovery())

	store := cookie.NewStore([]byte(storeName))
	store.Options(sessions.Options{MaxAge: 60 * 60 * 24})
	r.Use(sessions.Sessions(sessionName, store))

	// **** END POINTS ****

	//****USER API ENDPOINTS
	r.POST("/createUser", v.CreateUser(db))
	r.POST("/login", v.LoginUser(db))
	r.POST("/logout", v.LogoutUser)
	r.GET("/getUserByUsername/:username", v.GetUserByUsername(db))
	r.PUT("/edituserProfile", v.EditUserProfile(db))
	r.DELETE("/deleteUser/:username", v.DeleteUser(db))

	//****TRIP END POINTS
	r.POST("/createTrip", v.CreateTrip(db))
	r.GET("/getAllTrips", v.GetAllTrips(db))
	r.GET("/getTrips/:source/:destination/:date/:seats", v.GetTrips(db))
	r.PUT("/editTrip", v.EditTrip(db))
	r.DELETE("/deleteTrip/:trip_id", v.DeleteTrip(db))

	//****TRIP MAPPING END POINTS
	r.POST("/createTripMapping", v.CreateTripMapping(db))
	r.DELETE("/deleteTripMappingByDriver/:trip_id", v.DeleteTripMappingByDriver(db))

	//****UPCOMING TRIP END POINTS
	r.GET("/getDriverUpcomingTrips/:driver_id", v.GetDriverUpcomingTrips(db))
	r.GET("/getRiderUpcomingTrips/:rider_id", v.GetRiderUpcomingTrips(db))

	//****PAST TRIP END POINTS
	r.POST("/createPastTrip", v.CreatePastTrip(db))
	r.GET("/getPastTripsById/:Mode/:Id", v.GetPastTripsById(db))
	return r
}

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
	storeName := "mainsecret"
	sessionName := "mainsession"
	r := SetupRouter(db, storeName, sessionName)

	// starts server and listens on port 8181
	r.Run(":8181")
}
