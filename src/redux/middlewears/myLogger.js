import rootReducer from "../rootReducer";


const myLogger=(store)=>(next)=>(action)=>{
    console.log(`ACTION : ${JSON.stringify(action)}`);
    console.log(`BEFORE : ${JSON.stringify(store.getState())}`);
    const upcommingState=[action].reduce(rootReducer,store.getState()); 
    console.log(`UPCOMMING STATE: ${JSON.stringify(upcommingState)}`)
    return next(action);
}
export default myLogger;