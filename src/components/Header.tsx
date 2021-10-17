import Image from 'next/image'
import { Flex, Box } from "@chakra-ui/layout";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'



export default function Header() {
    return (
        <Flex
            as='header'
            width='100vh'
            flex='1'
            justify='center'
            align='center'
            p='4'
            position='relative'
        >
            <Box
                position='absolute'
                left='24'
                cursor='pointer'
            >
            <MdOutlineArrowBackIosNew color='#444444' size={24} />
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