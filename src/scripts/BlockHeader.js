import PageBlock from "./PageBlock";
import '../styles/headStyle.css'

export default function HeaderBlock(){
    return <PageBlock MyClass={"headBlock--main"} >
        <div id="headBlock--main-blur-1" className="headBlock--main-blur"><p className="headBlock--main-ad">Квартиры в городе <span style={{ color: 'red' }}>Будущего</span>! Успей приобрести по выгодной цене от <span style={{ color: '#9BED00' }}>3.5 млн</span> руб</p></div>
        <div id="headBlock--main-blur-2" className="headBlock--main-blur"><p className="headBlock--main-ad">Дополнительные <span style={{ color: 'red' }}>акции</span> на время строительства</p></div>
        <div className="headBlock--main-blur-list">
            <div className="headBlock--main-inline"><p className="headBlock--main-ad-1">X лет опыта</p><p className="headBlock--main-ad-2">Надежный застройщик</p></div>
            <div className="headBlock--main-inline"><p className="headBlock--main-ad-1">Ключи в 24гг</p><p className="headBlock--main-ad-2">Успей приобрести</p></div>
            <div className="headBlock--main-inline"><p className="headBlock--main-ad-1">Жизнь</p><p className="headBlock--main-ad-2">в городе Вашей мечты</p></div>
        </div>
        <div id="headBlock--main-button">Узнать подробности</div>


    </PageBlock>
}