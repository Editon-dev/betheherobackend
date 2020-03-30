const connection = require('../connection');

module.exports = {
    async create (request,response){
    const {id} = request.body;
    
    const ong = await connection('https://bethehero-editon-backend.herokuapp.com/ongs')
        .where('id', id)
        .first();
    
        if(!ong){
            response.status(400).json({ erro: "ONG não cadastrada!" });
        }

        return response.json(ong.name);
    }

}