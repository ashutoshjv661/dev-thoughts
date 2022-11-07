# dev-thoughts 😇:smile:

## :point_down: demo
<img width="70%" alt="demo" src="https://user-images.githubusercontent.com/31470393/200264301-15ec7ac4-08a7-48e6-ab71-664a7830f625.png">


## :floppy_disk: Installation
``` bash
npm install
```

## :electric_plug: Usage 
1.  To get all set of commands
``` bash
dev-thoughts --help
```

## Features

1. Note down random thoughts. ✅
2. Get Random quote on cli. ✅
3. Get thoughts of current day ✅
4. Delete thoughts of that day, clear all thoughts ✅
5. storing data in json format ✅
6. Using figlet,chalk to beautify UI
6. host npm module 

## Packages used :
- commander : parsing args
- mongoose : orm for mongodb ❌ Removed Mongodb dependency in v1.0.1
- inquirer : to ask questions


## For testing :
To create a symlink
```
npm link
```
and 
``` 
npm unlink
```
