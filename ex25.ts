
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path, { resolve } from 'path'
import { Console } from 'console';

const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
};



// let server1A = new Promise((resolve) => {  //Asyncronous
//     setTimeout(() => {
//         resolve(200)
//     }, 1000);
// });


// let server1B = new Promise((resolve) => {  //Asyncronous
//     setTimeout(() => {
        
//         resolve(200)
//     }, 2000);
// });



// let server1C = new Promise((resolve) => {  //Asyncronous
//     setTimeout(() => {
        
//         resolve(200)
//     }, 2000);
// });
// let server2A = new Promise((resolve) => {  //Asyncronous
//     setTimeout(() => {
        
//         resolve(200)
//     }, 2000);
// });
// let server2B = new Promise((resolve) => {  //Asyncronous
//     setTimeout(() => {
        
//         resolve(200)
//     }, 2000);
// });
// let server2C = new Promise((resolve) => {  //Asyncronous
//     setTimeout(() => {
        
//         resolve(200)
//     }, 2000);
// });
// let server2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("server 2 connected:")
//         resolve(null)
//     }, 1500);
// });


(async () => {

    let db = JSON.parse(fs.readFileSync("./students.json", "utf8"))

    
    // await server2.then(()=>{})
    // let start = new Date().getTime();

    // let arr=[]
    // for(let i = 0; i < 10000000;i++){
    //     arr.push(i)
    // } 

    // let end = new Date().getTime()

    // console.log(end - start)


    // let status = await server1A

    // server1A.then((status)=>{console.log("1A")})

    // console.log("UUUU")
    // await server2B
    // server1B.then(()=>{console.log("1B")})

    // await server1C
    // await server2A
    
    // console.log("ccccc")
    

    



    // setInterval(() =>{
    //     console.log("INTERVAL:")
    // }, 1000);












})()