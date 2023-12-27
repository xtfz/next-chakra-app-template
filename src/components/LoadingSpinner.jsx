'use client';

import { Center, Spinner } from '@chakra-ui/react';
import React from 'react'

export default function LoadingSpinner({ ...props }) {
    return (
        <Center h={'md'} w={'full'} >
            <Spinner size={'lg'} {...props} />
        </Center>
    )
}