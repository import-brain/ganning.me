import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { ProjectsDisplay } from '../components/ProjectsDisplay'
import { Footer } from '../components/Footer'
import { Container } from '@chakra-ui/react'
import { motion } from "framer-motion"

export default function Home() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta property="og:title" content="Projects" />
                <meta property="og:site_name" content="ganning.me" />
                <meta property="og:url" content="http://ganning.me/projects" />
                <meta property="og:description" content="Projects that I've completed over the years." />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="projects" />

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .7, delay: 0.5 }}
            >
                <Container maxW='container.xl' px="8">
                    <ProjectsDisplay />
                    <Footer />
                </Container>
            </motion.div>


        </>
    )
}
