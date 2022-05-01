const User=require('./../../app/models/User')

class UserView{
    static createUser(payload){
        return new User(payload);
    }
}

module.exports=UserView;