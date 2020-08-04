import React from 'react';

import Button from './index';

export default { title: 'Button' };

export const newToDo = () => <Button text="Yeni Görev Oluştur" width="230px" height="50px" fontSize="1.6rem" iconSize="40" icon="plus" />;

export const clear = () => <Button text="Temizle" width="114px" height="36px" fontSize="1.4rem" iconSize="30" icon="cross2" />;

export const facebookLogin = () => <Button text="Facebook ile giriş yap" width="325px" height="50px" fontSize="1.3rem" icon="facebook" iconSize="40" socialButton />;

export const twitterLogin = () => <Button text="Twitter ile giriş yap" width="325px" height="50px" fontSize="1.3rem" icon="twitter" iconSize="40" socialButton />;

export const googleLogin = () => <Button text="Google ile giriş yap" width="325px" height="50px" fontSize="1.3rem" icon="google" iconSize="40" socialButton />;

export const addTodo = () => <Button text="Görevleri ekle" width="400px" height="35px" />;
