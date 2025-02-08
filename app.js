const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user-model');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/create',async (req, res) => {
   const usercreated = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    })
    console.log(usercreated);
    res.redirect('/');
   
})

app.listen(3000,function(){
    console.log('listening on port 3000');
})
