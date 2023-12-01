const moment = require('moment');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const feedSchema = new Schema(
    {
        name :{
            type: String,
            required: true,
            maxlength: 15,

           },
           message :{
            type: String,
            required: true,
            maxlength: 40, 
           },
           create_at: {
               type: Date,
               default: Date.now,
               get: function (createAt){
                //    return moment(createAt).format('MMMM Do YYYY, h:mm:ss a');
                   return moment(createAt).format("MMM Do YY");
               }, }
           
        }, 
          { timestamps: true}
    
)


module.exports = mongoose.model('feed', feedSchema)