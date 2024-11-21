import { createContext } from "react";

interface ContextInterface {
    userName: string;
    setUserName: (s: string) => void;
}

export const AppContext = createContext<ContextInterface>({
    userName: '',
    setUserName: () => {}
});