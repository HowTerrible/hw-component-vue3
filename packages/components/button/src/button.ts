import { ExtractPropTypes, PropType } from 'vue';
import {} from 'vue';

export type Size = 'small' | 'medium' | 'large';

export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';

export type NativeType = 'button' | 'submit' | 'reset';

export type IconPlacement = 'left' | 'right';

export const buttonProps = {
  /** 大小 */
  size: String as PropType<Size>,
  /** 类型 */
  type: {
    type: String as PropType<Type>,
    validator: (val: string) =>
      ['primary', 'success', 'warning', 'danger', 'info', 'default'].indexOf(
        val
      ) >= 0,
    default: ''
  },
  /** 圆角 */
  round: Boolean,
  /** 加载中 */
  loading: Boolean,
  /** 禁用 */
  disabled: Boolean,
  /** 对应原生属性的type */
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  /** 按钮图标位置 */
  iconPlacement: {
    type: String as PropType<IconPlacement>,
    default: 'left'
  }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mouseup: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
};

export type ButtonEmits = typeof buttonEmits;
