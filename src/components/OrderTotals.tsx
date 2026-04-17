import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { OrderActions } from "../reducers/order-reducers"

type OrderTotalProps = {
    order: OrderItem[]
    dispatch: React.ActionDispatch<[actions: OrderActions]>
    tip: number
}


export default function OrderTotals({order, dispatch, tip}: OrderTotalProps) {

    const subtotalAmount = useMemo ( () => order.reduce ((total, item) => total + (item.quantity * item.price), 0 ), [order])
    const tipAmount = useMemo (() => (subtotalAmount* tip), [tip, order])
    const totalAmount = useMemo( () => (subtotalAmount + tipAmount), [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="text-2xl font-black"> Totales y Propina:</h2>

                <p > 
                    Subtotal a Pagar: {' '}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p > 
                    Propina: {' '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p > 
                    Total a Pagar: {' '}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 text-1xl font-bold uppercase text-white mt-10 disabled:opacity-10 cursor-pointer"
                disabled={totalAmount === 0}
                onClick={() => dispatch({type: 'save-order'})}
            >
                Guardar Orden
            </button>
        </>
    )
}
