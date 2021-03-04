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
import { inputT } from './interfaces';

interface PropTypes {
    handleChangeNumber: (value: inputT) => void;
    handleChangeName: (value: inputT) => void;
    handleChangeExpires: (value: inputT) => void;
    handleChangeCvv: (value: inputT) => void;
    setFormTouched: (value: formTouchedT) => void;
    formTouched: formTouchedT;
}
export const CardForm = (props: PropTypes) => {
    const { handleSubmit, errors, register, control, formState } = useForm({
        mode: 'onBlur',
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
    const watchExpires = useWatch<inputT>({
        control,
        name: 'expires',
        defaultValue: null,
    });
    const watchCvv = useWatch<inputT>({
        control,
        name: 'cvv',
        defaultValue: null,
    });

    const onFormFieldFocus = () => {
        if (props.formTouched !== 'front') {
            props.setFormTouched('front');
        }
    };
    const onCvvFieldFocus = () => {
        if (props.formTouched !== 'back') {
            props.setFormTouched('back');
        }
    };

    const onSubmit = (values: any) => {
        console.log(values);
    };

    const validateName = (value: string) => {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return 'Only alphanumeric characters accepted';
        }
    };

    const validateNumber = (value: string) => {
        const strippedValue = value.replace(/\s/g, '');
        if (!/^\d{16}$/.test(strippedValue)) {
            return 'Please, enter a valid 16-digits length card number';
        }
    };

    const validateExpires = (value: string) => {
        const pattern = /^(0[1-9]|1[1-9]|2[1-9]|3[0-1])\/(0[1-9]|1[0-2])$/;
        if (!pattern.test(value)) {
            return 'Please, enter correct expiration date';
        }
    };

    useEffect(() => {
        if (formState.dirtyFields.number) {
            props.handleChangeNumber(watchNumber);
        }
    }, [watchNumber]);

    useEffect(() => {
        if (watchName) {
            props.handleChangeName(watchName);
        } else {
            props.handleChangeName('CARDHOLDER');
        }
    }, [watchName]);

    useEffect(() => {
        if (watchExpires) {
            props.handleChangeExpires(watchExpires);
        } else {
            props.handleChangeExpires('03/77');
        }
    }, [watchExpires]);

    useEffect(() => {
        if (watchCvv) {
            props.handleChangeCvv(watchCvv);
        } else {
            props.handleChangeCvv('***');
        }
    }, [watchCvv]);

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
                            {errors.number?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mt={6} isInvalid={errors.name}>
                        <Input
                            variant="flushed"
                            name="name"
                            placeholder="Cardholder name"
                            ref={register({ validate: validateName })}
                            focusBorderColor="#B794F4"
                            onFocus={onFormFieldFocus}
                        />
                        <FormErrorMessage>
                            {errors.name?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Flex>
                        <Box w="170px" h="10">
                            <FormControl mt={6} isInvalid={errors.expires}>
                                <Input
                                    variant="flushed"
                                    name="expires"
                                    placeholder="Expiration date"
                                    ref={register({
                                        validate: validateExpires,
                                    })}
                                    focusBorderColor="#B794F4"
                                    onFocus={onFormFieldFocus}
                                />
                                <FormErrorMessage>
                                    {errors.expires?.message}
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
                                    ref={register({
                                        pattern: {
                                            value: /^\d{3}$/,
                                            message:
                                                'Please, enter 3-digit CVV',
                                        },
                                    })}
                                    focusBorderColor="#B794F4"
                                    onFocus={onCvvFieldFocus}
                                />
                                <FormErrorMessage>
                                    {errors.cvv?.message}
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
