import React from 'react';
import { Box, ChakraProvider, Grid, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CardDisplay, CardForm } from 'components';
import './App.css';

export const App = () => (
    <ChakraProvider>
        <Box textAlign="right" mr={6}>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
        <Flex width="full" direction='column' align="center" justifyContent="center">
            <CardDisplay
                logo="logo"
                number={'4276 4200 3611 2430'}
                expires={'02/77'}
                name="AVRIL LAVIGNE"
            />
            <CardForm />
        </Flex>
    </ChakraProvider>
);
