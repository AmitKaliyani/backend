import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
dotenv.config({path:'./.env'})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port no. ${process.env.PORT || 8000} `);
        
    })
})
.catch((err) =>{
    console.log("Monogo DB Connection failed " , err);
    
})




/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      console.log("DB Connected");
      app.on("error",() => {
        console.log("Error: ", error);
        throw error 
      })
        
   app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}`);
    g
   })

    } catch (error) {
      console.log("Error: ", error);
       throw error 
    }
})();

        */