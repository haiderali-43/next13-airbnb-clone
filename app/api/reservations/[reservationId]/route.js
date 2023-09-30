import {NextResponse} from 'next/navigation'
import prisma from '../../../libs/prismadb'
import { getCurrentUser } from '../../../actions/getCurrentUser'


export async function DELETE(request,{parms}){
    const currentUser = await getCurrentUser()
    if(!currentUser){
        return NextResponse.error()
    }

    const {reservationId} = parms

    if(!reservationId || typeof reservationId !== 'string'){
        throw new Error('Invalid Id')
    }

    const reservation = await prisma.reservation.deleteMany({
        where:{
            id: reservationId,
            OR:[
                {userId: currentUser.id},
                {listingId: {userId: currentUser.id}}
            ]
        }
    })
    return NextResponse.json(reservation)

}