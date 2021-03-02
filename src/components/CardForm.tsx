import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Input,
    Spacer,
} from '@chakra-ui/react';
import { formTouchedT } from './Logic';

export type inputT = string | null;

interface PropTypes {
    handleChangeNumber: (value: inputT) => void;
    handleChangeName: (value: inputT) => void;
    setFormTouched: (value: formTouchedT) => void;
    formTouched: formTouchedT;
}
export const CardForm = (props: PropTypes) => {
    const { handleSubmit, errors, register, control, formState } = useForm({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
    });
    const watchNumber = useWatch<inputT>({
        control,
        name: 'number',
        defaultValue: null,
    });
    const watchName = useWatch<inputT>({
        control,
        name: 'name',
        defaultValue: null,
    });

    const onFormFieldFocus = () => {
        if (props.formTouched !== 'front') {
            props.setFormTouched('front');
        }
    };

    const onSubmit = (values: any) => {
        console.log(values);
    };

    const validateField = (value: string) => {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return 'Only alphanumeric characters accepted';
        }
    };

    const validateNumber = (value: string) => {
        const strippedValue = value.replace(/\s/g, '');
        if (!/^\d*$/.test(strippedValue)) {
            return 'Only digits accepted';
        } else if (strippedValue.length > 16) {
            return 'Card number must not exceed 16 digits';
        }
    };

    useEffect(() => {
        if (formState.dirtyFields.number) {
            props.handleChangeNumber(watchNumber);
        }
    }, [watchNumber]);

    useEffect(() => {
        if (formState.dirtyFields.name) {
            props.handleChangeName(watchName);
        }
    }, [watchName]);

    return (
        <Box padding="20px 70px 20px" width="500px" maxWidth="700px">
            <Box my={10} textAlign="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.number}>
                        <Input
                            variant="flushed"
                            name="number"
                            placeholder="Card number"
                            ref={register({ validate: validateNumber })}
                            focusBorderColor="#B794F4"
                            onFocus={onFormFieldFocus}
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
                            onFocus={onFormFieldFocus}
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
                                    onFocus={onFormFieldFocus}
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
