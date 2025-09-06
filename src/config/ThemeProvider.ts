type RouteThemeRule = { test: RegExp; colour: string };


const ROUTE_THEMES: RouteThemeRule[] = [
    {test: /^\/modernmen(\/|$)/, colour: "modernmen"},
    {test: /^\/htlgirls(\/|$)/, colour: "htlgirls"},
    {test: /^\/empowering(\/|$)/, colour: "empowering"},
    {test: /.*/, colour: "secondary"},
];

export function resolveColor(pathname: string) {
    return ROUTE_THEMES.find(r => r.test.test(pathname)) ?? ROUTE_THEMES[3];
}

export function resolveColorBG(pathname: string) {
    const match = resolveColor(pathname);
    return `bg-${match.colour}`;
}

export function resolveColorText(pathname: string) {
    const match = resolveColor(pathname);
    return `text-${match.colour}-600`;
}

export function resolveThemeTextHover(pathname: string) {
    const match = resolveColor(pathname);
    return `text-${match.colour}-600 hover:text-${match.colour}-300`;
}

export function resolveTheme(pathname: string) {
    const match = resolveColor(pathname);
    return {primary: `text-primary bg-${match.colour}`, secondary: `text-${match.colour}-600 bg-primary}`};
}


