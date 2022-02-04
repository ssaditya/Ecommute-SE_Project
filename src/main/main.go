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
	db.AutoMigrate(&m.USER_INFORMATION{})

	// setting up the webserver with default config
	r := gin.New()

	// Adding logger to the middleware
	//r.Use(gin.Logger())

	// Using default recovery mechanism in case of any unexpected crashes in webserver
	//r.Use(gin.Recovery())

	// **** END POINTS ****
	//r.GET("/listAllAnouncements", a.ListAnnouncementsView(db))
	//r.POST("/editAnnoucements/{id}", a.EditAnnouncementView(db))
	r.POST("/createUser", v.CreateUser(db))
	//r.POST("/deleteAnnoucement/{id}", a.DeleteAnnouncementView(db))

	// starts server and listens on port 8080
	r.Run(":8181")
}
