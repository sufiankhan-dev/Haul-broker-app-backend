const mongoose = require("mongoose");
const RoleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    permissions: {
        type: Array,
        required: true,
        default: ["read", "write", "update"]
    },
   
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Role", RoleSchema);