
const { v4: uuidv4 } = require('uuid');
const cards = [
    {
        id: '1',
        title: 'Aaron Rodgers',
        seller: 'Mark Murphy',
        condition: 'High End',
        price: 1000,
        details: 'Rare card from the 2010 season.',
        image: '/images/aaron.jpg',
        active: true
    },
    {
        id: '2',
        title: 'Marvin Harrison',
        seller: 'Jim Irsay',
        condition: 'Low End',
        price: 675,
        details: 'Limited edition card from the 2000s.',
        image: '/images/marvin.jpg',
        active: true
    },
    {
        id: '3',
        title: 'Barry Sanders',
        seller: 'Shiela Ford',
        condition: 'Medium Grade',
        price: 850,
        details: 'A card with vintage from the 1980s.',
        image: '/images/barry.jpg',
        active: true
    },
    {
        id: '4',
        title: 'Brock Purdy',
        seller: 'John Lynch',
        condition: 'Mint - New',
        price: 120,
        details: 'Pristine card with no damage.',
        image: '/images/brock.jpg',
        active: true
    },
    {
        id: '5',
        title: 'Tom Brady',
        seller: 'Robert Kraft',
        condition: 'High Grade',
        price: 1230,
        details: 'A card that highlights one of the best.',
        image: '/images/tombrady.jpg',
        active: true
    },
    {
        id: '6',
        title: 'Peyton Manning',
        seller: 'John Elway',
        condition: 'Great Grade',
        price: 950,
        details: 'One of a kind Superbowl winner.',
        image: '/images/peyton.jpg',
        active: true
    }
];

// Function to find all cards
exports.find = () => cards;


exports.findByID = id => cards.find(card => card.id === id);


exports.save = function (card) {
    card.id = uuidv4();
    card.active = true;  
    cards.push(card);   
};


exports.updateById = function (id, newCard) {
    let card = cards.find(card => card.id === id);
    if (card) {
        card.title = newCard.title;
        card.seller = newCard.seller;
        card.condition = newCard.condition;
        card.price = newCard.price;
        card.details = newCard.details;
        card.image = newCard.image;
    } else {
        return false;
    }
};


exports.deleteById = function (id) {
    let index = cards.findIndex(card => card.id === id);
    if (index !== -1) {
        cards.splice(index, 1);  // Remove the card from the array
        return true;
    } else {
        return false;
    }
};