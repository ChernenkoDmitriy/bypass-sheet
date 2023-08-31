import  { BaseToast, BaseToastProps, ErrorToast, ToastConfigParams } from 'react-native-toast-message';
import { IColors } from '../../../UIProvider/theme/IColors';

export const ToastConfig = {
  success: (props: BaseToastProps & ToastConfigParams<{ colors: IColors }>) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green'}}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: 'green',
        fontSize: 15,
        fontWeight: '400'
      }}
    />
    ),
  error: (props: BaseToastProps & ToastConfigParams<{ colors: IColors }>) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: 'red',
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),
};
