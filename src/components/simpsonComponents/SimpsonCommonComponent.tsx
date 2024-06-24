import {FC} from "react";

interface IProps {
    name: string;
    surname: string;
    age: number;
    gender: string;
    photo: string
}

const SimpsonCommonComponent:FC<IProps> = (props) => {
    let {name, surname, age, gender, photo} = props;

    return (
        <div>
            <img src={photo} alt={name}/>
            <h2>{name} {surname}</h2>
            <h2>{gender}</h2>
            <h3>Age: {age}</h3>
        </div>
    )
}

export default SimpsonCommonComponent;