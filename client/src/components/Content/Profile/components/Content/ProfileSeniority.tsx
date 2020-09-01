import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"
import { ProfileFieldType } from "../type"
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
} from 'recharts';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        profile__seniority: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: theme.spacing(9),
            backgroundColor: IBM_Default_Color.white
        }
    })
);

const colors = scaleOrdinal(schemeCategory10).range();

/**
 * Характеристики
 */
const Characteristic = [
    {
        name: 'Experience', star: 5,
    },
    {
        name: 'Length', star: 4
    },
    {
        name: 'Clearance level', star: 2
    },
    {
        name: 'Quality', star: 1
    },
    {
        name: 'R/P', star: 5
    }
];

const chartStyle = {
    width: 500,
    height: 200,
    margin: {
        top: 5, right: 30, left: 20, bottom: 5
    },
    barSize: 30
}

type Props = {
    pilot: ProfileFieldType
}

export const ProfileSeniority: React.FC<Props> = ({
    pilot
}) => {
    const classes = useStyles()

    return (<div className={classes.profile__seniority}>
        <BarChart
            {...chartStyle}
            data={Characteristic}
        >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis/>
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="star" fill={IBM_Default_Color.black} background={{ fill: IBM_Default_Color.gray }} >
                {
                    Characteristic.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))
                }
            </Bar>
        </BarChart>
    </div>)
}