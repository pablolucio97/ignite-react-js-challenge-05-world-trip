import { Flex, Text } from "@chakra-ui/layout";

type BannerProps = {
    backgroundImage: string;
    height?: number;
    showSubtitle?: boolean;
    title?: string;
    largeTitle?: string;
}

export default function Banner({
    backgroundImage,
    height,
    showSubtitle,
    title,
    largeTitle
}: BannerProps) {



    return (
        <Flex
            width='100vw'
            height={height}
            display='flex'
            flexDirection='column'
            justify='center'
            alignItems='flex-start'
            backgroundImage={backgroundImage}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
        >

            <Text
                ml={['8', '24']}
                mb='8'
                fontSize={['1rem', '1.24rem', '1.6rem']}
                color='white.900'
                fontWeight='500'
                width={['64%', '40%']}
            >
                {title}
            </Text>

            {largeTitle && (
                <Text
                    ml={['8', '24']}
                    fontSize={['3rem', '4rem', '5rem']}
                    color='white.900'
                    fontWeight='500'
                    textShadow='2px 0 2px #FFBA08'
                    width={['64%', '40%']}
                    style={{
                        margin: 'auto'
                    }}
                    pb='4rem'
                    pl='4rem'
                    opacity='.92'
                >
                    {largeTitle}
                </Text>
            )}

            {showSubtitle && (
                <Text
                    ml={['8', '24']}
                    mb='8'
                    fontSize={['1rem', '1.24rem', '1.6rem']}
                    color='gray.200'
                    width={['64%', '40%']}
                >
                    Chegou a hora de tirar do papel a viagem que você< br /> sempre sonhou.
                </Text>
            )}
        </Flex>
    )
}