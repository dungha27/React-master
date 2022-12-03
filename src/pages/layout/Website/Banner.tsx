import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
    <div><div className="sm:mx-auto sm:container px-6 xl:px-0">
    <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
        <div className="hidden md:block">
            <img className="" src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/236102607_1192990021180585_4676824981824306998_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=bDPNgCq1r-AAX-nFjsp&_nc_ht=scontent.fhan3-3.fna&oh=00_AfA9m89OdzawCb1XQAg0AYkzw8nCek7mwSoepmLFoJmHFw&oe=63909AC4" alt="" />
        </div>
        <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
            <div className="">
                <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">BIG SALE</h1>
            </div>
            <div className="mt-8 flex justify-center items-center w-full">
            <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">50%</h1>

            </div>
        </div>
        <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
            {/* <div className="w-full">
                <img className="" src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/237089619_2636182543350051_5927396335622179438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=ft8nlXS5bakAX9UnDZG&_nc_ht=scontent.fhan4-2.fna&oh=00_AfAWElFjlDeezD1iUgPbjMoi0LVuO3_VkagEegyWkBvrzA&oe=638F8F1E" alt="" />
            </div> */}
            {/* <div className="md:hidden w-full">
                <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
            </div> */}
        </div>
    </div>
</div>

</div>
    )
}

export default Banner