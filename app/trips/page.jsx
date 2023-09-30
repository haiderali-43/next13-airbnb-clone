import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import { getCurrentUser } from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }
  const reservation = await getReservations({
    userId: currentUser.id,
  });
  if (reservation.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Look likes you haven't reserve any trip"
        />
      </ClientOnly>
    );
  }
  return(
    <ClientOnly>
        <TripsClient reservations={reservation} currentUser={currentUser}/>
    </ClientOnly>
  )
};

export default TripPage;
