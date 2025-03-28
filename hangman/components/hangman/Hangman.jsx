import level1 from '../../src/assets/1.svg'
import level2 from '../../src/assets/2.svg'
import level3 from '../../src/assets/3.svg'
import level4 from '../../src/assets/4.svg'
import level5 from '../../src/assets/5.svg'
import level6 from '../../src/assets/6.svg'
import level7 from '../../src/assets/7.svg'
import level8 from '../../src/assets/8.svg'

import { useEffect, useState } from 'react'

function Hangman({step}){

    const images = [level1, level2, level3, level4, level5, level6, level7, level8]

    return (
        <>
         <div className='w-[300px] h-[300px]'>
           <img src={step >= images.length ? images[images.length - 1] : images[step]} />
         </div>
        </>
    )

}


export default Hangman;
