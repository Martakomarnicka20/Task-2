const express = require('express');
const PORT = 3001;
const app = express();
app.get('/generateId',(req,res)=>{
    const id = new Date().getTime().toString();
    res.json({ id: id });
    console.log(id);
     });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});