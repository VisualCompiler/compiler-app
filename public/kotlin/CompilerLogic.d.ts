type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare class JsonExport {
    constructor();
    exportCompilationResults(code: string): Array<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace JsonExport.$metadata$ {
    const constructor: abstract new () => JsonExport;
}