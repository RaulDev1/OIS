import React from "react";
import "./goods.css";
import react, { useState } from 'react';

const Goods5 = () => {
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
                 <button className="counter2" onClick={increment}>Добавить в корзину</button>
                 <button className="counter3" onClick={decrement}>Удалить из корзины</button>
                 <div className="stick"></div>
                 <div className="depiction">Главная / Студенты /</div>
         <div className="depiction1">Студент Агаев Рауль</div>
         <div>
        <img className="image1" src="https://static.wixstatic.com/media/84770f_2c647846e52d4b5d9cc3a6e1e8e38ba5.png/v1/fill/w_417,h_417,al_c,q_90,usm_0.66_1.00_0.01/84770f_2c647846e52d4b5d9cc3a6e1e8e38ba5.webp" alt="picture"/>
        </div>
        <div className="depiction2">Ваш товар</div>
        <div className="depiction3">Артикул: 0024</div>
        <div className="depiction4">₪1,999.00</div>
        <div className="depiction5">₪1,499.25</div>
        <div className="depiction6">Оценить студента</div>
        <div className="depiction8">Это описание товара. Здесь вы можете рассказать о товаре подробнее:</div>
        <div className="depiction9">напишите о размерах, материалах, уходе и любых других важных</div>
        <div className="depiction10">моментах.</div>
        <div className="depiction11">О ТОВАРЕ</div>
        <div className="depiction12">Это информация о товаре. Расскажите</div>
        <div className="depiction13">подробно, что он из себя представляет, и</div>
        <div className="depiction14">перечислите всю необходимую</div>
        <div className="depiction15">информацию: размеры, материалы,</div>
        <div className="depiction16">инструкции по уходу и т. д. Это также</div>
        <div className="depiction17">хорошая возможность сообщить, в чем</div>
        <div className="depiction18">особенность вашей продукции и какую</div>
        <div className="depiction19">выгоду покупатели получат в итоге.</div>
        <div className="depiction20">Подробные сведения о товаре помогут</div>
        <div className="depiction21">вашим посетителям определиться с</div>
        <div className="depiction22">покупкой.</div>
        <div className="line1"></div>
        <div className="depiction23">ПОЛИТИКА ВОЗВРАТА</div>
        <div className="depiction24">Это правила и условия возврата товара и</div>
        <div className="depiction25">денег. Расскажите посетителям, что нужно</div>
        <div className="depiction26">сделать, если они захотят вернуть товар и</div>
        <div className="depiction27">получить назад свои деньги. Четкая и ясная</div>
        <div className="depiction28">политика возврата — это хороший способ</div>
        <div className="depiction29">построить доверительные отношения с</div>
        <div className="depiction30">клиентами.</div>

        <div>
        <img className="item50" src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5302_-_Whatsapp-512.png" alt="picture"/>
        </div>

        <div>
        <img className="item51" src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4" alt="picture"/>
        </div>

        <div>
        <img className="item52" src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale" alt="picture"/>
        </div>

        <div>
        <img className="item53" src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202077logopinterestsocialsocialmedia-115611_115690.png" alt="picture"/>
        </div>

        <div className="selecter1">
        <select>
             <option>Выбрать</option>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
         </select>
        </div>

        <div className="depiction7">Количество</div>

        <div className="footer1"></div>

        <div className="vestaft">STUDENTS</div>
            

        <button className="submit1" type="submit">Добавить в корзину</button>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="textft">ПОМОЩЬ</div>
        <div className="textft1">ЗАХОДИТЕ К НАМ</div>
        <div className="textft2">ПРИСОЕДИНЯЙТЕСЬ</div>

        <div className="textft3">Политика универа ></div>
        <div className="textft4">Информация ></div>
        <div className="textft5">Контакты ></div>
        <div className="textft6">О нас ></div>
        <div className="textft7">Yessenov university, 31-й мкр,1</div>
        <div className="textft8">130000, Актау</div>
        <div>
        <img className="item60" src="https://static.wixstatic.com/media/8cabc8e4a93c458bbf6508caed8ad7d2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8cabc8e4a93c458bbf6508caed8ad7d2.png" alt="picture"/>
        </div>

        <div>
        <img className="item61" src="https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3470ec8ca26475da4b228f0199b5d3d.png" alt="picture"/>
        </div>

        <div>
        <img className="item62" src="https://static.wixstatic.com/media/7177d158c36d432b93f51e54f80e2f3c.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7177d158c36d432b93f51e54f80e2f3c.png" alt="picture"/>
        </div>

        <div>
        <img className="item63" src="https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7ffe259c9e54f59837481b3dd0130eb.png" alt="picture"/>
        </div>

           
        
        </section>
    )
}

export default Goods5;