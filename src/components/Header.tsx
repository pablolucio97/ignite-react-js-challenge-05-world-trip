import Image from 'next/image'
import { Flex, Box } from "@chakra-ui/layout";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useRouter } from 'next/router'




export default function Header() {

    const { asPath, back } = useRouter()

    return (
        <Flex
            as='header'
            width='100vw'
            flex='1'
            justify='center'
            align='center'
            p='4'
            position='relative'
        >
            <Box
                position='absolute'
                left='4%'
                cursor='pointer'
            >
                {asPath === '/' ? null : (
                    <MdOutlineArrowBackIosNew
                        color='#444444'
                        size={24}
                        onClick={() => back()}
                    />
                )}
            </Box>
            <Image
                src='/logo.svg'
                alt='logo'
                width='184'
                height='45'
            />
        </Flex>
    )
}