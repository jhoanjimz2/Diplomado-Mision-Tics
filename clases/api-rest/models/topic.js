const { attachment } = require("express/lib/response");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = Schema({
    conten: String,
    date: { type: Date, default: Date.now },
    usuario: { type: Schema.ObjectId, ref: "usuario" }
});

var Comment = mongoose.model("Comment", CommentSchema);

var TopicSchema = Schema({
    title: String,
    content: String,
    code: String,
    lang: String,
    date: { type: Date, default: Date.now },
    usuario: { type: Schema.ObjectId, ref: "usuario" },
    comments: [CommentSchema]
});

module.exports = mongoose.model("topic", TopicSchema);