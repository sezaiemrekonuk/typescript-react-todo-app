import { ReactNode } from 'react';

type ScreenProps = {
    children: ReactNode;
};

export default function Screen({ children }: ScreenProps): JSX.Element {
    return (
        <div
            className='flex flex-col items-center justify-center w-screen h-screen bg-gray-900'
        >
            {children}
        </div>
    );
}
