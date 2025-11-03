const Menu = require('../models/Menu');

exports.getMenus = async(req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch menus' });
    }
};

exports.createMenu = async(req, res) => {
    console.log('📦 Incoming form data:', req.body); // ADD THIS LINE

    try {
        const {
            name,
            category,
            description,
            price,
            image,
            calories,
            dietaryInfo,
        } = req.body;

        const dietaryArray = typeof dietaryInfo === 'string' ?
            dietaryInfo.split(',').map(i => i.trim()) :
            dietaryInfo;

        const newItem = {
            name,
            description,
            price,
            image,
            calories,
            dietaryInfo: dietaryArray,
        };

        // Check if a menu for the category exists
        let menu = await Menu.findOne({ category });

        if (menu) {
            menu.items.push(newItem);
            await menu.save();
        } else {
            await Menu.create({
                category,
                items: [newItem],
            });
        }

        res.status(201).json({ message: 'Menu item added successfully' });
    } catch (err) {
        console.error('Failed to create menu:', err.message, err.stack);
        res.status(500).json({ error: 'Failed to create menu' });
    }
};