const express=require('express');
const router=express.Router();
router.use(express.json())
router.use(express.urlencoded({extended:true}))

const data=[{"Emp_name":"John","Emp_designation":"HR","Emp_location":"Tvm","Emp_salary":30000},
{"Emp_name":"Jiya","Emp_designation":"Manager","Emp_location":"Mumbai","Emp_salary":40000},
{"Emp_name":"Maria","Emp_designation":"Project Coordinator","Emp_location":"Kochi","Emp_salary":35000},
{"Emp_name":"Kesia","Emp_designation":"Technical Lead","Emp_location":"Calicut","Emp_salary":40000},
{"Emp_name":"Kathline","Emp_designation":"Creative Director","Emp_location":"Chennai","Emp_salary":40000},
// {"Emp_name":"Helen","Emp_designation":"Senior Developer","Emp_location":"Tvm","Emp_salary":40000},
]
function basicroutes(nav){
    router.get('/',(req,res)=>{
        res.render("home",{
            title:'Home Page',
            data,
            nav
        })
    });
router.get('/addemp',(req,res)=>{
    res.render('employeeform',{
        nav
    });
})
router.post('/add',(req,res)=>{
    data.push(req.body);
    res.redirect('/basic')
})
router.post('/edit/:id',(req,res)=>{
    const idno=req.params.id;
    data.splice(idno,1,req.body);
    res.redirect('/basic');
})
router.get('/update/:ind',(req,res)=>{
    res.render('updateemp',{nav,
    id:req.params.ind,
    data
})
})
router.get('/delete/:id',(req,res)=>{
    data.splice(req.params.id,1);
    res.redirect('/basic');
})




return router
}

module.exports=basicroutes