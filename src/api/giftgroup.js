import axiosClient from 'api/AxiosClient'

export const getGiftGroupById = (id) => axiosClient().get(`/giftGroups/${id}`)