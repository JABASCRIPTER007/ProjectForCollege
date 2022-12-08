import CollegePhoto from './Photo/CollegePhoto.jpg';


export function Logo() {
    return <div className="BackCenter">
        <h1>Вітаю!</h1>
        <h2>Даний сайт був розроблений для закладу</h2>
        <a>"Чернівецький Кооперативний Економіко-Правовий Коледж"</a>
        <div className="CollegePhoto">
            <img src={CollegePhoto}></img>
        </div>


        <h3>Розробником даного додатку являється студент 4-го курсу - <a href="https://github.com/JABASCRIPTER007">Чорнописький Андрій Володимирович</a></h3>


    </div>
}
