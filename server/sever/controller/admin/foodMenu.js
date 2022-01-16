const FoodMenu = require('../../../models/FoodMenu')

exports.create = async (req,res)=>{
    // validate request
    if(!req.body){
        return res.status(400).json({success:false, message : "Content can not be emtpy!"})
    }

    const {title,monChinh, monDiemTam, quaChieu} = req.body
    // new user
    try{const newMenu = new FoodMenu({
        title,
        monChinh,
        monDiemTam,
        quaChieu
    })

    await newMenu.save()
    res.json({ success: true, message: 'Thêm thành công', fooMenu: newMenu })
    }catch{
            res.status(500).json({ success: false, message: 'Thất bại' })
        };

}

//find
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        FoodMenu.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ success: false, message : "Not found  with id "+ id})
                }else{
                    res.json(data)
                }
            })
            .catch(err =>{
                res.status(500).json({success: false, message: "Erro retrieving Food Menu with id " + id})
            })

    }else{
        FoodMenu.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).send({success: false, message : err.message || "Error Occurred while retriving Food Menu information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res  
            .status(400)
            .send({success:false, message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    FoodMenu.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).json({ susccess:false,message : `Cannot Update Food Menu with ${id}. Maybe user not found!`})
            }else{
                res.json({success:true, message:'Sửa thành công'})
            }
        })
        .catch(err =>{
            res.status(500).json({susccess:false, message : "Error Update Food Menu information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    FoodMenu.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).json({success:false, message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.json({susccess:true,
                    message : "Food Menu was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).json({
                susccess:false,
                message: "Could not delete Food Menu with id=" + id
            });
        });
}

