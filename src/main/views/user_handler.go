package views

import (
	"net/http"

	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"

	"github.com/gin-gonic/gin"
	"github.com/microcosm-cc/bluemonday"
	"gorm.io/gorm"
)

func CreateUser(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.USER_INFORMATION
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// strips HTML input from user for security purpose
		p := bluemonday.StripTagsPolicy()

		json.Username = p.Sanitize(json.Username)
		json.Password = p.Sanitize(json.Password)
		json.Fname = p.Sanitize(json.Fname)
		json.Lname = p.Sanitize(json.Lname)
		json.Phoneno = p.Sanitize(json.Phoneno)
		json.Carname = p.Sanitize(json.Carname)
		json.Bio = p.Sanitize(json.Bio)

		// create the announcement
		result := db.Create(&json)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"result": "User created successfully",
		})
	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
func EditUserProfile(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.USER_INFORMATION
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// strips HTML input from user for security purpose
		p := bluemonday.StripTagsPolicy()

		json.Username = p.Sanitize(json.Username)
		json.Password = p.Sanitize(json.Password)
		json.Fname = p.Sanitize(json.Fname)
		json.Lname = p.Sanitize(json.Lname)
		json.Phoneno = p.Sanitize(json.Phoneno)
		json.Carname = p.Sanitize(json.Carname)
		json.Bio = p.Sanitize(json.Bio)

		//Fetching user information using username
		var us models.USER_INFORMATION
		db.Find(&us, "Username = ?", json.Username)

		result := db.Model(&us).Where("Username=?", json.Username).Updates(json)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": result.Error.Error()})
			return
		}

		c.JSON(http.StatusOK, us)
	}
	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func DeleteUser(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {

		var json models.USER_INFORMATION

		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var record models.USER_INFORMATION
		if err := db.Where("Username = ?", json.Username).First(&record).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		db.Delete(&record)
		c.JSON(http.StatusOK, gin.H{"data": true})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
