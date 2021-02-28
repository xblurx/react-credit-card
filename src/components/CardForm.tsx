import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    Image,
    Input,
    InputGroup,
    Spacer,
    Text,
    useColorMode,
    useToast,
} from '@chakra-ui/react';

export const CardForm = () => {
    const { handleSubmit, errors, register, reset, formState } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (values: any) => {
        console.log(values);
    };

    const validateField = (value: any) => {
        if (!value) {
            return 'Please, fill in the field';
        }
    };

    return (
        <Box padding="20px 70px 20px" width="500px" maxWidth="700px">
            <Box my={10} textAlign="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.number}>
                        <Input
                            variant="flushed"
                            name="number"
                            placeholder="Card number"
                            ref={register({ validate: validateField })}
                            focusBorderColor="#B794F4"
                        />
                        <FormErrorMessage>
                            {errors.number && errors.number.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mt={6} isInvalid={errors.name}>
                        <Input
                            variant="flushed"
                            name="name"
                            placeholder="Cardholder name"
                            ref={register({ validate: validateField })}
                            focusBorderColor="#B794F4"
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Flex>
                        <Box w="170px" h="10">
                            <FormControl mt={6} isInvalid={errors.expiration}>
                                <Input
                                    variant="flushed"
                                    name="expiration"
                                    placeholder="Expiration date"
                                    ref={register({ validate: validateField })}
                                    focusBorderColor="#B794F4"
                                />
                                <FormErrorMessage>
                                    {errors.expiration &&
                                        errors.expiration.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Box>
                        <Spacer />
                        <Box w="170px" h="10">
                            <FormControl mt={6} isInvalid={errors.cvv}>
                                <Input
                                    variant="flushed"
                                    name="cvv"
                                    placeholder="CVV"
                                    ref={register({ validate: validateField })}
                                    focusBorderColor="#B794F4"
                                />
                                <FormErrorMessage>
                                    {errors.cvv && errors.cvv.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Spacer />
                    <Flex align="center" justifyContent="center" mt={5}>
                        <Button
                            colorScheme="purple"
                            variant="outline"
                            type="submit"
                            borderRadius="50px"
                            width="150px"
                            mt={10}
                        >
                            Submit
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
};
