import React from 'react';
import SimpsonCommonComponent from "./SimpsonCommonComponent";

const BartSimpsonComponent = () => {
    return (
        <div>
            <SimpsonCommonComponent
                photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
                name={'Bart'}
                surname={'Simpson'}
                age={10}
                gender={'male'}
            />
        </div>
    );
};

export default BartSimpsonComponent;