import type { MenuItem } from "../types"
import type { OrderActions } from "../reducers/order-reducers"

type MenuItemProps = {
    item: MenuItem
    dispatch: React.ActionDispatch<[actions: OrderActions]>
}

export default function MenuItem({item, dispatch}: MenuItemProps) {
    return (
        <>
            <button className="w-full mx-2 p-3 border-3 rounded-lg border-cyan-600 hover:bg-cyan-400 flex justify-between"
                onClick={ ()=> dispatch({type: 'add-item', payload:  {item}})}>
                <p className="text-lg font-bold">{item.name}</p>
                <p className="text-2xl font-black">${item.price}</p>
            </button>
        </>
    )
}