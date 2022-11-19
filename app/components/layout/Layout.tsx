import React, { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'

interface ILayout {}
const Layout: FC<PropsWithChildren<ILayout>> = ({ children }) => {
	return (
		<div>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
