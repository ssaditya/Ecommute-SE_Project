package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

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
