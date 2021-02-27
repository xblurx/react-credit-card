import React from 'react';
import { Box, ChakraProvider, Grid, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CardDisplay, CardForm } from 'components';
import './App.css';

export const App = () => (
    <ChakraProvider>
        {/*<Fonts />*/}
        <Flex width="full" align="center" justifyContent="center">
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <CardDisplay
                        logo="logo"
                        number={'4276 4200 3611 2430'}
                        expires={'02/2077'}
                        name="AVRIL LAVIGNE"
                    />
                    <CardForm />
                </Grid>
            </Box>
        </Flex>
    </ChakraProvider>
);
