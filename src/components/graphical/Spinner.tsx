import React from "react"
import { Ring } from "./Ring"
import { ProcyonShield } from "./ProcyonShield"
import './Spinner.css'

export const Spinner = () => {
    return (
        <div
            style={{
                width: 'fit-content',
                height: '53px',
                display: 'flex',
                justifyContent: 'center',
                //border: '1px solid red',
            }}
        >
            <Ring
                style={{
                    position: 'relative',
                    left: '0',
                }}
                className={'animationSpin'}
            />
            <ProcyonShield
                style={{
                    position: 'relative',
                    top: '11px',
                    left: '-38px',
                }}
            />
        </div>
    )
}