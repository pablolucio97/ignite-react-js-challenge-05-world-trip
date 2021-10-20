
import { Box, Text, Heading, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'

type CityCardProps = {
    city: string;
    country_flag: string;
    city_background: string;
    country: string
}




export default function CountryCard({
    city,
    city_background,
    country,
    country_flag
}: CityCardProps) {
    return (
        <Box
            borderRadius='2px'
            width='256px'
            height='280px'
            boxShadow='0 0 2px 1px #FFBA08'
            m='16px'
        >
            <img
                src={city_background}
                width='256px'
                height='173px'
                alt='world-trip'
                style={{
                    maxHeight:'173px'
                }}
            />
            <HStack
                display='flex'
                justifyContent='space-between'
                paddingRight='8'
            >
                <VStack
                    display='flex'
                    justifyContent='space-between'

                >
                    <Heading
                        fontWeight='500'
                        fontSize='1.24rem'
                        fontFamily='Barlow'
                        m='4'
                        pl='2'
                    >
                        {city}
                    </Heading>
                    <Text
                        mb='4'
                        color='gray.300'
                        fontFamily='Barlow'
                    >
                        {country}
                    </Text>
                </VStack>
                <Box
                    borderRadius='50px'
                >
                    {/*eslint-disable-next-line*/}
                    <img
                        src={country_flag}
                        alt='world-trip'
                        style={{
                            borderRadius: '50%',
                            height: '32px',
                            width: '32px'
                        }}
                    />
                </Box>
            </HStack>

        </Box>
    )
}