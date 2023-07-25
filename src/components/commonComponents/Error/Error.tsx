import React, {FC, useCallback, useEffect, useState} from 'react';
import s from './Error.module.css'


export const Error: FC<PropsType> = ({errorMessage, clearMessageInfo}) => {

    const [visible, setVisible] = useState<boolean>(true)

    const closeError = useCallback(() => {
        setVisible(false)
    }, [])

    useEffect(() => {
        setVisible(true)

        setTimeout(() => {
            closeError()
            clearMessageInfo('')
        }, 6000)

    }, [closeError, errorMessage])

    if (!visible) return null

    return (
        <div className={errorMessage.length !== 0 ? s.errorContainer : ''}>
            {errorMessage}
        </div>
    );
};

type PropsType = {
    errorMessage: string,
    clearMessageInfo: (message: string)=> void
}