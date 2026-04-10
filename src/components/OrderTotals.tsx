import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    saveOrder: () => void
    tip: number
}


export default function OrderTotals({order, saveOrder, tip}: OrderTotalProps) {

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
                onClick={saveOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
