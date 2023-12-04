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
                title='Roll for change'
                src="https://www.youtube.com/embed/GNuLLhtojv4?si=8AKxRLiAjL31djjq" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
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

      <chakra.section bgColor="#111111" h="40rem" overflow="hidden" pos="relative">
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: "2", md: "2rem" }} >
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem">
            <AspectRatio maxW='55rem' w="100%" h="100%" ratio={2}>
            <iframe
                title='Roll for change'
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GNuLLhtojv4?si=8AKxRLiAjL31djjq" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </AspectRatio>
          </Stack>
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
        </Grid>
        <Stack w="100%" justify="center" align="center" py={{ base: "4rem", md: "0rem" }} pos="absolute" bottom="4rem">
          <a href="https://www.youtube.com/watch?v=GNuLLhtojv4" target="_blank" rel="noopener noreferrer">
            <Button justifySelf="flex-end" bgColor="#FFFFFF" rounded="full" variant="primary" size="lg">Watch on YouTube</Button>
          </a>
        </Stack>
      </chakra.section>

      <chakra.section>
        <Stack py={{ base: "1rem", md: "4rem" }} px={{ base: "1rem", md: "4rem" }} direction={{ base: "column", md: "row" }} justify="space-between">
          <Heading flex="2" as="h2" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "4rem" }} fontStyle="italic" fontWeight="700" letterSpacing={{ base: "auto", md: "-0.11rem" }}>Lives in <chakra.span color="#3A76FA">Motion</chakra.span></Heading>
          <Text flex="1" fontSize={{ base: "1rem", md: "0.92rem" }} fontStyle="italic" fontWeight="600" textTransform="uppercase">intimate stories of Raw Humanity and Unexpected Twists, <chakra.span color="rgba(0, 0, 0, 0.32)">A transportation into the diverse tapestry of lives encountered during this extraordinary Journey.</chakra.span></Text>
        </Stack>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: "2", md: "2rem" }} px={{ base: "2", md: "3rem" }}>
          <a href="https://open.substack.com/pub/rollforchange/p/roll-for-change-a-journey-across?r=32fr8h&utm_campaign=post&utm_medium=web" target="_blank" rel="noopener noreferrer">
            <Stack cursor="pointer" direction="column" justify="flex-end" pos="relative" bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" transition="0.3s ease-out">
              <AspectRatio maxW='100%' h="100%" w="100%" ratio={4 / 3}>
                <Image src='https://res.cloudinary.com/dkkbsestl/image/upload/v1701722796/TONYE-1_pkyril.webp' alt='naruto' objectFit='cover' />
              </AspectRatio>
              <Stack zIndex="2" pos="absolute" bottom="0" right="0" bgColor="#F8709E" px={{ base: "1rem", md: "1.4rem" }}>
                <Heading as="h3" color="#FDE82B" fontSize={{ base: "lg", md: "3rem" }} fontStyle="italic" fontWeight="600" textAlign="center" textTransform="uppercase">Tonye</Heading>
              </Stack>
            </Stack>
          </a>
          <Stack pointerEvents="none" opacity="48%" direction="column" justify="flex-end" pos="relative" bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" transition="0.3s ease-out">
            <AspectRatio maxW='100%' h="100%" w="100%" ratio={4 / 3}>
              <Image src='https://res.cloudinary.com/dkkbsestl/image/upload/v1701697113/day-1-sodiq_tnrrbc.webp' alt='naruto' objectFit='cover' />
            </AspectRatio>
            <Stack zIndex="2" pos="absolute" bottom="0" right="0" bgColor="#F8709E" px={{ base: "1rem", md: "1.4rem" }}>
              <Heading as="h3" color="#FDE82B" fontSize={{ base: "lg", md: "3rem" }} fontStyle="italic" fontWeight="600" textAlign="center" textTransform="uppercase">Sodiq</Heading>
            </Stack>
          </Stack>
          {/* <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" /> */}
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
          <Stack bg="#663A1F" w="100%" h="28rem" mixBlendMode="luminosity" />
        </Grid>
        <Stack w="100%" justify="center" align="center" py={{ base: "4rem", md: "4rem" }}>
          <Button justifySelf="flex-end" border="1px solid #000" rounded="full" variant="primary" size="lg">Read more</Button>
        </Stack>
      </chakra.section>

      <chakra.section bgColor="#111111" py={{ base: "1rem", md: "4rem" }}>
        <Grid py={{ base: "1rem", md: "4rem" }} px={{ base: "1rem", md: "4rem" }} alignItems="center" justifyContent="space-between" templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
          <Stack spacing={{ base: "1rem", md: "2rem" }} pr={{ base: "1rem", md: "8rem" }} direction={{ base: "column", md: "column" }}>
            <Heading color="#FFFFFF" as="h2" fontFamily="Work Sans" fontSize={{ base: "2rem", md: "7rem" }} fontWeight="700" letterSpacing={{ base: "auto", md: "-0.11rem" }}>Making A Change</Heading>
            <Text color="#FFFFFF" fontSize={{ base: "1rem", md: "1.4rem" }} fontStyle="italic" fontWeight="600">The world, ever-changing, holds endless possibilities. What we witness today may change tomorrow. <chakra.span color="rgba(255, 255, 255, 0.40)">In this brief moment, let&apos;s make it awesome.</chakra.span></Text>
            <Button alignSelf="flex-start" bgColor="#FFFFFF" rounded="full" variant="primary" size="lg">Support change</Button>
          </Stack>

          <chakra.aside ml="auto">
            <Stack ml="auto">
              <Image src="/img-1.png" alt="Person" objectFit="cover" boxSize={{ base: "100%", md: 500 }} />
            </Stack>
          </chakra.aside>
        </Grid>
      </chakra.section>
    </>
  )
}

Page.Layout = Layout;
export default Page;
