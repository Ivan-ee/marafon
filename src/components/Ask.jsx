import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import image from "../assets/Arrow 1 Stroke (2).svg";
import image2 from "../assets/Arrow 1.svg";
import GetCourseModal from "./GetCourse.jsx";

export const Ask = () => {
    const {control, register, handleSubmit, formState: {errors}, getValues, reset} = useForm(); // Добавляем getValues

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("fields[name_1]", data.name);
        formData.append("fields[1087639_1][1365867]", data.phone);
        formData.append("fields[1171299_1]", data.telegram);
        formData.append("fields[1090023_2]", data.question);
        formData.append("form_id", '1355242');
        formData.append("hash", '3c626dad4da708a4364ca2968e354835');

        const userOrigin = JSON.stringify({
            datetime: new Date().toString(),
            referer: window.location.href
        });
        formData.append("user_origin", userOrigin);

        try {
            const response = await fetch("https://forms.amocrm.ru/queue/add", {
                method: "POST",
                body: formData,
                encType: "multipart/form-data",
            });

        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }


        reset();
    };

    const isFieldInvalid = (fieldName) => {
        return errors[fieldName] !== undefined && getValues(fieldName) === ""; // Проверяем, пустое ли поле и есть ли ошибка
    };

    const [showModal, setShowModal] = useState(false);

    return (
        <section className="main ask">
            <h2 className="title">
                <div>Остались</div>
                <div style={{textAlign: "right"}}>вопросы?</div>
            </h2>
            <h2 className="title-mini">
                <div>Остались</div>
                <div style={{textAlign: "right"}}>вопросы?</div>
            </h2>

            <div className="super-block">
                <img className="icon" src={image}/>
                <div className="block-title">
                    Заполните форму,
                    мы напишем вам
                    и всё расскажем
                </div>
            </div>

            <GetCourseModal show={showModal} onClose={() => setShowModal(false)}/>

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
                                className={`input`}
                            />
                        )}
                    />

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
                                className={`input`}
                            />
                        )}
                    />

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
                                className={`input`}
                            />
                        )}
                    />
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
                                className={`textarea`}
                            />
                        )}
                    />

                    <div style={{display: "flex", alignItems: "flex-end", marginBottom: 15}}>
                        <button type="submit" className="main-block-button">
                            <div>Отравить</div>
                            <div>|</div>
                            <div>
                                <img src={image2}/>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};