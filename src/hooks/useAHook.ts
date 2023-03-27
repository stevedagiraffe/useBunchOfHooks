import * as React from 'react';

export type LoadableHookReturn = {
    loading: boolean;
};

export type UseFooHookReturn = LoadableHookReturn & {
    value: number;
    setValue: (newValue: number) => void;
};

export const useFooHook = (initial?: number): UseFooHookReturn => {
    const [value, setValue] = React.useState(initial || 0);

    console.log('called Foo!');

    return {
        value,
        setValue,
        loading: false,
    };
};

export type UseBarHookReturn = LoadableHookReturn & {
    stringo: string;
    setStringo: (newValue: string) => void;
};

export const useBarHook = (): UseBarHookReturn => {
    const [stringo, setStringo] = React.useState('E');

    console.log('called Bar!');

    return {
        stringo,
        setStringo,
        loading: stringo.length < 5,
    };
}

export type UseBazHookReturn = LoadableHookReturn & {
    obji: {
        dog: string;
        money: number
    };
    setObji: (newValue: {
        dog: string;
        money: number
    }) => void;
};

export const useBazHook = (): UseBazHookReturn => {
    const [obji, setObji] = React.useState({
        dog: 'bark',
        money: 24.5
    });

    console.log('called Baz!');

    return {
        obji,
        setObji,
        loading: obji.money < 30
    };
}