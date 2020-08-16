import { useDispatch } from 'react-redux';
import { providers } from '@firebase/index';
import { loginUserWithProvider } from '@redux/actions';
import Flex from '@components/Layouts/Flex';

import Icon from 'src/utils/icon';
import { Wrapper, Card, Container, DescriptionText, IconButton } from '@styles/auth/layout/styled';
import { useRouter } from 'next/router';

const providerList = [
    {
        id: 2,
        icon: 'google',
        size: 40,
        text: 'Google ile giriş yap',
    },
];

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const loginUser = async (icon) => {
        switch (icon) {
            case 'google':
                await dispatch(loginUserWithProvider(providers.GoogleAuthProvider, router));
                break;
            case 'facebook':
                await dispatch(loginUserWithProvider(providers.FacebookAuthProvider, router));
                break;
            case 'twitter':
                break;
        }
    };
    return (
        <Wrapper>
            <Flex.Container minHeight={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Flex.Item>
                    <Card>
                        <Flex.Container>
                            <Flex.Item basis={'50%'}>{children}</Flex.Item>
                            <Flex.Item basis={'50%'}>
                                <Container flexDirection={'column'} alignItems={'center'}>
                                    <DescriptionText>Veya</DescriptionText>
                                    {providerList.map((provider) => (
                                        <IconButton key={provider.id} onClick={() => loginUser(provider.icon)}>
                                            <Icon icon={provider.icon} size={provider.size} />
                                            <span>{provider.text}</span>
                                        </IconButton>
                                    ))}
                                </Container>
                            </Flex.Item>
                        </Flex.Container>
                    </Card>
                </Flex.Item>
            </Flex.Container>
        </Wrapper>
    );
};

export default AuthLayout;
