import { useSelector } from "react-redux"

import { selectMyGifts } from 'reducers/myGifts'

export const useFindMyGifts = (giftGroupId) => {
    const arrMyGifts = useSelector(selectMyGifts)
    console.log('giftGroupId: ',typeof giftGroupId)
    for(let i = 0;i<arrMyGifts.length;i++){
        const g = arrMyGifts[i]
        console.log('g: ',g)
        if(g.giftGroupID === parseInt(giftGroupId))
            return g
    }

    return 
}