import React from 'react';
type Props = {
    children: React.ReactNode;
    imageUrl: string;
};

const InfinteScrollBackground: React.FC<Props> = ({children, imageUrl}) => {
    return (
        <div
            className="relative w-full min-h-screen animate-zebra-scroll bg-center bg-repeat-y bg-cover"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default InfinteScrollBackground;
