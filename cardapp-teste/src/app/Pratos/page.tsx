"use client";

import React from "react";
import DefaultHeader from "@/app/components/defaultHeader";
import { Secao_prato } from "../components/secao_Prato";
import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css';
import './styles/style_modal.css';

import { useEffect } from 'react';
import Secao from "../components/secao";
import Modal_Pratos from "../components/modal";


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

            <Secao secao_nome="Pratos Sugeridos" modalId="modal-1">
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
            </Secao>

            <Secao secao_nome="Pratos recentes" modalId="modal-2">
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
            </Secao>

            <Modal_Pratos modalId="modal-1" />
            <Modal_Pratos modalId="modal-2" />
        </>
    );
}


