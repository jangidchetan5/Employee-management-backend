const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://empManagement:empManagement@cluster0.fikhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false,useCreateIndex:true})
.then( ()=>{
    console.log('successful connected')
}).catch( (err)=>{
console.log(err)
})

