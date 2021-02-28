import React from 'react';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './App.css';
import { Logic } from 'components/Logic';

export const App = () => (
    <ChakraProvider>
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
    </ChakraProvider>
);
