import React from 'react'
import { Stack } from '@mui/material'

import { useSelector } from 'react-redux'

// --- Components -----
import AutoHideAlert from 'components/AutoHideAlert'

// ------ Selectors -------
 import { selectAlerts } from 'reducers/alerts'

const Notifications = () => {
  const alerts = useSelector(selectAlerts)

  return (
    <Stack sx={{ width: '100%',p:5 }} spacing={2}>
    {alerts.map(a=>(
        <AutoHideAlert key={a.id} id={a.id} message={a.message} severity={a.type} autoHideDuration={a.duration} />
    ))}
    </Stack>
  )
}

export default Notifications