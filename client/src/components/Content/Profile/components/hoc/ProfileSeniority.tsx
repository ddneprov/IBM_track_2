import React from "react"
import { ProfileFieldType } from "../type"
import { Chart } from "../../../../../common/Chart";

/**
 * Характеристики
 */
const characteristic = [
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

type Props = {
    pilot: ProfileFieldType
}

export const ProfileSeniority: React.FC<Props> = ({
    pilot
}) => {

    return (<Chart pilot={pilot}
                   characteristic={characteristic}/>)
}