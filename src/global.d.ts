declare module '*.module.css' {
    const content: { [key: string]: string };
    export = content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
