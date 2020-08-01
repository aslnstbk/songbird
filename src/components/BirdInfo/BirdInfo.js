import React, { useState, useEffect } from 'react'
import s from './info.module.scss'
import bird from '../../assets/images/bird.jpg'
import Audioplayer from '../Audioplayer/Audioplayer'

const BirdInfo = ({ bird, rightAnswer }) => {
    const [answer, setAnswer] = useState(false)

    useEffect(() => {
        setAnswer(rightAnswer)
    }, [rightAnswer])

    return (
        <div className={s.birdInfo}>
            { answer ? (
                <div className={s.bird}>
                    <div className={s.info}>
                        <div className={s.image}>
                            <img src={bird.image} alt='' />
                        </div>

                        <div className={s.birdName}>
                            <h1>{bird.name}</h1>
                            <p className={s.englishName}>{bird.species}</p>
                        </div>
                    </div>

                    <div className={s.audioplayer}>
                        <Audioplayer audio={bird.audio} />
                    </div>

                    <div className={s.desc}>
                        <p>{bird.description}</p>
                    </div>
                </div>
            ) : (
                <p>Послушайте плеер.<br/>Выберите птицу из списка</p>        
            )}
        </div>
    )
}

export default BirdInfo
