const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

console.log(publicPath);