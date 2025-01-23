require('dotenv').config();
require('./config');
const mongoose=require('mongoose')
const express=require('express')

const app=require('./index')
console.log(process.env)

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
