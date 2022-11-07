import fs from "fs"

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

//Add thoughts 
export function addThought(thought){
    const items = loadJSON("./data/data.json");
    const curDateEpoch = new Date().getTime();
    const currentItem = {
        "thought": thought,
        "date": curDateEpoch
    }
    items.unshift(currentItem);
    fs.writeFile(new URL("./data/data.json", import.meta.url),JSON.stringify(items),() => {
        console.info("New thought added ");
    });
};


//Get thoughts  
export function listThoughtsToday(){
    let today = new Date();
    today.setHours(0,0,0,0); // set to 0:00
    const items = loadJSON("./data/data.json");
    const todayItems = items.filter((item)=>{
        return item.date > today.getTime();
    })
    todayItems.forEach(element => {
        console.info("Id:"+items.indexOf(element)+" => "+element.thought);
    });
    console.info(`${todayItems.length} matches`);
};

//Remove thoughts with id 

export function removeThought(id){
    const items = loadJSON("./data/data.json");
    items.splice(id,1);
    fs.writeFile(new URL("./data/data.json", import.meta.url),JSON.stringify(items), (err) => {
        if(err) console.info("Something went wrong",err);
        else console.log("Thought Removed !");
    });
}

//Update a thought using id
export function updateThought(id, thought){
    const items = loadJSON("./data/data.json");
    items[id].thought = thought;
    fs.writeFile(new URL("./data/data.json", import.meta.url),JSON.stringify(items), (err) => {
        if(err) console.info("Something went wrong",err);
        else console.log("Updated 😊");
    });
}

export function randomThought(){
    const quote = loadJSON("./data/quotes.json");
    let thought = quote[Math.floor(Math.random()*quote.length)].body;
    console.info("🔥 Quote for the day 🔥\n"+ thought );
    process.exit();
}

//Clear thoughts 
export function clearThoughts(){
    const newItem = new Array();
    const val = JSON.stringify(newItem);
    fs.writeFile(new URL("./data/data.json", import.meta.url),val, (err) => {
         console.log("Done");
     });
}

//list all thoughts 
export function getAllThoughts(){
    const list = loadJSON("./data/data.json");
    console.info(list);
}