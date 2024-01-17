import '../styles/contentOneStyle.css';
import PageBlock from './PageBlock';

export default function BlockContentOne(){
    return <PageBlock MyClass={"content--one"}>
        <div className='content--one-text'>
        <h1 id='content--one-header-main' className='content--one-text'>Всё для счастливой жизни в одном месте</h1>
            <div className='content--one-inline'><p>Вся инфраструктура для комфортной жизни, работы и отдыха находится рядом:</p>
            <table id="content--one-table-title">
                <tr><td>Детские развивающие центры</td><td>Школы</td></tr>
                <tr><td>Магазины и супермаркеты</td><td>Медицинские клиники</td></tr>
                <tr><td>Салоны красоты</td><td>Кафе</td></tr>
                <tr><td>Рестораны</td><td>Творческие студии</td></tr>
                <tr><td>Спортивные студии</td></tr>
            </table>
            </div>
        </div>
        
        
    </PageBlock>;
}