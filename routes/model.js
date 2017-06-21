var mongoose = require('mongoose');
mongoose.connect('mongodb://dev:dev@localhost/kanta');

var vastausSchema = mongoose.Schema({
    nimi: String,
    supersankari: String
});
var Vastaus = mongoose.model('Vastaus', vastausSchema);
exports.Vastaus = Vastaus;