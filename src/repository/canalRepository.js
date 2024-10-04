import con from "./connection.js";



export async function inserirCanal(cadastro) {
    
    const comando = `
    INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto) 
    VALUES (?, ?, ?);
    
                    `
                    
    let resposta = await con.query(comando, [cadastro.nome, cadastro.numero, cadastro.aberto])
    let info = resposta[0];

    return info.insertId;

}

export async function consultarCanais() {

    const comando = `
     select*from tb_canal;
    `

    let resposta = await con.query(comando)
    let registros = resposta[0];

    return registros
}

export async function deletarCanais(id) {

    const comando = `
    delete from tb_canal
    where id_canal = ?;
    `

    let resposta = await con.query(comando, [id])
    let registros = resposta[0];

    return registros
}


export async function updateCanais(cadastro) {
    const comando = `
    UPDATE tb_canal
    SET nm_canal = ?, nr_canal = ?, bt_aberto = ?
    WHERE id_canal = ?;
    `;


    let resposta = await con.query(comando, [cadastro.nome, cadastro.numero, cadastro.aberto, cadastro.id]);
    let registros = resposta[0];

    return registros;
}






