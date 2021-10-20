import { Flex, Text, Box, Divider, useBreakpointValue } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import TripOptionContainer from '../components/TripOptionContainer'
import Slide from '../components/Slide'

type Continent = {
  continent: string;
  cover: string;
  slug: number;
  label: string;
  img: string;
}

type Continents = {
  continents: Continent[]
}

export default function Home({ continents } : Continents) {

  const wideScreen = useBreakpointValue({
    bg: false,
    lg: true
  })

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
          showSubtitle
          title='5 Continentes, infinitas possibilidades.'
        />
      </Flex>
      <Flex
        display='flex'
        direction={['column', 'row']}
        justify='center'
        mt='16'
        position='relative'
        flexWrap='wrap'
      >
        {wideScreen && (
          /*eslint-disable-next-line*/
          <img
            width='420'
            height='270'
            src='/airplane.svg'
            alt='worldtrip'
            style={{
              position: 'absolute',
              top: '-320px',
              right: '10%'
            }}
          />
        )}

        {continents.map(continent => (
          <TripOptionContainer
            key={continent.slug}
            backgroundImage={continent.img}
            tripOption={continent.label}
            continentId={String(continent.slug)}
          />
        ))}

      </Flex>
      <Divider
        bg='gray.900'
        width='80px'
        height='2px'
        my='1.24rem'
        alignSelf='center'
      />
      <Box
        display='flex'
        width='100vw'
        flexDirection='column'
        justify='center'
        alignItems='center'
        height={['100px', '120px']}
        py='2rem'
      >
        <Text
          fontSize={['1.12rem', '1.6rem']}
          fontWeight='500'
        >
          Vamos nessa?
        </Text>

        <Text
          fontSize={['1.12rem', '1.6rem']}
          fontWeight='500'
        >
          Então escolha seu continente
        </Text>
      </Box>
      <Slide
        slides={continents}
      />
    </Flex>
  )
}

export const getStaticProps = async () => {

  const data = await fetch('http://localhost:3333/continents')
  const response = await data.json()
 
  const continents = response.map(continent => {
    return {
      continent: continent.continent,
      cover: continent.cover,
      slug: continent.id,
      label: continent.label,
      img: continent.img

    }
  })

  return {
    props: {
      continents
    }
  }
}
