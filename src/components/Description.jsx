import React, {useEffect} from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import image from '../assets/pol2.svg';
import image2 from "../assets/galka.svg";
import image3 from "../assets/Marathon layout (4).svg";

export const Description = () => {
    useEffect(() => {
        const svgElements = document.querySelectorAll('svg[aria-hidden="true"][focusable="false"][role="presentation"][viewBox="0 0 24 24"]');

        svgElements.forEach(svg => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Alternative text';
            img.className = 'replaced-icon';
            svg.parentNode.replaceChild(img, svg);
        });

        const elements = document.querySelectorAll('[aria-label]');
        elements.forEach(element => {
            element.classList.add('custom-p');
        })

    }, []);

    return (
        <div style={{marginBottom: 180}} className='main description'>
            <div className='title'>
                Программа — вся база текстов за 5 дней. <br/>
                <span>Для тех, кто никогда не писал.</span>
            </div>
            <Accordion variant="splitted">
                <AccordionItem className='a-style' key="1" aria-label="Accordion 1" title="1 день">
                    <div className='text-desk'>
                        Поймёте, как сделать так, чтобы человек прочитал ваш текст и <br/>
                        правильно его понял. Разберёте четыре ошибки, которые совершают <br/>
                        начинающие авторы. Узнаете, как выделиться среди конкурентов.
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Текстовый урок про сильный текст — цель и пользу для читателя</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Текстовый урок про запретные слова — что нельзя использовать и почему</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Домашняя работа — 10 тестовых и практических заданий</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Вебинар от Марка</div>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem className='a-style' key="2" aria-label="Accordion 2" title="2 день">
                    <div className='text-desk'>
                        Научитесь писать простыми словами. Сможете редактировать тексты <br/>
                        для личного блога, собственных или рабочих проектов — Инстаграма*, <br/>
                        Дзена или любого диджитал медиа.
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>2 текстовых урока про словестный мусор</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Домашнее задание — 8 тестовых и практических заданий</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Вебинар от Марка</div>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem className='a-style' key="3" aria-label="Accordion 3" title="3 день">
                    <div className='text-desk'>
                        Разберёте продвинутые инструменты редактуры — примеры и сценарии.
                        Научитесь убеждать читателя в пользе вашего продукта и узнаете, <br/>
                        за какие тексты готовы платить от 5 тысяч рублей.
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Текстовый урок про мир читателя и полезное действие</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Домашнее задание — 7 тестовых и практических заданий</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Вебинар от Марка</div>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem className='a-style' key="4" aria-label="Accordion 4" title="4 день">
                    <div className='text-desk'>
                        Научитесь работать с аудиторией — анализировать её и использовать <br/>
                        это в работе. Напишете свой первый текст для портфолио, с которым <br/>
                        сможете откликаться на удаленные вакансии.
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Текстовый урок — как писать контекст, призыв к действию и рассказывать о себе</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Домашнее задание — пост для личного блога</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Подробный разбор текста от редактора</div>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem className='a-style' key="5" aria-label="Accordion 5" title="5 день">
                    <div className='text-desk'>
                        Узнаете, как составлять резюме и откликаться даже без опыта работы.
                        Получите пошаговую инструкцию, как взять первого клиента. Разберётесь
                        в причинах синдрома самозванца, и поймете, как их преодолеть.
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>Видеоурок от Марка</div>
                        </div>
                        <div className='item'>
                            <img src={image3} style={{marginTop: 5}} alt='2'/>
                            <div>2-часовой вебинар от приглашенного спикера</div>
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

        </div>
    )
}