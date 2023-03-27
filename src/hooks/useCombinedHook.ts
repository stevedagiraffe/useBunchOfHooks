import { LoadableHookReturn, useBarHook, useBazHook, useFooHook } from "./useAHook";

const hooks = {
    foo: useFooHook,
    bar: useBarHook,
    baz: useBazHook,
};

export type InitialisationData = {
    allInitialised: boolean;
    storeCount: number;
}

type HookList = typeof hooks & { initialisationData: InitialisationData; };

type FunctionReturns = {
    [K in keyof HookList]: HookList[K] extends () => void ? ReturnType<HookList[K]> : HookList[K];
};

export const useCombinedHook = (initial?: number): FunctionReturns => {
    const hookRepo: HookList = {
        ...hooks,
        initialisationData: {
            allInitialised: true,
            storeCount: 0
        },
    };

    const proxy = new Proxy(hookRepo, {
        get: (target, property) => {
            if (property in target && typeof target[property as keyof HookList] === 'function') {
                const hook = target[property as keyof HookList] as any;

                const result = hook(initial) as unknown as LoadableHookReturn;

                target.initialisationData.allInitialised = target.initialisationData.allInitialised && !result.loading
                target.initialisationData.storeCount++;

                return result;
            }

            return target[property as keyof HookList];
        }
    });

    return proxy as unknown as FunctionReturns;
}