package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/ssaditya/Ecommute-SE_Project/src/main/models"
	"github.com/stretchr/testify/assert"
)

func TestCreateUser(t *testing.T) {
	user := models.USERS{
		User_id:  9,
		Username: "dollie79",
		Password: "qwerTy123",
		Fname:    "Dollie",
		Lname:    "Piere",
		DOB:      "08/03/1992",
		Phoneno:  "789",
		Credits:  300,
		Carname:  "mazda",
		Bio:      "I think i am cool",
		R_rating: 4.5,
		D_rating: 5,
		R_count:  50,
		D_count:  70,
	}
	payload, _ := json.Marshal(user)
	nr := httptest.NewRecorder()
	req1, _ := http.NewRequest("POST", "/createUser", strings.NewReader(string(payload)))
	req1.Header.Set("Content-Type", "application/json")
	req1.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req1)
	cookieValue := nr.Result().Header.Get("Set-Cookie")
	req1.Header.Set("Cookie", cookieValue)
	router.ServeHTTP(nr, req1)
	assert.Equal(t, 200, nr.Code)
}
