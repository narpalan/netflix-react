//import { createSelector } from "@reduxjs/toolkit";

export const authenticated = (state:any) => state.user.authenticated;

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