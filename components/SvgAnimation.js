// components/SvgAnimation.js
import { useTheme } from '../context/ThemeContext';

const SvgAnimation = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          className={`stroke-current ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="5"
        />
      </svg>
      <style jsx>{`
        .animate-spin {
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SvgAnimation;
