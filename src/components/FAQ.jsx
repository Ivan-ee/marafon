import React, {useEffect, useRef, useState} from "react";
import { animateScroll as scroll } from "react-scroll";

import arrowWhite from "../assets/up.svg";
import arrowBlack from "../assets/down.svg";
import {Die} from "./Die.jsx";
import s1 from "../assets/Emogy/Thinking Face.svg";
import s2 from "../assets/Emogy/Emoji Mega Pack Eyes.svg";
import s3 from "../assets/Emogy/Emoji Mega Pack (1).svg";
import s4 from "../assets/Emogy/Backhand Index Down Light Skin.svg";

export const FAQ = () => {
    const [accordionItems, setAccordionItems] = useState([
        {
            id: "accordion-button-1",
            title:
                "Марафон подходит для новичков? Я никогда не писал, у меня получится?",
            content:
                "Да, марафон создан для тех, кто никогда не писал. Обучение выстроено от простого к сложному: мы не заставляемс первого дня писать огромные статьи, — нет. Сначала начинаем с основ: учимся избавляться от лишних слов, складывать слова предложения, а предложения —в логические абзацы. И только к концу марафона ученики пишут первый текст, а редакторы дают к нему рекомендации и помогают написать, если что-то идёт не так.",
            buttonClass: "b1",
            color: "white",
        },
        {
            id: "accordion-button-2",
            title:
                "В каком формате проходят уроки?",
            content:
                "Вся теория в текстовых уроках и коротких вебинарах. Сначала мы отправляем \n" +
                "вам текстовый урок, вы делаете домашнее задание — а после смотрите \n" +
                "короткий вебинар с разбором ошибок. Текстовых уроки можно изучать \n" +
                "в метро, кафе или на улице, а вебинары смотреть в любое свободное время — \n" +
                "это удобно.",
            buttonClass: "b2",
            color: "black",
        },
        {
            id: "accordion-button-3",
            title:
                "Если у меня возникнет вопрос?",
            content:
                " Вы можете задать его в общем чате — лично мне или нашим кураторам. Чем \n" +
                "больше вопросов — тем лучше. Можете задавать вопросы на любые темы:\n" +
                "по рекламе, своим текстам или поиску клиентов — мы ответим и подскажем.",
            buttonClass: "b3",
            color: "black",
        },
        {
            id: "accordion-button-4",
            title:
                "Я уже работаю с текстом на хорошем уровне, мне стоит идти на марафон?",
            content:
                "Нет, вам лучше подойдет основной курс «Сильный редактор». На нём \n" +
                "углубленная программа и больше обратной связи. После обучения мы \n" +
                "помогаем ученикам трудоустроиться в компании, а особенно любимых \n" +
                "забираем себе в агентство. Подробнее о программе и результатах учеников \n" +
                "смотрите на странице «Сильный редактор»",
            buttonClass: "b4",
            color: "white",
        },
        {
            id: "accordion-button-5",
            title:
                "Я смогу проходить марафон с телефона?",
            content:
                "Да, все уроки и вебинары можно смотреть с телефона. Домашнее задание \n" +
                "тоже можно делать с телефона. В общем, да, проходить марафон можно \n" +
                "с телефона.",
            buttonClass: "b5",
            color: "white",
        },
        {
            id: "accordion-button-6",
            title:
                "Нужно ли быть грамотным, чтобы идти на марафон?",
            buttonClass: "b6",
            color: "black",
            content:
                "Нет, и в качестве доказательства мы записали видео о пяти мифах \n" +
                "о копирайтинге. Посмотрите и поймите. Всё, что вы знали о текстах — могло \n" +
                "оказаться совсем не так.",
        },
        {
            id: "accordion-button-7",
            title:
                "Со скольки лет можно начать учиться?",
            buttonClass: "b7",
            color: "white",
            content:
                "Наш марафон проходят ученики всех возрастов. Главное — желание учиться \n" +
                "и несколько часов свободного времени.",
        },
        {
            id: "accordion-button-8",
            title:
                "Что, если я не буду успевать?",
            buttonClass: "b8",
            color: "black",
            content:
                "С каждым учеником работает куратор. К нему можно обратиться по любому \n" +
                "вопросу и отложить урок, если надо. Просто предупредите, что не успеваете, \n" +
                "мы перенесём дедлайн.",
        },
        {
            id: "accordion-button-9",
            title:
                "Учиться можно только гражданам России?",
            buttonClass: "b9",
            color: "white",
            content:
                "Оплатить и пройти марафон можно из любой страны. Наши ученики живут \n" +
                "в Беларуси, Испании, на Бали и не только. Заполните форму ниже, и мы с вами \n" +
                "свяжемся :)",
        },
    ]);

    const faqRef = useRef(null);

    return (
        <section className="main faq" id='FAQ' ref={faqRef}>
            <h2 className="title">FAQ</h2>
            <h2 className="title-mini-big">FAQ</h2>
            <Die style='die-faq'>
                <div><img src={s1} alt={s1}/></div>
                <div><img src={s2} alt={s1}/></div>
                <div><img src={s3} alt={s1}/></div>
                <div><img src={s4} alt={s1}/></div>
            </Die>
            <section>
                <div className="accordion">
                    {accordionItems.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            index={index}
                            accordionItems={accordionItems}
                            setAccordionItems={setAccordionItems}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
};

const AccordionItem = ({item, index, accordionItems, setAccordionItems}) => {
    const arrowRef = useRef(null);
    const itemRef = useRef(null);

    useEffect((e) => {
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
                    scroll.scrollTo(itemRef.current.offsetTop - 10, {
                        duration: 1000,
                        delay: 0,
                        smooth: "easeInOutQuart"
                    });
                }, 1610);
            }
        };

        button.addEventListener("click", toggleAccordion);

        return () => {
            button.removeEventListener("click", toggleAccordion);
        };
    }, [item.id, index, accordionItems, setAccordionItems, item.ariaExpanded]);

    return (
        <div className='accordion-item' ref={itemRef} >
            <button id={item.id} aria-expanded={item.ariaExpanded || false} className={item.buttonClass}>
                <h6 className="accordion-title">{item.title}</h6>
                <div className="icon" aria-hidden="true">
                    <img
                        ref={arrowRef}
                        src={item.color === "white" ? arrowWhite : arrowBlack}
                        alt="1"
                        style={{transform: item.ariaExpanded ? "rotate(180deg)" : "rotate(0deg)"}}
                    />
                </div>
            </button>
            <div className="accordion-content">
                <p>{item.content}</p>
            </div>
        </div>
    );
};