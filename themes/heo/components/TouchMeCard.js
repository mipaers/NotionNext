
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }
  return (
        <div className={'relative h-28 text-white flex flex-col'}>

            <FlipCard
                className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#179fe3] dark:bg-yellow-600 dark:border-gray-600'
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-3xl'>{siteConfig('HEO_SOCIAL_CARD_TITLE_1', null, CONFIG)}</h2>
                        <h3 className='pt-2 font-[1000] tracking-widest'>{siteConfig('HEO_SOCIAL_CARD_TITLE_2', null, CONFIG)}</h3>
                        <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://bu.dusays.com/2023/05/16/64633c4cd36a9.png) center center no-repeat' }}></div>
                    </div>}
                backContent={<Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
                    <div className="h-full flex justify-center items-center text-3xl font-[1000]">
              <img src="https://s1.locimg.com/2024/08/26/228f8b570cf4e.jpg" alt="TG" className="w-16 h-16 object-cover rounded-full border-4 border-white mr-4" />
                        {siteConfig('HEO_SOCIAL_CARD_TITLE_3', null, CONFIG)}
                    </div>
                </Link>}
            />

        </div>
  )
}
