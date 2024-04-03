export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "beige", label: "Beige" },
            { value: "blue", label: "Blue" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" },
        ]

    },

    {
        id: "size",
        name: "Size",
        options:[
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
        ]
    },

];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "₹159 To ₹399"},
            { value: "399-999", label: "₹399 To ₹999"},
            { value: "999-1999", label: "₹999 T ₹1999"},
            { value: "1999-2999", label: "₹1999 To ₹2999"},
            { value: "2999-3999", label: "₹2999 To ₹3999"},
        ],
    },

    {
        id: "discount",
        name:"DISCOUNT RANGE",
        options: [
            { value: "10", label: "10% and above" },
            { value: "20", label: "20% and above" },
            { value: "30", label: "30% and above" },
            { value: "40", label: "40% and above" },
            { value: "50", label: "50% and above" },
            { value: "60", label: "60% and above" },
            { value: "70", label: "70% and above" },
            { value: "80", label: "80% and above" },
        ],
    },
    {
        id: "stock",
        name: "Availabilty",
        options:[
            { value: "in_stock", label: "In Stock"},
            { value: "out_of_stock", label: "Out of Stock"},
        ],
    },
]


export const sortOptions = [
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
];