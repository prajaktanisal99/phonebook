"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";

const AddNewModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [suite, setSuite] = useState("");
  const [street, setStreet] = useState("");

  const inputStyle = "focus:bg-slate-200 p-2"
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-800 items-center justify-center">
        <DialogPanel className="bg-black text-white border-2 p-12 flex flex-col justify-between">
          <DialogTitle className="font-bold">Add new contact</DialogTitle>
          <div className="flex flex-col gap-4 justify-evenly py-10">
            <input
              className={inputStyle}
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
            className={inputStyle}
              type="text"
              value={phone}
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <input
            className={inputStyle}
              type="text"
              value={suite}
              placeholder="suite"
              onChange={(e) => setSuite(e.target.value)}
            ></input>
            <input
            className={inputStyle}
              type="text"
              value={street}
              placeholder="street"
              onChange={(e) => setStreet(e.target.value)}
            ></input>
            <input
            className={inputStyle}
              type="string"
              value={city}
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input
            className={inputStyle}
              type="text"
              value={zipCode}
              placeholder="zipCode"
              onChange={(e) => setZipCode(e.target.value)}
            ></input>
          </div>
          <div className="flex gap-10 justify-around align-bottom">
            <button
              className="p-2 rounded-lg text-black bg-red-100 hover:bg-red-400"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="p-2 rounded-lg text-black bg-green-100 hover:bg-green-400"
              onClick={() => {
                console.log("Hello World!");
                setIsOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddNewModal;
