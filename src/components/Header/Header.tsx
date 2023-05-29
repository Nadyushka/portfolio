import React, {useEffect, useState} from "react";
import s from "./Header.module.scss";
import photoImg from "../../assets/pic/photo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import Face3Icon from "@mui/icons-material/Face3";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import {Link} from "react-scroll";
import {ReactComponent as CodewarsIcon} from '../../assets/pic/codewarsIcon.svg';

const sideBarOpenStyle = {left: "0px", zIndex: 100, top: "0px"};
const sideBarCloseStyle = {zIndex: 100, top: "0px"};

const Header = () => {
    const activePageLocalStorage = localStorage.getItem("activePage")
        ? localStorage.getItem("activePage")
        : "aboutMySelf";

    useEffect(() => {
        return localStorage.clear();
    }, []);

    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>(activePageLocalStorage!);

    return (
        <header
            className={s.header}
            style={sideBarOpen ? sideBarOpenStyle : sideBarCloseStyle}
        >
            <div
                className={s.header_mobileMenu}
                onClick={() => setSideBarOpen(!sideBarOpen)}
            >
                <div className={s.header_name}>NADYA</div>
                <div
                    className={
                        sideBarOpen
                            ? s.header_burgerMenuMenu + " " + s.header_burgerMenuMenuOpen
                            : s.header_burgerMenuMenu
                    }
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={s.header_container}>
                <div className={s.header_top}>
                    <div className={s.header_logo}>
                        <div className={s.header_img}>
                            <img src={photoImg} alt={"my avatar"}/>
                        </div>
                    </div>
                </div>
                <h1>NADYA</h1>
                <nav className={s.header_menu}>
                    <ul className={s.header_menuItems}>
                        <li
                            className={
                                activePage === "aboutMySelf"
                                    ? `${s.header_menuItem_active} ${s.header_menuItem}`
                                    : `${s.header_menuItem}`
                            }
                        >
                            <HomeIcon className={s.header_menuItemIcon}/>{" "}
                            <Link
                                spy={true}
                                smooth={true}
                                duration={500}
                                to={"aboutMySelf"}
                                onClick={() => {
                                    localStorage.setItem("activePage", "aboutMySelf");
                                    setActivePage("aboutMySelf");
                                }}
                            >
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li
                            className={
                                activePage === "mySkills"
                                    ? `${s.header_menuItem_active} ${s.header_menuItem}`
                                    : `${s.header_menuItem}`
                            }
                        >
                            <Link
                                spy={true}
                                smooth={true}
                                duration={500}
                                to={"mySkills"}
                                onClick={() => {
                                    localStorage.setItem("activePage", "mySkills");
                                    setActivePage("mySkills");
                                }}
                            >
                                <Face3Icon className={s.header_menuItemIcon}/>{" "}
                                <span>SKILLS</span>
                            </Link>
                        </li>
                        <li
                            className={
                                activePage === "myProjects"
                                    ? `${s.header_menuItem_active} ${s.header_menuItem}`
                                    : `${s.header_menuItem}`
                            }
                        >
                            <Link
                                spy={true}
                                smooth={true}
                                duration={500}
                                to={"myProjects"}
                                onClick={() => {
                                    setActivePage("myProjects");
                                    localStorage.setItem("activePage", "myProjects");
                                }}
                            >
                                <ReceiptLongIcon className={s.header_menuItemIcon}/>{" "}
                                <span>PROJECTS</span>
                            </Link>
                        </li>
                        <li
                            className={
                                activePage === "contactMe"
                                    ? `${s.header_menuItem_active} ${s.header_menuItem}`
                                    : `${s.header_menuItem}`
                            }
                        >
                            <Link
                                spy={true}
                                smooth={true}
                                duration={500}
                                to={"contactMe"}
                                onClick={() => {
                                    setActivePage("contactMe");
                                    localStorage.setItem("activePage", "contactMe");
                                }}
                            >
                                <PhonelinkIcon className={s.header_menuItemIcon}/>{" "}
                                <span>CONTACT ME</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className={s.header_socialMedia}>
                    <li className={s.header_header_socialMediaItem}>
                        <a href={'https://github.com/Nadyushka'} target={'_blank'}>
                            <GitHubIcon className={s.header_socialMediaIcon}/>
                        </a>
                    </li>
                    <li className={s.header_header_socialMediaItem}>
                        <a href={'https://www.codewars.com/users/Nadyushka'} target={'_blank'}>
                            <CodewarsIcon className={s.header_socialMediaIcon}/>
                        </a>
                    </li>
                    <li className={s.header_header_socialMediaItem}>
                        <a href={'https://www.linkedin.com/in/nadzeya-baranava-265b45267/'} target={'_blank'}>
                            <LinkedInIcon className={s.header_socialMediaIcon}/>
                        </a>
                    </li>
                    <li className={s.header_header_socialMediaItem}>
                        <a href={'https://t.me/Nadyushka_Baranova'} target={'_blank'}>
                            <TelegramIcon className={s.header_socialMediaIcon}/>
                        </a>
                    </li>

                </ul>
            </div>
        </header>
    );
};

export default Header;
