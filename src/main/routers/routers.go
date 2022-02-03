package routers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func getPersons(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "getPersons Called"})
}
func Routers() {

	r := gin.Default()
	//handlers.getPersonById()
	// API v1
	v1 := r.Group("/api/v1")
	{
		v1.GET("person", getPersons)
		// v1.GET("person/:id", getPersonById)
		// v1.POST("person", addPerson)
		// v1.PUT("person/:id", updatePerson)
		// v1.DELETE("person/:id", deletePerson)
		// v1.OPTIONS("person", options)
	}

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()

}
