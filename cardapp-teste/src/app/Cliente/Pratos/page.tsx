
import React from "react";
import { ClientHeader } from "@/app/components/defaultHeader";
import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css';

import { Cliente_secao } from "@/app/components/secao";
import { Secao_prato } from "@/app/components/secao_Prato";


export default function Cliente_telaPratos() {
    return (
        <>
            <ClientHeader />

            <Cliente_secao secao_nome="Pratos Sugeridos">
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
            </Cliente_secao>

            <Cliente_secao secao_nome="Pratos recentes">
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
                <Secao_prato imagem="/imagens/imagem-placeholder.png" nome="rabanada com cuscuz e quiej oao molho sugo de whey da growth "></Secao_prato>
            </Cliente_secao>
        </>
    );
}


