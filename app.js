const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
app.set('view engine','ejs');
app.set("views",__dirname+'/views');
app.use(express.static('public'));
const nav=[
    {name:'Home',link:'/basic'},
    {name:'Add employee',link:'/basic/addemp'}
]

const basicRoutes=require('./routes/basicRoutes')(nav);
app.use('/basic',basicRoutes);





app.listen(3000, () => {
    console.log("The server is running on Port 3000");
});
