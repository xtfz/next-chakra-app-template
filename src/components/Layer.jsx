'use client';

import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function Layer({ children, ...rest }) {

    const mainBoxBackground = useColorModeValue('white', 'gray.700');

    return (
        <Box background={mainBoxBackground} borderRadius={'2xl'} boxShadow={'lg'} p={4} {...rest}>
            {children}
        </Box>
    )
}