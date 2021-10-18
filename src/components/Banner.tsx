import { Flex, Text } from "@chakra-ui/layout";

type BannerProps = {
    backgroundImage: string;
    height?: number;
    showTitle?: boolean;
    showSubtitle?: boolean;
    title?: string
}

export default function Banner({
    backgroundImage,
    height,
    showTitle,
    showSubtitle,
    title
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
            {showTitle && (
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