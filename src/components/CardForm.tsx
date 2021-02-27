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
            return 'Please, fill all fields';
        }
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
                padding="20px 70px 20px"
                width="500px"
                maxWidth="700px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
            >
                <Box my={10} textAlign="left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.name}>
                            <Input
                                variant="flushed"
                                name="name"
                                placeholder="Имя"
                                ref={register({ validate: validateField })}
                                focusBorderColor="#B794F4"
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={6} isInvalid={errors.surname}>
                            <Input
                                variant="flushed"
                                name="surname"
                                placeholder="Фамилия"
                                ref={register({ validate: validateField })}
                                focusBorderColor="#B794F4"
                            />
                            <FormErrorMessage>
                                {errors.surname && errors.surname.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl mt={6} isInvalid={errors.email}>
                            <Input
                                variant="flushed"
                                type="email"
                                name="email"
                                placeholder="test@test.com"
                                ref={register({ validate: validateField })}
                                focusBorderColor="#B794F4"
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Button
                            colorScheme="purple"
                            variant="outline"
                            type="submit"
                            borderRadius="50px"
                            isFullWidth={true}
                            mt={10}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
};
