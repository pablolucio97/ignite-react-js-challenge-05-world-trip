import { Flex, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import TripOptionContainer from '../components/TripOptionContainer'

export default function Home() {
  return (
    <Flex
      display='flex'
      flexDirection='column'
      width='100vw'
    >
      <Header />

      <Flex
      >

        <Banner
          height={320}
          backgroundImage='/background.png'
        />
      </Flex>
      <Flex
        display='flex'
        justify='center'
        mt='16'
      >
        <TripOptionContainer
            backgroundImage='/museum.svg'
            backgroundImageAlt='museum'
            tripOption='clássico'
        />
        <TripOptionContainer
            backgroundImage='/earth.svg'
            backgroundImageAlt='earth'
            tripOption='e mais..'
        />
        <TripOptionContainer
            backgroundImage='/night.svg'
            backgroundImageAlt='nightlife'
            tripOption='vida noturna'
        />
        <TripOptionContainer
            backgroundImage='/beach.svg'
            backgroundImageAlt='beach'
            tripOption='praia'
        />
        <TripOptionContainer
            backgroundImage='/building.svg'
            backgroundImageAlt='building'
            tripOption='moderno'
        />

      </Flex>
    </Flex>
  )
}
