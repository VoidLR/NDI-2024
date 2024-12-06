import { Container } from '@chakra-ui/react';

const WAVES = [
  <path d="M0 131.1L36 124.294C72 117.965 144 103.635 216 103.994C288 103.635 360 117.965 432 124.294C504 131.1 576 131.1 648 120.95C720 110.8 792 90.5 864 83.6935C936 77.3647 1008 83.3353 1080 93.8435C1152 103.635 1224 117.965 1296 127.756C1368 138.265 1440 144.235 1512 120.95C1584 97.6647 1656 42.7353 1728 32.9435C1800 22.4353 1872 57.0647 1944 56.7065C2016 57.0647 2088 22.4353 2160 12.6435C2232 2.13529 2304 16.4647 2376 39.75C2448 63.0353 2520 97.6647 2592 97.3065C2664 97.6647 2736 63.0353 2808 49.9C2880 36.7647 2952 42.7353 3024 53.2435C3096 63.0353 3168 77.3647 3240 83.6935C3312 90.5 3384 90.5 3456 83.6935C3528 77.3647 3600 63.0353 3672 46.5565C3744 29.6 3816 9.3 3888 2.49353C3960 -3.83529 4032 2.13529 4104 26.2565C4176 49.9 4248 90.5 4320 103.994C4392 117.965 4464 103.635 4536 100.65C4608 97.6647 4680 103.635 4752 90.5C4824 77.3647 4896 42.7353 4968 26.2565C5040 9.3 5112 9.3 5148 9.3H5184V192H5148C5112 192 5040 192 4968 192C4896 192 4824 192 4752 192C4680 192 4608 192 4536 192C4464 192 4392 192 4320 192C4248 192 4176 192 4104 192C4032 192 3960 192 3888 192C3816 192 3744 192 3672 192C3600 192 3528 192 3456 192C3384 192 3312 192 3240 192C3168 192 3096 192 3024 192C2952 192 2880 192 2808 192C2736 192 2664 192 2592 192C2520 192 2448 192 2376 192C2304 192 2232 192 2160 192C2088 192 2016 192 1944 192C1872 192 1800 192 1728 192C1656 192 1584 192 1512 192C1440 192 1368 192 1296 192C1224 192 1152 192 1080 192C1008 192 936 192 864 192C792 192 720 192 648 192C576 192 504 192 432 192C360 192 288 192 216 192C144 192 72 192 36 192H0V131.1Z" />,
  <path d="M0 78.5001L36 88.6501C72 98.8001 144 119.1 216 102.144C288 85.6648 360 30.7354 432 10.7936C504 -9.86463 576 4.46478 648 17.6001C720 30.7354 792 45.0648 864 37.9001C936 30.7354 1008 4.46478 1080 7.45007C1152 10.4354 1224 45.0648 1296 51.3936C1368 58.2001 1440 37.9001 1512 31.0936C1584 24.7648 1656 30.7354 1728 34.5565C1800 37.9001 1872 37.9001 1944 41.2436C2016 45.0648 2088 51.0354 2160 68.3501C2232 85.6648 2304 111.935 2376 105.607C2448 98.8001 2520 58.2001 2592 51.3936C2664 45.0648 2736 71.3354 2808 85.3065C2880 98.8001 2952 98.8001 3024 98.8001C3096 98.8001 3168 98.8001 3240 78.5001C3312 58.2001 3384 17.6001 3456 7.45007C3528 -2.69993 3600 17.6001 3672 48.0501C3744 78.5001 3816 119.1 3888 129.25C3960 139.4 4032 119.1 4104 95.4565C4176 71.3354 4248 45.0648 4320 41.2436C4392 37.9001 4464 58.2001 4536 54.8565C4608 51.0354 4680 24.7648 4752 31.0936C4824 37.9001 4896 78.5001 4968 102.144C5040 126.265 5112 132.235 5148 136.057L5184 139.4V180H5148C5112 180 5040 180 4968 180C4896 180 4824 180 4752 180C4680 180 4608 180 4536 180C4464 180 4392 180 4320 180C4248 180 4176 180 4104 180C4032 180 3960 180 3888 180C3816 180 3744 180 3672 180C3600 180 3528 180 3456 180C3384 180 3312 180 3240 180C3168 180 3096 180 3024 180C2952 180 2880 180 2808 180C2736 180 2664 180 2592 180C2520 180 2448 180 2376 180C2304 180 2232 180 2160 180C2088 180 2016 180 1944 180C1872 180 1800 180 1728 180C1656 180 1584 180 1512 180C1440 180 1368 180 1296 180C1224 180 1152 180 1080 180C1008 180 936 180 864 180C792 180 720 180 648 180C576 180 504 180 432 180C360 180 288 180 216 180C144 180 72 180 36 180H0V78.5001Z" />,
  <path d="M0 0.299805L36 10.4498C72 20.5998 144 40.8998 216 57.8563C288 74.3351 360 88.6645 432 81.4998C504 74.3351 576 48.0645 648 51.0498C720 54.0351 792 88.6645 864 88.3063C936 88.6645 1008 54.0351 1080 51.0498C1152 48.0645 1224 74.3351 1296 91.6498C1368 108.965 1440 114.935 1512 111.95C1584 108.965 1656 94.6351 1728 94.9933C1800 94.6351 1872 108.965 1944 101.8C2016 94.6351 2088 68.3645 2160 71.3498C2232 74.3351 2304 108.965 2376 108.606C2448 108.965 2520 74.3351 2592 61.1998C2664 48.0645 2736 54.0351 2808 51.0498C2880 48.0645 2952 33.7351 3024 23.9433C3096 13.4351 3168 7.46451 3240 23.9433C3312 40.8998 3384 81.4998 3456 105.143C3528 129.265 3600 135.235 3672 139.056C3744 142.4 3816 142.4 3888 128.906C3960 114.935 4032 88.6645 4104 81.4998C4176 74.3351 4248 88.6645 4320 78.1563C4392 68.3645 4464 33.7351 4536 23.9433C4608 13.4351 4680 27.7645 4752 47.7063C4824 68.3645 4896 94.6351 4968 115.293C5040 135.235 5112 149.565 5148 155.893L5184 162.7V183H5148C5112 183 5040 183 4968 183C4896 183 4824 183 4752 183C4680 183 4608 183 4536 183C4464 183 4392 183 4320 183C4248 183 4176 183 4104 183C4032 183 3960 183 3888 183C3816 183 3744 183 3672 183C3600 183 3528 183 3456 183C3384 183 3312 183 3240 183C3168 183 3096 183 3024 183C2952 183 2880 183 2808 183C2736 183 2664 183 2592 183C2520 183 2448 183 2376 183C2304 183 2232 183 2160 183C2088 183 2016 183 1944 183C1872 183 1800 183 1728 183C1656 183 1584 183 1512 183C1440 183 1368 183 1296 183C1224 183 1152 183 1080 183C1008 183 936 183 864 183C792 183 720 183 648 183C576 183 504 183 432 183C360 183 288 183 216 183C144 183 72 183 36 183H0V0.299805Z" />,
  <path d="M0 142.4H36C72 142.4 144 142.4 216 139.056C288 135.235 360 129.265 432 115.293C504 101.8 576 81.4998 648 84.8433C720 88.6645 792 114.935 864 128.906C936 142.4 1008 142.4 1080 132.25C1152 122.1 1224 101.8 1296 81.4998C1368 61.1998 1440 40.8998 1512 37.5563C1584 33.7351 1656 48.0645 1728 64.5433C1800 81.4998 1872 101.8 1944 111.95C2016 122.1 2088 122.1 2160 118.756C2232 114.935 2304 108.965 2376 84.8433C2448 61.1998 2520 20.5998 2592 23.9433C2664 27.7645 2736 74.3351 2808 81.4998C2880 88.6645 2952 54.0351 3024 54.3933C3096 54.0351 3168 88.6645 3240 84.8433C3312 81.4998 3384 40.8998 3456 23.9433C3528 7.46451 3600 13.4351 3672 37.5563C3744 61.1998 3816 101.8 3888 111.95C3960 122.1 4032 101.8 4104 84.8433C4176 68.3645 4248 54.0351 4320 64.5433C4392 74.3351 4464 108.965 4536 111.95C4608 114.935 4680 88.6645 4752 84.8433C4824 81.4998 4896 101.8 4968 91.6498C5040 81.4998 5112 40.8998 5148 20.5998L5184 0.299805V183H5148C5112 183 5040 183 4968 183C4896 183 4824 183 4752 183C4680 183 4608 183 4536 183C4464 183 4392 183 4320 183C4248 183 4176 183 4104 183C4032 183 3960 183 3888 183C3816 183 3744 183 3672 183C3600 183 3528 183 3456 183C3384 183 3312 183 3240 183C3168 183 3096 183 3024 183C2952 183 2880 183 2808 183C2736 183 2664 183 2592 183C2520 183 2448 183 2376 183C2304 183 2232 183 2160 183C2088 183 2016 183 1944 183C1872 183 1800 183 1728 183C1656 183 1584 183 1512 183C1440 183 1368 183 1296 183C1224 183 1152 183 1080 183C1008 183 936 183 864 183C792 183 720 183 648 183C576 183 504 183 432 183C360 183 288 183 216 183C144 183 72 183 36 183H0V142.4Z" />,
];

/**
 * Display wave form on the screen with the tailwind color passed as a color prop
 * @param colors array of 4 tailwind fill colors (e.g. 'fill-yellow-400')
 * @param backgroundColor tailwind background color (e.g. 'bg-blue-500')
 * @param props other props
 * @returns {JSX.Element} Waves component
 * @constructor
 */
const Waves = ({ colors, backgroundColor, reversed, ...props }) => {
  // Display wave form on the screen with the tailwind color passed as a color prop
  // The wave is divided into 4 parts, each part is a svg image that is displayed on the screen

  // check if the color prop is a valid tailwind color
  if (colors.length !== 4) {
    throw new Error(
      "The colors prop must be an array of 4 tailwind fill colors (e.g. 'fill-yellow-400')"
    );
  }

  let classes = 'relative w-full ' + backgroundColor;
  if (props.className) {
    classes += ' ' + props.className;
  }

  return (
    <div className={classes}>
      {WAVES.map((wave, index) => {
        const CLASSES = 'absolute bottom-0 w-full max-h-96 ' + colors[index];
        return (
          <Container
            margin={'0'}
            padding={'0'}
            maxWidth={'100%'}
            rotate={reversed ? '180' : '0'}
          >
            <svg
              key={index}
              className={CLASSES}
              viewBox="0 0 5184 183"
              xmlns="http://www.w3.org/2000/svg"
            >
              {wave}
            </svg>
          </Container>
        );
      })}
    </div>
  );
};

export default Waves;
