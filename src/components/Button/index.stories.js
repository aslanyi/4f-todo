import React from 'react';

import Button from './index';

export default { title: 'Button' };

export const newToDo = () => <div style={{height:'50px', width:'220px'}}><Button text="Yeni Görev Oluştur" fontSize="1.6rem" iconSize="40" icon="plus" /></div>;

export const clear = () => <div style={{height:'36px', width:'114px'}}><Button text="Temizle" fontSize="1.4rem" iconSize="30" icon="cross2" /></div>;

export const facebookLogin = () => <div style={{height:'50px', width:'325px'}}><Button text="Facebook ile giriş yap" fontSize="1.3rem" icon="facebook" iconSize="40" socialButton /></div>;

export const twitterLogin = () => <div style={{height:'50px', width:'325px'}}><Button text="Twitter ile giriş yap" fontSize="1.3rem" icon="twitter" iconSize="40" socialButton /></div>;

export const googleLogin = () => <div style={{height:'50px', width:'325px'}}><Button text="Google ile giriş yap" fontSize="1.3rem" icon="google" iconSize="40" socialButton /></div>;

export const addTodo = () => <div style={{height:'50px', width:'640px'}}><Button text="Görevleri ekle" /></div>;
