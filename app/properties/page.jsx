import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import { getCurrentUser } from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import PropertyClient from "./PropertyClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }
  const listings = await getReservations({
    userId: currentUser.id,
  });
  if (reservation.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Look likes you have no property"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertyClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
