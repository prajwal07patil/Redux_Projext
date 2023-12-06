export function addtocard(id,title,price,image){
    return {
        type : "Add_Item_To_Card",
        item:{
            id:id,
            title:title,
            price:price,
            image:image
        }
    }
}
export function removefromcard(id){
    return {
        type : "Remove_Item_From_Card",
        id:id
    }
}