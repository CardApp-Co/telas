"use client";

import DefaultHeader from "../components/defaultHeader";
import Modal1 from "../components/modal1";
import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css';
import './styles/style_modal.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


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
            <div className="container-criar-secao">
                <button className="open-modal" data-modal="modal-1">
                    <FontAwesomeIcon icon={faCirclePlus} size="2x" />
                    <span>Criar Seção</span>
                </button>
            </div>




            <Modal1></Modal1>
        </>
    );
}


