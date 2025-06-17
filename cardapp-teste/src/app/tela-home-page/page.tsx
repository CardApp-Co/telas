'use client'

import { useEffect } from "react";
import "./style.css";

export default function TelaHomePage() {
    useEffect(() => {
        function toggleSidebar() {
            const sidebar = document.getElementById("sidebar");
            if (sidebar) {
                sidebar.classList.toggle("sidebar-open");
            }
        }
        const userMale = document.getElementById("user-male");
        if (userMale) {
            userMale.addEventListener("click", toggleSidebar);
        }
        function handleClick(event: MouseEvent) {
            const sidebar = document.getElementById("sidebar");
            const userMale = document.getElementById("user-male");
            if (sidebar && sidebar.classList.contains("sidebar-open") && userMale) {
                if (!sidebar.contains(event.target as Node) && !userMale.contains(event.target as Node)) {
                    sidebar.classList.remove("sidebar-open");
                }
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            if (userMale) {
                userMale.removeEventListener("click", toggleSidebar);
            }
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <header>
                <div className="divLogo">
                    <img className="logo" src="/imagens/cardapp-logo-nome.png" alt="cardapp-logo-nome" />
                </div>
            </header>

            <div className="navbar">
                <ul>
                    <li id="user-male"><img src="/imagens/user-male.png" alt="user-male" /></li>
                    <li><a>HOME PAGE &gt; </a></li>
                    <li><a>FILTROS &gt;</a></li>
                    <li><a>CARRINHO &gt;</a></li>
                </ul>
            </div>

            <div id="sidebar" className="sidebar">
                <div className="sidebar-content">
                    <img src="/imagens/logotipo2.png" alt="logo" />

                    <div className="sidebar-list">
                        <a href="#">FINANCEIRO</a>
                        <a href="#">INFORMAÇÕES</a>
                        <a href="#">NOTIFICAÇÕES</a>
                        <a href="#">INÍCIO</a>
                    </div>
                </div>
            </div>
        </>
    );
}
