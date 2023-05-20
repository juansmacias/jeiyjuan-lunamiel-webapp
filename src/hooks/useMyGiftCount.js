import { useSelector } from "react-redux"

import {selectMyGifts} from 'reducers/myGifts'

export const useMyGiftCount = () => {
    const myGifts = useSelector(selectMyGifts)
    return myGifts.length
}