import React, { createContext, useContext, useState, ReactNode } from "react";

type CustomerInfoContextType = {
  collectDate: Date | null;
  setCollectDate: React.Dispatch<React.SetStateAction<Date | null>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  contactNumber: string;
  setContactNumber: React.Dispatch<React.SetStateAction<string>>;
  filterPassedTime: (time: Date) => boolean;
  isFilledInfo: boolean;
};

const CustomerInfoContext = createContext<CustomerInfoContextType | undefined>(
  undefined
);

type CustomerInfoProviderProps = { children: ReactNode };

function CustomerInfoProvider({ children }: CustomerInfoProviderProps) {
  const [collectDate, setCollectDate] = useState<Date | null>(new Date());
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");

  const isFilledInfo = !!name && !!email && !!collectDate && !!contactNumber;

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    return currentDate.getTime() < time.getTime();
  };

  return (
    <CustomerInfoContext.Provider
      value={{
        collectDate,
        setCollectDate,
        name,
        setName,
        email,
        setEmail,
        contactNumber,
        setContactNumber,
        filterPassedTime,
        isFilledInfo,
      }}
    >
      {children}
    </CustomerInfoContext.Provider>
  );
}

function useCustomerInfo(): CustomerInfoContextType {
  const context = useContext(CustomerInfoContext);
  if (context === undefined) {
    throw new Error(
      "useCustomerInfo must be used within a CustomerInfoProvider"
    );
  }
  return context;
}

export { CustomerInfoProvider, useCustomerInfo };
