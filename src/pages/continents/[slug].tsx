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
                showTitle
                title={continent.continent}

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
                        A Europa é, por convenção, um dos seis continentes do mundo.
                        Compreendendo a península ocidental da Eurásia, a Europa geralmente
                        divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
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
                justifyContent={['center', 'flex-start']}
                alignSelf='center'
                width={['88vw', '900px']}
                minWidth='240px'
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
                    flexWrap='wrap'
                    justifyContent='flex-start'
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
        most_visited_cities: data.most_visited_cities
    }


    return {
        props: {
            continent
        }
    }
}
