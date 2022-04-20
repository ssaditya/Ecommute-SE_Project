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

func TestGetTrips(t *testing.T) {

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/getTrips/Orlando/Gainesville/03-31-2022/1", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
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

func TestEditTrip(t *testing.T) {
	nr := httptest.NewRecorder()
	trip := models.REGISTEREDTRIPS{
		Trip_id:      1,
		Driver_id:    1,
		Source:       "Orlando",
		Destination:  "Atlanta",
		Date_of_trip: "04-21-2022",
		Time_of_trip: "8:30AM",
		No_of_seats:  4,
	}
	body, _ := json.Marshal(trip)
	req, _ := http.NewRequest("PUT", "/editTrip", strings.NewReader(string(body)))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req)
	assert.Equal(t, 200, nr.Code)
}

func TestDeleteTrip(t *testing.T) {
	nr := httptest.NewRecorder()
	req1, _ := http.NewRequest("DELETE", "/deleteTrip/2", nil)
	router.ServeHTTP(nr, req1)
	req1.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req1)
	assert.Equal(t, 200, nr.Code)
}

func TestCreateTripMapping(t *testing.T) {
	trip := models.TRIPMAPPINGS{
		Trip_id:     1,
		Rider_id:    1,
		No_of_seats: 2,
	}
	payload, _ := json.Marshal(trip)
	nr := httptest.NewRecorder()
	req1, _ := http.NewRequest("POST", "/createTripMapping", strings.NewReader(string(payload)))
	req1.Header.Set("Content-Type", "application/json")
	req1.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req1)
	cookieValue := nr.Result().Header.Get("Set-Cookie")
	req1.Header.Set("Cookie", cookieValue)
	router.ServeHTTP(nr, req1)
	assert.Equal(t, 200, nr.Code)
}

func TestCreatePastTripMapping(t *testing.T) {
	trip := models.PASTTRIPMAPPING{
		Trip_id:      1,
		Rider_id:     2,
		Driver_id:    1,
		Source:       "Orlando",
		Destination:  "Gainesville",
		Date_of_trip: "03-31-2022",
		Time_of_trip: "8:30:35",
		Status:       "Cancelled",
	}
	payload, _ := json.Marshal(trip)
	nr := httptest.NewRecorder()
	req1, _ := http.NewRequest("POST", "/createPastTrip", strings.NewReader(string(payload)))
	req1.Header.Set("Content-Type", "application/json")
	req1.Header.Set("credentials", "include")
	router.ServeHTTP(nr, req1)
	cookieValue := nr.Result().Header.Get("Set-Cookie")
	req1.Header.Set("Cookie", cookieValue)
	router.ServeHTTP(nr, req1)
	assert.Equal(t, 200, nr.Code)
}

func TestGetPastTripsById(t *testing.T) {

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/getPastTripsById/Rider/2", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
}
