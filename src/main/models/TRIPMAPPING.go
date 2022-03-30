package models

type TRIPMAPPING struct {
	Trip_id  int `gorm:"not_null" form:"trip_id" json:"trip_id"`
	Rider_id int `gorm:"not_null" form:"rider_id" json:"rider_id"`
}
