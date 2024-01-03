type ExternalStateType<T> = {
    prop?: T;
    defaultProp?: T;
    handler?: (state: T) => void;
};
export declare function useExternalState<T>({ prop, defaultProp, handler, }: ExternalStateType<T>): readonly [T | undefined, (handledValue: T | ((prevState?: T) => T)) => void];
export {};
