import { Link } from "react-router-dom";
import img from "../images/Diablo_Coverart.png";
import React from 'react';
import './gamebar.css';

const GameBar = () => {

  return (
    <section className='games'>
        <section className='title'>Najpopularniejsze gry</section>
        <section className='hmmm'>
            <div className="kayah">
            <img className="iamges" src={img} alt="" />
                <p className="zdups">Diablo 1996</p>
                <p className="zdups">RPG</p>
                <p className="zdups">4.3/5</p>
            </div>
            <div className="kayah">
            <img className="iamges" src={img} alt="" />
            <p className="zdups">Diablo 1996</p>
                <p className="zdups">RPG</p>
                <p className="zdups">4.3/5</p>
            </div>
            <div className="kayah">
            <img className="iamges" src={img} alt="" />
                <p className="zdups">Diablo 1996</p>
                <p className="zdups">RPG</p>
                <p className="zdups">4.3/5</p>
            </div>
            <div className="kayah">
            <img className="iamges" src={img} alt="" />
                <p className="zdups">Diablo 1996</p>
                <p className="zdups">RPG</p>
                <p className="zdups">4.3/5</p>
            </div>
        </section>
        <div className="space">
            <Link className="link lajt">zobacz więcej gier</Link>
        </div>
    </section>
  );
};

export default GameBar;