import { useState } from 'react';
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { RiMenu3Line } from 'react-icons/ri';
import Menu from './Menu/Menu';

const StyledHeader = styled.div`
    height: 60px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: white;
    z-index: 10;
    #logo {
        background-image: url(${logo});
        background-size: cover;
        height: 35%;
        width: 45%;
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        filter: brightness(0) invert(1);
        z-index: 100;
    }
`
const Header = () => {
    const [open, setOpen] = useState(false)
return (
<StyledHeader>
    <div id="logo">
    </div>
    <RiMenu3Line onClick={() => setOpen(!open)} />
    <Menu open={open} close={() => setOpen(false)} />
</StyledHeader>
)
}
export default Header