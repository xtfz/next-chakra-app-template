'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

export default function ToggleColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton onClick={toggleColorMode} variant={"ghost"}>
            {
                colorMode === 'light' ?
                    <MoonIcon />
                    :
                    <SunIcon />
            }
        </IconButton>
    )
}
