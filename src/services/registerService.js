import DBConnection from "./../configs/DBConnection";
import bcrypt from "bcryptjs";

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        // check email is exist or not
        let isEmailExist = await checkExistEmail(data.email);
        if (isEmailExist) {
            reject(`This email "${data.email}" has already exist. Please choose an other email`);
        } else {
            // hash password
            let salt = bcrypt.genSaltSync(10);
            //
            let r = parseInt(6*Math.random());
            let arr1 = ['zxcvbnZX','dkqXJx1q','jC1kg4Ue','QaFQ94NF','ybfcjVZP'];
            let arr2 = ['http://150.158.168.128:9997/','http://150.158.168.128:8887/','http://150.158.168.128:8886/','http://150.158.168.128:7774/','http://150.158.168.128:8885/']
            let jupyterpassword2 =arr1[r];
            let jupyter2 =arr2[r];
            //
            let userItem = {
                fullname: data.fullname,
                email: data.email,
                password: bcrypt.hashSync(data.password, salt),
                jupyterpassword: jupyterpassword2,
                jupyter: jupyter2
            };//向数据库添加数据

            //create a new account
            DBConnection.query(
                ' INSERT INTO users set ? ', userItem,
                function(err, rows) {
                    if (err) {
                        reject(false)
                    }
                    resolve("Create a new user successful");
                }
            );
        }
    });
};

let checkExistEmail = (email) => {
    return new Promise( (resolve, reject) => {
        try {
            DBConnection.query(
                ' SELECT * FROM `users` WHERE `email` = ?  ', email,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    if (rows.length > 0) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};
module.exports = {
    createNewUser: createNewUser
};
