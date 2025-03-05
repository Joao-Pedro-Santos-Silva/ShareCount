import Image from 'next/image'

import { Radio } from 'lucide-react'
import logo from '../../assets/logo.svg'
import { SubscriptionForm } from './subscription-form'

export default function Home() {
	return (
		<div className="min-h-dvh flex flex-col justify-center gap-16">
			<div className="flex flex-col gap-8 items-center md:items-start">
				<Image src={logo} alt="devstage" width={108.5} height={30} />

				<h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
					<span className="text-blue">CodeCraft</span> Summit 2025
				</h1>
			</div>

			<div className="flex gap-5 items-stretch flex-col md:flex-row">
				<div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="font-heading font-semibold text-gray-200 text-xl">
							Sobre o evento
						</h2>
						<span className="flex items-center gap-2 text-purple font-semibold text-xs">
							<Radio className="size-5" />
							AO VIVO
						</span>
					</div>
					<p className="text-gray-300 leading-relaxed text-sm md:text-base">
						O site é uma plataforma interativa que rastreia e exibe a quantidade
						de acessos a um link específico, permitindo que os usuários
						visualizem sua posição em um ranking de acessos. Ao fazer login,
						cada usuário pode acompanhar em tempo real quantas pessoas já
						entraram no link e onde ele se posiciona em relação aos demais.
						<br />
						<br />
						Ideal para campanhas virais, desafios ou simplesmente para
						acompanhar o engajamento de um link compartilhado, o site oferece
						uma experiência dinâmica e competitiva. 🚀
					</p>
				</div>

				<SubscriptionForm />
			</div>
		</div>
	)
}
