function clearDataLayer(){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null });
}

export function sendCartAnalytics(itemsData){
    clearDataLayer();

    let itemsList = [];

    //Would loop over all items, but hard-coding for now
    itemsList.push({
        item_id: "MJUM8066-GYDZ",                   //itemsData.item_id
        item_name: "Lambswool Crew Neck Jumper",    //itemsData.item_name
        affiliation: "Google Merchandise Store",    //itemsData.affiliation
        coupon: "SUMMER_FUN",                       //itemsData.coupon
        currency: "USD",                            //itemsData.currency
        discount: 20,                               //itemsData.discount
        index: 0,                                   //itemsData.index
        item_brand: "Sunspel",                      //itemsData.brand
        item_category: "Apparel",                   //itemsData.cat1
        item_category2: "Adult",                    //itemsData.cat2
        item_category3: "Shirts",                   //..
        item_category4: "Crew",                     //..
        item_category5: "Long sleeve",              //..
        item_list_id: "related_products",           //itemsData.item_list_id
        item_list_name: "Related Products",         //itemsData.item_list_name
        item_variant: "Anthracite Melange",         //itemsData.variant ////itemsData.color
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo", //..
        price: 220,                                 //itemsData.price
        quantity: 1,                                //itemsData.qty
        size: "XS"                                  //itemsData.size
    });

    itemsList.push({
        item_id: "AMZ-00546232",
        item_name: "Amazon Basics Portable Power Bank",
        affiliation: "Amazon Store",
        coupon: "",
        currency: "USD",
        discount: 0,
        index: 0,
        item_brand: "Amazon",
        item_category: "Electronics",
        item_category2: "Acessories",
        item_category3: "Mobile",
        item_category4: "Wireless",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "10,000 mAh",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 220,
        quantity: 1,
        size: "XS"
    });

    window.dataLayer.push({
      event: "view_cart",
      ecommerce: {
        currency: "USD", //currency
        value: 200, //Sum of all prices - sum of all discounts (?) or just pull value from cart/bag
        items: itemsList
      }
    })
}

export function sendViewItem(itemData){
    clearDataLayer();
    
    window.dataLayer.push({
        event: "view_item",
        ecommerce: {
            items: [
            {
                item_id: "SKU_12345",
                item_name: itemData,
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                currency: "USD",
                discount: 2.22,
                index: 0,
                item_brand: "Google",
                item_category: "Apparel",
                item_category2: "Adult",
                item_category3: "Shirts",
                item_category4: "Crew",
                item_category5: "Short sleeve",
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: "green",
                location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                price: 9.99,
                quantity: 1
            }
            ]
        }
    });
}