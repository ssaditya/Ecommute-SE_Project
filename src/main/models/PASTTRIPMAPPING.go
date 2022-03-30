package models

type PASTTRIPMAPPING struct {
	Trip_id      int    `gorm:"not_null;unique" form:"trip_id" json:"trip_id"`
	Rider_id     int    `gorm:"not_null;unique" form:"rider_id" json:"rider_id"`
	Driver_id    int    `gorm:"not_null;unique" form:"driver_id" json:"driver_id"`
	Source       string `gorm:"not_null" form:"source" json:"source" binding:"required"`
	Destination  string `gorm:"not_null" form:"destination" json:"destination" binding:"required"`
	Date_of_trip string `gorm:"not_null" form:"date_of_trip" json:"date_of_trip" binding:"required"`
	Time_of_trip string `gorm:"not_null" form:"time_of_trip" json:"time_of_trip" binding:"required"`
	Status       string `gorm:"not_null" form:"status" json:"status" binding:"required"`
}
