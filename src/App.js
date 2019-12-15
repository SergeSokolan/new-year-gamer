import React, { PureComponent } from 'react';
import './App.css';
import { contestData } from './data'

export class App extends PureComponent {
  render() {
    const winnerList = contestData.map(item => {
     
      const prizes = item.prizes.map(prize => {
        const winners = prize.winners.map(name => <li className="nick">{name}</li>)

        return (
        <div className="prize">
          <h3 className="prize-name">{prize.prizeName}</h3>
          <ul className="nicknames">{winners}</ul>
        </div>
       ) 
      });

      return (
        <section>
          <h2 className="contest-name">{item.contestName}</h2>
          <div>{prizes}</div>
        </section>
      )
    });

    return (
    <div className="main-content">
      <header className="logo"></header>
      <main className="winners">
      <div className="title">Победители</div>
        {winnerList}
      </main>
      <footer className="footer">
        <div>
          <span className="copyright">© 2019 ПАО «Ростелеком»</span>
          <div>
            <a className="social-icon vk" target="_blank" href="https://vk.com/rostelecom"></a>
            <a className="social-icon twitch" target="_blank" href="https://m.twitch.tv/rostelecom_official/profile"></a>
          </div>
         </div>
         <a className="rules" target="_blank" href="https://docs.google.com/document/d/1lqf_dpkqU4tMK5s31uP2kIAIUl0S8-PHP66JulfvMlo/edit?folder=1su5OBnWvd-i1cKgEZluYBwKHthkSlzrR">Правила конкурса</a>
      </footer>
    </div>
    )
  
  }
}

export default App;
