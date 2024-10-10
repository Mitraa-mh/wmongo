
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

        // let and1 = await s.find({sport:{$ne:"never"}, firstchild:"yes"}).toArray()
        // console.log(and1)

        // let and2 = await s.find({sport:{$ne:"never"}, height:{$gt:170}}).toArray()
        // console.log(and2)

        // let and3 = await s.find({sport:{$ne:"never"}, height:{$gt:170}, firstchild:"yes"}).toArray()
        // console.log(and3)

        // let and3 = await s.find({sport:{$ne:"never"}, height:{$gt:170}, firstchild:"yes", gender:"male"}).toArray()
        // console.log(and3)

        //calculate male to female range (one time with query one time with for loop)


        process.exit()

    } catch {
        console.log("Failed to connect to Mongo Server.")
    }
})()


