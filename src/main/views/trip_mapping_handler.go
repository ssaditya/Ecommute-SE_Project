package views

import (
	"net/http"
	"strconv"

	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CreateTripMapping(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.TRIPMAPPINGS
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// create the announcement
		result := db.Create(&json)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		var updateRt models.REGISTEREDTRIPS

		editTrip := db.Model(&updateRt).Where("trip_id = ?", json.Trip_id).Update("no_of_seats", gorm.Expr("no_of_seats - ?", json.No_of_seats))

		if editTrip.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"result": "TripMapping inserted successfully",
		})
	}
	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func DeleteTripMappingByDriver(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		trip_id, err := strconv.Atoi(c.Param("trip_id"))

		if err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var rec models.TRIPMAPPINGS
		if err := db.Where("trip_id = ?", trip_id).First(&rec).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		db.Delete(&rec)
		c.JSON(http.StatusOK, gin.H{"data": true})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
