import { keyframes } from 'styled-components'

const animations = {
  name: keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  option: (duration: string, delay: string) => `
    animation-duration: ${duration};
    animation-delay: ${delay};
    animation-fill-mode: forwards;
  `,
}

export default animations
