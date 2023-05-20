import axiosClient from 'api/AxiosClient'

export const getGiftsByMember = (memberName) => axiosClient().get(`/gifts/member/${memberName}`)

export const postGift = (data) => axiosClient().post('/gifts',data)