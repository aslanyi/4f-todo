import React, { useState } from 'react';
import Modal from './index';
import Input from '../Input';

export default { title: 'Modal' };

export const WithOpen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal customStyles={{content: {border: '1px solid white'}}} isOpen={isOpen} onRequestClose={handleCloseModal}>
                <div style={{ display: 'flex' }}>
                    <Input placeholder="Ne yapacaksın?" />
                    <button>Hatırlatıcı Ekle</button>
                    <button>Görev Ekle</button>
                </div>
                <Input placeholder="Not" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <select style={{width: '100%'}}>
                        <option value="a">A</option>
                        <option value="a">B</option>
                        <option value="a">C</option>
                    </select>
                    <select style={{width: '100%'}}>
                        <option value="a">A</option>
                        <option value="a">B</option>
                        <option value="a">C</option>
                    </select>
                    <select style={{width: '100%'}}>
                        <option value="a">A</option>
                        <option value="a">B</option>
                        <option value="a">C</option>
                    </select>
                </div>
                <button style={{width: '100%'}}>Görevlere Ekle</button>
            </Modal>
        </div>
    );
};
