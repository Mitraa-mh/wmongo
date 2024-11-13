

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path from 'path'

const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
};

(async () => {

    let db = JSON.parse(fs.readFileSync("./students.json", "utf8"))
    // let target = db.filter(st => st.height > 160).map(st => ({name:st.name, height:st.height}))
    // let target = db.filter(st => st.height > 160 && st.height % 2 == 0).map(st => st.height)


    // let targett=[]
    // for(let st of db){
    //     if(st.height > 160){
    //         targett.push(st)
    //     }
    // }




    // let targett = []
    // for (let st of db) {

    //     targett.push(st)

    // }


    // let sum = 1
    // for (let ghad of target) {

    //     sum = sum * ghad 


    // }
    // console.log(sum)



    // let sum2 = db.reduce((sum, st) => (st.height > 160 && st.height % 2 == 0)?(st.height+sum):sum, 0)


    // console.log(sum2)


    // let students = [
    //     { value: 10 },
    //     { value: 11 },
    //     { value: 12 }
    // ]

    // for (let i = 0; i < students.length; i++) {
    //     students[i] = {newobj:"yoohoo"} as any
    //     students[i] = 77 as any
    // }



    // for (let st of students) {
    //     st.value++;
    //     st["newfield"] = 100
    // }


    // for(let i = 0; i < students.length; i++) {
    //     let st = students[i]
    //     st = {ali: "yoohoo"} as any
    // }


    // for(let st of students) {
    //     st = {ali:"yohooooo"} as any
    // }

    // console.log(students)


    // let arr = [1,2,3,4]

    // for(let i = 0; i <arr.length; i++)
    // {
    //     arr[i] = 0
    // }


    // for(let a of arr)
    // {
    //     a = 0
    // }
    // console.log(arr)






     // let a = {
    //     ali: 3
    // }

    // let b = JSON.parse(JSON.stringify(a));

    // a.ali = 5

    // sub[0].value = 5



   
    // let arr =[{value:1},{value:2},{value:3},{value:4}]
    // // let sub = arr.filter(item => item.value > 2)

    // let mymap = arr.map(item => ({hassan:item.value, maryam:item}))
    // mymap[0].hassan = 10
    // console.log(mymap)

    // let a = [12]
    // let b = a
    // b[0] = 100
    // console.log(a)

    // let a = {value:10, mutable: {c:200}}

    // let c = {...a}

    // let b = JSON.parse(JSON.stringify(a.mutable))

    // b.c = 50

    // console.log(a)




    
   
    






})()
