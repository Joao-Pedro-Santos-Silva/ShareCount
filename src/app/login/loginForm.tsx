'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { loginToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogIn, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { setErrorMap, z } from 'zod'

const loginSchema = z.object({
	email: z.string().email('Digite um e-mail valido'),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	})

	async function onSubscribe({ email }: LoginSchema) {
		const { subscribeId } = await loginToEvent(email)

		if (subscribeId === undefined) {
			return
		}

		router.push(`/invite/${subscribeId}`)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-2xl"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Bem vindo de volta!
				<p className="text-gray-300 leading-relaxed text-sm mt-1">
					Faça login para ver quantas pessoas acessaram seu link e descubra sua
					posição no ranking!
				</p>
			</h2>

			<div className="space-y-3">
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
				Login
				<LogIn className="size-6" />
			</Button>
		</form>
	)
}
