package views

import (
	"net/http"

	//"strconv"

	"github.com/gin-gonic/gin"
	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"
	"gorm.io/gorm"
)

func CreatePastTrip(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var pasttripmapping models.PASTTRIPMAPPING
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&pasttripmapping); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		result := db.Create(&pasttripmapping)
		var tripID = pasttripmapping.Trip_id

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}
		var regtrips models.REGISTEREDTRIPS
		if err := db.Where("trip_id = ?", tripID).First(&regtrips).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		db.Delete(&regtrips)

		var tripmapping []models.TRIPMAPPINGS
		if err := db.Where("trip_id = ?", tripID).Delete(&tripmapping).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"result": "Past Trips Recorded Successfully",
		})
	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func GetPastTripsById(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var record []models.PASTTRIPMAPPING
		mode := c.Param("Mode")
		Id := c.Param("Id")
		if mode == "Driver" {
			db.Where("driver_id = ?", Id).Find(&record)

		} else if mode == "Rider" {
			db.Where("rider_id = ?", Id).Find(&record)

		}

		c.JSON(http.StatusOK, gin.H{"data": record})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
