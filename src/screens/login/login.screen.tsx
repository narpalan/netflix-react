//import { Wrapper } from "./login.styled";
import FWrapper from "../../components/grid/grid";
import Button from "../../components/button/button";
import Input from '../../components/input/input';
import FormErr from '../../components/form-error/form-error';
import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import * as yup from 'yup';

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


    const handleSend = useCallback(
        async ()=>{
            try{
            //console.log(data);
            const   schema = yup.object().shape({
                    email: yup.string().required().email(),
                    pswd: yup.string().required()
            })
            await schema.validate(data)
            setError('');

            }catch(e: any){
                //console.log(e.errors);
                setError(e.errors[0])                
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