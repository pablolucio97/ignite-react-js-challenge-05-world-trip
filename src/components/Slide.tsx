import { Slide as Slider } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Text, Box } from '@chakra-ui/react'


type SlideProps = {
    cover: string;
    continent: string;
}

type SlidesProps = {
    slides: SlideProps[];
}

export default function Slide({ slides }: SlidesProps) {


    const props = {
        indicators: i => ((<div className="indicator" key={i}></div>)),
        prevArrow:
            <div style={{
                width: "30px",
                background: 'transparent',
                color: '#FFBA08',
                cursor: 'pointer',
                marginLeft: '32px'
            }}>
                <MdOutlineArrowBackIosNew size={32} />
            </div>,
        nextArrow: <div style={{
            width: "30px",
            background: 'transparent',
            color: '#FFBA08',
            cursor: 'pointer',
            marginRight: '32px'
        }}>
            <MdOutlineArrowForwardIos size={32} />
        </div>
    }

    return (

        <Box className="slide-container"
            width={['100%', '100%']}
        >
            <Slider
                duration={5000}
                transitionDuration={500}
                infinite={true}
                {...props}
                style={{
                    marginBottom: '24px',
                }}
            >
                {slides.map((slideImage, index) => (
                    <div className="each-slide" key={index} >
                        <Box

                            height={['240px', '450px', '640px']}
                            width={['100%', '100%']}
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            marginTop='48px'
                            marginBottom='24px'
                            style=
                            {{
                                'backgroundImage': `url(${slideImage.cover})`,
                                backgroundSize: 'cover',
                                filter: 'brightness(.64)'

                            }}>
                            <Text
                                fontSize={['2rem', '2.24rem', '2.6rem']}
                                mb='4rem'
                                color='white.900'
                                fontWeight='700'
                                alignSelf='center'
                                filter='brightness(1)'
                            >
                                {slideImage.continent}
                            </Text>

                        </Box>
                    </div>
                ))}
            </Slider>
        </Box>
    )


}