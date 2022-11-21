// get dom elements
const containerEl = document.getElementById('container');
const counterEl = document.getElementById('counter');
const addCounterEl = document.getElementById('addcounter');
const resetCounterEl = document.getElementById('resetcounter');
const resetValueEl = document.getElementById('resetvalue');


// action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADDCOUNTER ='addcounter';
const RESETCOUNTER = 'resetcounter';
const RESETVALUE = 'resetvalue';	

// initial state
const initialState =[
     {
    value: 0,
    id: 1,
},
]

// action creator
const increment = (counterId) => {

    return {
        type: INCREMENT,
        payload: {
            id:counterId,
        }
    }
}
    
const decrement = (counterId) => {
    return {
        type: DECREMENT,
        payload:{
            id: counterId,
        } 
    }
}

const addcounter=()=>{
    return {
        type: ADDCOUNTER,
    }
}

const resetcounter=()=>{
    return {
        type: RESETCOUNTER,
    }
}

const resetvalue=()=>{
    return {
        type: RESETVALUE,
    }
}

// functions
const incrementHandler=(id)=>{
    store.dispatch(increment(id))
}
const decrementHandler=(id)=>{
    store.dispatch(decrement(id))
}

// reducer function
function counterReducer(state = initialState, action) {
    
    if (action.type === INCREMENT) {
        const {id} = action.payload
        return state.map((counter)=>{
            if (counter.id ===id){
                return {
                   ...counter,
                    value: counter.value + id,
            }
        }
            else return {
                ...counter
            }
        })
    }
    if (action.type === DECREMENT) {
        const {id} =action.payload
        return state.map((counter)=>{
            if (counter.id ===id){
                return {
                    ...counter,
                    value: counter.value - id,
            }
        }
            else return {
               ...counter
            }

        })
    }
    if (action.type === ADDCOUNTER) {
    return [
        ...state,
        {
            value: 0,
            id: state.length+1,
        }
    ]
    }
    if (action.type === RESETCOUNTER) {
    return state=initialState
    }
    if (action.type === RESETVALUE) {
        const id =action.payload
        return state.map((counter)=>{
             
                return {
                        ...counter,
                         value: 0,
            }
        })
    }
    else {
        return state;
    }
}


// create store
const store = Redux.createStore(counterReducer);

// update ui
const render = () => {
    const state = store.getState();
    let innerDiv=""
    state.forEach((counter) => {
        innerDiv +=`
        <div
          class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
          <div id=${counter.id} class="text-2xl font-semibold">${counter.value}</div>
          <input  class="text-black border" value="0" type="text"/>
          <div class="flex space-x-3">
          
            <button
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick="incrementHandler(${counter.id})"
            >
              Increment
            </button>
            <button
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick="decrementHandler(${counter.id})"
            >
              Decrement
            </button>
          </div>
        </div>
        `
    })
    containerEl.innerHTML =innerDiv;
        
}
render();

store.subscribe(render);

// button lick listener

addCounterEl.addEventListener('click', () => {
    store.dispatch(addcounter())
})
resetCounterEl.addEventListener('click', () => {
    store.dispatch(resetcounter())
})
resetValueEl.addEventListener('click', () => {
    store.dispatch(resetvalue())
})