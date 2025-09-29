const express = require('express')
const pool= require('../Util/Db')
const router= express.Router()
const bcrypt=require('bcrypt')

const saltrounds=10
router.get('/',(req,res)=>{

    const sql=`select * from users`
    pool.query(sql,(error,data)=>{
         if(data)
            res.send({status :'sucess', data})
        else
            res.send({status:'error',error})
    })
}
)

router.post('/',(req,res)=>{
    const {name,email,password,mobile,city}=req.body
    const sql=`insert into users(name,email,password,mobile,city) values(?,?,?,?,?)`
    pool.query(sql,[name,email,password,mobile,city],(error,data)=>{
          if(data)
            res.send({status :'sucess', data})
        else
            res.send({status:'error',error})

    })


})

router.put('/',(req,res)=>{
    const {name,city,uid}=req.body
    const sql=`update users set name=?,city=? where uid=?`
    pool.query(sql,[name,city,uid],(error,data)=>{
          if(data)
            res.send({status :'sucess', data})
        else
            res.send({status:'error',error})

    })


})

router.delete('/:id',(req,res)=>{
    const uid=req.params.id
    const sql=`delete from users where uid=?`
    pool.query(sql,[uid],(error,data)=>{
          if(data)
            res.send({status :'sucess', data})
        else
            res.send({status:'error',error})

    })


})

router.post('/register',(req,res)=>{
    const {name,email,password,mobile,city}=req.body
    const sql=`insert into users(name,email,password,mobile,city) values(?,?,?,?,?)`
    bcrypt.hash(password,saltrounds)
    .then((hashpassword)=>{
         pool.query(sql,[name,email,hashpassword,mobile,city],(error,data)=>{
          if(data)
            res.send({status :'sucess', data})
        else
            res.send({status:'error',error})

    })

    })
    .catch((error)=>{
        res.send({status:'error',error})
    })

   


})


router.post('/login', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ? `

    pool.query(sql, [email], (error, data) => {
        if (data != '')
        {const user=data[0]
            bcrypt.compare(password,user.password)
            .then((result)=>{
                if(result)
                                res.send({ status: "success", data })
        else
            res.send({ status: "error", error: 'Invalid password' })

            })

        }
            
        else
            res.send({ status: "error", error: 'Invalid email ' })
    })
})

module.exports=router
