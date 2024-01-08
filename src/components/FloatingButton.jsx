'use client';

import React from 'react';
import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';

export default function FloatingButton({ href, icon, theme = 'blue', children, ...props }) {
    return (
        <Button
            as={Link}
            href={href ?? '#'}
            position={'fixed'}
            bottom={{ base: '55px', md: '20px' }}
            right={{base: '10px', md: '20px' }}
            zIndex={1}
            leftIcon={icon}
            size={{ base: 'sm', md: 'md' }}
            fontSize={'md'}
            rounded={'full'}
            variant={'solid'}
            colorScheme={theme}
            boxShadow={'lg'}
        >
            {children}
        </Button>
    )
}