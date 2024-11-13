
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

    const client = new MongoClient(process.env.MONGOURL);

    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
        const db = client.db(process.env.MONGODB_DB);

        let s = await db.collection("students")


        // let students = await s.find({}).project({height:1,_id:0}).toArray()
        // console.log(students)
        // let heights=[]

        // let heights = students.map(st => st.height).filter(st => st>170)
        // console.log(heights)


        // let sum = 0
        // let count = 0
        // for(let i of students){
        //     if(i.height > 170){
        //         sum += i.height
        //         count++

        //     }
        //     sum += i.height
        // }
        // console.log(sum / count)


        // for(let i of students){
        //     heights.push(i.height + 3)
        // }
        // console.log(heights)

        // for(let i = 0; i < students.length; i++){
        //     heights.push(students[i].height)
        // }
        // console.log(heights)












        // let students = await s.find({}).project({ exam: 1 }).toArray()
        // let sum = 0;
        // let count = 0
        // for (let st of students) {
        //     let exams = st.exam

        //     for (let ex of exams) {
        //         if (ex.name == "math" && !isNaN(ex.score)) {
        //             sum += ex.score
        //             count++
        //         }
        //     }
        // } console.log(sum / students.length)
        // console.log(count)




        let students = await s.find({}).project({exam:1}).toArray()

        let maths = students.map(st=>{
            let math = st.exam.filter(ex =>ex.name =="math")
            let num = math[0].score
            return num
        })
        console.log(maths)






        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()
