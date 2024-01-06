// importing the packages
const express = require('express')
const bodyparser = require('body-parser')
const mongodb = require('mongodb')
const cors = require('cors')
//declaring the express app
const app = express()
//Mongodb Confriguration
const { MongoClient } = mongodb
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
//Middlewares
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const port = 5000
const dbName = "zomato"
const collectionName = "users"
const main = async () => {
    try {
        await client.connect()
        console.log("Database is Connecte")
        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        //Get
        app.get("/", (req, res) => {
            res.send("server is live!")
        })
        //Post
        //Login
        app.post("/login", async (req, res) => {
            //Fetch the data from the request
            console.log(req)
            let email = req.body.email
            let password = req.body.password
            console.log("Requested Data:", req.body)


            //Check the email and password values in my database
            let feedback = await collection.findOne({ email: email })
            console.log("the data from database", feedback)


            if (feedback !== null) {
                res.json({ "message": "Email is not Registered" })
                return
            }
           // insert the data in the database
        const result = await collection.insertOne({
            username: username,
            email: email,
            password: password,
          });
  
          console.log("The feedback i get from database: ", result);
            //send the respone login success otherwise credintails are not valid
            res.send({ "message": "welcome to zomato" })
        })
        //  Register

        app.post("/register",async(request,response)=> {

            try{
                const username = request.body.username
                const email = request.body.email
                const password = request.body.password
                
                // Checking if the user email is already exists or not
                const feedback =await collection.findOne ({email:email})
                if (feedback !== null)
                {
                    response.json({"message":"Email Is Already Exists"})
                    return
                } 
                // fetch the data  from the request
                const result =await collection.insertOne({
                    username:username,
                    email:email,
                    password:password
                })
                console.log("The Features i get from the Database:",result)    

                // insert the data in the database
                // data add succesfully otherwise
                // something went wrong
                response.json({"message":"user Created Succesfully"})

            }catch(e){
                console.log("Error Occured In The Register Route:",e)
            }
        })



















        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (e) {
        //error handling
        console.log("Error occured:", e)
    }
}
main()