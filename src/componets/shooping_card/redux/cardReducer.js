const initialState ={
    card:[]
}
export const getTotal = (card) => {
    return(
        card.reduce((amount, item) => parseInt(item.price) + amount, 0)
    )
}
export function cardReducer(state = initialState, action){
    switch(action.type){
        case "Add_Item_To_Card" :
            return{
                    ...state, card: [...state.card, action.item]
            }
        case "Remove_Item_From_Card" :
            const index = state.card.findIndex((cardItem) => cardItem.id === action.id)
            let newcard = [...state.card]
            if(index >= 0) {
                newcard.splice(index, 1)
            }
            else
            {
                console.warn("Can not delete")
            }
            return{
                ...state, card : newcard
            }
        default :
        return state    
    }
}
export default cardReducer