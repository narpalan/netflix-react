//import { Wrapper } from "./login.styled";
import FWrapper from "../../components/grid/grid";
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import FormErr from '../../components/form-error/form-error';
import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import { authenticated } from "../../store/user/user.selector";
import userSlice from "../../store/user/user.slice";

export default function Form(){

    const [data, setData] = useState({
        email:'',
        pswd:''
    })

    const [error, setError] = useState('')

    //useCallback persiste a função passada
    const handleChange = useCallback(        
        ({target}: any)=>{                    
            setData(prevData=>({
            ...prevData,                        
            //input alterado pelo usuário
            [target.name]: target.value
            }))                   
        },
        [setData]
    )
    
    const dispatch = useDispatch()

    const userAuthenticated = useSelector(authenticated)

    useEffect(()=>{
        console.log(userAuthenticated)
    },[userAuthenticated])


    const handleSend = useCallback(
        async ()=>{
            try{            
            const   schema = yup.object().shape({
                    email: yup.string().required().email(),
                    pswd: yup.string().required()
            })
            await schema.validate(data)
            setError('');
            dispatch(userSlice.actions.authenticated(true))


            }catch(e: any){                
                setError(e.errors[0])
                dispatch(userSlice.actions.authenticated(false))                
            }
        },[data]
    )   

    return(
        <FWrapper container alignContent='center' justifyContent='center'> 
            <Grid item xs={2}> 
                <Grid container>                                                
                    <Input type='email' name='email' placeholder="E-mail" onChange={handleChange}/>
                    <Input type='password' name='pswd' placeholder="Senha" onChange={handleChange}/>
                    <Button onClick={handleSend}>Entrar</Button>                                                                      
                    <FormErr message={error}/>
                </Grid>
            </Grid>           
        </FWrapper>

    )
}