import React, {FC} from 'react';
import './App.css';
import HomerSimpsonComponent from "./components/simpsonComponents/HomerSimpsonComponent";
import MargeSimpsonComponent from "./components/simpsonComponents/MargeSimpsonComponent";
import BartSimpsonComponent from "./components/simpsonComponents/BartSimpsonComponent";
import LisaSimpsonComponent from "./components/simpsonComponents/LisaSimpsonComponent";

const App: FC = () => {
    return (
        <div>
            <HomerSimpsonComponent/>
            <MargeSimpsonComponent/>
            <BartSimpsonComponent/>
            <LisaSimpsonComponent/>
        </div>
    );
}

export default App;
