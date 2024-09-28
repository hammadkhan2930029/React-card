import "./style.css"
import{AiOutlineHeart} from "react-icons/ai"

const Card = ({title,image,price,location, duration}) => {
    return (
        <div className="card">
            <div className="image"><img src={image} alt="" /></div>


            <div className="content">
                <div className="row" >
                    <div className="text"><span>{title} </span></div>
                    <img className="icon" src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg" alt="" />
                </div>
                <div className="price">{price}</div>
                <div className="duration">
                    <span>{location} </span>
                    
                </div>

            </div>
        </div>
        
    )
}
export { Card};