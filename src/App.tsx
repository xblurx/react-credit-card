import React from 'react';
import { Box, ChakraProvider, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CardDisplay, CardForm } from 'components';
import './App.css';

export const App = () => (
    <ChakraProvider>
        {/*<Fonts />*/}
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <CardDisplay
                    logo="logo"
                    number={'2323232323233323'}
                    expires={'23.02.2077'}
                    name="AVRIL LAVIGNE"
                />
                <CardForm />
            </Grid>
        </Box>
    </ChakraProvider>
);
