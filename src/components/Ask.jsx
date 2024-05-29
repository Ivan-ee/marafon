import React from "react";
import { Controller, useForm } from "react-hook-form";
import image from "../assets/Arrow 1 Stroke (2).svg";
import image2 from "../assets/Arrow 1.svg";

export const Ask = () => {
    const { control, register, handleSubmit, formState: { errors }, getValues } = useForm(); // Добавляем getValues

    const onSubmit = (data) => {
    };

    const isFieldInvalid = (fieldName) => {
        return errors[fieldName] !== undefined && getValues(fieldName) === ""; // Проверяем, пустое ли поле и есть ли ошибка
    };

    return (
        <div className="main ask">
            <div className="title">
                <div>Остались</div>
                <div style={{textAlign: "right"}}>вопросы?</div>
            </div>
            <div className="title-mini">
                <div>Остались</div>
                <div style={{textAlign: "right"}}>вопросы?</div>
            </div>

            <div className="super-block">
                <img className="icon" src={image}/>
                <div className="block-title">
                    Заполните форму,
                    мы напишем вам
                    и всё расскажем
                </div>
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{required: "Это поле обязательно"}}
                        render={({field}) => (
                            <input
                                type="text"
                                placeholder="ИМЯ"
                                {...field}
                                className={`input ${isFieldInvalid("name") ? "error" : ""}`}
                            />
                        )}
                    />
                    {/* {errors.name && <span className="error">{errors.name.message}</span>} */}

                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{required: "Это поле обязательно"}}
                        render={({field}) => (
                            <input
                                type="text"
                                placeholder="НОМЕР ТЕЛЕФОНА"
                                {...field}
                                className={`input ${isFieldInvalid("phone") ? "error" : ""}`}
                            />
                        )}
                    />
                    {/* {errors.phone && <span className="error">{errors.phone.message}</span>} */}

                    <Controller
                        name="telegram"
                        control={control}
                        defaultValue=""
                        rules={{required: "Это поле обязательно"}}
                        render={({field}) => (
                            <input
                                type="text"
                                placeholder="НИК В ТЕЛЕГРАМЕ"
                                {...field}
                                className={`input ${isFieldInvalid("telegram") ? "error" : ""}`}
                            />
                        )}
                    />
                    {/* {errors.telegram && <span className="error">{errors.telegram.message}</span>} */}
                </div>

                <div className="textarea-group" style={{justifyContent: 'left', gap: '25px'}}>
                    <Controller
                        name="question"
                        control={control}
                        defaultValue=""
                        rules={{required: "Это поле обязательно"}}
                        render={({field}) => (
                            <textarea
                                placeholder="ВАШ ВОПРОС"
                                {...field}
                                className={`textarea ${isFieldInvalid("question") ? "error" : ""}`} // Добавляем класс "error"
                            />
                        )}
                    />
                    {/* {errors.question && <span className="error">{errors.question.message}</span>} */}

                    <div style={{display: "flex", alignItems: "flex-end", marginBottom: 15}}>
                        <button type="submit" className="main-block-button">
                            <div>Записаться</div>
                            <div>|</div>
                            <div>
                                <img src={image2}/>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};