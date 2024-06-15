import React, { forwardRef } from "react";
import icon from "../assets/yandex_icon.svg";
import star from "../assets/yandex-star.svg";

export const BtnReviews = forwardRef(({ href }, ref) => {
    return (
        <a ref={ref} className="btn-yandex" href={href} target="_blank" rel="noopener noreferrer">
            <img className="btn-yandex__img" src={icon} alt="yandex"/>
            <div className="btn-yandex__text">
                <div className="btn-yandex__text-star">
                    <span className="btn-yandex__star-rating">4.9</span>
                    <img className="btn-yandex__star-img star-wave" src={star} alt="star"/>
                    <img className="btn-yandex__star-img star-wave" src={star} alt="star"/>
                    <img className="btn-yandex__star-img star-wave" src={star} alt="star"/>
                    <img className="btn-yandex__star-img star-wave" src={star} alt="star"/>
                    <img className="btn-yandex__star-img star-wave" src={star} alt="star"/>
                </div>
                <div className="btn-yandex__text-desk">
                    Положительных отзывов студентов в Яндекс
                </div>
            </div>
        </a>
    );
});
