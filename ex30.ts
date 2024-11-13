
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'

(async () => {
    let myfile = fs.readFileSync("./students.json","utf8")
    let students = JSON.parse(myfile)
    console.log(students)
})