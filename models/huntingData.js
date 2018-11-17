const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Int32 = require("mongoose-int32")

const hunting = new Schema({
  Season: { type: Int32 },
  Category: { type: String },
  Area: {type: String },
  Period: {type: Int32 },
  Period_Begin: {type: String},
  Period_End: { type: String },
  Period_Cancelled: { type: String },
  Acreage_Available: { type: String },
  Permits_Available_This_Period: { type: Int32 },
  Standby_Available: { type: String },
  Number_Selected_Hunter_that_Showed: { type: Int32 },
  Number_Standby_Hunter_Applicants: { type: Int32 },
  Number_Standby_Applicants_Selected: { type: Int32 },
  Number_of_Youth_Participants: { type: Int32 },
  Total_Number_of_Hunt_Participants: { type: Int32 },
  Number_of_Successful_Hunters: { type: Int32 },
  Percentage_of_Successful_Hunters: { type: String },
  Targeted_Species: { type: String },
  Male_Bucks: { type: Int32 },
  Female_Antlerless: { type: Int32 },
  Non_Targeted_Species: { type: String },
  Male_Bucks2: {type: String },
  Female_Antlerless3: { type: String },
  Special_Notes: {type: String },
});

const hunting_data = mongoose.model("hunting_data", hunting);

module.exports = hunting_data;
