package main

import (
	"os"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var dbName string = "test.db"
var storeName string = "testsecret"
var sessionName string = "testsession"
var users []models.USERS
var trips []models.REGISTEREDTRIPS
var router *gin.Engine

func initData(db *gorm.DB) {
	users = []models.USERS{
		{
			Username: "stephen123",
			Password: "abcd1234",
			Fname:    "Stephen",
			Lname:    "Flemingo",
			DOB:      "07/06/1990",
			Phoneno:  "9876543223",
			Credits:  3,
			Carname:  "toyota",
			Bio:      "Hey There!",
			R_rating: 4.5,
			D_rating: 0.0,
			R_count:  5,
			D_count:  0,
		},
		{
			Username: "dave98",
			Password: "qwerty123",
			Fname:    "Dave",
			Lname:    "Martin",
			DOB:      "04/09/1981",
			Phoneno:  "9873443210",
			Credits:  70,
			Carname:  "hyundai",
			Bio:      "Ride with me!",
			R_rating: 4,
			D_rating: 5,
			R_count:  5,
			D_count:  10,
		},
		{
			Username: "liz45",
			Password: "lizbeth@123",
			Fname:    "Elizabeth",
			Lname:    "Swan",
			DOB:      "09/23/1994",
			Phoneno:  "9876763210",
			Credits:  300,
			Carname:  "mazda",
			Bio:      "Hey There!",
			R_rating: 4.5,
			D_rating: 4.23,
			R_count:  5,
			D_count:  9,
		},
	}
	db.Create(&users)

	trips = []models.REGISTEREDTRIPS{
		{
			Driver_id:    1,
			Source:       "Orlando",
			Destination:  "Gainesville",
			Date_of_trip: "03/31/2022",
			Time_of_trip: "8:30PM",
			No_of_seats:  3,
		},
		{
			Driver_id:    2,
			Source:       "Orlando",
			Destination:  "Gainesville",
			Date_of_trip: "03/31/2022",
			Time_of_trip: "7:00AM",
			No_of_seats:  2,
		},
		{
			Driver_id:    1,
			Source:       "Gainesville",
			Destination:  "Orlando",
			Date_of_trip: "03/31/2022",
			Time_of_trip: "7:30AM",
			No_of_seats:  3,
		},
	}
	db.Create(&trips)
}

func setupTestDb(dbName string) *gorm.DB {
	// Connection to the database with default configuration
	db, err := gorm.Open(sqlite.Open(dbName), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database!")
	}

	// drop tables if exist
	db.Migrator().DropTable(models.USERS{})
	db.Migrator().DropTable(models.REGISTEREDTRIPS{})

	// Migrate USERS and REGISTEREDTRIPS model to the db
	db.AutoMigrate(&models.REGISTEREDTRIPS{}, &models.USERS{})

	return db
}

func TestMain(m *testing.M) {
	// setup database
	db := setupTestDb(dbName)

	// init data
	initData(db)

	// setup router
	router = SetupRouter(db, storeName, sessionName)

	code := m.Run()

	os.Exit(code)
}
