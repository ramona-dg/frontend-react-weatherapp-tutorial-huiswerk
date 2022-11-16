import React, {useContext, useState, useEffect } from 'react';
import './MetricSlider.css';
import {TempContext} from "../../context/TempContextProvider";

const MetricSlider = () => {
    const [checked, toggleChecked] = useState(true);
    const { toggleTemp } = useContext(TempContext);

    useEffect(() => {
        toggleTemp();
    }, [checked]);

    return (
        <input
            type="checkbox"
            className="switch"
            id="metric-system"
            checked={checked}
            onChange={() => toggleChecked(!checked)}
        />
    );
}

export default MetricSlider;
