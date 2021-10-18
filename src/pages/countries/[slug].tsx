import { Flex, Box, Text, Heading, HStack } from '@chakra-ui/react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import CountryCard from '../../components/CountryCard'

export default function Countries() {
    return (
        <Flex
            display='flex'
            flexDirection='column'
            width='100vw'
        >
            <Header />
            <Banner
                backgroundImage='/europe.png'
                height={500}
                showTitle
                title='Europa'

            />
            <Flex
                display='flex'
                justifyContent='center'
            >
                <Box
                    width='50%'
                    maxWidth={600}
                    p='8'
                >
                    <Text
                        textAlign='justify'
                        fontWeight='400'
                    >
                        A Europa é, por convenção, um dos seis continentes do mundo.
                        Compreendendo a península ocidental da Eurásia, a Europa geralmente
                        divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
                            50
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
                            60
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
                            27
                        </Heading>
                        <Text
                            fontWeight='700'
                            display='flex'
                        >
                            cidades + 100
                            <AiOutlineInfoCircle size={12} />
                        </Text>
                    </Box>
                </HStack>
            </Flex>
            <Heading
                paddingLeft={['2rem', '6rem']}
                fontWeight='500'
                my='8'
            >
                Cidades +100
            </Heading>
            <CountryCard />
        </Flex>
    )
}