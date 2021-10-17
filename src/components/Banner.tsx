import { Flex, Text } from "@chakra-ui/layout";

type BannerProps = {
    backgroundImage: string;
    height?: number;
}

export default function Banner({ backgroundImage, height }: BannerProps) {
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
                ml='24'
                mb='8'
                fontSize='2.24rem'
                color='white.900'
                fontWeight='500'
            >
                5 Continentes,<br /> infinitas possibilidades.
            </Text>
            <Text
                ml='24'
                mb='8'
                fontSize='1.24rem'
                color='gray.200'
            >
                Chegou a hora de tirar do papel a viagem que você< br /> sempre sonhou.
            </Text>
        </Flex>
    )
}