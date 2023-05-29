import React from 'react';

function Footer(props) {
    return (
        <React.StrictMode>
            <div style={footer}>
                <div>© 2023 Aidus All rights reserved</div>
            </div>
        </React.StrictMode>
    );
}

export default Footer;

//styles for footer
const footer = {
    height : "10vh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    width : "100vw",
    backgroundColor : "#263238",
    color: "white"
}