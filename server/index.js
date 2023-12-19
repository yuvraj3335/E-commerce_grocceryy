// 38 pt 4 
const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.Port || 6001;
require('dotenv').config()


app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fbi2tuv.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
 
    await client.connect();
    //mongo config 
const menuCollections = client.db("groccery").collection("menus")
const cartCollections = client.db("demo-foodi-client").collection("cartItems")
app.get('/menu' , async(req,res) => {
    const result = await menuCollections.find().toArray();
    res.send(result);
})


   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})