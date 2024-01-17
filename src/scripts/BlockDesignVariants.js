import '../styles/contentDesignVariantsStyle.css';
import PageBlock from './PageBlock';
import DesignFirst from '../images/Design--1.jpg';
import DesignSecond from '../images/Design--2.jpg';
import DesignThird from '../images/Design--3.jpg';
import DesignFourth from '../images/Design--4.jpg';
import DesignFifth from '../images/Design--5.jpg';
import ImageSwitcher from './ImagesSwitcher';

export default function DesignVariantsBlock(){

    var list = [
        <img src={DesignFirst} className='content--design-image' alt="a design element"></img>,
        <img src={DesignSecond} className='content--design-image' alt="a design element"></img>,
        <img src={DesignThird} className='content--design-image' alt="a design element"></img>,
        <img src={DesignFourth} className='content--design-image' alt="a design element"></img>,
        <img src={DesignFifth} className='content--design-image' alt="a design element"></img>
    ];

    return <PageBlock MyClass={"content--design"}>
        <div className='content--design-text'>
            <h1>Популярные варианты дизайнерской отделки</h1>
        </div>
        <ImageSwitcher MyClass={"content--design"} imges={list} />
        <div id='content--design-button'>Выбрать другой интерьер</div>
    </PageBlock>
}