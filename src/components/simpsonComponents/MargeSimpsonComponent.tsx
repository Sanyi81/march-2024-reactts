import React from 'react';
import SimpsonCommonComponent from "./SimpsonCommonComponent";

const MargeSimpsonComponent = () => {
    return (
        <div>
            <SimpsonCommonComponent
                photo={'https://i.discogs.com/WI38UGun7TKKNg04MTHK0yV-I1Yb75sdJ_t0GEermmo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MzAtMTMzNTcyMDM5/MC5wbmc.jpeg'}
                name={'Marge'}
                surname={'Simpson'}
                age={34}
                gender={'female'}
            />
        </div>
    );
};

export default MargeSimpsonComponent;