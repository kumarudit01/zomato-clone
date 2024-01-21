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
        const foodCollection =db.collection("zomato-items")
        //Get
        app.get("/", (req, res) => {
            res.send("server is live!")
        })


        // For Finding a some data from the database
        app.get("/resturants",async(request,response)=>{
            try{
                // fetch all the documents from the collection
                const result =await foodCollection.find().toArray()
                console.log(result)
                response.json(result)
            } catch(e)
            {
                console.log("Error Is Occured in /product route:",e)
            }
        })

        app.get("/resturants/:resturantName",async(request,response)=>
        {
            try{
                console.log(request.params)
                const regx= new RegExp(`^${request.params.resturantName}`,"i")
                // Find The Doc in Db
                const result = await foodCollection.find({"rname": {$regex:regx}})
                .toArray()
                response.json(result)
            }
            catch(e){
                console.log("Error Is Occured:",e)
            }
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