import { useEffect, useRef, useState } from "react";
import { Tab1, Tab2, Tab3 } from "../" ;

const TabsContainer = ({ tabIndex, setTabIndex, tabSection }) => {
    const tabContent = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const animateOnScroll = (entries) => {
        entries.forEach(entry => {
            !entry.isIntersecting ? null : setIsVisible(true)
        })
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(animateOnScroll, options)
        if (tabContent.current) observer.observe(tabContent.current)
        
        return () => {
            if (tabContent.current) observer.unobserve(tabContent.current)
        }
    }, [tabContent, options])
    
    return (
        <div className='flex flex-col items-center justify-start' ref={tabSection}>
            <div className="flex flex-col w-full justify-center items-center px-16 mt-11">
                <h1>Modelos</h1>
                <ul className="flex justify-evenly items-center w-full mt-11 font-bold text-2xl relative">
                    <li className='flex flex-col relative'>
                        <button type='button' className={tabIndex === 1 ? `w-[4.75rem] uppercase activeTab relative
                        bg-slate-100 tracking-wider` : "w-[4.75rem] uppercase tab relative bg-slate-100 tracking-wider"}
                        onClick={() => setTabIndex(1)}>
                            atv
                        </button>
                    </li>
                    <li className='flex flex-col relative'>
                        <button type='button' className={tabIndex === 2 ? `w-[4.75rem] uppercase activeTab relative
                        bg-slate-100 tracking-wider` : "w-[4.75rem] uppercase tab relative bg-slate-100 tracking-wider"}
                        onClick={() => setTabIndex(2)}>
                            utv
                        </button>
                        <div className="flex self-center justify-self-center h-[117%] gap-80 absolute -z-[1]">
                            <div className="w-[4px] bg-neutral-800" />
                            <div className="w-[4px] bg-neutral-800" />
                        </div>
                    </li>
                    <li className='flex flex-col relative'>
                        <button type='button' className={tabIndex === 3 ? `w-[4.75rem] uppercase activeTab relative
                        bg-slate-100 tracking-wider` : "w-[4.75rem] uppercase tab relative bg-slate-100 tracking-wider"}
                        onClick={() => setTabIndex(3)}>
                            ssv
                        </button>
                    </li>
                </ul>
                <section className={isVisible ? 'w-full mt-16 opacity-100 translate-y-0 transition-all ease-out duration-[1250ms]' :
                'w-full mt-16 opacity-0 translate-y-16 transition-all ease-out duration-[1250ms]'} ref={tabContent}>
                    {tabIndex === 1 ? <Tab1 /> :
                    tabIndex === 2 ? <Tab2 /> :
                    tabIndex === 3 ? <Tab3 /> :
                    null}
                </section>
            </div>
        </div>
    )
}

export default TabsContainer;
