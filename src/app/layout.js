'use client';

import './globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import QuickAccessMenu from '@/components/QuickAccessMenu';

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
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    )
}