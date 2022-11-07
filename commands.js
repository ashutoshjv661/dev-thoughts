#!/usr/bin/env node

import {program} from "commander";
import inquirer from "inquirer";
import { addThought,listThoughtsToday,removeThought,updateThought,randomThought,clearThoughts,getAllThoughts } from "./index.js";

//List of questions to ask while entering and deleting the Thoughts on a particular day
const questions =  [
    {
        type:"input",
        name:"thought",
        message:"What's on your mind ? "
    }
];

program.version("1.0.3")
.description("Random thoughts manager CLI");


program.command('add')
    .alias('a')
    .description("Add entry in today's list of thoughts")
    .action(()=>{
        inquirer.prompt(questions)
            .then(ans => addThought(ans.thought))
            .catch((error) => {
                if(error){
                    console.info("Something went wrong !",error);
                     process.exit();
                }
            });
    });

program.command('list')
    .alias('l')
    .description("Today's list of thoughts")
    .action(()=>{
        listThoughtsToday();
    });

// Update Command
program.command('update <_id>')
  .alias('u')
  .description('Update a thought')
  .action( _id => {
    inquirer.prompt(questions)
        .then(ans => updateThought(_id, ans.thought))
        .catch((error) => {
            if(error){
                console.info("Something went wrong !",error);
                 process.exit();
            }
        });
  });

// Remove Command
program.command('remove <id>')
  .alias('r')
  .description('Remove a thought.')
  .action( id => removeThought(id));


program.command('quote')
  .alias('q')
  .description("Random thoughts ^_^")
  .action(()=>{
      randomThought();
  });

program.command('clear')
  .alias('clr')
  .description("Clear the entire list")
  .action(()=>{
    clearThoughts();
  });

program.command('all')
  .description("Get the entire list of thoughts")
  .action(()=>{
    getAllThoughts();
  });


program.parse(process.argv);