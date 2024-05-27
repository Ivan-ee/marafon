import { useEffect, useRef } from "react";

const useSmoothScroll = (ref) => {
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const buttons = ref.current.querySelectorAll('a');
        buttons.forEach(button => button.addEventListener('click', handleScroll));

        return () => buttons.forEach(button => button.removeEventListener('click', handleScroll));
    }, [ref]);
};

export default useSmoothScroll;
