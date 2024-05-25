import React, {useEffect} from "react";

export const FAQ = () => {

    useEffect(() => {
        const items = document.querySelectorAll(".accordion button");

        const toggleAccordion = (event) => {
            const itemToggle = event.currentTarget.getAttribute('aria-expanded');

            items.forEach(item => {
                item.setAttribute('aria-expanded', 'false');
            });

            if (itemToggle === 'false') {
                event.currentTarget.setAttribute('aria-expanded', 'true');
            }
        };

        items.forEach(item => item.addEventListener('click', toggleAccordion));

        return () => {
            items.forEach(item => item.removeEventListener('click', toggleAccordion));
        };
    }, []);

    return (
        <div className='main faq'>
            <div className='title'>
                FAQ
            </div>
            <section>

                <div className="accordion">
                    <div className="accordion-item">
                        <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Why is the moon sometimes out during the day?</span><span
                            className="icon" aria-hidden="true"></span></button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                ut. Ut tortor pretium viverra suspendisse potenti.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Why is the sky blue?</span><span
                            className="icon" aria-hidden="true"></span></button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                ut. Ut tortor pretium viverra suspendisse potenti.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Will we ever discover aliens?</span><span
                            className="icon" aria-hidden="true"></span></button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                ut. Ut tortor pretium viverra suspendisse potenti.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">How much does the Earth weigh?</span><span
                            className="icon" aria-hidden="true"></span></button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                ut. Ut tortor pretium viverra suspendisse potenti.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">How do airplanes stay up?</span><span
                            className="icon" aria-hidden="true"></span></button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                ut. Ut tortor pretium viverra suspendisse potenti.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
