exports.create = (req, res)=>{
    res.send({message: "Create Note Handler"})
}
exports.findAll = (req, res)=>{
    res.send({message: "FindAll Note Handler"})
}

exports.findOne = (req, res)=>{
    res.send({message: "FindOne Note Handler"})
}

exports.update = (req, res)=>{
    res.send({message: "update Note Handler"})
}

exports.delete = (req, res)=>{
    res.send({message: "delete Note Handler"})
}

exports.deleteAll = (req, res)=>{
    res.send({message: "deleteAll Note Handler"})
}