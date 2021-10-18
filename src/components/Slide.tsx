import { Slide as Slider } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Text } from '@chakra-ui/react'


type SlideProps = {
    title: string;
    caption: string;
    imgUrl: string;
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

        <div className="slide-container">
            <Slider
                duration={5000}
                transitionDuration={500}
                infinite={true}
                {...props}
                indicators={true}
                style={{
                    marginBottom: '24px',
                }}
            >
                {slides.map((slideImage, index) => (
                    <div className="each-slide" key={index} >
                        <div style=
                            {{
                                'backgroundImage': `url(${slideImage.imgUrl})`,
                                height: '450px',
                                width: '100%',
                                marginTop: '48px',
                                marginBottom: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundSize: 'cover',

                            }}>
                            <Text
                                fontSize={['1rem', '1.24rem', '1.6rem']}
                                mb='4rem'
                                color='gray.200'
                                fontWeight='700'
                                mr='-12rem'
                                >
                                {slideImage.title}
                            </Text>
                            <Text
                                fontSize={['1rem', '1.24rem', '1.6rem']}
                                mt='2rem'
                                color='gray.200'
                                width='280px'
                                textAlign='center'
                            >
                                {slideImage.caption}
                            </Text>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )


}