const User=require('./../models/User')

class UserView{
    static createUser(username, name, id){
        return new User(username, name, id)
    }
}

module.exports=UserView;