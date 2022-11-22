import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DynamicCounter from "./components/DynamicCounter";
import HooksCounter from "./components/HooksCounter";
import VariableCounter from "./components/VariableCounter";
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>

        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application 2.9
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                <HooksCounter />
                <DynamicCounter />
                <VariableCounter dynamic />
                <VariableCounter />
            </div>
        </div>
        </Provider>
    );
}
