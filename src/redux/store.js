
import { createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";


const myLogger=(store)=>(next)=>(action)=>{
    console.log(`ACTION : ${JSON.stringify(action)}`);
    console.log(`BEFORE : ${JSON.stringify(store.getState())}`);
    return next(action);
}


const store = createStore(rootReducer,applyMiddleware(myLogger))

export default store;