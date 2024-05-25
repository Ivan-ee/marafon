import React, {useEffect} from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import image from '../assets/pol2.svg';

export const Description = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    useEffect(() => {
        const svgElements = document.querySelectorAll('svg[aria-hidden="true"][focusable="false"][role="presentation"][viewBox="0 0 24 24"]');

        svgElements.forEach(svg => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Alternative text';
            img.className = 'replaced-icon';
            svg.parentNode.replaceChild(img, svg);
        });
    }, []);

    return (
        <div style={{marginBottom: 180}} className='main description'>
            <div className='title'>
                Программа — вся база текстов за 5 дней.
                Для тех, кто никогда не писал.
            </div>
            <Accordion variant="splitted">
                <AccordionItem className='a-style' key="1" aria-label="Accordion 1" title="День 1">
                    <div>
                        Поймёте, как сделать так, чтобы человек прочитал ваш текст и
                        правильно его понял. Разберёте четыре ошибки, которые совершают
                        начинающие авторы. Узнаете, как выделиться среди конкурентов.
                    </div>
                </AccordionItem>
                <AccordionItem className='a-style'  key="2" aria-label="Accordion 2" title="День 2">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem className='a-style'  key="3" aria-label="Accordion 3" title="День 3">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem className='a-style'  key="4" aria-label="Accordion 4" title="День 4">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem className='a-style'  key="5" aria-label="Accordion 4" title="День 5">
                    {defaultContent}
                </AccordionItem>
            </Accordion>

        </div>
    )
}