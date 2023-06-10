const entry = require('../models/entries'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const dataEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(dataEntry);
    res.status(201).json({
        "items_created": response,
        data: dataEntry
    });
}

// Crear entry por email
const updateEntry = async (req, res) => {
    const dataEntry = req.body; // {title,new_title,content,email,category}
    const response = await entry.updateEntry(dataEntry);
    res.status(200).json({
        "items_updated": response,
        data: dataEntry
    });
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry
    //deleteEntry, --> DELETE
    
}