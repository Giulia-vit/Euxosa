const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "The Name of the Event is required"],
        unique: true,
        trim: true,
        maxlength: [150, "Maximum lenght is 150 characters"]   
    },
   category:{
        type: String,
        required: [true, "The Category is required"],
        unique: true,
        trim: true,
        maxlength: [150, "Maximum lenght is 150 characters"]  //Make them choose between a set of preexisted categories 
    },
/*     introduction:{
        type: String,
        required: [true, "An Introduction is required"],
        maxlenght:[500, "Maximum lenght is 500 characters"]
    },
    maxPeople:{
        type: Number,
    },
    minAge:{
        type: Number,
    },
    pastEditions:{
        type: String
    },
    requirements:{
        type: String,
        required:[true, 'Insert at least one requirement'],  //Cercare di metterlo sotto forma di bullet point
    },
    language:{
        type: String,   // They must choose between all the languages, they can add more then one language
        required:[true, 'Insert a language']
    },
    location:{
        type:String,
        required:[true, 'Insert a location']  // they can inert more then one location
    },
    date:{
        type: Date,
        requird:[true, 'Insert a date']
    },
    prize:{
        type:String,
    },
    cost:{
        type:Number,
        required:[true, 'Insert a minimum cost']
    },
    image:{
        type: String,
        required:[true, 'Insert at least one photo'] // how to insert more then one photo
    },
    imageAlt:{
        type:String,
        required:[true, 'Insert a small image description'],
        maxlength:[30, 'Maxlength is 30 characters']
    },
    longDescription:{
        type: String,
        required: [true, "A main description is required"],
        maxlenght:[5000, "Maximum lenght is 500 characters"]
    },  

 */});

 //Se esiste di già allora usiamo quello se no lo si crea
//a partiere dallo schema che abbiamo appena creato
module.exports = mongoose.models.Event || mongoose.model('Event', EventSchema);