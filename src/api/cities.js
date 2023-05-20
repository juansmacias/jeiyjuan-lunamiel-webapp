import axiosClient from 'api/AxiosClient'

export const getCities = () => axiosClient().get('/cities')