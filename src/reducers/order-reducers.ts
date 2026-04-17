import type { MenuItem, OrderItem } from "../types"

export type OrderActions = 
{ type: 'add-item', payload: {item : MenuItem}} |
{ type: 'remove-item', payload: {id : MenuItem['id']}} |
{ type: 'save-order'} |
{ type: 'add-tip', payload: {value: number}}

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer =  (
    state: OrderState = initialState,
    actions: OrderActions
) => {
    if (actions.type === 'add-item' ){
        const itemExist = state.order.find(orderItem => orderItem.id === actions.payload.item.id)
        let updateOrder : OrderItem[] = [] 
        if (itemExist) {
            updateOrder = state.order.map(orderItem => orderItem.id === actions.payload.item.id
                ? {...orderItem, quantity: orderItem.quantity +1}
                : orderItem
            )
        } else {
            const newItem : OrderItem = { ...actions.payload.item, quantity: 1}
            updateOrder = [...state.order, newItem]
        }
        return {
            ...state,
            order: updateOrder
        }
    }
    if (actions.type === 'remove-item') {
            const order = state.order.filter (item => item.id !== actions.payload.id) 
        return {
            ...state,
            order
        }
    }
    if (actions.type === 'save-order') {
        
        return {
            ...state,
            order:[],
            Tip: 0

        }
    }
    if (actions.type === 'add-tip') {
        const tip = actions.payload.value
        return {
            ...state,
            tip
        }
    }
    return state
}