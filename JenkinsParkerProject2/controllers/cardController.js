const model = require('../models/card');

exports.index = async (req, res) => {
    try {
        let cards = await model.find();
        cards.sort((a, b) => a.price - b.price); // Sort cards by price
        res.render('./card/index', { cards });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

exports.new = (req, res) => {
    res.render('./card/new');
};

exports.create = async (req, res) => {
    let newCard = req.body;
    if (req.file) {
        newCard.image = "/images/" + req.file.filename;
    }

    try {
        // Validate newCard fields if needed (e.g., title, price, etc.)
        if (!newCard.image) {
            return res.status(400).send('No image uploaded.');
        }
        await model.save(newCard); // Save new card to the model
        res.redirect('/cards');
    } catch (err) {
        res.status(500).send('Error creating new card');
    }
};

exports.show = async (req, res, next) => {
    try {
        let id = req.params.id;
        let card = await model.findByID(id);

        if (card) {
            res.render('./card/show', { card });
        } else {
            let err = new Error('Cannot find a card with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

exports.edit = async (req, res, next) => {
    try {
        let id = req.params.id;
        let card = await model.findByID(id);
        if (card) {
            res.render('./card/edit', { card });
        } else {
            let err = new Error('Cannot find a card with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    let id = req.params.id;
    let updatedCard = req.body;
    
    if (req.file) {
        updatedCard.image = "/images/" + req.file.filename;
    }

    try {
        let updated = await model.updateById(id, updatedCard);
        if (updated) {
            res.redirect('/cards/' + id);
        } else {
            let err = new Error('Cannot find a card with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    try {
        let deleted = await model.deleteById(id);
        if (deleted) {
            res.redirect('/cards');
        } else {
            let err = new Error('Cannot find a card with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

exports.search = async (req, res) => {
    let searchTerm = req.query.q; // Assuming you changed the form input's name to "q"
    let cards = await model.find();
    cards.sort((a, b) => a.price - b.price);

    if (searchTerm) {
        let filteredCards = cards.filter(card => {
            return card.active && (
                card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                card.details.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        res.render('./card/index', { cards: filteredCards, message: filteredCards.length ? null : 'No results found.' });
    } else {
        res.redirect('/cards'); 
    }
};