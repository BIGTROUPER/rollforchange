import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { AspectRatio, Box, Container, Image, Heading, Stack, chakra, Button, Text, Grid } from '@chakra-ui/react'
import Layout from 'components/app.layout'
import { InlineSkate } from 'components/_icons'


const Page = () => {
  return (
    <Container maxW="100%" bgColor="#000000" m="0" p="0">
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)" }} w="100%" gap="2rem" py={{ base: "2rem", md: "2rem" }}>
        <chakra.header w="100%">
          <Stack w="100%" direction={{base:"column", md:"row"}} spacing={{ base: "1", md: "2rem" }}>
            <Stack pos="relative" m="auto" w={{ base: "100%", md: "100%" }} justify="center" align="center" color="#ffffff">
              <Box>
                <Image src="/roosevelt.png" alt="Roosevelt" objectFit="cover" width="100%" height="500px" />
              </Box>
              <Box pos="absolute" left={{base:"8%", md: "80%"}} bottom={{base:"0", md:"auto"}}>
                <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "3rem", md: "5.75rem" }} fontStyle="italic" fontWeight="800" textTransform="uppercase" lineHeight={{ base: "auto", md: "93%" }} letterSpacing={{ base: "auto", md: "-0.03488rem" }}>About</Heading>
              </Box>
            </Stack>
            <Stack display={{base:"none", md:"flex"}} pos="relative" m="auto" w={{ base: "100%", md: "100%" }} justify="center" align="center" color="#ffffff">
              {/* <Image src="/roosevelt.png" alt="Roosevelt" width="400px" height="400px" /> */}
            </Stack>
          </Stack>
        </chakra.header>

        <Stack px={{base:"2rem", md:"0"}} w="100%" direction={{base:"column", md:"row"}} spacing={{ base: "1rem", md: "2rem" }}>
          <chakra.aside w="100%" >
            <Stack pl={{ base: "0", md: "12rem" }}>
              <Text fontFamily="Inter" fontWeight="400" color="#FF4800" fontSize={{ base: "xs", md: "sm" }} textTransform="uppercase">BigTrouper.com</Text>
              <Heading fontFamily="Inter" color="#F7F7F7" fontWeight="500" fontSize={{ base: "1.5rem", md: "2.32425rem" }} lineHeight={{ base: "auto", md: "3rem" }}>
                Challenging the norm: Rolling for a more exciting future.
              </Heading>
            </Stack>
          </chakra.aside>

          <chakra.aside bgColor="rgba(255,255,255, 0)" color="#A1A1A1" pr={{ base: "0", md: "16rem" }} w="100%">
              <Text>
                Hi, I'm Roosevelt—the driving force behind RollForChange and the visionary curator of BIGTROUPER, crafting new futures. As a programmer, artist, and designer, I challenge norms and strive for what many consider impossible. Our present is molded by the hard work of past generations, laying the foundation for an exciting new world. My belief propels change, envisioning a future where challenges, such as homelessness, cease to exist. Together, we nurture values rooted in knowledge, confronting fears for positive change. This movement "Roll&nbsp;for Change" promises a proactive, transformative future—one that's truly worth living in.
              </Text>
          </chakra.aside>
        </Stack>
      </Grid>
    </Container>
  )
}

Page.Layout = Layout;
export default Page;
