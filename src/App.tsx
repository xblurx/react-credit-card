import * as React from 'react';
import { Box, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './App.css';
import { Logic } from 'components/Logic';

export const App = () => (
    <ChakraProvider>
        <Container maxW="container.xl" p="0">
            <Box textAlign="right" mr={6}>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
            <Flex
                width="full"
                direction="column"
                align="center"
                justifyContent="center"
            >
                <Logic />
            </Flex>
        </Container>
    </ChakraProvider>
);
