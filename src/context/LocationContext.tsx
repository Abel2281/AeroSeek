import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";



interface LocationData {
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

interface LocationContextType {
  location: LocationData | null;                    
  setLocation: React.Dispatch<React.SetStateAction<LocationData | null>>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationData | null>(null);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error("useLocationContext must be used within LocationContextProvider");
  return context;
};
