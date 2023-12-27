import BorderedLayer from '@/components/BorderedLayer';
import Layer from '@/components/Layer';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import { FiGrid, FiHome } from 'react-icons/fi';

export default function DashboardPage() {
	return (
		<>
			<Sidebar
				title={'This is a long long title lol'}
				theme={'blue'}
				items={[
					{ name: 'Home', icon: <FiHome />, href: '/', active: false },
					{ name: 'Dashboard', icon: <FiGrid />, href: '/dashboard', active: true }
				]}
			>
				This is your dashboard. On the left you can see the Dashboard Sidebar Items. On the top right are some default buttons and a User menu.

				<Layer mt={2}>
					This is the Layer from Layer.jsx
				</Layer>

				<BorderedLayer mt={2}>
					This is the BorderedLayer from BorderedLayer.jsx
				</BorderedLayer>

				<Layer mt={6} _hover={{ opacity: 0.5 }}>
					This is a layer with custom styling on hover (any props)
				</Layer>

			</Sidebar>
		</>
	)
}
