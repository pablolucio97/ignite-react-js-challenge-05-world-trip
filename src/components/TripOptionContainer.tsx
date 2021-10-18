import Image from 'next/image'
import { Box, Text, useBreakpointValue } from '@chakra-ui/react'

type TripOptionContainerProps = {
    backgroundImage: string;
    tripOption: string
}

export default function TripOptionContainer({ backgroundImage, tripOption }: TripOptionContainerProps) {

    const wideScreen = useBreakpointValue({
        bg: false,
        lg: true
    })

    return (
        <Box
            m='8'
        >
            {wideScreen && (<Image
                width='85'
                height='85'
                src={backgroundImage}
                alt='wolrd-trip'
            />)}
            <Text
                fontSize='1rem'
                fontWeight='700'
                textAlign='center'
                listStyle='circle'
            >
                {tripOption}
            </Text>
        </Box>
    )
}