package models

type REGISTEREDTRIPS struct {
	Trip_id      int    `gorm:"primary_key;auto_increment;not_null;unique" form:"trip_id" json:"trip_id"`
	Driver_id    int    `gorm:"not_null" form:"driver_id" json:"driver_id" binding:"required"`
	Source       string `gorm:"not_null" form:"source" json:"source" binding:"required"`
	Destination  string `gorm:"not_null" form:"destination" json:"destination" binding:"required"`
	Date_of_trip string `gorm:"not_null" form:"date_of_trip" json:"date_of_trip" binding:"required"`
	Time_of_trip string `gorm:"not_null" form:"time_of_trip" json:"time_of_trip" binding:"required"`
	No_of_seats  int    `gorm:"not_null" form:"no_of_seats" json:"no_of_seats" binding:"required"`
}
