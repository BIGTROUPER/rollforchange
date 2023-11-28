import React from "react";
import { Global, css } from '@emotion/react';
import NextLink from "next/link";
import { Avatar, chakra, Image, Icon, Stack, Container, Button, Heading, FormControl, FormHelperText, FormLabel, Input, HStack } from "@chakra-ui/react";
import { FiChevronLeft, FiMoreHorizontal } from "react-icons/fi";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

type AppLayoutProps = {
    children: React.ReactElement;
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
                <Stack py={{ base: 2, md: 8 }} px={{ base: 2, md: 12 }} direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={4} display={{ base: "none", md: "flex" }}>
                        <Link href="/">
                            <Image src="/rfc_logo.svg" alt="logo" boxSize={10} />
                        </Link>
                    </Stack>
                    <Stack direction="row" color="#FFFFFF" spacing="4rem" fontStyle="italic">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Updates</Link>
                        <Link href="/">Stories</Link>
                        <Link href="/">Support</Link>
                        <Link href="/">Merchandise</Link>
                    </Stack>
                    <Stack />
                </Stack>
            </chakra.nav>

            <Container maxW="100%" p="0" m="0">
                {children}
            </Container>

            <chakra.footer py={{ base: "1rem", md: "4rem" }}>
                <Stack w="100%" align="center" justify="center" py={{ base: "1rem", md: "4rem" }} spacing={{ base: "1rem", md: "2rem" }}>
                    <Heading as="h2">
                        <Image src="/stay_updated.svg" alt="logo" w={72} h="24px" />
                    </Heading>
                    <Stack direction="row" align="center">
                        <FormControl>
                            <Input type="email" placeholder="Email" rounded="14px" h="58px" />
                        </FormControl>
                        <Button
                            bgColor="#000000"
                            color="#FFFFFF"
                            type="submit"
                            variant="primary"
                            size="lg"
                            rounded="14px"
                            fontSize="16px"
                            fontWeight="400"
                            px={{ base: "1rem", md: "3rem" }}
                            h="58px"
                        >
                            Subscribe
                        </Button>
                    </Stack>

                    <HStack fontSize={{ base: "24px", md: "24px" }} py={{ base: "1", md: "1rem" }} spacing={{ base: "1rem", md: "2rem" }} align="center">
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
                <chakra.nav borderTop="0.5px solid rgba(0, 0, 0, 12%)">
                    <Stack py={{ base: 2, md: 4 }} px={{ base: 2, md: 12 }} direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" alignItems="center" spacing={4} display={{ base: "none", md: "flex" }}>
                            <Link href="/">
                                <Image src="/rfc_logo.svg" alt="logo" boxSize={10} />
                            </Link>
                        </Stack>
                        <Stack direction="row" color="#000000" spacing="4rem" fontStyle="italic">
                            <Link href="/">Home</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Updates</Link>
                            <Link href="/">Stories</Link>
                            <Link href="/">Support</Link>
                            <Link href="/">Merchandise</Link>
                        </Stack>
                        <Stack />
                    </Stack>
                </chakra.nav>
            </chakra.footer>
        </>
    );
};

export default Layout;
