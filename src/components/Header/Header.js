import React from 'react'
import QuestionsList from '../QuestionsList/QuestionsList'
import s from './header.module.scss'

const Header = ({ currentQuestion, score }) => {
    return (
        <header className={s.header}>
            <div className={s.logoScore}>
                <div className={s.logo}>
                    <img src={'https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg'} alt='' />
                </div>

                <div className={s.score}>
                    <h3>Score: {score}</h3>
                </div>
            </div>

            <QuestionsList currentQuestion={currentQuestion} />
        </header>
    )
}

export default Header