import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from "./routes/Mobil.js";
import todoRoutes from "./routes/todo.js";

const app = express();
const port = 8000;


app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("SELAMAT PAGI");
});

app.use(bodyParser.json());
app.use('/mobil', mobilRoute);
app.use('/todos', todoRoutes);


app.use(bodyParser.json());
app.listen(port, () =>
    console.log(
        `Server berjalan di port: http://localhost:${port}`)
);


