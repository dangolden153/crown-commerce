import {createSelector } from 'reselect';


const selectShop = state => state.Shop

export const selectcollections = createSelector(
    [selectShop],
    Shop => Shop.collections 
)

export const selectcollectionForPreview =createSelector(
    [selectcollections],
collections=> Object.keys(collections).map(key => collections[key])
)

export const selectcollection = collectionsUrlPrams =>createSelector(
    [selectcollections],
    collections => collections[collectionsUrlPrams]
)