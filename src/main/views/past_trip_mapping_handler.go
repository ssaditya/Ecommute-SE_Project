package views

import (
	"net/http"
	//"strconv"

	"github.com/gin-gonic/gin"
	"github.com/microcosm-cc/bluemonday"
	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"
	"gorm.io/gorm"
)

func CreatePastTripMapping(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.PASTTRIPMAPPING
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
		json.Status = p.Sanitize(json.Status)

		// create the announcement
		result := db.Create(&json)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"result": "Past Trips Recorded Successfully",
		})
	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
