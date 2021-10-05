import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return ( 
        <div className="footer">
            <p>Copyright &copy; 2021 Library App | {props.book.title}</p>
        </div>
     );
}
 
export default Footer;