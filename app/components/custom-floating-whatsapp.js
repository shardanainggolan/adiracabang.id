// import '../../public/css/floating-whatsapp.css'
import '../../public/css/floating-wa.css'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa6";

export default function CustomFloatingWhatsapp() {
    return (
        <div className="wh-api !z-[9999]">
            <Link 
                href="https://wa.me/62895424249065?text=Halo%20Adira%20Cabang" 
                className="float" 
                target="_blank">
                <FaWhatsapp className="wab mx-auto text-[35px]" />
                {/* <i className="fa fa-whatsapp my-float"></i> */}
            </Link>
            {/* <div className="wh-fixed whatsapp-pulse">
                <Link 
                    href="https://wa.me/62895424249065?text=Halo%20Adira%20Cabang"
                    target="_blank"
                    aria-label="Hubungi Whatsapp Adiracabang.id">
                    <button className="wh-ap-btn" aria-label="Hubungi Whatsapp Adiracabang.id"></button>
                </Link>
            </div> */}
        </div>
    )
}