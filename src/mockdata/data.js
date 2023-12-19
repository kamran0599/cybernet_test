// data.js
export const data = [
    {
        sizes: ['tiny', 'small', 'medium', 'large', 'huge'],
        colors: [
            'navy',
            'blue',
            'aqua',
            'teal',
            'olive',
            'green',
            'lime',
            'yellow',
            'orange',
            'red',
            'maroon',
            'fuchsia',
            'purple',
            'silver',
            'gray',
            'black',
        ],
        fruits: [
            'apple',
            'banana',
            'watermelon',
            'orange',
            'peach',
            'tangerine',
            'pear',
            'kiwi',
            'mango',
            'pineapple',
        ],
    },
];



export const transformedData = data[0].colors.map((color, index) => ({
    color,
    size: data[0].sizes[index],
    title: data[0].fruits[index],
    id: index + 1,
}));
