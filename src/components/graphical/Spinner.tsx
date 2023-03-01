import React from "react"
import { Ring } from "./Ring"
import procyonShield from '../../assets/icons/gray-logo.png'
import './Spinner.css'

export const Spinner = () => {
    return (
        <div
            style={{
                width: 'fit-content',
                height: '53px',
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${procyonShield})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                //border: '1px solid red',
            }}
        >
            <Ring
                style={{
                    position: 'relative',
                    //left: '0',
                }}
                className={'animationSpin'}
            />
        </div>
    )
}