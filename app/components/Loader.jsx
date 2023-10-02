'use client'

import {PuffLoader} from 'react-spinner'

const Loader= () => {
    return(
        <div className='h-[70vh] flex items-center justify-center'>
            <PuffLoader size={100} color='red' />
        </div>
    )
}