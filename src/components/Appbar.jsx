'use client';

import React from 'react';
import {
    IconButton,
    Flex,
    Center,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { Link } from '@chakra-ui/next-js';

export default function Appbar({ items = [], theme = 'blue', ...props }) {
    return (
        <Flex
            display={{ base: 'flex', md: 'none' }}
            direction={'column'}
            justify={'center'}
            align={'center'}
            position={'fixed'}
            bottom={0}
            w={'full'}
            h={'fit-content'}
            p={2}
            bg={'transparent'}
        >
            <Flex
                display={{ base: 'flex', md: 'none' }}
                direction={'row'}
                justify={'space-evenly'}
                align={'center'}
                h={'40px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'lg'}
                borderTopWidth={1}
                borderTopColor={useColorModeValue('gray.200', 'gray.700')}
                rounded={'full'}
                color={useColorModeValue(`${theme}.600`, `${theme}.300`)}
                {...props}
            >
                {
                    items.map((item, index) => (
                        <div key={index}>
                            {
                                index > 3 ?
                                    null :
                                    <Flex align={'center'} justify={'center'}>
                                        <Item
                                            label={item.name}
                                            href={item.href}
                                            active={item.active === true}
                                            theme={theme}
                                        >
                                            {item.icon ?? <FiX />}
                                        </Item>
                                    </Flex>
                            }
                        </div>
                    ))
                }
            </Flex>
        </Flex>
    );
}

const Item = ({ label, href, active, theme = 'blue', children, ...props }) => {
    const hoverColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');

    return (
        <Center p={4}>
            <IconButton
                as={Link}
                bg={active ? `${theme}.400` : 'transparent'}
                color={active ? 'white' : 'inherit'}
                _hover={{
                    bg: active ? `${theme}.500` : hoverColor
                }}
                size={'sm'}
                href={href ?? '#'}
                icon={children}
                rounded={'full'}
                {...props}
            />
        </Center>
    );
};