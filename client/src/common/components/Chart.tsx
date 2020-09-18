import React from "react"

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
} from 'recharts';
import { IBM_Default_Color } from "../../base/types/ColorBase";

const chartStyle = {
    width: 300,
    height: 200,
    margin: {
        top: 5, right: 30, left: 20, bottom: 5
    },
    barSize: 30
}

type Props = {
    characteristic: readonly object[] | undefined,
    classes: string
}


export const Chart: React.FC<Props> = ({
    characteristic,
    classes
}) => {

    return (<BarChart
        {...chartStyle}
        data={characteristic}
        className={classes}
    >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="star" fill={IBM_Default_Color.black} background={{ fill: IBM_Default_Color.gray }} >
            {
                characteristic?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={IBM_Default_Color.blue} />
                ))
            }
        </Bar>
    </BarChart>)
}