import { ErrStyle } from "./form-error.styled";

export default function FormErr(props:any){
    const {message, ...restProps} = props;    
    return(
        <ErrStyle {...restProps}>
            {message}
        </ErrStyle>
    )
}