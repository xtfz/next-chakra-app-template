'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';

export default function BorderedLayer({ children, ...rest }) {

    return (
        <Box background={'transparent'} borderColor={'gray.500'} borderWidth={'thin'} borderRadius={'2xl'} boxShadow={'lg'} p={4} {...rest}>
            {children}
        </Box>
    )
}