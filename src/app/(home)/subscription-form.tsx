'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, LogIn, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
	name: z.string().min(2, 'Digite seu nome completo'),
	email: z.string().email('Digite um e-mail valido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
	const router = useRouter()
	const searchParams = typeof window !== 'undefined' ? useSearchParams() : null

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionSchema),
	})

	async function onSubscribe({ name, email }: SubscriptionSchema) {
		const referrer = searchParams?.get('referrer')

		const { subscribeId } = await subscribeToEvent({
			name,
			email,
			referrer,
		})

		router.push(`/invite/${subscribeId}`)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>

			<div className="space-y-3">
				<div className="space-y-2">
					<InputRoot error={!!errors?.name}>
						<InputIcon>
							<User className="size-6" />
						</InputIcon>
						<InputField
							type="text"
							placeholder="Nome completo"
							{...register('name')}
						/>
					</InputRoot>

					{errors?.name && (
						<p className="text-danger font-semibold text-xs">
							{errors.name.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<InputRoot error={!!errors?.email}>
						<InputIcon>
							<Mail className="size-6" />
						</InputIcon>
						<InputField
							type="text"
							placeholder="E-mail"
							{...register('email')}
						/>
					</InputRoot>

					{errors?.email && (
						<p className="text-danger font-semibold text-xs">
							{errors.email.message}
						</p>
					)}
				</div>
			</div>

			<Button type="submit">
				Confirmar
				<ArrowRight className="size-6" />
			</Button>

			<Button type="button" onClick={() => router.push('/login')}>
				Login
				<LogIn className="size-6" />
			</Button>
		</form>
	)
}
