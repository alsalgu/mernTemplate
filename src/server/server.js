const compression = require('compression')
const express = require('express')
const path = require('path')

const app = express()
const appPage = path.join(__dirname, '../../public/index.html')

app.use(compression())
app.disable('etag')
// Allows the use of files.
app.use(express.static(__dirname + './../../'))

// SERVES STATIC HOMEPAGE
// Changed path-route for compatibility with
// React-Router-Dom pkg
app.get('/', function(req, res) {
  res.sendFile(appPage)
})

app.listen(3000, () => console.log('Running on Port 3000... Do not forget to run "npm run dev" in another terminal!'))