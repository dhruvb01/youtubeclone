const express=require('express')
const app=express()
const cors = require('cors');

app.use(cors());

app.get('/api/search/:search',async (req, res) => {
       const query=req.params.search
        try {
          const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`);
          const json= await response.json();
          console.log(json)
          res.json(json);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred' });
        }
      }
    );

app.listen(4000,()=>{
    console.log("hello")
})