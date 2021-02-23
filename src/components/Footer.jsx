import React from "react"

var date = new Date();

var year = date.getFullYear();


function Footer() {
    return (
        <div className="footer">
            <p>Copyright {'\u00A9'} {year}</p>
        </div>
    );
}

export default Footer;