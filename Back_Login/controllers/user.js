const { UserModel } = require('../models/nosql/index')
const express = require('express');


const getUser = (req,res) => {

    const data = ['Elber Galarga', '12345678'];
    
    res.json( {data} );
}



const getUsers = (req,res) => {}

const createUser = async (req, res) => {
    try {
        const { name, password, email, role } = req.body;

        if (!name || !password || !email) {
            return res.status(400).send({ error: 'Name, password, and email are required fields.' });
        }

        const data = await UserModel.create({ name, password, email, role }, {timeout: 20000});
        console.log(data)
        res.status(201).send({ data });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
};
const UpdateUser = (req,res) => {}

const DeleteUserS = (req,res) => {}

module.exports = {getUser , UpdateUser, createUser, DeleteUserS, getUser}