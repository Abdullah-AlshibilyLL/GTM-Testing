export function clearDataLayer(){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null });
}

export function sendCartAnalytics(itemData){
    let itemsList = [];

    //Would loop over all items, but hard-coding for now
    itemsList.push({
        item_id: "MJUM8066-GYDZ", //itemData.item_id
        item_name: "Lambswool Crew Neck Jumper", //itemData.item_name
        affiliation: "Google Merchandise Store", //itemData.affiliation
        coupon: "SUMMER_FUN", //itemData.coupon
        currency: "USD", //itemData.currency
        discount: 20, //itemData.discount
        index: 0, ////itemData.index
        item_brand: "Sunspel", //itemData.brand
        item_category: "Apparel", //itemData.cat1
        item_category2: "Adult", //itemData.cat2
        item_category3: "Shirts", //..
        item_category4: "Crew", //..
        item_category5: "Long sleeve", //..
        item_list_id: "related_products", //itemData.item_list_id
        item_list_name: "Related Products", //itemData.item_list_name
        item_variant: "Anthracite Melange", //itemData.variant ////itemData.color
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo", //..
        price: 220, //itemData.price
        quantity: 1, //itemData.qty
        size: "XS" //itemData.size
    });

    itemsList.push({
        item_id: "AMZ-00546232", //itemData.item_id
        item_name: "Amazon Basics Portable Power Bank", //itemData.item_name
        affiliation: "Amazon Store", //itemData.affiliation
        coupon: "", //itemData.coupon
        currency: "USD", //itemData.currency
        discount: 0, //itemData.discount
        index: 0, ////itemData.index
        item_brand: "Amazon", //itemData.brand
        item_category: "Electronics", //itemData.cat1
        item_category2: "Acessories", //itemData.cat2
        item_category3: "Mobile", //..
        item_category4: "Wireless", //..
        //item_category5: "Long sleeve", //..
        item_list_id: "related_products", //itemData.item_list_id
        item_list_name: "Related Products", //itemData.item_list_name
        item_variant: "10,000 mAh", //itemData.variant ////itemData.color
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo", //..
        price: 220, //itemData.price
        quantity: 1, //itemData.qty
        size: "XS" //itemData.size
    });


    window.dataLayer.push({
      event: "view_cart",
      ecommerce: {
        currency: "USD", //currency
        value: 200, //itemData.price - itemData.discount (?) aggregate across all items or just pull value from cart/bag
        items: itemsList
      }
    })
  }