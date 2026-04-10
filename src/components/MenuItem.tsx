import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
    return (
        <>
            <button className="w-full mx-2 p-3 border-3 rounded-lg border-cyan-600 hover:bg-cyan-400 flex justify-between"
                onClick={ ()=> addItem(item)}>
                <p className="text-lg font-bold">{item.name}</p>
                <p className="text-2xl font-black">${item.price}</p>
            </button>
        </>
    )
}