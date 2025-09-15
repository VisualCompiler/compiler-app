type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare interface KtList<E> /* extends Collection<E> */ {
    asJsReadonlyArrayView(): ReadonlyArray<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtList": unique symbol;
    };
}
export declare abstract class KtList<E> extends KtSingleton<KtList.$metadata$.constructor>() {
    private constructor();
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace KtList.$metadata$ {
    abstract class constructor {
        fromJsArray<E>(array: ReadonlyArray<E>): KtList<E>;
        private constructor();
    }
}
export declare abstract class NodeType {
    private constructor();
    static get Program(): NodeType & {
        get name(): "Program";
        get ordinal(): 0;
    };
    static get Statement(): NodeType & {
        get name(): "Statement";
        get ordinal(): 1;
    };
    static get Function(): NodeType & {
        get name(): "Function";
        get ordinal(): 2;
    };
    static get Expression(): NodeType & {
        get name(): "Expression";
        get ordinal(): 3;
    };
    static get ASTNode(): NodeType & {
        get name(): "ASTNode";
        get ordinal(): 4;
    };
    static get Block(): NodeType & {
        get name(): "Block";
        get ordinal(): 5;
    };
    get name(): "Program" | "Statement" | "Function" | "Expression" | "ASTNode" | "Block";
    get ordinal(): 0 | 1 | 2 | 3 | 4 | 5;
    static values(): Array<NodeType>;
    static valueOf(value: string): NodeType;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace NodeType.$metadata$ {
    const constructor: abstract new () => NodeType;
}
export declare abstract class CompilationOutput {
    protected constructor();
    abstract get stage(): string;
    abstract get errors(): Array<CompilationError>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CompilationOutput.$metadata$ {
    const constructor: abstract new () => CompilationOutput;
}
export declare namespace CompilationOutput {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor /* implements SerializerFactory */ {
            private constructor();
        }
    }
}
export declare class LexerOutput extends CompilationOutput.$metadata$.constructor {
    constructor(stage: string | undefined, tokens: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): string;
    get tokens(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: string, tokens?: Nullable<string>, errors?: Array<CompilationError>): LexerOutput;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace LexerOutput.$metadata$ {
    const constructor: abstract new () => LexerOutput;
}
export declare namespace LexerOutput {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class ParserOutput extends CompilationOutput.$metadata$.constructor {
    constructor(stage: string | undefined, ast: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): string;
    get ast(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: string, ast?: Nullable<string>, errors?: Array<CompilationError>): ParserOutput;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace ParserOutput.$metadata$ {
    const constructor: abstract new () => ParserOutput;
}
export declare namespace ParserOutput {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class TackyOutput extends CompilationOutput.$metadata$.constructor {
    constructor(stage: string | undefined, tackyPretty: Nullable<string> | undefined, functionNames: Nullable<Array<string>> | undefined, optimizations: Nullable<Array<string>> | undefined, precomputedCFGs: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): string;
    get tackyPretty(): Nullable<string>;
    get functionNames(): Nullable<Array<string>>;
    get optimizations(): Nullable<Array<string>>;
    get precomputedCFGs(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: string, tackyPretty?: Nullable<string>, functionNames?: Nullable<Array<string>>, optimizations?: Nullable<Array<string>>, precomputedCFGs?: Nullable<string>, errors?: Array<CompilationError>): TackyOutput;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace TackyOutput.$metadata$ {
    const constructor: abstract new () => TackyOutput;
}
export declare namespace TackyOutput {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class AssemblyOutput extends CompilationOutput.$metadata$.constructor {
    constructor(stage: string | undefined, assembly: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): string;
    get assembly(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: string, assembly?: Nullable<string>, errors?: Array<CompilationError>): AssemblyOutput;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AssemblyOutput.$metadata$ {
    const constructor: abstract new () => AssemblyOutput;
}
export declare namespace AssemblyOutput {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class CompilationError {
    constructor(stage: string | undefined, message: string, line: number, column: number);
    get stage(): string;
    get message(): string;
    get line(): number;
    get column(): number;
    copy(stage?: string, message?: string, line?: number, column?: number): CompilationError;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CompilationError.$metadata$ {
    const constructor: abstract new () => CompilationError;
}
export declare namespace CompilationError {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class CompilationResult {
    constructor(outputs: Array<CompilationOutput>, overallSuccess: boolean, overallErrors: Array<CompilationError>);
    get outputs(): Array<CompilationOutput>;
    get overallSuccess(): boolean;
    get overallErrors(): Array<CompilationError>;
    toJsonString(): string;
    copy(outputs?: Array<CompilationOutput>, overallSuccess?: boolean, overallErrors?: Array<CompilationError>): CompilationResult;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CompilationResult.$metadata$ {
    const constructor: abstract new () => CompilationResult;
}
export declare namespace CompilationResult {
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Companion.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare class CompilerExport {
    constructor();
    exportCompilationResults(code: string): string;
    toJsonString(_this_: KtList<any/* Token */>): string;
    getCFGForFunction(precomputed: Nullable<string>, fn: string, enabledOpts: Array<string>): string;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CompilerExport.$metadata$ {
    const constructor: abstract new () => CompilerExport;
}
export declare abstract class TackyNodeType {
    private constructor();
    static get Program(): TackyNodeType & {
        get name(): "Program";
        get ordinal(): 0;
    };
    static get Function(): TackyNodeType & {
        get name(): "Function";
        get ordinal(): 1;
    };
    static get Instruction(): TackyNodeType & {
        get name(): "Instruction";
        get ordinal(): 2;
    };
    static get Value(): TackyNodeType & {
        get name(): "Value";
        get ordinal(): 3;
    };
    static get Variable(): TackyNodeType & {
        get name(): "Variable";
        get ordinal(): 4;
    };
    static get Constant(): TackyNodeType & {
        get name(): "Constant";
        get ordinal(): 5;
    };
    static get Label(): TackyNodeType & {
        get name(): "Label";
        get ordinal(): 6;
    };
    get name(): "Program" | "Function" | "Instruction" | "Value" | "Variable" | "Constant" | "Label";
    get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6;
    static values(): Array<TackyNodeType>;
    static valueOf(value: string): TackyNodeType;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace TackyNodeType.$metadata$ {
    const constructor: abstract new () => TackyNodeType;
}