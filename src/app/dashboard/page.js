import Appbar from '@/components/AppBar';
import BorderedLayer from '@/components/BorderedLayer';
import FloatingButton from '@/components/FloatingButton';
import Layer from '@/components/Layer';
import Sidebar from '@/components/Sidebar';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FiGrid, FiHome, FiSettings, FiUser } from 'react-icons/fi';

export default function DashboardPage() {
	return (
		<>
			<Appbar
				items={[
					{ name: 'Home', icon: <FiHome />, href: '/', active: false },
					{ name: 'Dashboard', icon: <FiGrid />, href: '/dashboard', active: true },
					{ name: 'Settings', icon: <FiSettings />, href: '/settings', active: false },
					{ name: 'Account', icon: <FiUser />, href: '/account', active: false },
				]}
			/>
			<FloatingButton
				icon={<FiHome />}
				href={'/'}
			>
				Home
			</FloatingButton>
			<Sidebar
				title={'Dashboard'}
				theme={'blue'}
				items={[
					{ name: 'Home', icon: <FiHome />, href: '/', active: false },
					{ name: 'Dashboard', icon: <FiGrid />, href: '/dashboard', active: true }
				]}
			>
				<Flex direction={{ base: 'column', md: 'row' }} gap={2} p={4}>
					<Layer>
						On the left you have a Sidebar. On the top you have the Navbar with a User Menu. On the bottom right, you have the Quick Access Menu or a Floating Button.
					</Layer>
					<Layer>
						On mobile, the sidebar disappears. To open the sidebar you can click the 3-bars that appears on the navbar. Also an Appbar appears on smaller devices.
					</Layer>
					<Layer>
						On mobile, you can slide right to open the sidebar, and then inside the sidebar you can slide left to close it.
					</Layer>
				</Flex>
			</Sidebar>
		</>
	)
}
