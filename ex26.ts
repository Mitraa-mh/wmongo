
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'

// function k(a){
//     return a.height > 165
    
// }


// let kamran = a =>{
//     return a.height > 165
// }


// let kamran = a => a.height > 170





;(async ()=> {
    let myfile = fs.readFileSync("./students.json","utf8")
    let students:Array<any>= JSON.parse(myfile)

    let newstd = students.filter(a => a.height > 170)
    
    let height = newstd.map(a => a.height)

    // let height = students.map(a => a.height).filter(a => a.height > 165)


    // function ali(mean, cur){
    //     return acc + cur / height.length
    // }
    
    // let sum = 0
    // for(let st of height){
    //      sum += st
    // }
    // let average = sum / height.length




    let mean = height.reduce((mean,cur)=>mean + cur / height.length, 0)
    console.log(mean)

})()