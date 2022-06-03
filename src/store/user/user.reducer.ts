//Recebe determinado valor e altera isso no estado global.

const authenticated = (state: any, action: any)=>{
    state.authenticated = action.payload;        
}

const reducers = {
    authenticated
}

export default reducers;