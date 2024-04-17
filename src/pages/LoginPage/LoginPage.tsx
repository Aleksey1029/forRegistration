import { AppButton } from '../../components/AppButton/AppButton'
import { AppInput } from '../../components/UI/Header/AppInput/AppInput'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.scss'
import { LoginWith } from '../../components/LoginWith/LoginWith'
import { Heading } from '../../components/Typography/AppHeading/AppHeading'
import { SCLoginPage } from './LoginStyled.styled'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SCRegistration } from './LoginStyled.styled'


interface ILoginForm {
	useremail: string
	userpassword: string
}

const loginFormSchema = yup.object({
	useremail: yup.string().required('Обязательное поле'),
	userpassword: yup
		.string()
		.required('Введите пароль')
		.min(8, 'Не менее 8 символов'),
})

export const LoginPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginFormSchema),
		defaultValues: { useremail: '', userpassword: '' },
	})

	const navigate = useNavigate()

	const onLoginSubmit: SubmitHandler<ILoginForm> = data => {
		if (data) {
			navigate("/main")
		} else {
			navigate("/")
		}
	}

	console.log(errors.useremail?.message)

	return (
		<SCLoginPage>
			<Heading headingText='Авторизация' headingType={'h1'} />
			<form onSubmit={handleSubmit(onLoginSubmit)}>
				<Controller
					name='useremail'
					control={control}
					render={({ field }) => (
						<AppInput
							isError={errors.useremail ? true : false}
							errorMessage={errors.useremail ?.message}
							type='email'
							placeholder='Ваша почта'
							{...field}
						/>
					)}
				/>

				<Controller
					name='userpassword'
					control={control}
					render={({ field }) => (
						<AppInput
							isError={errors.userpassword ? true : false}
							errorMessage={errors.userpassword?.message}
							type='password'
							placeholder='Пароль'
							{...field}
						/>
					)}
				/>
				<AppButton buttonType='submit' buttonText='Войти' />
			</form>
			<Link to='#'>Забыли пароль?</Link>
			<SCRegistration>
				<span>
					У вас нет аккаунта? <Link to='/registration'>Зарегистрироваться</Link>
				</span>
				<p>Войти с помощью</p>
				<LoginWith />
			</SCRegistration>
		</SCLoginPage>
	)
}
