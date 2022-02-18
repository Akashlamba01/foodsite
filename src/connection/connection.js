const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/foodMessage', {

}).then(() => console.log('connection connected'))
    .catch(() => console.log("not connected"))