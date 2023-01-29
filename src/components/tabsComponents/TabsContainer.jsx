import { Tab1, Tab2, Tab3 } from "../" ;

const TabsContainer = ({ tabIndex, setTabIndex }) => {
    return (
        <div className='flex flex-col items-center justify-start'>
            <div className="flex flex-col w-full justify-center items-center px-16 mt-14">
                <h1 className='tracking-tight'>Modelos</h1>
                <ul className="flex justify-evenly w-full mt-10 font-bold text-2xl">
                    <li className='flex flex-col'>
                        <button type='button' className={tabIndex === 1 ? "w-fit uppercase activeTab relative bg-slate-100"
                        : "w-fit uppercase tab relative bg-slate-100"}
                        onClick={() => setTabIndex(1)}>
                            cforce
                        </button>
                    </li>
                    <li className='flex flex-col'>
                        <button type='button' className={tabIndex === 2 ? "w-fit uppercase activeTab relative bg-slate-100"
                        : "w-fit uppercase tab relative bg-slate-100"}
                        onClick={() => setTabIndex(2)}>
                            uforce
                        </button>
                    </li>
                    <li className='flex flex-col'>
                        <button type='button' className={tabIndex === 3 ? "w-fit uppercase activeTab relative bg-slate-100"
                        : "w-fit uppercase tab relative bg-slate-100"}
                        onClick={() => setTabIndex(3)}>
                            zforce
                        </button>
                    </li>
                </ul>
                {tabIndex === 1 ? <Tab1 /> :
                tabIndex === 2 ? <Tab2 /> :
                tabIndex === 3 ? <Tab3 /> :
                null}
            </div>
        </div>
    )
}

export default TabsContainer;
