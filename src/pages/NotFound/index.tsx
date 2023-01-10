import { Button, Result, Space } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '@/locales';
import styles from './index.module.less'

const NotFoundPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { formatMessage } = useLocale();
  return (
    <Space className={styles.notFound} direction='vertical' justify='center' align='center' block>
      <Result
        status='warning'
        title='404'
        description={formatMessage({ id: 'gloabal.tips.notfound' })}
      />
      <Button color="primary" onClick={() => navigate('/')}>
        {formatMessage({ id: 'gloabal.tips.backHome' })}
      </Button>
    </Space>
  );
};

export default NotFoundPage;
