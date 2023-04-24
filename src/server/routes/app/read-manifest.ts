import path from 'path';
import axios from 'axios';

const memo = <TArgs extends any[], TRes>(fn: (...args: TArgs) => TRes) => {
    let res: TRes | undefined;
    const memoizedFn = (...args: TArgs) => {
        if (!res) {
            res = fn(...args);
        }
        return res;
    };
    return memoizedFn
}

const readStaticManifest = () => {
    return __non_webpack_require__(path.join(process.cwd(), 'manifest.json'));
}

const readDevServerManifest = async () => {
    const response = await axios.get('http://localhost:9000/manifest.json');
    return response.data;
}

function assertManifestIsValid(manifest: unknown): asserts manifest is Record<string, string> {
    if (typeof manifest !== 'object' || manifest === null) {
        throw new Error('Manifest is not an object');
    }
}

const parseManifest = (manifest: unknown) => {
    const css: string[] = [];
    const js: string[] = [];
    assertManifestIsValid(manifest);
    Object.keys(manifest).forEach((key) => {
        const [ext] = key.split('.').reverse();
        switch (ext) {
            case 'js':
                js.push(manifest[key]);
                break;
            case 'css':
                css.push(manifest[key]);
                break;
        }
    });
    return { css, js };
}

const readProductionManifest = memo(async () => {
    return parseManifest(readStaticManifest());
})

const readDevelopmentManifest = async () => {
    return parseManifest(await readDevServerManifest());
}

export const readManifest = process.env.NODE_ENV === 'production'
    ? readProductionManifest
    : readDevelopmentManifest;
