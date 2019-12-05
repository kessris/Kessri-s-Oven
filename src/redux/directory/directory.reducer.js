const INITIAL_STATE = {
    sections: [
        {
            title: `This Month's Sales`,
            subtitle: 'Order Now',
            imageUrl: 'https://i.ibb.co/9tNkBk2/20171229-153432-1.jpg',
            id: 1,
            size: 'very-large',
            linkUrl: 'this-months-sales'
        },
        {
            title: 'Bulk Orders',
            subtitle: 'Inquire',
            imageUrl: 'https://i.ibb.co/rZGQQ1m/20170129-145240-1.jpg',
            id: 2,
            size: 'large',
            linkUrl: 'bulk-orders'
        },
        {
            title: 'Gallery',
            subtitle: 'Personal Photos',
            imageUrl: 'https://i.ibb.co/p2Q2jxJ/20170420-104531-1.jpg',
            id: 3,
            linkUrl: 'gallery'
        },
        {
            title: 'Q&A',
            subtitle: 'Frequently asked questions',
            imageUrl: 'https://i.ibb.co/bghfhcP/20170421-161200-1.jpg',
            id: 4,
            linkUrl: 'q&a'
        },
        {
            title: 'How To Order',
            subtitle: 'Method, Location, Price, Etc.',
            imageUrl: 'https://i.ibb.co/MDY1TZb/20170304-122516-1.jpg',
            id: 5,
            linkUrl: 'how-to-order',
            size: 'large'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
