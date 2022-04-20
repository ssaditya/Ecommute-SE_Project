package views

import (
	"net/http"
	"strconv"

	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"

	"github.com/gin-gonic/gin"
	"github.com/microcosm-cc/bluemonday"
	"gorm.io/gorm"
)

func CreateTrip(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.REGISTEREDTRIPS
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// strips HTML input from user for security purpose
		p := bluemonday.StripTagsPolicy()

		json.Source = p.Sanitize(json.Source)
		json.Destination = p.Sanitize(json.Destination)
		json.Date_of_trip = p.Sanitize(json.Date_of_trip)
		json.Time_of_trip = p.Sanitize(json.Time_of_trip)

		// create the announcement
		result := db.Create(&json)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"result": "Trip created successfully",
		})
	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func GetAllTrips(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {

		var res []models.REGISTEREDTRIPS
		db.Find(&res)

		c.JSON(http.StatusOK, gin.H{"data": res})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func GetTrips(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var result []models.REGISTEREDTRIPS
		db.Where("source=? AND destination=? AND date_of_trip=? AND no_of_seats >= ?", c.Param("source"), c.Param("destination"), c.Param("date"), c.Param("seats")).Find(&result)
		c.JSON(http.StatusOK, gin.H{"data": result})
	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func EditTrip(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.REGISTEREDTRIPS
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// strips HTML input from user for security purpose
		p := bluemonday.StripTagsPolicy()

		json.Source = p.Sanitize(json.Source)
		json.Destination = p.Sanitize(json.Destination)
		json.Date_of_trip = p.Sanitize(json.Date_of_trip)
		json.Time_of_trip = p.Sanitize(json.Time_of_trip)

		//Fetching user information using username
		var trips models.REGISTEREDTRIPS
		db.Find(&trips, "Trip_id = ?", json.Trip_id)

		result := db.Model(&trips).Where("Trip_id=?", json.Trip_id).Updates(json)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		var rec []models.TRIPMAPPINGS
		if err := db.Where("trip_id = ?", json.Trip_id).Delete(&rec).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		c.JSON(http.StatusOK, trips)
	}
	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func DeleteTrip(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		trip_id, err := strconv.Atoi(c.Param("trip_id"))
		trip_map_id := trip_id
		if err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var rec models.REGISTEREDTRIPS
		if err := db.Where("trip_id = ?", trip_id).Delete(&rec).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		var rec1 []models.TRIPMAPPINGS
		if err := db.Where("trip_id = ?", trip_map_id).Delete(&rec1).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"data": true})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
