'use client';

import React from 'react';
import { Link } from '@chakra-ui/next-js';
import { IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun, FiUser, FiZap } from 'react-icons/fi';

export default function QuickAccessButton() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                position={'fixed'}
                bottom={'20px'}
                right={'20px'}
                zIndex={1}
                icon={<FiZap size={'1.5em'} />}
                size={'lg'}
                fontSize={'lg'}
                rounded={'full'}
                variant={'solid'}
                colorScheme={'blue'}
                boxShadow={'lg'}
            />
            <MenuList>
                <MenuGroup title={'Create New:'}>
                    <MenuItem as={Link} href={'/'} icon={<FiUser />}>Link</MenuItem>
                </MenuGroup>

                <MenuGroup title={'Switch Color Mode:'}>
                    <MenuItem icon={colorMode === 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode}>{colorMode === 'light' ? 'Toggle Dark' : 'Toggle Light'}</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}