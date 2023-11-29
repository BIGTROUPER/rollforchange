import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { AspectRatio, Box, Container, Image, Heading, Stack, chakra, Button, Text, Grid } from '@chakra-ui/react'
import Layout from 'components/app.layout'
import { InlineSkate } from 'components/_icons'


const Page = () => {
  return (
    <>
      <Container m="0" p="0" maxW="100%" h="60vh">
        <chakra.header bgColor="#000000" h="100%" overflow="hidden">
          <Stack align="center" h="100%" mt="auto">
            <Stack pos="relative" m="auto" w={{ base: "100%", md: "40%" }} justify="center" align="center" color="#ffffff">
              <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "5.75rem" }} fontStyle="italic" fontWeight="800" textTransform="uppercase" lineHeight={{ base: "auto", md: "93%" }} letterSpacing={{ base: "auto", md: "-0.03488rem" }}>About</Heading>
              <Box>
                <Image src="/roosevelt.png" alt="Roosevelt" width="400px" height="400px" />
              </Box>
            </Stack>
          </Stack>
        </chakra.header>
      </Container>

      <chakra.section>
        <Stack w="100%" justify="center" align="center" py={{ base: "4rem", md: "8rem" }}>
          <Heading as="h2" textAlign="center" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "3rem" }} fontStyle="italic" fontWeight="700" letterSpacing={{ base: "auto", md: "-0.11rem" }}>Journey across Lagos.</Heading>
        </Stack>
      </chakra.section>
    </>
  )
}

Page.Layout = Layout;
export default Page;
