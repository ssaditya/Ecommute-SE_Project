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

func TestGetAllTrips(t *testing.T) {

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/getAllTrips", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	b, _ := json.Marshal(trips)
	res := strings.TrimLeft(w.Body.String(), "{\"data\":")
	res1 := strings.TrimRight(res, "}")
	assert.Equal(t, string(b), res1)
}

func TestCreateTrip(t *testing.T) {
	trip := models.REGISTEREDTRIPS{
		Driver_id:    3,
		Source:       "Miami",
		Destination:  "Orlando",
		Date_of_trip: "01/04/2022",
		Time_of_trip: "8:30:35",
		No_of_seats:  2,
	}
	payload, _ := json.Marshal(trip)
	nr := httptest.NewRecorder()
	req1, _ := http.NewRequest("POST", "/createTrip", strings.NewReader(string(payload)))
	req1.Header.Set("Content-Type", "application/json")
	req1.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req1)
	cookieValue := nr.Result().Header.Get("Set-Cookie")
	req1.Header.Set("Cookie", cookieValue)
	router.ServeHTTP(nr, req1)
	assert.Equal(t, 200, nr.Code)
}
