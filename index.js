const createServer = require("./server")
const port = 3000

const app = createServer()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
