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
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button
} from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import CountryCard from '../../components/CountryCard'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

export default function Countries() {

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
                backgroundImage='/europe.png'
                height={500}
                showTitle
                title='Europa'

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
                    <CountryCard />
                    <CountryCard />

                </HStack>
            </Flex>
        </Flex>
    )
}