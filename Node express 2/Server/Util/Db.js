const mysql=require('mysql2')
const pool = mysql.createPool({
    host:'localhost',
    user:'D1_93144_Aryavrat',
    password:'manager',
    database:'classwork'

})

module.exports=pool