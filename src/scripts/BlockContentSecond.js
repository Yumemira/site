import PageBlock from "./PageBlock";
import '../styles/contentSecondStyle.css';

export default function BlockContentSecond(){
    return <PageBlock MyClass={"content--second"}>
        <div className="content--second-text">
            <h1>Спросите подробности о жилых комплексах</h1>
            <ul id="content--second-list">
                <li>Подробная презентация всей инфраструктуры и района</li>
                <li>Планировки, цены, варианты отделок каждого комплекса</li>
                <li>Специальные условия и акции от застройщика и партнеров</li>
            </ul>
        </div>
        <div className="content--second-button">Узнать подробности</div>
    </PageBlock>
}