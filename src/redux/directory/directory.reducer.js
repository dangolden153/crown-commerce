const INITIAL_STATE = {
    section :[
        {
        title:'hats', 
        id:1,
        linkUrl:'shop/hats',
    imageurl:'https://www.irishtweeds.com/image/cache/data/aHatman%20Aussie/Wax-Hat-Aussie-Style---Back-600x600.jpg'
     },
        {
            title:'Caps',
            id:2,
            linkUrl:'shop/caps',
            imageurl:'https://sw25045.smartweb-static.com/upload_dir/shop/DSC07422.jpg'
            },
            {
                title:'Shoes',
                id:3,
                linkUrl:'shop/shoes',
                imageurl:'https://images.yaoota.com/cdXjXlsU59mtJ_DWlx8Jy85-bZs=/trim/yaootaweb-production-ng/media/crawledproductimages/0d74dc3c9eeb9f6de62fed0bcf53ba2fdf30bbeb.jpg'
                },
                {
                    title:'jackets',
                    id:4,
                    linkUrl:'shop/jackets',
                    size:'large',
imageurl:'https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/59079119_424355028383608_608704686702198784_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeFYafK1ojwmU0bAk1T5T3lOG222qoShExkbbbaqhKETGUNAF71U6RNiPB6MEP3sGo9IL-R3X-meH6AYc9SrL7-o&_nc_oc=AQkjOyEICWjVAt_CUbu9yPPeRdK9AaT6F_V3sDKwY32Dnp5ol-t5XY-3ZRY2flG2cyg&_nc_ht=scontent.flos2-1.fna&oh=fcee5219af299a8c292edc8d5f94f90f&oe=5ED43804'
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