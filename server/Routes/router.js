const express = require("express");
const router = new express.Router;
const conn = require("../db/conn");
const multer  = require('multer');


const storage  =  multer.diskStorage({
    destination : function(req, file, cb){
        return cb(null, "./uploads");
    },
    filename  : function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    },
});

const  upload = multer({storage});
router.post("/create", upload.single('file'), (req, res) => {
   
       var img = req.file.path;
     


    var  { cname} = req.body;
        if (!cname || !img) {
            res.status(422).json("plz fill out the all data");
    
        }
    
        try {
            conn.query("SELECT * from category WHERE cname    = ? ", cname, (err, result) => {
                if (result.length) {
                    res.status(422).json("This Data alreday ext");
                  
                } else {
                    conn.query("INSERT INTO category SET ? ", { cname, img }, (err, result) => {
                        if (err) {
                            console.log("err" + err);
                        } else {
                            res.status(201).json(req.body);
                           
                        }
                       
                    })
                }
            });
    
        } catch (error) {
            res.status(422).json(error);
        }}
);


// -------------------------------


router.post("/addreport", upload.single('img'), (req, res) => {
  
var img = req.file.path;

console.log(img);


console.log(req.body);



 var{catid,title,service, descr, tableofcontents,status,heading,single_price,multi_price,corporate_price,cdate,metatitle,metadescr} = req.body;
 
    if (!catid || !img) {
            res.status(422).json("plz fill out the all data");
    
        }
    
        try {
            conn.query("SELECT * from report WHERE catid    = ? ", "cname", (err, result) => {
                if (result.length) {
                    res.status(422).json("This Data alreday ext");
                  
                } else {
                    conn.query("INSERT INTO report SET ? ", {catid,title,service,descr,tableofcontents,status,img,heading,single_price,multi_price,corporate_price,cdate,metatitle,metadescr}, (err, result) => {
                        if (err) {
                            console.log("err" + err);
                        } else {
                            res.status(201).json(req.body);
                           

                           
                        }

                      //  res.redirect(req.originalUrl);
                       
                    })
                }
            });
    
        } catch (error) {
            res.status(422).json(error);
        }}
);






// -------------------------------

router.get("/api/category", (req , res)=>{
    conn.query("select * from category" , (err, rows)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }

    })
});


router.get("/api/report", (req , res)=>{
    conn.query("select * from report ORDER BY id ASC LIMIT 9" , (err, rows)=>{
        if(!err){
            res.send(rows);
           
        }else{
            console.log(err);
        }

    })
});




router.get("/api/singlereport/:id", (req , res)=>{
    id = req.params.id;
    conn.query(`select * from report where id = ${id}` , (err, rows)=>{
        if(!err){
            res.send(rows);
           
        }else{
            console.log(err);
        }

    })
});









module.exports = router;