"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // Проверяем, что мы на клиенте
        if (typeof window === "undefined") return;

        // Отключаем автоматическое восстановление позиции скролла браузером
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        // Прокручиваем наверх при загрузке страницы
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Мгновенная прокрутка без анимации
        });

        // Дополнительная проверка через небольшую задержку
        // на случай, если другие скрипты попытаются изменить позицию скролла
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return null; // Этот компонент не рендерит ничего визуального
}
