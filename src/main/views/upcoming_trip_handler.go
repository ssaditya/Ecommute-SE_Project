package views

import (
	"net/http"
	"strconv"

	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetDriverUpcomingTrips(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		driver_id, err := strconv.Atoi(c.Param("driver_id"))

		if err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var result []models.REGISTEREDTRIPS

		db.Where("driver_id = ?", driver_id).Find(&result)
		c.JSON(http.StatusOK, gin.H{"data": result})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func GetRiderUpcomingTrips(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		rider_id, err := strconv.Atoi(c.Param("rider_id"))

		if err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		//var result_TM []models.TRIPMAPPINGS
		var result_RT []models.REGISTEREDTRIPS
		db.Table("tr_ip_mappings").Joins("Inner Join registeredtr_ip_s on registeredtr_ip_s.trip_id = tr_ip_mappings.trip_id").Where("rider_id = ?", rider_id).Scan(&result_RT)

		c.JSON(http.StatusOK, gin.H{"data": result_RT})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
