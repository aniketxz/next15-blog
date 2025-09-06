'use client'

import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import {
	LoginLink,
	LogoutLink,
	RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

const Navbar = () => {
	const { getUser } = useKindeBrowserClient()
	const user = getUser()

	return (
		<nav className='py-5 flex items-center justify-between'>
			<div className='flex items-center gap-6'>
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Blog<span className='text-blue-500'>King</span>
					</h1>
				</Link>

				<div className='hidden sm:flex items-center gap-6'>
					<Link
						href='/'
						className='text-base font-medium hover:text-blue-500 transition-colors'
					>
						Home
					</Link>
					<Link
						href='/dashboard'
						className='text-base font-medium hover:text-blue-500 transition-colors'
					>
						Dashboard
					</Link>
				</div>
			</div>

			{user ? (
				<div className='flex items-center gap-4'>
					<p className='font-semibold'>{user.given_name}</p>
					<LogoutLink className={buttonVariants({ variant: 'secondary' })}>
						Logout
					</LogoutLink>
				</div>
			) : (
				<div className='flex items-center gap-4'>
					<LoginLink className={buttonVariants()}>Login</LoginLink>
					<RegisterLink className={buttonVariants({ variant: 'secondary' })}>
						Sign Up
					</RegisterLink>
				</div>
			)}
		</nav>
	)
}

export default Navbar
