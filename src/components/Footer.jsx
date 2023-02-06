import React from "react";

function Footer() {

    const style = {
        mainContainer: 'flex justify-center  items-center py-1',
        copyright: 'text-sm mt-2 opacity-50',
    }

    return (
        <div className={style.mainContainer}>
            <p className={style.copyright}>
                &copy; {new Date().getFullYear()}
                &nbsp; Wasath Theekshana | All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
