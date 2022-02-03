package main

import (
	"github.com/ssaditya/Ecommute-SE_Project/src/main/routers"
)

func main() {
	// if db.ConnectDatabase() != nil {
	// 	log.Fatal("No connection to the DB")
	// 	return
	// }
	routers.Routers()
}
