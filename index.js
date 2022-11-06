import mongoose, { mongo } from "mongoose";
import fs from "fs"

//connect to db
const db = mongoose.connect("mongodb://localhost:27017/devthoughts",{useNewUrlParser: true,useUnifiedTopology:true});

//importing the thoughts model 
import Thought from "./models/thoughts.js";

//import quotes from "" assert { type: "json" };
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));


//Add thoughts 
export function addThought(thought){
    Thought.create({"thought":thought})
        .then(thought => {
            console.info("New thought added !");
            mongoose.disconnect();
        });
};


//Get thoughts  
export function listThoughtsToday(){
    var today = new Date();
    today.setHours(0,0,0,0); // set to 0:00
    //console.log(today);
    Thought.find({date:{$gte: today}})
        .then(docs => {
            console.info(docs);
            console.info(`${docs.length} matches`);
            mongoose.disconnect();
            process.exit();
        });
};

//Remove thoughts with id 

export function removeThought(_id){
    Thought.deleteOne({ _id })
      .then(thought => {
        console.info('Thought Removed !');
        mongoose.disconnect();
    });
}

//Update a thought using id
export function updateThought(_id, thought){
    Thought.findByIdAndUpdate({ _id }, {"thought":thought})
      .then( thought => {
        console.info('Updated 😊');
        mongoose.disconnect();
      });
}

export function randomThought(){
    const quote = loadJSON("./quotes.json");
    let thought = quote[Math.floor(Math.random()*quote.length)].body;
    console.info("🔥 Quote for the day 🔥\n"+ thought );
    process.exit();
}