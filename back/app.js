const { constants } = require('buffer');
const express = require('express');
const mysql = require('mysql');
const util = require('util');
const cors = require('cors');



const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());


//Connect to MySQL
var connecting = mysql.createConnection(
    {
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "money_balance"
    }
);

//Connect the Express app to the db
connecting.connect();
connecting.query = util.promisify(connecting.query);


//Get: last transactions
app.get("/transaction/:id", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query("SELECT * FROM transaction WHERE user_id = ? ORDER BY date DESC LIMIT 10", req.params.id);
        res.status(200).send(response);
    }
    catch(e){
        console.log(e);
        res.status(422).send(e);
    }
});

//Get: income or expenses
app.get("/transaction/:id/:in_out", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query("SELECT * FROM transaction WHERE in_out = ? AND user_id = ?", [req.params.in_out, req.params.id]);
        res.status(200).send(response);
    }
    catch(e){
        console.log(e);
        res.status(422).send(e)
    }
});

//Get: users
app.get("/users", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query("SELECT username, id FROM users");
        res.status(200).send(response);
    }
    catch(e){
        console.log(e);
        res.status(422).send(e);
    }
})

//Get: balance
app.get("/users/:userid", async (req, res)=>{
    try{
        //verify value
        const user_logged = req.params.userid;
        var current_balance = await connecting.query('SELECT balance, username FROM users WHERE id = ?', user_logged);

        res.status(200).send(current_balance);

    }
    catch(e){
        console.error(e);
        res.status(422).send(e);
    }
});

//Update: balance
app.put("/users/:amount", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query('UPDATE users SET balance = (balance + ?) WHERE id = ?', [req.body.amount, user_logged]);
        res.status(200).send(response);
    }
    catch(e){
        console.error(e);
        res.status(422).send(e);
    }
});

//Update former transactions
app.put("/transaction/:id/:amount/:category", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query('UPDATE transaction SET amount = ?, category = ? WHERE id = ?', [req.params.amount, req.params.category, req.params.id]);
        res.status(200).send(response);

    }
    catch(e){
        console.error(e);
        res.status(422).send(e);
    }
});

//Create a new income or expense
app.post("/transaction", async (req, res)=>{
    try{
        //verify sent values
        let amount = req.body.amount;
        let category = req.body.category;
        let in_out = req.body.in_out;

        if(amount < 0 || amount == undefined || amount == ''){
            throw new Error ('Please insert a valid amount.');
        }
        if(category == undefined || category == ''){
            throw new Error ('Please insert a category.');
        }
        if(in_out != "in" && in_out != "out"){
            throw new Error ('Please select a valid operation.');
        }

        //Transform amount according to the transaction
        if(in_out == 'out'){
            amount == 0 - amount;
        }

        
        let response = null;
        response = await connecting.query('INSERT INTO transaction (amount, category, user_id, in_out) VALUES (?, ?, ?, ?)', [amount, category, user_logged, in_out]);

        res.status(200).send(response);

    }
    catch(e){
        console.error(e);
        res.status(422).send(e);
    }
});

app.listen(PORT, ()=>{
    console.log('listening on port ' + PORT);
});
