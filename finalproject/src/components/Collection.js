import React from "react";
import react, { useState } from 'react';
import "./navbar.css";
import "./goods.css";
import "./footer.css";

const Collection = () => {
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
         <div className="square"></div>
         <h2 className="sale1">СТУДЕНТЫ</h2>
         <div>
         <a href="/goods"> <img className="item20" src="https://ltdfoto.ru/images/2024/04/28/image-3.png"></img> </a>
        </div>

        <div>
        <a href="/goods2"> <img className="item21" src="https://ltdfoto.ru/images/2024/04/28/image-5.png"></img> </a>
        </div>

        <div>
        <a href="/goods3"> <img className="item22" src="https://ltdfoto.ru/images/2024/04/28/image-2.png"></img> </a>
        </div>

        <div>
        <a href="/goods4"> <img className="item23" src="https://ltdfoto.ru/images/2024/04/28/image-6.png"></img> </a>        </div>

        <div>
        <a href="/goods5"> <img className="item24" src="https://cdn-icons-png.flaticon.com/256/10944/10944356.png"></img> </a>        </div>

        <a href="/goods6"> <img className="item25" src="https://cdn-icons-png.flaticon.com/256/10944/10944356.png"></img> </a>


        <div>
        <a href="/goods7"> <img className="item26" src="https://cdn-icons-png.flaticon.com/256/10944/10944356.png"></img> </a>
        </div>

        <a href="/goods8"> <img className="item27" src="https://cdn-icons-png.flaticon.com/256/10944/10944356.png"></img> </a> 


        <div className="footer111"></div>

        <div className="vestaft11">STUDENTS</div>
            
        <div className="line211"></div>
        <div className="line311"></div>
        <div className="line411"></div>
        <div className="textft112">ПОМОЩЬ</div>
        <div className="textft1112">ЗАХОДИТЕ К НАМ</div>
        <div className="textft211">ПРИСОЕДИНЯЙТЕСЬ</div>

        <div className="textft311">Политика универа></div>
        <div className="textft411">Информация ></div>
        <div className="textft511">Контакты ></div>
        <div className="textft611">О нас ></div>
        <div className="textft711">Yessenov university, 31-й мкр,1</div>
        <div className="textft811">130000, Актау</div>
        <div>
        <img className="item6011" src="https://static.wixstatic.com/media/8cabc8e4a93c458bbf6508caed8ad7d2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8cabc8e4a93c458bbf6508caed8ad7d2.png" alt="picture"/>
        </div>

        <div>
        <img className="item6111" src="https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3470ec8ca26475da4b228f0199b5d3d.png" alt="picture"/>
        </div>

        <div>
        <img className="item6211" src="https://static.wixstatic.com/media/7177d158c36d432b93f51e54f80e2f3c.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7177d158c36d432b93f51e54f80e2f3c.png" alt="picture"/>
        </div>

        <div>
        <img className="item6311" src="https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7ffe259c9e54f59837481b3dd0130eb.png" alt="picture"/>
        </div>
        </section>
    )
}

export default Collection;