export type Action = { type?: string; payload?: any };
// export type Action = { type: string; payload?: object };
export type Dispatch = (action: any) => void;

export type State<T> = {
  catalog?: any;
  user?: any;
  isLogged?: any;
};

export type ProviderProps = { children: React.ReactNode };
