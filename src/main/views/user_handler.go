package views

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"

	"github.com/gin-gonic/gin"
	"github.com/microcosm-cc/bluemonday"
	"gorm.io/gorm"
)

func CreateUser(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.USERS
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

func LoginUser(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		session := sessions.Default(c)
		var json models.LOGIN
		// try to bind the request json to the Login struct
		if err := c.ShouldBindJSON(&json); err != nil {
			// return bad request if field names are wrong
			// and if fields are missing
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		var users []models.USERS

		// strips HTML input from strings preventing XSS
		p := bluemonday.StripTagsPolicy()
		username := p.Sanitize(json.Username)
		password := p.Sanitize(json.Password)
		// DB query to search for username and password and store the results in users
		db.Find(&users, "username = ? AND password = ?", username, password)

		// if user found return success
		if len(users) > 0 {
			session.Set("uId", users[0].User_id)
			session.Save()
			c.JSON(http.StatusOK, gin.H{
				"result":   "Successful Login!",
				"username": users[0].Username,
				"user_id":  users[0].User_id,
			})
			return
		}

		// return unauthorized status
		c.JSON(http.StatusUnauthorized, gin.H{
			"result": "Invalid User name and/or Password",
		})
	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

// Logout  - to remove the user from the session
func LogoutUser(c *gin.Context) {
	session := sessions.Default(c)

	v := session.Get("uId")
	if v == nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"result": "User not logged in",
		})
		return
	}

	session.Clear()
	session.Save()

	v = session.Get("uId")
	if v == nil {
		c.JSON(http.StatusOK, gin.H{
			"result": "Logout successful",
		})
		return
	}

	c.JSON(http.StatusUnauthorized, gin.H{
		"result": "Logout failed",
	})
}

func GetUserByUsername(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {

		var record models.USERS
		if err := db.Where("username = ?", c.Param("username")).First(&record).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"data": record})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}

func EditUserProfile(db *gorm.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var json models.USERS
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
		var us models.USERS
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

		var record models.USERS
		if err := db.Where("username = ?", c.Param("username")).Delete(&record).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"data": true})

	}

	// return the loginHandlerfunction
	return gin.HandlerFunc(fn)
}
