const express = require ('express');


const app = express();

const port  = 4001;

app.use(require('./routes/brands.route'))
app.use(require('./routes/products.route'))

app.listen(port, () => {
    console.log('Server has been work')
})

