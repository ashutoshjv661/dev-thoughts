import mongoose from "mongoose";


//thoughts Schema 
const thoughtSchema = mongoose.Schema({
    thought : {type : String},
    date : 
    {
        type : Date,
        default: Date.now,
    },
});
//exporting schema 
export default mongoose.model("Thought",thoughtSchema);