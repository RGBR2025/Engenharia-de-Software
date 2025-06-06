"use client";
import { useState } from "react";

export default function Sidebar() {

    return (
        <div className="w-80 h-dvh fixed bg-[var(--color-primary)] z-3">
            <img src="/images/logo/buscapet-main-orange.png" alt="Logo BuscaPet" className="w-60 m-auto mt-4 mb-16" />
            <button className="cursor-pointer m-10 p-4 w-60 rounded-2xl flex text-[var(--menu-color-text)] gap-4 items-center hover:bg-[var(--color-primary-selection)]"><img src="/icons/home-02.png" /><b>Home</b></button>
            <button className="cursor-pointer m-10 p-4 w-60 rounded-2xl flex text-[var(--menu-color-text)] gap-4 items-center hover:bg-[var(--color-primary-selection)]"><img src="/icons/message-01.png" /><b>Mensagem</b></button>
            <button className="cursor-pointer m-10 p-4 w-60 rounded-2xl flex text-[var(--menu-color-text)] gap-4 items-center hover:bg-[var(--color-primary-selection)]"><img src="/icons/notification-01.png" /><b>Notificações</b></button>
        </div>
    );
}