import * as db from '../repository/canalRepository.js'

import {Router} from "express";
const endpoints = Router();


endpoints.get('/canal', async (req,resp) => {
    
    try {
        
            let registros = await db.consultarCanais();
            resp.send(registros)

        
    }
    catch (err) {
        
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/inserircanal', async (req,resp) => {
    
    
    try {
        
        let cadastro = req.body;
        
        let id = await db.inserirCanal(cadastro);
        
        resp.send({
            Confirmação: "Canal adicionado!",
            canalId: id
        })
    }
    catch (err) {
        
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/deletar/:id', async (req,resp) => {
    
    try {
            let id = req.params.id
            let registros = await db.deletarCanais(id);
            resp.send("deletado")

        
    }
    catch (err) {
        
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/update', async (req,resp) => {
    
    
    try {
        
        let cadastro = req.body
        
        let info = await db.updateCanais(cadastro);
        
        resp.send({
            Confirmação: "Canal editado!"
        })
    }
    catch (err) {
        
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default endpoints;