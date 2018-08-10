const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema

const CategorySchema = mongoose.Schema({
    name: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {
    timestamps: true
});

CategorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Category', CategorySchema);