import React from "react";

type BackdropProps = {
    toggleSidebar: (value: boolean) => void
}

const Backdrop: React.FC<BackdropProps> = ({ toggleSidebar }) => (
    <div
        className="fixed inset-0 z-[99] bg-black opacity-80"
        onClick={() => toggleSidebar(false)}
    />
)

export default Backdrop
