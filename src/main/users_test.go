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

func TestLogin(t *testing.T) {
	login := models.LOGIN{Username: "stephen123", Password: "abcd1234"}

	out, err := json.Marshal(login)
	if err != nil {
		t.Fatal(err)
	}
	w := httptest.NewRecorder()

	req, err := http.NewRequest("POST", "/login", strings.NewReader(string(out)))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Content-Type", "application/json")

	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)

}

func TestDeleteUser(t *testing.T) {

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("DELETE", "/deleteUser/dave98", nil)
	router.ServeHTTP(w, req)
	req.Header.Set("credentials", "include")
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
}

func TestEditUserProfile(t *testing.T) {
	nr := httptest.NewRecorder()
	user := models.USERS{
		User_id:  1,
		Username: "stephen123",
		Password: "abcd123456",
		Fname:    "Stephen",
		Lname:    "Cunninghum",
		DOB:      "07/06/1990",
		Phoneno:  "9876543223",
		Carname:  "toyota",
		Bio:      "Hey There!",
	}
	body, _ := json.Marshal(user)
	req, _ := http.NewRequest("PUT", "/editUserProfile", strings.NewReader(string(body)))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req)
	assert.Equal(t, 200, nr.Code)
}
