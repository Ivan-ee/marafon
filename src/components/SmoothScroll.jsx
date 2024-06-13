import { useEffect, useRef } from "react";

const useSmoothScroll = (ref) => {
    useEffect(() => {
        const handleScroll = (e) => {

            const href = e.currentTarget.getAttribute('href');

            // If href starts with http or https, do not perform smooth scroll
            if (href.startsWith('http://') || href.startsWith('https://')) {
                return;
            }

            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const yOffset = -10; // Задаем отступ в пикселях
                const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }

        };

        const buttons = ref.current.querySelectorAll('a');
        buttons.forEach(button => button.addEventListener('click', handleScroll));

        return () => buttons.forEach(button => button.removeEventListener('click', handleScroll));
    }, [ref]);
};

export default useSmoothScroll;
