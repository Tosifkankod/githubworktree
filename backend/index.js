import express from 'express';

const app = express();


app.get("/", (req, res) => {
    res.json({
        success: true,
        data: {
            fuck: "fuck you"
        }
    })
})

app.listen(8080, () => {
    console.log("server started on port", 'http://localhost:8080/');
})