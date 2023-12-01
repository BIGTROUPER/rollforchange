import React from "react";
import { Global, css } from '@emotion/react';
import NextLink from "next/link";
import { Avatar, chakra, Image, Icon, Stack, Container, Button, Heading, FormControl, FormHelperText, FormLabel, Input, HStack, Box } from "@chakra-ui/react";
import { FiChevronLeft, FiMoreHorizontal } from "react-icons/fi";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

type AppLayoutProps = {
    children: React.ReactElement;
};

const SubscribeEmbed = () => {
    return (
      <Box
        as="iframe"
        src="https://rollforchange.substack.com/embed"
        width="580"
        height="320"
        borderWidth="1px"
        borderColor="#EEE"
        bg="white"
        allowFullScreen
      />
    );
  };

const Layout = ({ children, ...props }: AppLayoutProps) => {
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #ffffff;
                    }

                    ::selection {
                        background-color: var(--chakra-colors-purple-400);
                        color: #fff;
                    }

                    ::-webkit-scrollbar {
                        width: 0px;
                        border-radius: 20px;
                        background-color: rgba(0, 0, 0, 0.05);
                    }

                    ::-webkit-scrollbar-thumb {
                        backgroundcolor: rgba(255, 255, 255, 12%);
                    }
                `}
            />
            <chakra.nav bgColor="#000000">
                <Stack spacing={{base:"1rem", md:"auto"}} py={{ base: 4, md: 8 }} px={{ base: 4, md: 12 }} direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                    <Stack direction="row" alignItems="center" spacing={4} display={{ base: "flex", md: "flex" }}>
                        <Link href="/">
                            <Image src="/rfc_logo.svg" alt="logo" boxSize={{base:"8", md:"10"}} />
                        </Link>
                    </Stack>
                    <Stack direction="row" color="#FFFFFF" spacing={{base:"1rem", md:"4rem"}} fontStyle="italic" flexWrap="wrap">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/">Updates</Link>
                        <Link href="https://rollforchange.substack.com/">Stories</Link>
                        <Link href="https://commerce.coinbase.com/checkout/49646a0e-93a6-4100-912e-b7e06222c41d">Support</Link>
                        {/* <Link href="/">Merchandise</Link> */}
                    </Stack>
                    <Stack />
                </Stack>
            </chakra.nav>

            <Container maxW="100%" p="0" m="0">
                {children}
            </Container>

            <chakra.footer py={{ base: "1rem", md: "4rem" }}>
                <Stack w="100%" justify="center" py={{ base: "1rem", md: "4rem" }} spacing={{ base: "1rem", md: "2rem" }}>
                    <Stack align="center" justify="center">
                    <Heading as="h2">
                        <Image src="/stay_updated.svg" alt="logo" w={72} h="24px" />
                    </Heading>
                    </Stack>
                    <SubscribeEmbed />

                    <HStack fontSize={{ base: "24px", md: "24px" }} py={{ base: "1", md: "1rem" }} spacing={{ base: "1rem", md: "2rem" }} justify="center" align="center">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a>
                    </HStack>
                </Stack>
                <chakra.nav borderTop="0.5px solid rgb(238, 238, 238)">
                    <Stack py={{ base: 4, md: 4 }} px={{ base: 4, md: 12 }} direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                        <Stack direction="row" alignItems="center" spacing={4} display={{ base: "flex", md: "flex" }}>
                            <Link href="/">
                                <Image src="/rfc_logo.svg" alt="logo" boxSize={10} />
                            </Link>
                        </Stack>
                        <Stack direction="row" color="#000000" spacing={{base:"1.5rem", md: "4rem"}} fontStyle="italic" flexWrap="wrap">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/">Updates</Link>
                            <Link href="https://rollforchange.substack.com/">Stories</Link>
                            <Link href="https://commerce.coinbase.com/checkout/49646a0e-93a6-4100-912e-b7e06222c41d">Support</Link>
                            {/* <Link href="/">Merchandise</Link> */}
                        </Stack>
                        <Stack />
                    </Stack>
                </chakra.nav>
            </chakra.footer>
        </>
    );
};

export default Layout;
