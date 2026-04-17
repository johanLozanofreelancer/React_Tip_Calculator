import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import type { OrderActions } from "../reducers/order-reducers"


type OrderItemProps = {
    order: OrderItem[]
    dispatch: React.ActionDispatch<[actions: OrderActions]>
}
export default function OrderContents({order, dispatch}: OrderItemProps) {

    return (
        <div >
            <h2 className="font-black text-4xl  ">Consumo</h2>
            <div className=" space-y-3 mt-5 ">
                {order.map( item =>(
                        <div 
                            key={item.id} 
                            className="border-t-2 border-gray-300 flex justify-between p-5 last-of-type:border-b-2 last-of-type:pb-10"
                        >
                            <div>
                                <p className="te">
                                    {item.name} - {formatCurrency(item.price) }
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                                </p>
                            </div>

                            <button 
                                className="cursor-pointer bg-red-600 button-3 rounded-full w-8 h-8 font-black text-white"
                                onClick={() => dispatch({type:'remove-item',  payload: {id : item.id}})}
                            >
                                X
                            </button>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}
