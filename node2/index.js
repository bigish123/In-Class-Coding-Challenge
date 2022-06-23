
import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employees.js';

const app = express();

app.use(bodyParser.json())
app.use('/employees', employeeRoutes);



app.listen(3000, () => console.log("api is up....."));