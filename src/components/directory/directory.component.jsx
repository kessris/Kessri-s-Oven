import React from 'react';
import MenuItem from "../directory-preview/directory-preview.component";
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: `This Month's Sales`,
                    subtitle: 'Order Now',
                    imageUrl: 'http://www.cakesetc.ca/media/filter/large/img/petit_four_compressor.jpg',
                    id: 1,
                    size: 'very-large',
                    linkUrl: 'this-months-sales'
                },
                {
                    title: 'Bulk Orders',
                    subtitle: 'Inquire',
                    imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/trends/convenience/clean-fusion-throughout-the-day-dawn-releases-2020-food-trends-at-ibie/10154048-3-eng-GB/Clean-fusion-throughout-the-day-Dawn-releases-2020-food-trends-at-IBIE_wrbm_large.jpg',
                    id: 2,
                    size: 'large',
                    linkUrl: 'bulk-orders'
                },
                {
                    title: 'Gallery',
                    subtitle: 'Personal Photos',
                    imageUrl: 'https://www.qbfarmersmarket.com/media/zoo/images/sweet-baking_ebea97a63a46f1d7314e336159dcc26c.jpg',
                    id: 3,
                    linkUrl: 'gallery'
                },
                {
                    title: 'Q&A',
                    subtitle: 'Frequently asked questions',
                    imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/bakewell-tarts.jpg',
                    id: 4,
                    linkUrl: 'q&a'
                },
                {
                    title: 'How To Order',
                    subtitle: 'Method, Location, Price, Etc.',
                    imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/latam/brazil-bread-and-baked-goods-market-2017-2018-growth-mintel/7944071-2-eng-GB/Brazil-bread-and-baked-goods-market-2017-2018-growth-Mintel_wrbm_large.jpg',
                    id: 5,
                    linkUrl: 'how-to-order',
                    size: 'large'
                }
            ]
        };
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    // ES6 trick: '{title, subtitle, imageUrl, size, linkUrl}' equivalent to '...otherSectionProps'
                    // Can use this because 'size={size}' for example, are named the same. That's why 'key={id}' cannot be replaced.
                    this.state.sections.map(({ id, ...otherSectionProps }) =>
                        <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
    }
}

export default Directory;
