"use client";
import React, { useState } from "react";
import AddNewModal from "./AddNewModal";

const AddressBookHeading = () => {
  const [showAddNewContactModal, setShowAddNewContactModal] =
    useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between p-10 rounded-lg">
      <div className="text-white text-2xl px-2 py-1">
        <h1>Address Book</h1>
      </div>
      <div className="text-white border-2 rounded-lg px-2 py-1">
        <button
          onClick={() => setShowAddNewContactModal(!showAddNewContactModal)}
        >
          Add
        </button>
      </div>
      {showAddNewContactModal && (
        <AddNewModal
          isOpen={showAddNewContactModal}
          setIsOpen={setShowAddNewContactModal}
        />
      )}
    </div>
  );
};

export default AddressBookHeading;
