import React from "react";
import {Input} from '@nextui-org/react';
import {Controller, useForm} from "react-hook-form";

export const Ask = () => {

    const {control,register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='main ask'>
            <div className='title'>
                Остались
                вопросы?
            </div>
            <div className='super-block'>
                <div className='image'>
                    <div>1</div>
                    <div>
                        Копирайтер — это
                        человек, который
                        пишет тексты: для
                        сайтов, телеграм-
                        каналов или
                        рассылок.
                    </div>
                </div>
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Это поле обязательно'}}
                        render={({field}) => (
                            <input
                                type="text"
                                placeholder="ИМЯ"
                                {...field}
                                className="input"
                            />
                        )}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}

                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Это поле обязательно'}}
                        render={({field}) => (
                            <input
                                type="text"
                                placeholder="НОМЕР ТЕЛЕФОНА"
                                {...field}
                                className="input"
                            />
                        )}
                    />
                    {errors.phone && <span className="error">{errors.phone.message}</span>}

                    <Controller
                        name="telegram"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Это поле обязательно'}}
                        render={({field}) => (
                            <input
                                type="text"
                                placeholder="НИК В ТЕЛЕГРАМЕ"
                                {...field}
                                className="input"
                            />
                        )}
                    />
                    {errors.telegram && <span className="error">{errors.telegram.message}</span>}
                </div>

                <div className="textarea-group">
                    <Controller
                        name="question"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Это поле обязательно'}}
                        render={({field}) => (
                            <textarea
                                placeholder="ВАШ ВОПРОС"
                                {...field}
                                className="textarea"
                            />
                        )}
                    />
                    {errors.question && <span className="error">{errors.question.message}</span>}

                    <button type="submit" className="button">
                        ОТПРАВИТЬ
                    </button>
                </div>
            </form>

        </div>
    )
}