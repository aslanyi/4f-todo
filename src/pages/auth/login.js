import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUserWithEmail } from '@redux/actions';
import { useForm } from 'react-hook-form';

import { DescriptionText, InputContainer, Button, ForgetPasswordText, RegisterTextContainer, Container, ErrorText } from '@styles/auth/login/styled';
import Input from '@components/Input';
import Checkbox from '@components/Checkbox';
import AuthLayout from '@components/Layouts/AuthLayout';
import { persistTypes } from '@firebase/index';

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error.message);
    const user = useSelector((state) => state.user);
    const router = useRouter();

    const [isRememberMe, setIsRememberMe] = useState(false);

    const { register, handleSubmit, errors, clearError, watch } = useForm();
    const onSubmit = async ({ email, password }) => {
        const persistType = isRememberMe ? persistTypes.LOCAL : persistTypes.SESSION;
        await dispatch(loginUserWithEmail(email, password, router, persistType));
    };

    watch();

    if (user && user.auth) {
        router.push('/');
        return null;
    }

    const handleRememberMe = () => {
        setIsRememberMe(!isRememberMe);
    };

    return (
        <AuthLayout>
            <Container flexDirection={'column'} alignItems={'center'}>
                <DescriptionText>İşten eğlenceye her konuda odaklanın. Hemen Başlayın</DescriptionText>
                {error && <ErrorText>{error}</ErrorText>}
                <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <Input type="email" isValid={!errors.email} name="email" placeholder="E-posta giriniz" register={register} required />
                        {errors.email && <ErrorText>Email giriniz</ErrorText>}
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" isValid={!errors.password} name="password" placeholder="*******" register={register} required />
                        {errors.password && <ErrorText>Şifre giriniz</ErrorText>}
                    </InputContainer>
                    <InputContainer>
                        <Checkbox label="Beni Hatırla" checked={isRememberMe} icon="tick" onClick={handleRememberMe} />
                    </InputContainer>
                    <Button type="submit">Giriş Yap</Button>
                </form>
                <ForgetPasswordText>Şifreni mi unuttun?</ForgetPasswordText>
                <RegisterTextContainer>
                    <ForgetPasswordText>Hesabın yok mu?</ForgetPasswordText>
                    <ForgetPasswordText onClick={() => router.push('/auth/register')}>Hemen Kayıt Ol</ForgetPasswordText>
                </RegisterTextContainer>
            </Container>
        </AuthLayout>
    );
};

export default Login;
