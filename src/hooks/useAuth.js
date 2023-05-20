import { useSelector,useDispatch } from 'react-redux'
import { selectMemberName,selectOnboardingStep,clearMemberName } from 'reducers/user'

const useAuth = () =>{
    const dispatch = useDispatch()
    const memberName = useSelector(selectMemberName)
    const onboardingStep = useSelector(selectOnboardingStep)
    
    if(onboardingStep>1&&memberName!=='N/A')
        return {memberName,onboardingStep,finishedOnboarding:true}
    else if (onboardingStep>1&&memberName==='N/A'){
        dispatch(clearMemberName())
    }

    return {memberName,onboardingStep,finishedOnboarding:false}
}

export default useAuth