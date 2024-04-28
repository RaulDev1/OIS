import React from "react";
import react, { useState } from 'react';
import "./navbar.css"
import "./home.css"

const Home = () => {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

    function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }


    return (
        <section className="hero">
            <h1 className="counter">{count}</h1>
                 <div className="stick"></div>
        <div>
        <img className="item1" src="https://mass-images.pro/files/preview/0/13/dceeda3eeeb986c8daa87ac024969f6e.jpg?1713101905041" alt="picture"/>
        </div>
        <div>
        <img className="item2" src="https://yu.edu.kz/wp-content/uploads/2022/02/5bdc14e2-83b8-46cf-b7c6-313b6afe8768.jpg" alt="picture"/>
        </div>
        <div>
            <h2 className="text3">СТУДЕНТЫ</h2>
        </div>
        <div>
        <img className="item3" src="https://tumba.kz/uploads/images_2018_06/%D0%B2%D1%83%D0%B724062018%20(4).jpg" alt="picture"/>
        </div>
        <div className="item4"> </div>
        <div>
        <a href="/homegoods1"> <img className="item5" src="https://ltdfoto.ru/images/2024/04/28/Screenshot-2024-04-28-200220.png" alt=""></img> </a>        </div>
        <div>
        <a href="/homegoods"> <img className="item6" src="https://ltdfoto.ru/images/2024/04/28/afe996bb-32e2-43c9-a144-0ca7f9adef00.jpg"></img> </a>
        </div>
        <div>
        <a href="/homegoods2"> <img className="item7" src="https://ltdfoto.ru/images/2024/04/28/d3ed2c74-db52-4aec-b77d-319f28cfb365.jpg"></img> </a>        </div>
        <div>
            <h2 className="text5">НАШИ СТУДЕНТЫ</h2>
        </div>
        <div>
            <form className="input1">
                <label for="name"></label>
                <input type="text" id="name1" placeholder="     Добавьте эл.почту*"></input>
            </form>
        </div>

        <div className="liner"></div>
        <div className="liner2"></div>

        <div className="box1"></div>

        <div className="spring">Yessenov University</div>

        <button className="button1">
          <h2>OK</h2>
         </button>

         <a href="/accessories"> <img className="item8" src="https://i8.photo.2gis.com/images/branch/0/30258560096063699_d780.jpg"></img> </a>

        <a href="/sale"> <img className="item10" src="https://www.gov.kz/uploads/2023/8/4/1cdc60578aa3ffdf1c7a2106de35f67a_original.646921.jpg"></img> </a>
        <a className="womenss" href="/womens">Список студентов</a>
        <a className="menss" href="/mens">Компьютерные науки</a>
        <div mainfooter></div>

        <div className="subscribe">ПОДПИШИТЕСЬ НА НОВОСТИ</div>
        <div className="first">и первыми узнавайте о новостях и новых студентах нашего университета</div>

        <div className="freedom">ФАКУЛЬТЕТ</div>
        <div className="summer">НАУКИ И ТЕХНОЛОГИИ</div>

        <div className="footer11"></div>

        <div className="vestaft1">STUDENTS</div>
            

        <div className="line21"></div>
        <div className="line31"></div>
        <div className="line41"></div>
        <div className="textft11">ПОМОЩЬ</div>
        <div className="textft111">ЗАХОДИТЕ К НАМ</div>
        <div className="textft21">ПРИСОЕДИНЯЙТЕСЬ</div>

        <div className="textft31">Политика универа ></div>
        <div className="textft41">Информация ></div>
        <div className="textft51">Контакты ></div>
        <div className="textft61">О нас ></div>
        <div className="textft71">Yessenov university, 31-й мкр,1</div>
        <div className="textft81">130000, Актау</div>
        <div>
        <img className="item601" src="https://static.wixstatic.com/media/8cabc8e4a93c458bbf6508caed8ad7d2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8cabc8e4a93c458bbf6508caed8ad7d2.png" alt="picture"/>
        </div>

        <div>
        <img className="item611" src="https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3470ec8ca26475da4b228f0199b5d3d.png" alt="picture"/>
        </div>

        <div>
        <img className="item621" src="https://static.wixstatic.com/media/7177d158c36d432b93f51e54f80e2f3c.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7177d158c36d432b93f51e54f80e2f3c.png" alt="picture"/>
        </div>

        <div>
        <img className="item631" src="https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7ffe259c9e54f59837481b3dd0130eb.png" alt="picture"/>
        </div>

        </section>
    )
}

export default Home;