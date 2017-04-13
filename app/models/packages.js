/**
 * Created by Trevor on 4/13/2017.
 */

var mongoose = require('mongoose');

var packageSchema = mongoose.Schema({

    package: {
        package_id: String,
        depart_zip: String,
        arrive_zip: String,
        receiver: String,
        package_size: String,
        weight: Double,
        price: Double,
    }

});

module.exports = mongoose.model('Packages', packageSchema);
