"use strict";

class UserStorage{
    static #users = {
        id:["박정완1","박정완2","박정완3"],
        psword:["1234","1234","123456"],
        name:["바보","멍청이","똥개"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]= users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userskeys = Object.keys(users);
        const userInfo = userskeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
}

module.exports = UserStorage;