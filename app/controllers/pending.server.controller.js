var Plugin = require('mongoose').model('Pending');

exports.create = function(req, res, next) {
    var plugin = new Plugin(req.body);
    plugin.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(plugin);
        }
    });
};

exports.list = function(req, res, next) {
    Plugin.find({}, function(err, plugin) {
        if (err) {
            return next(err);
        }
        else {
            res.json(plugin);
        }
    });

};

exports.read = function(req, res) {
    res.json(req.plugin);
};

exports.pluginByID = function(req, res, next, id) {
    Plugin.findOne({
            _id: id
        },
        function(err, plugin) {
            if (err) {
                return next(err);
            }
            else {
                req.plugin = plugin;
                next();
            }
        }
    );
};