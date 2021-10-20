import Image from 'next/image'
import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type TripOptionContainerProps = {
    backgroundImage: string;
    tripOption: string;
    continentId: string;
}

export default function TripOptionContainer({ backgroundImage, tripOption, continentId }: TripOptionContainerProps) {

    const wideScreen = useBreakpointValue({
        bg: false,
        lg: true
    })

    const router = useRouter()

    return (
        <Box
            m='8'
            onClick={() => router.push(`/continents/${continentId}`)}
            _hover={{
                cursor:'pointer'
            }}
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