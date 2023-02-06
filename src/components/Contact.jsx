import React from 'react';

function Contact() {

    const style = {
        mainContainer: 'flex flex-col mb-10 mx-auto',
        secContainer: 'flex justify-center items-center',
        form: 'flex flex-col w-ful md:w-/12',
        formName: 'p-2 bg-transparent border-2 rounded-md focus:outline-none',
        formEmail: 'my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none',
        formMessege: 'p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none',
        btn: 'text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white',
    }

    const getForm = 'https://getform.io/f/78e24353-60a8-44cf-86c3-8697ff2586ef'

    return (
        <div className={style.mainContainer}>
            <div className={style.secContainer}>
                <form
                    action={getForm}
                    method='POST'
                    className={style.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={style.formName}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={style.formEmail}
                    />
                    <textarea
                        name="messege"
                        placeholder='Messege'
                        rows="10"
                        className={style.formMessege}
                    />

                    <button className={style.btn}>
                        Work With Me
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Contact