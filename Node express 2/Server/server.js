const express=require('express')

const userRouter=require('./Route/user')
 const productRouter=require ('./Route/product')

const app=express()
app.use(express.json())
app.use('/user',userRouter)
app.use('/product',productRouter)

app.listen(4000,'localhost',()=>{
console.log('server running at 4000 localhost')
}) 