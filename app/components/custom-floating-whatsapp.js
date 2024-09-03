import '../../public/css/floating-whatsapp.css'
import Link from 'next/link'

export default function CustomFloatingWhatsapp() {
    return (
        <div className="wh-api !z-[9999]">
            <div className="wh-fixed whatsapp-pulse">
                <Link 
                    href="https://wa.me/62895424249065?text=Halo%20Adira%20Cabang"
                    target="_blank">
                    <button className="wh-ap-btn"></button>
                </Link>
            </div>
        </div>
    )
}