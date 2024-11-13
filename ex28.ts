
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'



;(async() =>{

    let myfile = fs.readFileSync("./students.json","utf8")
    let students:Array<any>= JSON.parse(myfile)

    // let result = students.filter(st=> st.violations.length > 0 && !st.violations.find(i=> i > 7)).map(st=> ({name:st.name , violations:st.violations}))
    
    // let result = students.filter(st=> st.violations.length >0 && !st.violations.find(i=> i <2)).map(st=> ({name:st.name,violations:st.violations}))
    // let result = students.filter(st=>st.violations.filter(i=> i > 5).length >= 2).map(st=> ({name:st.name,violations:st.violations}))
    // let result = students.map(st=> ({name:st.name, score: st.exam.find(exam=> exam.name =="math").score})).filter(st=> st.score > 70)

    // console.log(100 * result.length / students.length)

    let result = students.filter(st => st.violations.length >= 3 && st.violations.find(i=> i > 5)).map(st=>{
        return {name: st.name, vcount:st.violations.length, vsum: st.violations.reduce((acc,cur)=> acc+ cur, 0)}
    })

    console.log(result)


})()