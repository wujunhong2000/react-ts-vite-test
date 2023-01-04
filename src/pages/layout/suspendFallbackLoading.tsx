import { FC } from 'react';
import { SpinLoading } from 'antd-mobile'

const SuspendFallbackLoading: FC = () => {
  return (
    <SpinLoading color='default' />
  );
};

export default SuspendFallbackLoading;
