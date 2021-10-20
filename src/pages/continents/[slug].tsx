import {
    Flex,
    Box,
    Text,
    Heading,
    HStack,
    useBreakpointValue,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Button
} from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import CountryCard from '../../components/CountryCard'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api'


type CityCardProps = {
    city: string;
    country_flag: string;
    city_background: string;
    country: string
}

type Continent = {
    id: number;
    continent: string;
    cover: string;
    countries: number;
    languages: number;
    cities: number;
    description: string;
    most_visited_cities: CityCardProps[];

}


type ContinentProps = {
    continent: Continent;
}

export default function Countries({ continent }: ContinentProps) {

    const wideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            display='flex'
            flexDirection='column'
            width='100vw'
        >
            <Header />
            <Banner
                backgroundImage={continent.cover}
                height={500}
                largeTitle={continent.continent}

            />
            <Flex
                display='flex'
                direction={['column', 'row']}
                justifyContent='center'
            >
                <Box
                    width={['98%', '50%']}
                    maxWidth={600}
                    p='8'
                    key={continent.id}
                >
                    <Text
                        textAlign='justify'
                        fontWeight='400'
                    >
                       {continent.description}
                    </Text>
                </Box>
                <HStack
                    p='8'
                    display='flex'
                    flex='1'
                    alignItems='center'
                    justifyContent='space-evenly'
                    maxWidth={600}
                >
                    <Box>
                        <Heading
                            color='yellow.900'
                        >
                            {continent.countries}
                        </Heading>
                        <Text
                            fontWeight='700'
                        >
                            países
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                            color='yellow.900'
                        >
                            {continent.languages}
                        </Heading>
                        <Text
                            fontWeight='700'
                        >
                            línguas
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                            color='yellow.900'
                        >
                            {continent.cities}
                        </Heading>
                        <Text
                            fontWeight='700'
                            display='flex'
                        >
                            cidades + 100
                            {wideScreen && (
                                <Popover
                                >
                                    <PopoverTrigger>
                                        <Button
                                            variant='ghost'
                                            _focus={{
                                                border: 'none',
                                                outline: 'none',
                                                background: 'trasnsparent'
                                            }}
                                        >
                                            <AiOutlineInfoCircle size={16} />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        width={['156px', '240px']}
                                    >
                                        <PopoverArrow />
                                        <PopoverBody
                                            p={['2', '4']}
                                            fontWeight='400'
                                        >
                                            Explore todas as cidades disponíveis.
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            )}
                        </Text>
                    </Box>
                </HStack>
            </Flex>
            <Flex
                display='flex'
                flexDirection='column'
                alignItems={['center', 'center', 'center', 'flex-start']}
                alignSelf='center'
                maxWidth={['88vw', '1160px']}
                minWidth='240px'
                paddingLeft={['0', '2rem', '2rem','2rem']}
            >
                <Heading
                    fontWeight='500'
                    mt='8'
                    mb='2'
                >
                    Cidades +100
                </Heading>
                <HStack
                    display='flex'
                    direction={['column', 'row']}
                    justifyContent={['center', 'center', 'center', 'flex-start']}
                    flexWrap='wrap'
                    mb='120px'
                >
                    {continent.most_visited_cities.map(city => (
                        <CountryCard
                            country={city.country}
                            city={city.city}
                            country_flag={city.country_flag}
                            city_background={city.city_background}
                            key={city.city}
                        
                        />
                    ))}
                </HStack>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
}


export const getStaticProps = async (ctx) => {

    const { slug } = ctx.params

    const { data } = await api.get<Continent>(`/continents/${slug}`)

    const continent = {
        slug: data.id,
        continent: data.continent,
        cover: data.cover,
        languages: data.languages,
        cities: data.cities,
        countries: data.countries,
        description: data.description,
        most_visited_cities: data.most_visited_cities
    }


    return {
        props: {
            continent
        }
    }
}
