import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import  userRoutes from './routes/users.js'

import {MongoClient} from "mongodb";
import dotenv from 'dotenv'

const app= express();
dotenv.config()
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/',(req,res) => {
res.send("This is a stack overflow clone API")

})


app.use('/user',userRoutes)



app.post('auth/signup')


const mongoURI= "mongodb://localhost:27017/blacky"

app.get('/api/data', async(req,res) =>{
    try{
        const client = await MongoClient.connect(mongoURI,{ useNewUrlParser: true});
        const db= client.db();
        const collection = db.collection('sensi');

        const data = await collection.find().toArray();
        client.close();
        res.json(data);
    }catch(error){
        console.error('error fetching data from mongodb:',error);
        res.status(500).send('internal server error');
    }
});











const PORT= process.env.PORT || 5000

const DATABASE_URL=process.env.DATABASE_URL



mongoose.connect(DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => app.listen(PORT,() => {console.log(`server running on port  ${PORT}`)}))
.catch((err) => console.log(err.message))











