const express = require('express');


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is runnng on port ${PORT}`)
})