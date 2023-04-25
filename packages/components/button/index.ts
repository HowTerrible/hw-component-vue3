import _Button from './src/button.vue';
import { withInstall } from '@hw/utils/with-install';

const Button = withInstall(_Button);

export default Button;

export * from './src/button';

declare module 'vue' {
  export interface GlobalComponents {
    HwButton: typeof Button;
  }
}
