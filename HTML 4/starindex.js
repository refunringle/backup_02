const express = require('express');
const stars = require ('./stars.json');
const fs = require('fs');
const res = require('express/lib/response');

const app = express();
// midleware
app.use(express.json());
const port = 9000;

// get all stars from our data base

app.get('/', (req,res) => {
    const stars_ = stars.map(star =>{
        delete star.email
        delete star.code
        return star;
    });
    res.status(200).json({
        message: "hear are the stars" ,
        data : stars,

    });
});
// get a stars by email ,code
app.get('/my_star', (req,res) => {
    const {email,code} = req.body ; 
    const star = stars.filter((star) => {
        return star.email === email && star.code === code;
    });

    if (!star){
        return res.status(400).json({
            message:'no datas are found'
        });
    }
    res.status(200).json({
        data:star,
        message: `success ${star.length}`,
    });
});


// add a new stars from our data base
app.post('/', (req,res) => {
    const { name ,email ,code , person} = req.body;
    if(
        !name || 
        !email ||
        !code || 
        !person 

    ) {
        return res.status(400).json({
            message : 'please fill all fields',
            status :'failed'
        });
    }
    const starexist = stars.find(
        (star) => star.name === name
    );

    if (starexist){
       return res.status(405).json({
            status:'failed',
            message:'stars allready exist , please choose different name '
        });
    }

    const newstar = {
        name,
        email,
        code,
        person
    }
    stars.push(newstar);
    fs.writeFile('./stars.json', JSON.stringify(stars),(err) => {
        if (err){
            res.status(500).json({
                message:'somthing went error'
            });
        }
    }
    );
    res.status(200).json({
        message:'stars add sucessfully',
        data:newstar,
    });
});

// update our stars in our data base
app.put('/:name',(req,res) => {
    const {name} = req.params;

    const starexists = stars.find(
        (star) => star.name === name
    );
    if (!starexists){
        return res.status(404).json({
            message:'star does not exist'
        });
    }
    const {email,code,newName} = req.body;
    if (starexists.email !== email || starexists.code !== code){
        return res.status(405).json({
            status:'failed',
            message:'not data found '
        });     
    }
    starexists.name = newName;
    fs.writeFile('./stars.json' , JSON.stringify(stars),
        (err)=> {
            if (err){
                res.status(500).json({
                    message:'intervel server error',
            });
        }
    }
    );
    res.status(200).json({
        data: starexists,
        message:'its ok with me'
    })
} );

// gonna delet the method

app.delete('/:name', (req,res) => {
    const {name} = req.params ; 
    const starexists = stars.find((star) => 
        star.name === name 
    );

    if (!starexists){
        return res.status(400).json({
            message:'no datas are found'
        });
    }
    const {email,code} = req.body;
    if (starexists.email !== email || starexists.code !== code){
        return res.status(405).json({
            status:'failed',
            message:'not data found '
        });     
    }
    const index = stars.indexOf(starexists);
    stars.splice(index,1);
    fs.writeFile('./stars.json' , JSON.stringify(stars),
    (err)=> {
        if (err){
            res.status(500).json({
                message:'intervel server error',
        });
        }
    }
    );
    });

    res.status(200).json({
        message: 'success to delet',
    });



app.listen(port,() => {
    console.log('am ok a.\n' + port);
});

