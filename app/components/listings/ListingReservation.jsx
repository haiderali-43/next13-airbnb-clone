"use client";

import Calender from "../inputs/Calender";
import Button from "../Button";

const ListingReservation = ({
  price,
  disableDates,
  dateRange,
  onChangeDate = () => {},
  onSubmit,
  totalPrice,
  disabled,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disableDates={disableDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between text-lg font-semibold">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
