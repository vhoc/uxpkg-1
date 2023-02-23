import React from "react";
import { Ring } from "./Ring";
import { ProcyonShield } from "./ProcyonShield";
import './Spinner.css';
export var Spinner = function () {
    return (React.createElement("div", { style: {
            width: 'fit-content',
            height: '53px',
            display: 'flex',
            justifyContent: 'center'
        } },
        React.createElement(Ring, { style: {
                position: 'relative',
                left: '0'
            }, className: 'animationSpin' }),
        React.createElement(ProcyonShield, { style: {
                position: 'relative',
                top: '16px',
                left: '-38px'
            } })));
};
