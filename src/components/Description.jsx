import React, {useEffect, useRef, useState} from "react";
import image from '../assets/pol2.svg';
import image3 from "../assets/Marathon layout (4).svg";
import arrowWhite from "../assets/up.svg";
import arrowBlack from "../assets/down.svg";
import {Die} from "./Die.jsx";

export const Description = () => {
    const [accordionItemsDesc, setAccordionItemsDesc] = useState([
        {
            id: "accordion-d-1",
            title: "1 день",
            content: "Поймёте, как сделать так, чтобы человек прочитал ваш текст и \n" +
                "правильно его понял. Разберёте четыре ошибки, которые совершают \n" +
                "начинающие авторы. Узнаете, как выделиться среди конкурентов.",
            t1: "Текстовый урок про сильный текст — цель и пользу для читателя",
            t2: "Текстовый урок про запретные слова — что нельзя использовать и почему",
            t3: "Домашняя работа — 10 тестовых и практических заданий",
            t4: "Вебинар от Марка",
        },
        {
            id: "accordion-d-2",
            title: "2 день",
            content: "Научитесь писать простыми словами. Сможете редактировать тексты \n" +
                "для личного блога, собственных или рабочих проектов — Инстаграма*, \n" +
                "Дзена или любого диджитал медиа.",
            t1: "2 текстовых урока про словестный мусор",
            t2: "Домашнее задание — 8 тестовых и практических заданий",
            t3: "Вебинар от Марка",
        },
        {
            id: "accordion-d-3",
            title: "3 день",
            content: "Разберёте продвинутые инструменты редактуры — примеры и сценарии. \n" +
                "Научитесь убеждать читателя в пользе вашего продукта и узнаете, \n" +
                "за какие тексты готовы платить от 5 тысяч рублей.",
            t1: "Текстовый урок про мир читателя и полезное действие",
            t2: "Домашнее задание — 7 тестовых и практических заданий",
            t3: "Вебинар от Марка",
        },
        {
            id: "accordion-d-4",
            title: "4 день",
            content: "Научитесь работать с аудиторией — анализировать её и использовать \n" +
                "это в работе. Напишете свой первый текст для портфолио, с которым \n" +
                "сможете откликаться на удаленные вакансии.",
            t1: "Текстовый урок — как писать контекст, призыв к действию и рассказывать о себе",
            t2: "Домашнее задание — пост для личного блога",
            t3: "Подробный разбор текста от редактора",
        },
        {
            id: "accordion-d-5",
            title: "5 день",
            content: "Узнаете, как составлять резюме и откликаться даже без опыта работы. \n" +
                "Получите пошаговую инструкцию, как взять первого клиента. Разберётесь \n" +
                "в причинах синдрома самозванца, и поймете, как их преодолеть.",
            t1: "Видеоурок от Марка",
            t2: "2-часовой вебинар от приглашенного спикера",
        },
    ]);

    return (
        <div style={{marginBottom: 180}} className="main description" id="description">
            <div className="title">
                Программа — вся база текстов за 5 дней. <br/>
                <span>Для тех, кто никогда не писал.</span>
            </div>
            <div className="title-mini">
                Программа — вся база текстов за 5 дней. <br/>
                <span>Для тех, кто никогда не писал.</span>
            </div>
            <Die style="die-description">
                <div>🧑🏼‍🌾</div>
                <div>🧑🏽‍🍳</div>
                <div>👩🏼‍🏫</div>
                <div>👩🏼‍🍼</div>
            </Die>
            <section>
                <div className="accordion-description">
                    {accordionItemsDesc.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            index={index}
                            accordionItems={accordionItemsDesc}
                            setAccordionItems={setAccordionItemsDesc}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

const AccordionItem = ({item, index, accordionItems, setAccordionItems}) => {
    const arrowRefDesc = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        const button = document.getElementById(item.id);

        const toggleAccordion = () => {
            setAccordionItems(
                accordionItems.map((accItem, accIndex) => ({
                    ...accItem,
                    ariaExpanded: accIndex === index ? !accItem.ariaExpanded : false,
                }))
            );

            if (!item.ariaExpanded) {
                setTimeout(() => {
                    const offsetTop = itemRef.current.getBoundingClientRect().top + window.pageYOffset - 10;
                    window.scrollTo({top: offsetTop, behavior: "smooth"});
                }, 200); // Adjust the delay to match the CSS transition duration
            }
        };

        button.addEventListener("click", toggleAccordion);

        return () => {
            button.removeEventListener("click", toggleAccordion);
        };
    }, [item.id, index, accordionItems, setAccordionItems, item.ariaExpanded]);

    return (
        <div className="accordion-item" ref={itemRef}>
            <button id={item.id} aria-expanded={item.ariaExpanded || false} className={item.buttonClass}>
                <div className="accordion-title">{item.title}</div>
                <div className="icon" aria-hidden="true">
                    <img
                        ref={arrowRefDesc}
                        src={item.color === "white" ? arrowWhite : arrowBlack}
                        alt="1"
                        style={{transform: item.ariaExpanded ? "rotate(180deg)" : "rotate(0deg)"}}
                    />
                </div>
            </button>
            <div className="accordion-content" style={{display: item.ariaExpanded ? "block" : "none"}}>
                <p>{item.content}</p>
                <div className="select">
                    <div className="item">
                        <img src={image3} style={{marginTop: 5}} alt="2"/>{item.t1}
                    </div>
                    <div className="item">
                        <img src={image3} style={{marginTop: 5}} alt="2"/>{item.t2}
                    </div>
                    {item.t3 && (
                        <div className="item">
                            <img src={image3} style={{marginTop: 5}} alt="2"/>
                            {item.t3}
                        </div>
                    )}
                    {item.t4 && (
                        <div className="item">
                            <img src={image3} style={{marginTop: 5}} alt="2"/>
                            {item.t4}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
