import { Store } from 'store/store/store.type';

export const tokenSelector = (state:Store) => state.user.data.token;

export const errorSelector = (state: Store) => state.user.error;

/*
export const authenticated =  (state:any) => {
    //altera a referencia de state.user.authenticated
    const isLogged = !state.user.authenticated
    return isLogged
}
*/

/* Exemplo de diferente estilo de memorização/referenciação
export const products = (state:any)=> state.cart.products
export const listProducts = createSelector(
    [products],
    (p:string[]) => {
        p.map(name=>({name}))
    }
)
*/
