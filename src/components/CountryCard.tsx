
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
            style={{
                margin: '12px'
            }}
        >
            {/* eslint-disable-next-line*/}
            <img
                src={city_background}
                width='256px'
                alt='world-trip'
                style={{
                    maxHeight: '173px',
                    minHeight: '173px'
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
                        mb='-2px'
                    >
                        {city}
                    </Heading>
                    <Text
                        m='4px'
                        color='gray.300'
                        fontFamily='Barlow'
                        textAlign='center'
                        width='120px'
                        mb='4px'
                    >
                        {country}
                    </Text>
                </VStack>
                <Box
                    borderRadius='50px'
                    borderWidth='1px'
                    borderColor='gray.200'
                >
                    {/*eslint-disable-next-line*/}
                    <img
                        src={country_flag}
                        alt='world-trip'
                        style={{
                            borderRadius: '50%',
                            height: '32px',
                            width: '32px',
                            maxHeight: '32px',
                            minHeight: '32px',
                            objectFit:'cover'
                        }}
                    />
                </Box>
            </HStack>
        </Box>
    )
}