
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'



;(async() =>{

    let myfile = fs.readFileSync("./students.json","utf8")
    let students:Array<any>= JSON.parse(myfile)



    // let result = students.map(st=>{

    //     if(st.violations.filter(i=> i < 2).length > 0 && st.violations.filter(i => i > 7).length > 0)
    //         return {
    //             name:st.name,
    //             violations: st.violations
    //     }
        

    // }).filter(st=> st)
    // console.log(result)







    // let result = []

    // for(let st of students){
    //     if(st.violations.filter(i=> i < 2).length > 0 && st.violations.filter(i => i > 7).length > 0)
    //     {
    //         result.push({
    //             name:st.name,
    //             violations: st.violations
    //         })
    //     }
    // }

    // console.log(result)




    let result = students.filter(st=>st.violations.find(i=> i <2)&& st.violations.find(i=> i > 7)).map(st=>({name:st.name , violations:st.violations}))
    console.log(result)

})()
