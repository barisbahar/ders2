const { count } = require("console")
const fs=require("fs")
const { resolve } = require("path")
const path = require("path")
const text="BIL 4 2 5"

const writeFileAsync = async (path,data)=>{
    return new Promise((resolve,reject)=>fs.writeFile(path,data,(err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}


const readFileAsync = async (path)=>{
    return new Promise((resolve,reject)=>fs.readFile(path,{encoding:'utf-8'},(err,data)=>{
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}

// writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
//     .then(() => readFileAsync(path.resolve(__dirname,"text.txt")))
//     .then(data=>data.split(' ').length)
//     .then(count=>writeFileAsync(path.resolve(__dirname,"count.txt"),count))

    const fsPromise=require('fs/promises')
    const fileRead=async()=>{
        try {
            await fsPromise.writeFile(path.resolve(__dirname,"text.txt"),'data')
        } catch (error) {
            
        }
    }