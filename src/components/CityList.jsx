import React from 'react'
import { styled } from '@mui/material/styles'
import { Box,Paper,Stack } from '@mui/material'

import CityItem from 'components/CityItem'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CityList = () =>{
    const cities = [
        {
            "id": 1,
            "name": "Bogota, CO",
            "description": "Desc Bogota",
            "index": 1,
            "startDate": "2023-07-08T13:19:00.000Z",
            "endDate": "2023-07-09T04:12:00.000Z",
            "giftGroups": [
                {
                    "id": 1,
                    "name": "Bogota, CO-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 1
                },
                {
                    "id": 2,
                    "name": "Bogota, CO-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 1
                },
                {
                    "id": 3,
                    "name": "Bogota, CO-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 1
                },
                {
                    "id": 4,
                    "name": "Bogota, CO-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 1
                }
            ]
        },
        {
            "id": 2,
            "name": "Cancun",
            "description": "Desc Cancun",
            "index": 2,
            "startDate": "2023-07-08T17:00:00.000Z",
            "endDate": "2023-07-12T16:20:00.000Z",
            "giftGroups": [
                {
                    "id": 5,
                    "name": "Cancun-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 2
                },
                {
                    "id": 6,
                    "name": "Cancun-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 2
                },
                {
                    "id": 7,
                    "name": "Cancun-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 2
                },
                {
                    "id": 8,
                    "name": "Cancun-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 2
                }
            ]
        },
        {
            "id": 3,
            "name": "Houston, TX",
            "description": "Desc Houston",
            "index": 3,
            "startDate": "2032-07-12T20:00:00.000Z",
            "endDate": "2023-07-14T17:00:00.000Z",
            "giftGroups": [
                {
                    "id": 9,
                    "name": "Houston, TX-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 3
                },
                {
                    "id": 10,
                    "name": "Houston, TX-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 3
                },
                {
                    "id": 11,
                    "name": "Houston, TX-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 3
                },
                {
                    "id": 12,
                    "name": "Houston, TX-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 3
                }
            ]
        },
        {
            "id": 4,
            "name": "Las Vegas, AZ",
            "description": "Desc Las Vegas",
            "index": 4,
            "startDate": "2023-07-14T19:00:00.000Z",
            "endDate": "2023-07-17T13:00:00.000Z",
            "giftGroups": [
                {
                    "id": 13,
                    "name": "Las Vegas, AZ-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 4
                },
                {
                    "id": 14,
                    "name": "Las Vegas, AZ-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 4
                },
                {
                    "id": 15,
                    "name": "Las Vegas, AZ-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 4
                },
                {
                    "id": 16,
                    "name": "Las Vegas, AZ-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 4
                }
            ]
        },
        {
            "id": 5,
            "name": "Salt Lake City, ",
            "description": "Desc Salt Lake City",
            "index": 5,
            "startDate": "2023-07-17T15:00:00.000Z",
            "endDate": "2023-07-18T23:00:00.000Z",
            "giftGroups": [
                {
                    "id": 17,
                    "name": "Salt Lake City, -Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 5
                },
                {
                    "id": 18,
                    "name": "Salt Lake City, -Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 5
                },
                {
                    "id": 19,
                    "name": "Salt Lake City, -Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 5
                },
                {
                    "id": 20,
                    "name": "Salt Lake City, -Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 5
                }
            ]
        },
        {
            "id": 6,
            "name": "Parque Nacional Yellowstone, UT",
            "description": "desc Parque Nacional Yellowstone",
            "index": 6,
            "startDate": "2023-07-18T23:00:00.000Z",
            "endDate": "2023-07-22T12:00:00.000Z",
            "giftGroups": [
                {
                    "id": 21,
                    "name": "Parque Nacional Yellowstone, UT-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 6
                },
                {
                    "id": 22,
                    "name": "Parque Nacional Yellowstone, UT-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 6
                },
                {
                    "id": 23,
                    "name": "Parque Nacional Yellowstone, UT-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 6
                },
                {
                    "id": 24,
                    "name": "Parque Nacional Yellowstone, UT-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 6
                }
            ]
        },
        {
            "id": 7,
            "name": "Dallas, TX",
            "description": "desc Dallas",
            "index": 9,
            "startDate": "2023-07-22T12:00:00.000Z",
            "endDate": "2023-07-23T12:00:00.000Z",
            "giftGroups": [
                {
                    "id": 25,
                    "name": "Dallas, TX-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 7
                },
                {
                    "id": 26,
                    "name": "Dallas, TX-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 7
                },
                {
                    "id": 27,
                    "name": "Dallas, TX-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 7
                },
                {
                    "id": 28,
                    "name": "Dallas, TX-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 7
                }
            ]
        },
        {
            "id": 8,
            "name": "Austin, TX",
            "description": "Desc Austin",
            "index": 10,
            "startDate": "2023-07-24T12:00:00.000Z",
            "endDate": "2023-07-29T15:40:00.000Z",
            "giftGroups": [
                {
                    "id": 29,
                    "name": "Austin, TX-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 8
                },
                {
                    "id": 30,
                    "name": "Austin, TX-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 8
                },
                {
                    "id": 31,
                    "name": "Austin, TX-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 8
                },
                {
                    "id": 32,
                    "name": "Austin, TX-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 8
                }
            ]
        },
        {
            "id": 9,
            "name": "Casa",
            "description": "Desc bog",
            "index": 11,
            "startDate": "2023-07-29T15:40:00.000Z",
            "endDate": "2023-07-30T06:10:00.000Z",
            "giftGroups": [
                {
                    "id": 33,
                    "name": "Casa-Hospedaje",
                    "type": "ACOMODATION",
                    "numMaxGifts": 5,
                    "cityID": 9
                },
                {
                    "id": 34,
                    "name": "Casa-Transporte",
                    "type": "TRANSPORTATION",
                    "numMaxGifts": 5,
                    "cityID": 9
                },
                {
                    "id": 35,
                    "name": "Casa-Alimentacion",
                    "type": "FOOD",
                    "numMaxGifts": 5,
                    "cityID": 9
                },
                {
                    "id": 36,
                    "name": "Casa-Actividades",
                    "type": "ACTIVITIY",
                    "numMaxGifts": 15,
                    "cityID": 9
                }
            ]
        }
    ]

    return ( <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
    {cities.map((city)=>(
        <Item key={city.id}>
            <CityItem city={city}/>
        </Item>
    ))}
    </Stack>
    </Box>)
}

export default CityList