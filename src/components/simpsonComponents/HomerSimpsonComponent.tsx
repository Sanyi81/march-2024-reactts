import React from 'react';
import SimpsonCommonComponent from "./SimpsonCommonComponent";

const HomerSimpsonComponent = () => {
    return (
        <div>
            <SimpsonCommonComponent
                photo={'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
                name={'Homer'}
                surname={'Simpson'}
                age={35}
                gender={'male'}
            />
        </div>
    );
};

export default HomerSimpsonComponent;