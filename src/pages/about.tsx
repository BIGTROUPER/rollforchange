import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { AspectRatio, Box, Container, Image, Heading, Stack, chakra, Button, Text, Grid } from '@chakra-ui/react'
import Layout from 'components/app.layout'
import { InlineSkate } from 'components/_icons'


const Page = () => {
  return (
    <Container maxW="100%" bgColor="#000000" m="0" p="0">

      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)" }} w="100%" gap="2rem">
        <chakra.header w="100%">
          <Stack w="100%" direction="row" spacing={{ base: "1", md: "2rem" }}>
            <Stack pos="relative" m="auto" w={{ base: "100%", md: "100%" }} justify="center" align="center" color="#ffffff">
              <Box>
                <Image src="/roosevelt.png" alt="Roosevelt" width="100%" height="500px" />
              </Box>
              <Box pos="absolute" left="80%">
                <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "5.75rem" }} fontStyle="italic" fontWeight="800" textTransform="uppercase" lineHeight={{ base: "auto", md: "93%" }} letterSpacing={{ base: "auto", md: "-0.03488rem" }}>About</Heading>
              </Box>
            </Stack>

            <Stack pos="relative" m="auto" w={{ base: "100%", md: "100%" }} justify="center" align="center" color="#ffffff">
              {/* <Image src="/roosevelt.png" alt="Roosevelt" width="400px" height="400px" /> */}
            </Stack>
          </Stack>
        </chakra.header>

        <Stack w="100%" direction="row" spacing={{ base: "1", md: "2rem" }}>
          <chakra.aside w="100%" >
            <Stack  pl={{base:"1", md:"12rem"}}>
              <Text  fontFamily="Inter" fontWeight="400" color="#FF4800" textTransform="uppercase">BigTrouper.com</Text>
              <Heading fontFamily="Inter" color="#FFFFFF" fontWeight="500" fontSize={{base:"lg", md: "2.32425rem"}}  lineHeight={{ base: "auto", md: "3rem" }}>
                Challenging the norm: Rolling for a more exciting future.
              </Heading>
            </Stack>
          </chakra.aside>

          <chakra.aside bgColor="rgba(255,255,255, 12%)" w="100%">
            <Stack>

            </Stack>
          </chakra.aside>
        </Stack>

        {/*  */}
      </Grid>
    </Container>
  )
}

Page.Layout = Layout;
export default Page;
