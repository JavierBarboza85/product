import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get('/test',(req:Request, res: Response ) => {
    res.send ("Probando producto")
})
app.listen(8000,() => {
    console.log("ejecutando http://localhost:8000")
})