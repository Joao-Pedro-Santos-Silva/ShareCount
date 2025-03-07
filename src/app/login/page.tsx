import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { LoginForm } from './loginForm'

export default async function LoginPage() {
	return (
		<div className="min-h-dvh flex flex-col justify-center gap-16">
			<div className="flex flex-col gap-8 items-center md:items-start">
				<Image src={logo} alt="devstage" width={108.5} height={30} />

				<h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
					<span className="text-blue">CodeCraft</span> Login
				</h1>
			</div>

			<div className="flex gap-5 items-stretch flex-col md:flex-row">
				<LoginForm />
			</div>
		</div>
	)
}
