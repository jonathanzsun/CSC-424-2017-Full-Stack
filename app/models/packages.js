/**
 * Created by Trevor on 4/13/2017.
 */

var mongoose = require('mongoose');

var packageSchema = mongoose.Schema({

    package: {

        depart_zip: String,
        receiver_zip: String,
        receiver_name: String,
        package_size: String,
        package_weight: Number,

    }

});

module.exports = mongoose.model('Packages', packageSchema);
