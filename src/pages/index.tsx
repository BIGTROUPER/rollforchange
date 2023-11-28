import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AspectRatio, Box, Container, Image, Heading, Stack, chakra, Button, Text, Grid } from '@chakra-ui/react'
import Layout from 'components/app.layout'
import { InlineSkate } from 'components/_icons'

const inter = Inter({ subsets: ['latin'] })

const Page = () => {
  return (
    <>

      <Container m="0" p="0" maxW="100%" h="90vh">
        <chakra.header bgColor="#000000" h="100%" overflow="hidden">
          <Stack align="center" h="100%" mt="auto">
            <Stack pos="relative" m="auto" w={{ base: "100%", md: "40%" }} justify="center" align="center" color="#ffffff">
              <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "5.75rem" }} fontStyle="italic" fontWeight="800" lineHeight={{ base: "auto", md: "93%" }} letterSpacing={{ base: "auto", md: "-0.03488rem" }}>Rolling</Heading>
              <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "5.75rem" }} fontStyle="italic" fontWeight="800" lineHeight={{ base: "auto", md: "93%" }} letterSpacing={{ base: "auto", md: "-0.03488rem" }}>for Change</Heading>
              <Box pos="absolute" mt={{ base: "1rem", md: "-7rem" }} right="1rem">
                <Image src="/inline-skate.svg" alt="inline skate" boxSize={32} />
              </Box>
            </Stack>
            <AspectRatio maxW='55rem' w="100%" ratio={2}>
              <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
              />
            </AspectRatio>
          </Stack>
        </chakra.header>
      </Container>

      <chakra.section>
        <Stack w="100%" justify="center" align="center" py={{ base: "4rem", md: "8rem" }}>
          <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "3rem" }} fontStyle="italic" fontWeight="700" letterSpacing={{ base: "auto", md: "-0.11rem" }}>Journey across Lagos.</Heading>
        </Stack>
      </chakra.section>

      <chakra.section bgColor="#111111">
        <Stack w="100%" justify="center" align="center" py={{ base: "4rem", md: "16rem" }}>
          <Button justifySelf="flex-end" bgColor="#FFFFFF" rounded="full" variant="primary" size="lg">Watch on YouTube</Button>
        </Stack>
      </chakra.section>

      <chakra.section>
        <Stack py={{ base: "1rem", md: "4rem" }} px={{ base: "1rem", md: "4rem" }} direction={{ base: "column", md: "row" }} justify="space-between">
          <Heading flex="2" as="h2" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "4rem" }} fontStyle="italic" fontWeight="700" letterSpacing={{ base: "auto", md: "-0.11rem" }}>Lives in <chakra.span color="#3A76FA">Motion</chakra.span></Heading>
          <Text flex="1" fontSize={{ base: "1rem", md: "0.92rem" }} fontStyle="italic" fontWeight="600" textTransform="uppercase">intimate stories of Raw Humanity and Unexpected Twists, <chakra.span color="rgba(0, 0, 0, 0.32)">A transportation into the diverse tapestry of lives encountered during this extraordinary Journey.</chakra.span></Text>
        </Stack>
        <Stack w="100%" justify="center" align="center" py={{ base: "4rem", md: "16rem" }}>
          <Button justifySelf="flex-end" bgColor="#FFFFFF" rounded="full" variant="primary" size="lg">Read more</Button>
        </Stack>
      </chakra.section>

      <chakra.section bgColor="#111111" >
        <Grid py={{ base: "1rem", md: "4rem" }} px={{ base: "1rem", md: "4rem" }} alignItems="center" justifyContent="space-between" templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
          <Stack spacing={{base:"1rem", md:"2rem"}} pr={{ base: "1rem", md: "8rem" }}  direction={{ base: "column", md: "column" }}>
            <Heading color="#FFFFFF" as="h2" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "7rem" }} fontWeight="700" letterSpacing={{ base: "auto", md: "-0.11rem" }}>Making A Change</Heading>
            <Text color="#FFFFFF" fontSize={{ base: "1rem", md: "1.4rem" }} fontStyle="italic" fontWeight="600">The world as we know it is capable of many things, what we see today may not be tomorrow. <chakra.span color="rgba(255, 255, 255, 0.40)">In this fleeting moment, let's make it awesome.</chakra.span></Text>
            <Button alignSelf="flex-start" bgColor="#FFFFFF" rounded="full" variant="primary" size="lg">Support change</Button>
          </Stack>

          <chakra.aside ml="auto">
            <Stack ml="auto">
              <Image src="/img-1.png" alt="Person" boxSize={500} />
            </Stack>
          </chakra.aside>
        </Grid>
      </chakra.section>
    </>
  )
}

Page.Layout = Layout;
export default Page;