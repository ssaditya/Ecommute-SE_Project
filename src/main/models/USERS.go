package models

type USERS struct {
	User_id  int     `gorm:"primary_key;auto_increment;not_null;unique" form:"user_id" json:"user_id"`
	Username string  `gorm:"not_null" form:"username" json:"username" binding:"required"`
	Password string  `gorm:"not_null" form:"password" json:"password" binding:"required"`
	Fname    string  `gorm:"not_null" form:"fname" json:"fname" binding:"required"`
	Lname    string  `gorm:"not_null" form:"lname" json:"lname" binding:"required"`
	DOB      string  `form:"dob" json:"dob"`
	Phoneno  string  `gorm:"not_null" form:"phoneno" json:"phoneno" binding:"required"`
	Credits  int     `form:"credits" json:"credits"`
	Carname  string  `form:"carname" json:"carname"`
	Bio      string  `form:"bio" json:"bio"`
	R_rating float32 `form:"r_rating" json:"r_rating"`
	D_rating float32 `form:"d_rating" json:"d_rating"`
	R_count  int     `form:"r_count" json:"r_count"`
	D_count  int     `form:"d_count" json:"d_count"`
}
