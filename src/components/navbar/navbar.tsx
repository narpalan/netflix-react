import { NavbarStyled } from "./navbar.styled";
import { Link } from "react-router-dom";
const Navbar = (props:any) => {
    return (

        <NavbarStyled {...props}>
            <div>
                <li>
                    <Link to="/">Dogs</Link>
                </li>
                <li>
                    <Link to="/login">Cats</Link>
                </li>
            </div>            
        </NavbarStyled>
    );
}

export default Navbar;