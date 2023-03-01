import React from "react";
import { Ring } from "./Ring";
import procyonShield from '../../assets/icons/gray-logo.png';
import './Spinner.css';
export var Spinner = function () {
    return (React.createElement("div", { style: {
            width: 'fit-content',
            height: '53px',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: "url(".concat(procyonShield, ")"),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        } },
        React.createElement(Ring, { style: {
                position: 'relative'
            }, className: 'animationSpin' })));
};
