import React from 'react'
import ClassActionCard from './classActionCard/classActionCard'
import classes from './classActionsByFilter.module.css'

function classActionsByFilter(props) {

    const classActions = [
        {
            name: "טלי נ' טום לנגר",
            participants: 50000,
            chance: '50%'
        },
        {
            name: "טלי נ' האנושות",
            participants: 50000,
            chance: '2%'
        },
        {
            name: "טלי נ' הנאצים",
            participants: 50000,
            chance: '65%'
        },
        {
            name: "טלי נ' תאנוס",
            participants: 50000,
            chance: '25%'
        },
        {
            name: "טלי נ' תאנוס - סוף המשחק",
            participants: 50000,
            chance: '30%'
        },
    ]
    //const [classActions, setClassActions] = useState(null)
    

    // useEffect(() => {
    //     // Get class actions from server by props.filter & props.size
    // }, [classActions])

    const arr = classActions.slice(0, props.size)
    
    const ClassActionCards = arr.map((classAction) => {
        return <ClassActionCard key={classAction.name} classAction={classAction} />
    })

    return (
        <div className={classes.cardsRow}>
            {ClassActionCards}
        </div>
    )
}

export default classActionsByFilter