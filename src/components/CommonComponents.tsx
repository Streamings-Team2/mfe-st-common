import React, { useState } from 'react'
import Button from './Buttons/ButtonComponent'
import Popup from './Popups/PopupComponent';
const CommonComponents = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleButtonClick = () => {
        alert('Botón del pop-up clickeado!');
        setIsPopupOpen(false);
    };
    return (
        <div className="flex flex-col md:flex-row md:space-x-4 bg-white p-4 rounded-t-lg">
            <div className="p-6">
                <Button
                    onClick={() => setIsPopupOpen(true)}
                    label='Abrir Pop-up'
                    styleType='primary'
                />
                {isPopupOpen && (
                    <Popup
                        title="Título del Pop-up"
                        content="Este es el contenido del pop-up."
                        buttonComponent={
                            <Button
                                label="Aceptar"
                                onClick={handleButtonClick}
                                styleType="primary"
                            />
                        }
                        onClose={() => setIsPopupOpen(false)}
                    />
                )}
            </div>
            <Button
                onClick={() => console.log('primary')}
                label="primary"
                styleType="primary"
            >
            </Button>
            <Button
                onClick={() => console.log('Secundario')}
                label="secondary"
                styleType="secondary"
            >
            </Button>
            <Button
                onClick={() => console.log('danger')}
                label="inhours"
                styleType='inhours'
            >
            </Button>

            <Button
                onClick={() => console.log('danger')}
                label="canceled"
                styleType='canceled'
            >
            </Button>
            <Button
                onClick={() => console.log('danger')}
                label="delay"
                styleType='delayed'
            >
            </Button>
        </div>
    )
}
export default CommonComponents