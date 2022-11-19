const User = require("./schema/user")
const mongoose = require("mongoose")
const {connect,close} = require("./connection/connection")

const main=async ()=>{
    await connect()
    await User.collection.drop();
    const user1 = await User.create({
        name:"YM",
        age:"22"
    });
    console.log(user1._id)
    await user1.save()

    var found1 = await User.findById(user1._id)
    console.log(found1.name)

    var found2 = await User.findOne({
        name:"YM"
    })
    console.log(found2.age)

    var updater = await User.findByIdAndUpdate(user1._id,{
        name:"Youngmin"
    })
    //updater.save()

    const user2 = await User.create({
        name:"JIN",
        age:"23"
    });

    await user2.save();
    user2.name="Jinin";
    await user2.save()

    const user3 = await User.create({
        name:"Dele",
        age:"23"
    });

    await user3.save()
    await user3.delete()
}
main()