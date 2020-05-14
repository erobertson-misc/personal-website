let express = require('express')
let app = express()
app.use('/', (req,res,next) => {
    console.log('got Request');
    next();
})
app.use('/', express.static('./build') )
app.listen(80, () => console.log('online'));