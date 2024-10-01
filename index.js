import express from "express";
import mongoose from "mongoose";
import hbs from "hbs";
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017", {
        dbName: "AdminUIProject",
    })
    .then(() => console.log("Database Connect"))
    .catch((e) => console.log("error"))


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        Unique: true
    },

    password: {
        type: String,
        required: true,
        Unique: true
    },

    Cfpassword: {
        type: String,
        required: true,
    }

})

const StudentData = new mongoose.model("StudentData", StudentSchema);

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
app.set("view engine", "hbs");
app.use(express.static('./'));


app.get("/", (req, res) => {
    res.render("Register")
})

app.get("/login", (req, res) => {
    res.render("login")
})


// create
app.post("/register", async (req, res) => {

    try {
        const password = req.body.password
        const Cfpassword = req.body.Cfpassword;

        if (password === Cfpassword) {
            const data = new StudentData({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                Cfpassword: req.body.Cfpassword
            })

            const first = await data.save()
            res.status(201).json(data);

        } else {
            res.send("Password is Inavlid ")
        }
    } catch (e) {
        res.status(400).json("Error");
    }
    res.render("Login");
})

// Read
app.get("/details", async (req, res) => {
    try {
        const showAll = await StudentData.find()
        res.status(200).json(showAll);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

//update 

app.put("/details/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const {
            name,
            email,
            password,
            Cfpassword

        } = req.body;

        const updateData = await StudentData.findByIdAndUpdate(id, {
            name,
            email,
            password,
            Cfpassword
        });
        res.send(updateData);
    } catch (e) {
        res.status(400).send(updateData);
    }

})

//delete
app.delete('/details/:id', async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const deletedItem = await StudentData.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({
                error: 'Item not found '
            });
        }
        res.status(200).json({
            message: 'Item deleted Succesfully'
        });
    } catch (error) {
        console.log('Error deleting item ', error)

        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});


app.listen(4001, () => {
    console.log("Server connect ")
})


/*
app.post("/login", async (req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;

        const checkEmail = await StudentData.findOne({
            email
        })
        if (checkEmail.password === password) {
            res.status(201).render("Home");
        } else {
            res.send("Password is not match")
        }

    } catch (e) {
        res.send("Error");
    }
})
    */