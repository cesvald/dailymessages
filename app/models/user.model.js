const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  }
}, {
    timestamps: true
});

UserSchema.pre('save', function(next){
    const user = this;
    const hash = bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

UserSchema.methods.isValidPassword = function(password) {
    const user = this;
    const compare = bcrypt.compare(password, user.password);
    return compare;
}

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);