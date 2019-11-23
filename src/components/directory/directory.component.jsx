import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'How To Order',
                    subtitle: 'Method, Location, Price, Etc.',
                    imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/latam/brazil-bread-and-baked-goods-market-2017-2018-growth-mintel/7944071-2-eng-GB/Brazil-bread-and-baked-goods-market-2017-2018-growth-Mintel_wrbm_large.jpg',
                    id: 1
                },
                {
                    title: 'Gallery',
                    subtitle: 'Personal Photos',
                    imageUrl: 'https://www.qbfarmersmarket.com/media/zoo/images/sweet-baking_ebea97a63a46f1d7314e336159dcc26c.jpg',
                    id: 2
                },
                {
                    title: 'Q&A',
                    subtitle: 'Frequently asked questions',
                    imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/bakewell-tarts.jpg',
                    id: 3
                },
                {
                    title: 'Traditional Desserts',
                    subtitle: 'Order Now',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYyYUjzAuDMEEXskBPXdHePhQPYJmwD5z9KHBzRoxvb6G3iRvc',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'Baked Desserts',
                    subtitle: 'Order Now',
                    imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/trends/convenience/clean-fusion-throughout-the-day-dawn-releases-2020-food-trends-at-ibie/10154048-3-eng-GB/Clean-fusion-throughout-the-day-Dawn-releases-2020-food-trends-at-IBIE_wrbm_large.jpg',
                    id: 5,
                    size: 'large'
                },
            ]
        };
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, subtitle, imageUrl, id, size}) =>
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} subtitle={subtitle}/>)
                }
            </div>
        )
    }
}

export default Directory;
