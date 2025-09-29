const express=require('express')
const pool=require('../Util/Db')
const router=express.Router()

router.get('/',(req,res)=>{
const sql=`select * from product`
pool.query(sql,(error,data)=>{
    if(data)
        res.send({status:'sucess',data})
    else 
        res.send({status:'error',error})


})

})

router.post('/',(req,res)=>{
    const {name,price}=req.body
    const sql=`insert into product(name,price) values(?,?)`
    pool.query(sql,[name,price],(error,data)=>{
        if(data)
            res.send({status:'sucess',data})
        else
            res.send({status:'sucess',error})

    })

})
router.put('/',(req,res)=>{
    const{name,price,pid}=req.body
    const sql=`update product set name =? , price=? where pid=?`
    pool.query(sql,[name,price,pid],(error,data)=>{
        if(data)
            res.send({status:'sucess',data})
        else
            res.send({status:'error',error})

    })
    
})
router.delete('/:id',(req,res)=>{
    const pid=req.params.pid
    const sql=`delete from product where pid=?`
        pool.query(sql,[pid],(error,data)=>{
        if(data)
            res.send({status:'sucess',data})
        else
            res.send({status:'error',error})

    })
    
})

module.exports=router