import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { useReducer } from "react"
import { orderReducer, initialState } from "./reducers/order-reducers"
import TipPercentageForm from "./components/TipPercentageForm"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"


function App() {
    const [state, dispatch] = useReducer (orderReducer, initialState)

    return (
        <>
            <header className="bg-cyan-600 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 gap-10 grid md:grid-cols-2 ">
                <div className="p-5">
                    <h2 className="font-black text-4xl">Menú</h2>
                    <div className="space-y-3 mt-10">
                        {menuItems.map(item =>(
                            <MenuItem
                                key={item.id}
                                item={item}
                                dispatch={dispatch}
                            />
                        ))}
                    </div>
                </div>
                <div className="border-gray-300 border-3 rounded-lg p-5 space-y-10">
                    { state.order.length === 0 
                        ? <p className="text-center font-bold text-2xl mt-10">La Orden Esta Vacía</p>
                        :
                        <>
                            <OrderContents
                                order={state.order}
                                dispatch={dispatch}
                            />

                            <TipPercentageForm
                                dispatch={dispatch}
                                tip={state.tip}
                            />

                            <OrderTotals
                                tip={state.tip}
                                order={state.order}
                                dispatch= {dispatch}
                            />
                        </>
}
                </div>

            </main>
        </>
    )
}

export default App
