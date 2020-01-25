import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            this.state.collections.map(({id,...otherCollectionProp}) => (
            <div> 
                <CollectionPreview key={id} {...otherCollectionProp} />
            </div>)
            )
            
        )
    }
}

export default ShopPage;