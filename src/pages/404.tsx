import { Result } from 'antd-mobile';
import React from 'react';
import { useLocale } from '@/locales';

const NotFoundPage: React.FC<{}> = () => {
  const { formatMessage } = useLocale();
  return (
    <Result
      status="error"
      title="404"
      description={formatMessage({ id: 'gloabal.tips.notfound' })}
    ></Result>
  );
};

export default NotFoundPage;
