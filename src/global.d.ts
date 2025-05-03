declare module '*.module.css' {
    const content: { [key: string]: string };
    export = content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}
