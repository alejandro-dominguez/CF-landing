import place from '../../assets/ubicacion.svg';
import mail from '../../assets/mail.svg';
import phone from '../../assets/telefono.svg';

const Contact = ({ contactSection }) => {
    return (
        <div ref={contactSection} className="w-full px-16 mt-12">
            <div className="contactSectionContainer bg-[#009bb4] h-[41rem] relative grid place-items-center">
                <div className="absolute w-full top-0 opacity-20 h-[41rem]">
                    <img src="https://i.ibb.co/tM9VjBZ/OVERLAND-1412153.jpg" alt="CFORCE" className='w-full h-[41rem] block
                    object-cover object-center scale-x-[-1]' />
                </div>
                <form className='grid place-items-center z-10 absolute w-2/3 bg-white rounded-md shadow-xl'>
                    <div className="flex flex-col items-start justify-start pt-14 pb-8 pl-64 pr-8 w-full">
                        <h4 className='uppercase text-2xl font-black tracking-[0.018rem] font-RobotoSlab mb-3'>
                            déjanos tu mensaje
                        </h4>
                        <div className="flex gap-14">
                            <div className="flex flex-col">
                                <label className='font-semibold text-[#009bb4] text-lg mt-4'>Nombre</label>
                                <input required placeholder="Nombre completo" name="formName" type="text" 
                                className='border-b-2 border-[#009bb4] shadow-sm p-2' />
                            </div>
                            <div className="flex flex-col">
                                <label className='font-semibold text-[#009bb4] text-lg mt-4'>Teléfono</label>
                                <input required placeholder="Número de contacto" name="formPhone" type="tel" 
                                className='border-b-2 border-[#009bb4] shadow-sm p-2' />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className='font-semibold text-[#009bb4] text-lg mt-4'>Email</label>
                            <input required placeholder="Dirección de correo" name="formEmail" type="email" 
                            className='border-b-2 border-[#009bb4] shadow-sm p-2' />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className='font-semibold text-[#009bb4] text-lg mt-4'>Mensaje</label>
                            <textarea name="formMessage" cols="30" rows="10" required placeholder="Escribe tu mensaje aquí"
                            className='mt-2 p-2 w-3/4 h-32 outline-none resize-none border-b-2
                            border-[#009bb4] shadow-sm' />
                        </div>
                    </div>
                    <button type="submit" className='ml-64 mb-14 px-6 py-2 place-self-start bg-[#0a68cb] text-white text-sm tracking-widest
                     drop-shadow-md uppercase font-RobotoSlab hover:bg-[#009bb4] focus:bg-[#009bb4] transition-colors'>
                        Enviar
                    </button>
                </form>
                <div className="absolute w-[30%] bg-[#02437f] h-[22rem] left-14 z-10 rounded-md shadow-lg grid place-items-center">
                    <div className="flex flex-col items-start justify-center gap-6">
                        <h5 className='uppercase text-white/90 font-semibold text-lg leading-6 tracking-wide'>
                            información
                            <br />
                            de contacto
                        </h5>
                        <div className="flex items-end text-white/90 gap-6 mt-2">
                            <img src={place} alt="ubicación" className='h-8 block' />
                            <p className='text-sm'>Av. Eva Perón 5616</p>
                        </div>
                        <div className="flex items-end text-white/90 gap-6">
                            <img src={mail} alt="email" className='h-8 block' />
                            <p className='text-sm'>info@sportadventure.com.ar</p>
                        </div>
                        <div className="flex items-end text-white/90 gap-6">
                            <img src={phone} alt="email" className='h-8 block' />
                            <p className='text-sm'>3417 4845 29</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
