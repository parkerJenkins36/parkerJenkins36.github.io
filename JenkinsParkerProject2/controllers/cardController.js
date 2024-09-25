const model = require('../models/card'); 

exports.index = (req, res) => {
    let cards = model.find(); 
    res.render('./card/index', { cards }); 
};

exports.new = (req, res) => {
    res.render('./card/new'); 
};

exports.create = (req, res) => {
    let card = req.body; 
    model.save(card); 
    res.redirect('/cards'); 
};

exports.show = (req, res, next) => {
    let id = req.params.id; 
    let card = model.findByID(id); 
    if (card) {
        res.render('./card/show', { card }); 
    } else {
        let err = new Error('Cannot find a card with id ' + id);
        err.status = 404; 
        next(err); 
    }
};

exports.edit = (req, res, next) => {
    let id = req.params.id; 
    let card = model.findByID(id);
    if (card) {
        res.render('./card/edit', { card });
    } else {
        let err = new Error('Cannot find a card with id ' + id);
        err.status = 404; 
        next(err);
    }
};

exports.update = (req, res, next) => {
    let card = req.body; // Get the updated card data from the request body
    let id = req.params.id; // Get the card ID from the URL parameters

    if (model.updateById(id, card)) { // Update the card
        res.redirect('/cards/' + id); // Redirect to the updated card's show page
    } else {
        let err = new Error('Cannot find a card with id ' + id);
        err.status = 404; // Set the status to 404
        next(err); // Pass the error to the next middleware
    }
};

exports.delete = (req, res, next) => {
    let id = req.params.id; // Get the card ID from the URL parameters
    if (model.deleteById(id)) { // Attempt to delete the card
        res.redirect('/cards'); 
    } else {
        let err = new Error('Cannot find a card with id ' + id);
        err.status = 404; 
        next(err); 
    }
};