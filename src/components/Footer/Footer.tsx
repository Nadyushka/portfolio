import React from 'react';
import s from './Footer.module.scss'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_container}>
                <span>Nadya Baranova</span>
                <ThumbUpOffAltIcon/>
                <span className={s.footer_rights}>@2023 All rights are reserved</span>
            </div>
        </footer>
    );
};

export default Footer;