import React, { useState } from 'react'
import { userCounter } from '../hooks/userCounter'

export const ContadorConHook = () => {
    const { valor, acumular } = userCounter(0);
    return (
        <>
            <h3>Contador con Hook <small>{valor}</small> </h3>

            <button onClick={() => acumular(1)} className="btn btn-primary">
                +1
            </button>
            &nbsp;

            <button onClick={() => acumular(-1)} className="btn btn-primary">
                -1
            </button>
        </>
    )
}
