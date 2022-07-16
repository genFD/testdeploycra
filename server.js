const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const jobsRoutes = require('./routes/jobs.routes')
const app = express();



dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/v1/devjobs/jobs', jobsRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT , ()=> console.log(`listening on port ${PORT}`))