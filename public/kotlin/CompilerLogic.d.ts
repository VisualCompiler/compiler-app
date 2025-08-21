type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare abstract class ErrorType {
    private constructor();
    static get LEXICAL(): ErrorType & {
        get name(): "LEXICAL";
        get ordinal(): 0;
    };
    static get SYNTAX(): ErrorType & {
        get name(): "SYNTAX";
        get ordinal(): 1;
    };
    static get CODE_GENERATION(): ErrorType & {
        get name(): "CODE_GENERATION";
        get ordinal(): 2;
    };
    static get RUNTIME(): ErrorType & {
        get name(): "RUNTIME";
        get ordinal(): 3;
    };
    static get GENERAL(): ErrorType & {
        get name(): "GENERAL";
        get ordinal(): 4;
    };
    get name(): "LEXICAL" | "SYNTAX" | "CODE_GENERATION" | "RUNTIME" | "GENERAL";
    get ordinal(): 0 | 1 | 2 | 3 | 4;
    static values(): Array<ErrorType>;
    static valueOf(value: string): ErrorType;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace ErrorType.$metadata$ {
    const constructor: abstract new () => ErrorType;
}
export declare abstract class CompilationStage {
    private constructor();
    static get LEXER(): CompilationStage & {
        get name(): "LEXER";
        get ordinal(): 0;
    };
    static get PARSER(): CompilationStage & {
        get name(): "PARSER";
        get ordinal(): 1;
    };
    static get TACKY(): CompilationStage & {
        get name(): "TACKY";
        get ordinal(): 2;
    };
    static get CODE_GENERATOR(): CompilationStage & {
        get name(): "CODE_GENERATOR";
        get ordinal(): 3;
    };
    get name(): "LEXER" | "PARSER" | "TACKY" | "CODE_GENERATOR";
    get ordinal(): 0 | 1 | 2 | 3;
    static values(): Array<CompilationStage>;
    static valueOf(value: string): CompilationStage;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CompilationStage.$metadata$ {
    const constructor: abstract new () => CompilationStage;
}
export declare abstract class CompilationOutput {
    protected constructor();
    abstract get stage(): CompilationStage;
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
    constructor(stage: CompilationStage | undefined, tokens: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): CompilationStage;
    get tokens(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: CompilationStage, tokens?: Nullable<string>, errors?: Array<CompilationError>): LexerOutput;
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
    constructor(stage: CompilationStage | undefined, ast: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): CompilationStage;
    get ast(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: CompilationStage, ast?: Nullable<string>, errors?: Array<CompilationError>): ParserOutput;
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
    constructor(stage: CompilationStage | undefined, tacky: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): CompilationStage;
    get tacky(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: CompilationStage, tacky?: Nullable<string>, errors?: Array<CompilationError>): TackyOutput;
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
export declare class CodeGeneratorOutput extends CompilationOutput.$metadata$.constructor {
    constructor(stage: CompilationStage | undefined, assembly: Nullable<string> | undefined, errors: Array<CompilationError>);
    get stage(): CompilationStage;
    get assembly(): Nullable<string>;
    get errors(): Array<CompilationError>;
    copy(stage?: CompilationStage, assembly?: Nullable<string>, errors?: Array<CompilationError>): CodeGeneratorOutput;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CodeGeneratorOutput.$metadata$ {
    const constructor: abstract new () => CodeGeneratorOutput;
}
export declare namespace CodeGeneratorOutput {
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
    constructor(type: ErrorType, message: string, line: number, column: number);
    get type(): ErrorType;
    get message(): string;
    get line(): number;
    get column(): number;
    copy(type?: ErrorType, message?: string, line?: number, column?: number): CompilationError;
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
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CompilerExport.$metadata$ {
    const constructor: abstract new () => CompilerExport;
}