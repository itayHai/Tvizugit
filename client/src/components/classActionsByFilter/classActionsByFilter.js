import React from 'react'
import ClassActionCard from './classActionCard/classActionCard'
import classes from './classActionsByFilter.module.css'
import { dummyData } from '../../utils/globalConsts'

function classActionsByFilter(props) {

    
    //const [classActions, setClassActions] = useState(null)
    

    // useEffect(() => {
    //     // Get class actions from server by props.filter & props.size
    // }, [classActions])

    const arr = dummyData.slice(0, props.size)
    
    const ClassActionCards = arr.map((classAction) => {
        return <ClassActionCard key={classAction.Id} classAction={classAction} />
    })

    return (
        <div className={classes.cardsRow}>
            {ClassActionCards}
        </div>
    )
}

export default classActionsByFilter