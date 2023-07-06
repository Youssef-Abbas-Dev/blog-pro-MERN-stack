export const posts = [
    {
        _id: 1,
        title: "BMW",
        description: "About BMW",
        category: "cars",
        image: "/images/bmw.jpg",
        likes: [1,2],
        createdAt: "Fri Nov 04 2022",
        user: {
            username: "Youssef Abbas",
            image: "/images/user-avatar.png"
        },
    },
    {
        _id: 2,
        title: "JavaScript",
        description: "About JavaScript",
        category: "programming",
        image: "/images/javascript.jpeg",
        likes: [1,2,3,4],
        createdAt: "Sun Oct 06 2021",
        user: {
            username: "Hasan",
            image: "/images/user-avatar.png"
        }
    },
    {
        _id: 3,
        title: "good destination for summer",
        description: "About Travelling",
        category: "travelling",
        image: "/images/istanbul.jpg",
        likes: [],
        createdAt: "Fri Oct 08 2021",
        user: {
            username: "Ali",
            image: "/images/user-avatar.png"
        }
    },
    {
        _id: 4,
        title: "Nanga Parbat",
        description: "About Nanga Parbat",
        category: "nature",
        image: "/images/nangaparbat.jpg",
        likes: [1,2,3,4,5],
        createdAt: "Mon Jul 06 2022",
        user: {
            username: "Youssef Abbas",
            image: "/images/user-avatar.png"
        },
    },
    {
        _id: 5,
        title: "Baghdad",
        description: "About Baghdad",
        category: "travelling",
        image: "/images/baghdad.jpg",
        likes: [1,2,3],
        createdAt: "Fri Oct 12 2022",
        user: {
            username: "Hasan",
            image: "/images/user-avatar.png"
        }
    },
    {
        _id: 6,
        title: "Turkish Coffee",
        description: "About Turkish Coffee",
        category: "coffee & tea",
        image: "/images/coffee.jpg",
        likes: [1],
        createdAt: "Fri Oct 21 20222",
        user: {
            username: "Ali",
            image: "/images/user-avatar.png"
        }
    },
];


export const categories = [
    {
        _id: 1,
        title: 'travelling',
    },
    {
        _id: 2,
        title: 'music',
    },
    {
        _id: 3,
        title: 'programming',
    },
    {
        _id: 4,
        title: 'cars',
    },
    {
        _id: 5,
        title: 'nature',
    },
    {
        _id: 6,
        title: 'coffee & tea',
    },
    {
        _id: 7,
        title: 'football',
    },
]
