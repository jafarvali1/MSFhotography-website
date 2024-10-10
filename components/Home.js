'use client';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../context/ThemeContext'; // Import useTheme from your ThemeContext

export default function Home() {
    const { theme } = useTheme(); // Get theme from context
    const BackgroundWrapper = ({ children }) => {
        const { theme } = useTheme(); // Access the current theme

        return (
            <div className={`bg-cover bg-no-repeat ${theme === 'dark' ? 'bg-[url(/images/DarkDslr.jpg)]' : 'bg-[url(/images/LightDslr.jpg)]'}`}>
                {children}
            </div>
        );
    };

    return (
        <>
            <BackgroundWrapper> {/* Wrap main content in BackgroundWrapper */}
                {/* <main className="min-h-screen">{children}</main> */}
                <div className={`flex flex-col items-start justify-center min-h-screen pt-8 pl-8 ${theme}`}>
                    {/* Update the H1 tag for new position with neon single color */}
                    <h1 className="text-5xl font-bold mb-4">
                    Welcome to <span className={`font-dancing-script ${theme === 'dark' ? 'text-neon-blue-dark' : 'text-neon-blue'}`}>Memorable Stories</span>
                    </h1>

                    {/* Main content remains in the center */}
                    <div className={`flex flex-col items-start justify-end relative ${theme}`}>
                        <TypeAnimation
                            className="text-5xl font-bold"
                            sequence={[
                                'By Malik', // Text to be typed
                                2000, // Pause for 2 seconds
                                () => {
                                    console.log('Animation done');
                                },
                            ]}
                            wrapper="h1"
                            speed={50}
                            style={{ fontSize: '3em' }}
                            repeat={Infinity}
                        />

                        <p className="text-lg mt-4">Give soul to image</p>
                    </div>
                </div>
            </BackgroundWrapper>
            {/* Container for positioning the content */}

        </>
    );
}

