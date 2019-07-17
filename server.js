const express = require('express');
const path = require('path');
 
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, './vuepress/.vuepress/dist/')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

