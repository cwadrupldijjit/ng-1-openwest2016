// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/6d72f60cc0b9449caac11817ea9448c977f7793c/gulp-watch/gulp-watch.d.ts
// Type definitions for gulp-watch v4.1.1
// Project: https://github.com/floatdrop/gulp-watch
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module 'gulp-watch' {
    interface IOptions {
        ignoreInitial?: boolean;
        events?: Array<string>;
        base?: string;
        name?: string;
        verbose?: boolean;
        readDelay?: number;
    }

    interface IWatchStream extends NodeJS.ReadWriteStream {
        add(path: string | Array<string>): NodeJS.ReadWriteStream;
        unwatch(path: string | Array<string>): NodeJS.ReadWriteStream;
        close(): NodeJS.ReadWriteStream;
    }

    function watch(glob: string | Array<string>, options?: IOptions, callback?: Function): IWatchStream;
    namespace watch {}
    export = watch;
}