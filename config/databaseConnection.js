const mongoose= require("mongoose");
const {CONNECTION_STRING}= require("../utils/constants");

const dbConnect = async ()=>{
  mongoose.connect(CONNECTION_STRING);
};

module.exports=dbConnect;