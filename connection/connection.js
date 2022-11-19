const mongoose = require('mongoose');

const connect = ()=>{
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug',true);
    }
    mongoose.connect('mongodb://localhost:27017/Sample',{
        useNewUrlParser:true,
    },(error)=>{
        if(error){
            console.log('몽고디비 연결 에러',error);
        }else{
            console.log('몽고디비 연결 성공');
        }
    });
};

mongoose.connection.on('error',(error)=>{
    console.error('몽고디비 연결 에러',error);
});

const close=()=>{
    mongoose.connection.close()
}

module.exports = {connect,close};