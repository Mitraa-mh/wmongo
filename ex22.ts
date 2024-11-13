
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

        // let res = await s.find({}).project({ height: 1, _id: 0 }).toArray()

        // let b = res.filter(i=>i.height>160).map(i => i.height)
        
        // let u = 0

        // for (let i of b){

        //     u=u+i
        // }
        
        // console.log(u/b.length)



        
        // let b = [2,5,6,7,9]
        // let c = b.filter(i => i > 6).map(i => i*2)
        // console.log(c)




        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $pop: {
        //         violations: 0 //1 => from last, 0 => from first
        //     } as any
        // })
        // console.log(result)

        // let a = [2,4,6,0,1]

        // let u = 0
        // for (let i of res) 
        // {
        //     u = u + i.height
        // }

        // console.log(u / res.length)

        // for(let i of a)
        // {
        //     console.log(i)
        // }

        // console.log("LENGTH IS:" , a.length)
        // for(let i = 0; i <5; i++) {
        //     console.log(a[i])
        // }








        let myarray = [
            { height: 2 },
            { height: 3 },
            { height: 4 },
            { height: 5 },
            { height: 6 },
            { height: 7 },
            { height: 8 },
            { height: 9 }
          ]

        
        let myarray_b = myarray.filter(item => item.height > 5).map(item => item.height)
        console.log(myarray_b)


        // const myfunc = (item)=> {
        //     return item % 2 == 0
        // }

        // const myf = (item) => item % 2 == 0

        // let myarray_f = myarray.filter(item => {
        //     return item % 2 == 0
        // })
        // console.log(myarray_f)






        // let myarray_d = []
        // for(let i of myarray){
            
        //     if(i > 5){
        //     myarray_d.push(i)

        //     }
        // }
        // console.log(myarray_d)


        // for(let i = 0; i < myarray.length; i++){
        //     if(myarray[i] >5){
        //         myarray_d.push(myarray[i])
        //     }
        // }
        // console.log(myarray_d)







        // const myfunc = (item) =>{
        //     // return {height: item}
        //     // return item > 5
        //     return item.toString()
        // }

        // let myarray_c = myarray.map(myfunc)
        // console.log(myarray_c)



        // let myarray_b = []
        // myarray_b.push("hello")
        // myarray_b.push("bye")
        // console.log(myarray_b)

        // for(let i of myarray){
        //     myarray_b.push({height:i})
        // }
        // console.log(myarray_b)



        // for(let i of myarray){
        //     console.log(i)
        // }
        
        // for(let i = 0; i < myarray.length; i++){
        //     myarray[i] = {height: myarray[i]} as any
        // }
        // console.log(myarray)
        


     










        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()



