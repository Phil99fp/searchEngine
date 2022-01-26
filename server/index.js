const { app } = require('./app.js')
const port = 3000;

app.listen(port, () => console.log(`\nExpress departing now from port ${port}\n`))


