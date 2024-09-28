import { AutoEncryptionLoggerLevel } from "mongodb";
import Image from "next/image";
import React from "react";

interface ChangeProps{
    backgroundImage: string;
    title: string;
    subtitle: string; 
}

const ChangeImages = ({backgroundImage, title, subtitle}: ChangeProps) =>{
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-opacity-35 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}>
            <div className="flex h-full flex-col items-start jusitfy-between p-6 lg:px-20 lg:py-10 ">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-yellow-120 p-4 ">
                        <Image 
                        src= "/construction.svg"
                        alt="construction-icon"
                        width={28}
                        height={28}
                        className="h-auto"
                        />

                    </div>
                    <div className="flex flex-col gap-1 ">
                        <h4 className="bold-18 text-neutral-800">{title}</h4>
                        <p className=" text-black regular-14 bold-16">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PhotoMontage = () => {
  return (
    <section className=' 2xl:max-container relaitve flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 bg-pattern patterBGStyles  '>
        <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg: h-[400px] xl:h-[640px]'>
            <ChangeImages 
                backgroundImage="bg-bg-img-1"
                title= "9/21/22 - Bookshelf Remodeling "
                subtitle="~6 Month Turnaround"
            />
            <ChangeImages 
                backgroundImage="bg-bg-img-2"
                title= "12/24/23 - Garage Remodeling"
                subtitle="~3 Month Turnaround"
            />
            <ChangeImages 
                backgroundImage="bg-bg-img-4"
                title= "12/24/23 - Full Gym Remodel"
                subtitle="~3 Month Turnaround"
            />
            <ChangeImages 
                backgroundImage="bg-bg-img-5"
                title= "12/24/23 - Pool Addition"
                subtitle="~3 Month Turnaround"
            />
            <ChangeImages 
                backgroundImage="bg-bg-img-6"
                title= "12/24/23 - Kitchen Refresh"
                subtitle="~3 Month Turnaround"
            />

   
        </div>
        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
            <div className="bg-MainColorGray p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                <h2 className="text-MainColorOrange regular-24 md:regular-32 2xl: regular-64 capitalize">“From <strong>Dream</strong> to <strong>Reality</strong>"</h2>
                <p className="regular-14 xl:regular-16 mt-5 text-white">Reality Reimagined with Quality Work Construction. We specialize in transforming Chicago’s apartments into bespoke living spaces that reflect your individuality. From the sleek lines of urban lofts to the timeless elegance of vintage flats, we promise excellence and a true partnership from dream to reality.</p>
                <Image 
                    src="/quote.svg"
                    alt="sourceQuote"
                    width={189}
                    height={219}
                    className="camp-quote"
                />
            </div>
        </div>
    </section>
  )
}

export default PhotoMontage