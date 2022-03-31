package models

type TRIPMAPPINGS struct {
	Trip_id     int `gorm:"primary_key" form:"trip_id" json:"trip_id"`
	Rider_id    int `form:"rider_id" json:"rider_id"`
	No_of_seats int `gorm:"not_null" form:"no_of_seats" json:"no_of_seats"`
}
