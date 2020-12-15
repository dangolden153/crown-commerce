const INITIAL_STATE = {
    section :[
        {
        title:'hats', 
        size:'grid1',
        id:1,
        linkUrl:'shop/hats',
    imageurl:'https://www.irishtweeds.com/image/cache/data/aHatman%20Aussie/Wax-Hat-Aussie-Style---Back-600x600.jpg'
     },
        {
            title:'Caps',
            size:'grid2',
            id:2,
            linkUrl:'shop/caps',
            imageurl:'https://sw25045.smartweb-static.com/upload_dir/shop/DSC07422.jpg'
            },
            {
                title:'Shoes',
                size:'grid3',
                id:3,
                linkUrl:'shop/shoes',
                imageurl:'https://images.yaoota.com/cdXjXlsU59mtJ_DWlx8Jy85-bZs=/trim/yaootaweb-production-ng/media/crawledproductimages/0d74dc3c9eeb9f6de62fed0bcf53ba2fdf30bbeb.jpg'
                },
                {
                    title:'jackets',
                    id:4,
                    linkUrl:'shop/jackets',
                    size:'small',
                    imageurl:'https://images.pexels.com/photos/3971649/pexels-photo-3971649.jpeg'
                    },
                    {
                        title:'Sneakers',
                        id:5,
                        linkUrl:'shop/Sneakers',
                        size:'large',

imageurl:'https://www.bottic.co.za/wp-content/uploads/2019/10/ayakkabi.hani_68934022_152544499176149_303130977758612469_n.jpg'
                        }
                                                
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        default:
        return state
    }
}

export default directoryReducer;