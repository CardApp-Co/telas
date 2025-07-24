"use client";

import React from "react";
import DefaultHeader from "@/app/components/defaultHeader";
import { Secao_prato } from "../components/secao_Prato";
import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css';
import './styles/style_modal.css';

import { useEffect } from 'react';
import Secao, { Botao_secao } from "../components/secao";
import Modal1 from "../components/modal1";


export default function Pratos() {
    useEffect(() => {

        const openButtons = document.querySelectorAll(".open-modal");
        openButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const modalId = button.getAttribute("data-modal");
                if (modalId) {
                    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
                    if (modal && typeof modal.showModal === 'function') {
                        modal.showModal();
                    }
                }
            });
        });

        const closeButtons = document.querySelectorAll(".close-modal");
        closeButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const modalId = button.getAttribute("data-modal");
                if (modalId) {
                    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
                    if (modal && typeof modal.close === 'function') {
                        modal.close();
                    }
                }
            });
        });

        // Cleanup listeners on unmount
        return () => {
            openButtons.forEach((button) => {
                button.replaceWith(button.cloneNode(true));
            });
            closeButtons.forEach((button) => {
                button.replaceWith(button.cloneNode(true));
            });
        };
    }, []);

    return (
        <>
            <DefaultHeader></DefaultHeader>

            <Secao secao_nome="Pratos Sugeridos">
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>

                <Botao_secao />

            </Secao>

            <Modal1></Modal1>
        </>
    );
}


