import { useSelector } from 'react-redux'
import { selectAlerts } from 'reducers/alerts'

export const useAnyErrorAlerts = () => {
    const alerts = useSelector(selectAlerts)

    for (let i = 0; i < alerts.length; i++) {
        const element = alerts[i];
        if(element.type === 'error')
            return true
    }

    return false
}