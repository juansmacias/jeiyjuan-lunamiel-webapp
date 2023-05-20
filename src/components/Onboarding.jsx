import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate  } from 'react-router-dom'
import { FormProvider,useForm } from 'react-hook-form'
import { Grid, Typography, Button,Stack } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

// ------ Components -------
import OnboardingStep1 from 'components/OnboardingStep1'
import OnboardingStep2 from 'components/OnboardingStep2'
import BasicTextField from 'components/Fields/BasicTextField'

import NotFound from 'pages/NotFound'

// ------ Hook -----------
import useAuth from 'hooks/useAuth'

const STEPS_COMPONENTS = [OnboardingStep1,OnboardingStep2]

const Onboarding = () => {
    const auth = useAuth()

    if(auth.finishedOnboarding)
        return (<Navigate to="/"/>)
    
    const ActiveStepComponent = STEPS_COMPONENTS[auth.onboardingStep]
    return (<ActiveStepComponent />)
}

export default Onboarding