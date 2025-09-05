export type Chapter = {
    id: string;
    title: string;
    body: string | React.ReactNode;
    image?: string;
    buttons?: React.ReactNode;
};
