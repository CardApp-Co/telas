"use client"

import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style_modal.css';
import './styles/style.css'

import DefaultHeader from '@/app/components/defaultHeader';
import Prato from '@/app/components/prato';
import { useEffect } from 'react';
import { Modal_Prato } from '@/app/components/modal';

export default function TelaPrato(props) {
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
            <DefaultHeader />

            <main>
                <Prato
                    nomeDoPrato="Cuscuz com rabanda e feijao e whey da growth suplements"
                    descricao="Todos os ingredientes abaixo fritos assados
                                    no capricho saborosos aaaaaaaaaaaaaaaaaaaaaaa
                                    pegou fogo na roupa do cozinheiro"
                    imagem="/imagens/imagem-placeholder.png"
                    custo="9.99"
                />

                <Modal_Prato modalId="modal-1" />
            </main>
        </>
    );
}

