import React from 'react';
import SimpsonCommonComponent from "./SimpsonCommonComponent";

const LisaSimpsonComponent = () => {
    return (
        <div>
            <SimpsonCommonComponent
                photo={'https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png'}
                name={'Lisa'}
                surname={'Simpson'}
                age={8}
                gender={'female'}
            />
        </div>
    );
};

export default LisaSimpsonComponent;