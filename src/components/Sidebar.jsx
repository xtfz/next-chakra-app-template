'use client';

import React from 'react';
import {
    IconButton,
    Avatar,
    Box,
    Flex,
    HStack,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    Tooltip,
    Divider,
    ButtonGroup,
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import { Link } from '@chakra-ui/next-js';
import { useSwipeable } from 'react-swipeable';

export default function Sidebar({
    title = 'Dashboard',
    items,
    theme = 'blue',
    user,
    children,
    ...props
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Swipe Handlers
    // for opening the sidebar
    const contentSwipeHandler = useSwipeable({
        onSwipedRight: () => {
            if (isOpen === false) onOpen();
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: false
    });
    // for closing the sidebar
    const sidebarSwipeHandler = useSwipeable({
        onSwipedLeft: () => {
            if (isOpen === true) onClose();
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: false
    });

    return (
        <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')} color={useColorModeValue(`${theme}.600`, `${theme}.300`)}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                title={title}
                items={items}
                theme={theme}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
            >
                <DrawerContent {...sidebarSwipeHandler}>
                    <SidebarContent onClose={onClose} title={title} items={items} theme={theme} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} title={title} user={user} theme={theme} />
            <Box ml={{ base: 0, md: 20 }} p='8' color={useColorModeValue('black', 'white')} {...contentSwipeHandler} {...props}>
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ title, theme = 'blue', items, onClose, ...rest }) => {
    return (
        <Box
            transition='3s ease'
            bg={useColorModeValue('white', 'gray.900')}
            borderRight='1px'
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 20 }}
            pos='fixed'
            h='full'
            textAlign={'center'}
            boxShadow={'sm'}
            {...rest}>
            <NavItem key={'close-sidebar'} theme={theme} icon={<FiX />} active={false} onClick={onClose} href={'#'} display={{ base: 'flex', md: 'none' }}>
                Close
            </NavItem>
            <Divider my={2} display={{ base: 'block', md: 'none' }} />
            <ForwardBackRefresh theme={theme} />
            {items?.map((item) => (
                <NavItem key={item.name} icon={item.icon} href={item.href} active={item.active} theme={theme}>
                    {item.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, href, active, theme = 'blue', children, ...rest }) => {
    const hoverColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
    return (
        <Tooltip label={children} hasArrow placement={'auto-end'}>
            <Link href={`${href && href.includes('undefined') === true ? `#` : href}`} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} cursor={href && href.includes('undefined') === true ? 'not-allowed' : 'pointer'}>
                <Flex
                    align={{ sm: 'flex-start', md: 'center' }}
                    justify={{ sm: 'flex-start', md: 'center' }}
                    borderRadius={'md'}
                    cursor='pointer'
                    bg={active ? `${theme}.400` : 'transparent'}
                    color={active ? 'white' : 'inherit'}
                    _hover={{
                        bg: active ? `${theme}.500` : hoverColor
                    }}
                    m={2}
                    p={3}
                    textAlign={'center'}
                    {...rest}
                >
                    <HStack>
                        <Text>{icon && (<>{icon}</>)}</Text>
                        <Text display={{ base: 'block', md: 'none' }}>{children}</Text>
                    </HStack>
                </Flex>
            </Link>
        </Tooltip>
    );
};

const ForwardBackRefresh = ({ theme = 'blue' }) => {
    const historyBack = () => {
        window.history.go(-1);
    }

    const historyForward = () => {
        window.history.go(1);
    }

    return (
        <Flex
            display={{ base: 'none', md: 'flex' }}
            align={'center'}
            justify={'center'}
            borderRadius={'md'}
            bg={'transparent'}
            m={2}
            p={3}
            textAlign={'center'}
        >
            <ButtonGroup size={'sm'} colorScheme={`${theme}`} variant={'ghost'} isAttached>
                <IconButton icon={<FiChevronLeft />} onClick={historyBack} />
                <IconButton icon={<FiChevronRight />} onClick={historyForward} />
            </ButtonGroup>
        </Flex>
    )
}

const MobileNav = ({ title, theme = 'green', user = { name: null, email: null, avatar: null, userslug: null }, onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 20 }}
            px={{ base: 4, md: 4 }}
            height='20'
            alignItems='center'
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth='1px'
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'space-between' }}
            boxShadow={'sm'}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant='ghost'
                colorScheme={theme}
                aria-label='Open Sidebar'
                icon={<FiMenu size={'2em'} />}
            />

            <Text
                display={'flex'}
                fontSize='2xl'
                fontWeight='semibold'
                lineHeight={1.1}
            >
                {title || 'Dashboard'}
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <Tooltip label={user.email?.length > 0 ? `Logged in as ${user.email}` : `Login to view your profile`} placement={'auto-end'} hasArrow>
                            <MenuButton
                                py={2}
                                transition='all 0.3s'
                                _focus={{ boxShadow: 'none' }}
                                as={Link} href={user.email?.length > 0 ? `/account` : '/authenticate'}
                            >

                                <Avatar
                                    size={'sm'}
                                    src={user.avatar}
                                    background={`${theme}.500`}
                                />
                            </MenuButton>
                        </Tooltip>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};