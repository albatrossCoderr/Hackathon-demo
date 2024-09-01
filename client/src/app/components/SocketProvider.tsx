"use client";
import React, { createContext, useMemo, useContext } from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = Socket | null;

const SocketContext = createContext<SocketContextType>(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props: any) => {
  const socket = useMemo(
    () =>
      io(
       "wss://hackathon-server-gamma.vercel.app",
        {
          withCredentials: true,
        }
      ),
    []
  );

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
