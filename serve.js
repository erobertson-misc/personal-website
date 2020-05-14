let express = require('express')
let app = express()
app.use('/', express.static('./build') )
app.listen(config.port, () => console.log('online'));