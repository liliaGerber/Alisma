// Normal image imports (relative path)
declare module '*.png' {
    const src: string;
    export default src;
}
declare module '*.jpg' {
    const src: string;
    export default src;
}
declare module '*.jpeg' {
    const src: string;
    export default src;
}
declare module '*.svg' {
    const src: string;
    export default src;
}
declare module '*.gif' {
    const src: string;
    export default src;
}
declare module '*.webp' {
    const src: string;
    export default src;
}
declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

