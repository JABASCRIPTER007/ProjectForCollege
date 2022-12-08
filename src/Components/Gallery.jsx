import React, {useState} from 'react';
import './StyleForComponents/Gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import Photo1 from './Photo/Photo1.jpg'
import Photo2 from './Photo/Photo2.jpg'
import Photo3 from './Photo/Photo3.jpg'
import Photo4 from './Photo/Photo4.jpg'
import Photo5 from './Photo/Photo5.jpg'
import Photo6 from './Photo/Photo6.jpg'



export function Gallery() {
    let data = [
        {
            id: 1,
            imgSrc: Photo1,
        },
        {
            id: 2,
            imgSrc: Photo2,
        },
        {
            id: 3,
            imgSrc: Photo3,
        },

        {
            id: 4,
            imgSrc: Photo4,
        },

        {
            id: 5,
            imgSrc: Photo5,
        },

        {
            id: 6,
            imgSrc: Photo6,
        },
    ]
    const [model, setModel] = useState (false);
    const [tempimgSrc, setTempImgSrc] = useState('');


    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={()=> setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item, index)=> {
                    return (
                        <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                            <img src={item.imgSrc} />
                        </div>
                    )
                    })}
            </div>

        </>
    )
}
