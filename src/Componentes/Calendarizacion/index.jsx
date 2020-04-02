import React, { useState, useEffect } from 'react'
import { Column } from '../Column'
import InitialState from '../../Utils/Ambiente1.json'
import './styles.css'

export const Calendarizacion = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(InitialState)
    }, [data])

    return (
        <div className="Calendarizacion">
            {
                data.map(item => <Column {...item} key={item.id} />)
            }
        </div>
    )
} 
