import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'

type TripOptionContainerProps = {
    backgroundImage: string;
    tripOption: string
}

export default function TripOptionContainer({ backgroundImage, tripOption }: TripOptionContainerProps) {
    return (
        <Box
            m='8'
        >
            <Image
                width='85'
                height='85'
                src={backgroundImage}
                alt='wolrd-trip'
            />
            <Text
                fontSize='1rem'
                fontWeight='700'
                textAlign='center'
            >
                {tripOption}
            </Text>
        </Box>
    )
}