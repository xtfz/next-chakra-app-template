'use client';

import QuickAccessButton from '@/components/QuickAccessButton';
import './globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    components: {
        Input: {
            defaultProps: {
                focusBorderColor: 'blue.500'
            }
        },
        Textarea: {
            defaultProps: {
                focusBorderColor: 'blue.500'
            }
        },
        Button: {
            baseStyle: {
                fontFamily: 'system-ui, sans-serif'
            }
        },
        Link: {
            baseStyle: {
                '&:hover': { textDecoration: 'none' },
            },
        },
    }
});

export default function RootLayout({
    children,
}) {
    return (
        <html lang='en'>
            <head />
            <body>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        {children}
                        <QuickAccessButton />
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    )
}