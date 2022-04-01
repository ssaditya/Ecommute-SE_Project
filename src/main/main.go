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
	r.POST("/createUser", v.CreateUser(db))
	r.GET("/getUserByUsername/:username", v.GetUserByUsername(db))
	r.PUT("/edituserProfile", v.EditUserProfile(db))
	r.DELETE("/deleteUser/:username", v.DeleteUser(db))
	r.POST("/createTrip", v.CreateTrip(db))
	r.GET("/getAllTrips", v.GetAllTrips(db))
	r.PUT("/editTrip", v.EditTrip(db))
	r.DELETE("/deleteTrip/:trip_id", v.DeleteTrip(db))
	r.POST("/createTripMapping", v.CreateTripMapping(db))
	r.GET("/getTrips", v.GetTrips(db))
	r.GET("/getDriverUpcomingTrips/:driver_id", v.GetDriverUpcomingTrips(db))
	r.GET("/GetRiderUpcomingTrips/:rider_id", v.GetRiderUpcomingTrips(db))

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
