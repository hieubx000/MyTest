const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: String,
    picture: String,
    email: {
        type: String,
        required: true,
        index: true,
    },
    role: {
        type: String,
        default: "subscriber",
    },
    area: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "Hanoi, Vietnam",
    },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);