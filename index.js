import {app} from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:"./.env"
})


const PORT = process.env.PORT || 7000


connectDB().then(() => {
    app.listen(PORT,()=>{
        console.log(`server is listening at the ${PORT}`);
    })
  })
    .catch((err) => {
      console.log(`EXPECTED ERROR`,err);
      
    })