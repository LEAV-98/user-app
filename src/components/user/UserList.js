import React from "react";
import { UserItem } from "./UserItem";

export const UserList = ({ orders }) => {
  return (
    <div className="list-ordenes">
      {orders.map((order, i) => (
        <UserItem order={order} key={order.id} />
      ))}
    </div>
  );
};
