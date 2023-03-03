import React from 'react';
import s from "./Header.module.scss"
import photoImg from "../../assets/pic/photo.jpg"
import HomeIcon from '@mui/icons-material/Home';
import Face3Icon from '@mui/icons-material/Face3';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    return (

        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.header_mobileMenu}>
                    <div className={s.header_name}>NADYA</div>
                    <div className={s.header_burgerMenuMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={s.header_top}>
                    <div className={s.header_logo}>
                        <div className={s.header_img}>
                            <img src={photoImg}/>
                        </div>
                    </div>
                </div>
                <h1>NADYA</h1>
                <nav className={s.header_menu}>
                    <ul className={s.header_menuItems}>
                        <li className={s.header_menuItem}><HomeIcon/> <span>HOME</span></li>
                        <li className={s.header_menuItem}><Face3Icon/> <span>SKILLS</span></li>
                        <li className={s.header_menuItem}><ReceiptLongIcon/> <span>PROJECTS</span></li>
                        <li className={s.header_menuItem}><PhonelinkIcon/> <span>CONTACT ME</span></li>
                    </ul>
                </nav>
                <ul className={s.header_socialMedia}>
                    <li className={s.header_header_socialMediaItem}><InstagramIcon/></li>
                    <li className={s.header_header_socialMediaItem}><GitHubIcon/></li>
                    <li className={s.header_header_socialMediaItem}><LinkedInIcon/></li>
                    <li className={s.header_header_socialMediaItem}><InstagramIcon/></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;