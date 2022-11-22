
import { createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import myLogger from "../redux/middlewears/myLogger"
import logger from "redux-logger"



const store = createStore(rootReducer,applyMiddleware(logger,myLogger));

export default store;