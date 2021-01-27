const express = require('express');
const mysql = require('mysql');
const util = require('util');

const PORT = 3000;

const app = express();
app.use(express.json());

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


var user_logged = 1;
//Get: last transactions NO FUNCIONA, QUEDA PENSANDO TIPO LOOP
app.get("/transaction", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query("SELECT * FROM transaction WHERE user_id = ? ORDER BY date DESC LIMIT 10", user_logged);
    }
    catch(e){
        console.log(e);
        res.status(422).send(e);
    }
})

//Get: income or expenses
app.get("/transaction/:in_out", async (req, res)=>{
    try{
        let response = null;
        response = await connecting.query("SELECT * FROM transaction WHERE in_out = ? AND user_id = ?", [req.params.in_out, user_logged]);
        res.status(200).send(response);
    }
    catch(e){
        console.log(e);
        res.status(422).send(e);
    }
});

//Get: balance
app.get("/users/:username", async (req, res)=>{
    try{
        //verify value
        var user_logged = await connecting.query('SELECT id FROM users WHERE username = ?', req.params.username);
        var current_balance = await connecting.query('SELECT balance FROM users WHERE id = ?', user_logged);

        res.status(200).send(current_balance);

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
        response = await connecting.query('INSERT INTO transaction (amount, category, user_id, in_out) VALUES (?, ?, ?, ?); UPDATE users SET balance = (balance + ?) WHERE id = ?', [amount, category, user_logged, in_out], [amount, user_logged]);
        //FALTA QUE FUNCIONE EL UPDATE

        res.status(200).send(response);

    }
    catch(e){
        console.error(e);
        res.status(422).send(e);
    }
})




app.listen(PORT, ()=>{
    console.log('listening on port ' + PORT);
})
