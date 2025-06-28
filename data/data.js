const data =  [
    {
        category: "SUPPLEMENTS",
        items: [
            { name: "Whey protein, 1kg", img: "/images/supplements/0_1.jpg", price: 29.99, count: 0 },
            { name: "Vegan protein, 500g", img: "/images/supplements/0_2.jpg", price: 31.59, count: 0 },
            { name: "Creatine monohydrate, 300g", img: "/images/supplements/0_3.jpg", price: 18.99, count: 0 },
            { name: "BCAA powder, 300g", img: "/images/supplements/0_4.jpg", price: 24.75, count: 0 },
            { name: "Pre-workout formula, 300g", img: "/images/supplements/0_5.jpg", price: 26.49, count: 0 },
            { name: "Multivitamins", img: "/images/supplements/0_6.jpg", price: 15.29, count: 0 }
        ],
        id: 0
    },
    {
        category: "GYM CLOTHING",
        items: [
            { name: "Gym shorts", img: "/images/clothing/0_1.jpg", price: 19.99, count: 0 },
            { name: "Compression leggings", img: "/images/clothing/0_2.jpg", price: 28.59, count: 0 },
            { name: "Gym T-shirts", img: "/images/clothing/0_3.jpg", price: 17.95, count: 0 },
            { name: "Gym sweatpants", img: "/images/clothing/0_4.jpg", price: 24.99, count: 0 },
            { name: "Sleeveless hoodies", img: "/images/clothing/0_5.jpg", price: 32.99, count: 0 },
            { name: "Lightweight training jackets", img: "/images/clothing/0_6.jpg", price: 45.99, count: 0 }
        ],
        id: 1
    },
    {
        category: "TRAINING FOOTWEAR",
        items: [
            { name: "Gym training shoes", img: "/images/footwear/0_1.jpg", price: 64.99, count: 0 },
            { name: "Lifting shoes with flat soles", img: "/images/footwear/0_2.jpg", price: 74.59, count: 0 },
            { name: "Cross-training sneakers", img: "/images/footwear/0_3.jpg", price: 69.99, count: 0 },
            { name: "Minimalist barefoot shoes", img: "/images/footwear/0_4.jpg", price: 59.99, count: 0 },
            { name: "HIIT workout shoes", img: "/images/footwear/0_5.jpg", price: 71.25, count: 0 },
            { name: "Outdoors shoes", img: "/images/footwear/0_6.jpg", price: 78.99, count: 0 }
        ],
        id: 2
    },
    {
        category: "WORKOUT ACCESSORIES",
        items: [
            { name: "Lifting belts", img: "/images/accessories/0_1.jpg", price: 34.99, count: 0 },
            { name: "Wrist wraps", img: "/images/accessories/0_2.jpg", price: 12.99, count: 0 },
            { name: "Workout straps", img: "/images/accessories/0_3.jpg", price: 15.59, count: 0 },
            { name: "Resistance bands", img: "/images/accessories/0_4.jpg", price: 21.75, count: 0 },
            { name: "Ankle straps for cables", img: "/images/accessories/0_5.jpg", price: 11.29, count: 0 },
            { name: "Knee sleeves", img: "/images/accessories/0_6.jpg", price: 22.99, count: 0 }
        ],
        id: 3
    },
    {
        category: "BOTTLES AND SHAKERS",
        items: [
            { name: "Protein shakers, 500mL", img: "/images/bottles/0_1.jpg", price: 8.99, count: 0 },
            { name: "BPA-free water bottles, 750mL", img: "/images/bottles/0_2.jpg", price: 6.59, count: 0 },
            { name: "Stainless steel bottle, 750mL", img: "/images/bottles/0_3.jpg", price: 19.09, count: 0 },
            { name: "Smart Hydration Bottle, 1L", img: "/images/bottles/0_4.jpg", price: 30.99, count: 0 },
            { name: "Collapsible water bottle, 500mL", img: "/images/bottles/0_5.jpg", price: 9.75, count: 0 },
            { name: "Dual compartment shaker, 350mL", img: "/images/bottles/0_6.jpg", price: 14.39, count: 0 }
        ],
        id: 4
    },
    {
        category: "GYM BAGS",
        items: [
            { name: "Large duffle bags", img: "/images/bags/0_1.jpg", price: 39.99, count: 0 },
            { name: "Compact gym backpacks", img: "/images/bags/0_2.jpg", price: 34.29, count: 0 },
            { name: "Tech Utility Gym Pouch", img: "/images/bags/0_3.jpg", price: 15.99, count: 0 },
            { name: "Waterproof gym sacks", img: "/images/bags/0_4.jpg", price: 19.99, count: 0 },
            { name: "Multi-pocket tote bags", img: "/images/bags/0_5.jpg", price: 24.69, count: 0 },
            { name: "Mesh gear organizers", img: "/images/bags/0_6.jpg", price: 16.89, count: 0 }
        ],
        id: 5
    },
    {
        category: "GADGETS AND DEVICES",
        items: [
            { name: "Smartwatches with heart rate monitor", img: "/images/gadgets/0_1.jpg", price: 139.99, count: 0 },
            { name: "Fitness trackers with sleep tracking", img: "/images/gadgets/0_2.jpg", price: 89.99, count: 0 },
            { name: "Bluetooth chest strap heart monitors", img: "/images/gadgets/0_3.jpg", price: 54.99, count: 0 },
            { name: "Digital body fat scales", img: "/images/gadgets/0_4.jpg", price: 42.75, count: 0 },
            { name: "Smart skipping ropes", img: "/images/gadgets/0_5.jpg", price: 27.39, count: 0 },
            { name: "Wireless headphones for training", img: "/images/gadgets/0_6.jpg", price: 59.95, count: 0 }
        ],
        id: 6
    },
    {
        category: "NUTRITION SNACKS",
        items: [
            { name: "Chocolate protein bars", img: "/images/nutrition/0_1.jpg", price: 2.54, count: 0 },
            { name: "Peanut butter energy bites", img: "/images/nutrition/0_2.jpg", price: 3.25, count: 0 },
            { name: "Electrolyte energy gels", img: "/images/nutrition/0_3.jpg", price: 1.95, count: 0 },
            { name: "RTD protein shakes", img: "/images/nutrition/0_4.jpg", price: 3.99, count: 0 },
            { name: "Oat-based meal replacement bars", img: "/images/nutrition/0_5.jpg", price: 2.75, count: 0 },
            { name: "High-protein cookies", img: "/images/nutrition/0_6.jpg", price: 2.95, count: 0 }
        ],
        id: 7
    },
    {
        category: "HYGIENE AND RECOVERY",
        items: [
            { name: "Quick-dry gym towels", img: "/images/hygiene/0_1.jpg", price: 11.99, count: 0 },
            { name: "Natural deodorants for athletes", img: "/images/hygiene/0_2.jpg", price: 8.58, count: 0 },
            { name: "Massage Roller", img: "/images/hygiene/0_3.jpg", price: 14.28, count: 0 },
            { name: "Muscle balm with menthol", img: "/images/hygiene/0_4.jpg", price: 10.69, count: 0 },
            { name: "Cooling gel packs", img: "/images/hygiene/0_5.jpg", price: 9.89, count: 0 },
            { name: "Antibacterial body wipes", img: "/images/hygiene/0_6.jpg", price: 7.99, count: 0 }
        ],
        id: 8
    },
    {
        category: "EQUIPMENT",
        items: [
            { name: "Adjustable dumbbells", img: "/images/equipment/0_1.jpg", price: 79.95, count: 0 },
            { name: "Cast iron kettlebells", img: "/images/equipment/0_2.jpg", price: 35.69, count: 0 },
            { name: "Non-slip yoga mats", img: "/images/equipment/0_3.jpg", price: 22.56, count: 0 },
            { name: "Push-Up Bars", img: "/images/equipment/0_4.jpg", price: 19.99, count: 0 },
            { name: "Pull-up bars for doorway", img: "/images/equipment/0_5.jpg", price: 31.48, count: 0 },
            { name: "Balance Trainer Ball", img: "/images/equipment/0_6.jpg", price: 24.88, count: 0 }
        ],
        id: 9
    }
];

module.exports = data;