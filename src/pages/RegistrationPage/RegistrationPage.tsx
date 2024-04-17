import { AppButton } from '../../components/AppButton/AppButton'
import { AppInput } from '../../components/UI/Header/AppInput/AppInput'
import { Link, useNavigate } from 'react-router-dom'
import './RegistrationPage.scss'
import { LoginWith } from '../../components/LoginWith/LoginWith'
import { Heading } from '../../components/Typography/AppHeading/AppHeading'
import { SCRegPage } from './RegistrationStyled.styled'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface IRegForm {
	useremail: string
	userpassword: string
	username: string
	usercity: string
	usernum: string
}

const regFormSchema = yup.object({
	useremail: yup.string().required('Обязательное поле'),
	username: yup.string().required('Обязательное поле'),
	usercity: yup.string().required('Обязательное поле'),
	usernum: yup.string().required('Обязательное поле'),
	usertel: yup.string().required('Обязательное поле'),
	userpassword: yup
		.string()
		.required('Введите пароль')
		.min(8, 'Не менее 8 символов'),
})

export const RegistrationPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(regFormSchema),
		defaultValues: {
			useremail: '',
			userpassword: '',
			username: '',
			usercity: '',
			usernum: '',
			usertel: '',
		},
	})


	const navigate = useNavigate()

	const onRegSubmit: SubmitHandler<IRegForm> = data => {
		if (data) {
			navigate('/main')
		} else {
			navigate('/')
		}
	}

	return (
		<SCRegPage>
				<Heading headingText='Регистрация' headingType='h1' />
				<form onSubmit={handleSubmit(onRegSubmit)}>
					<Controller
						name='username'
						control={control}
						render={({ field }) => (
							<AppInput
								type='string'
								placeholder='Ваше имя'
								isError={errors.username ? true : false}
								errorMessage={errors.username?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='usercity'
						control={control}
						render={({ field }) => (
							<AppInput
								type='string'
								placeholder='Ваш город'
								isError={errors.usercity ? true : false}
								errorMessage={errors.usercity?.message}
								{...field}
							/>
						)}
					/>

					<Controller
						name='usernum'
						control={control}
						render={({ field }) => (
							<AppInput
								type='number'
								placeholder='Ваш возраст'
								isError={errors.usernum ? true : false}
								errorMessage={errors.usernum?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='useremail'
						control={control}
						render={({ field }) => (
							<AppInput
								type='email'
								placeholder='Ваш Email'
								isError={errors.useremail ? true : false}
								errorMessage={errors.useremail?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='usertel'
						control={control}
						render={({ field }) => (
							<AppInput
								type='tel'
								placeholder='Ваш номер телефона'
								isError={errors.usertel ? true : false}
								errorMessage={errors.usertel?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='userpassword'
						control={control}
						render={({ field }) => (
							<AppInput
								type='password'
								placeholder='Пароль'
								isError={errors.userpassword ? true : false}
								errorMessage={errors.userpassword?.message}
								{...field}
							/>
						)}
					/>

					<AppButton buttonType='submit' buttonText='Зарегистрироваться' />
				</form>
				<div className='registration'>
					<span>
						Уже есть аккаунта? <Link to='/'>Войти</Link>
					</span>
					<p>Зарегистрироваться с помощью:</p>
					<LoginWith />
				</div>
		</SCRegPage>
	)
}
