import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '上海创友科技有限公司出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '爱华服',
          title: 'IHUAFU',
          href: 'https://www.ihuafu.com/',
          blankTarget: true,
        },
        {
          key: '上海创友科技有限公司',
          title: '上海创友科技有限公司',
          href: 'https://www.chuangmate.com',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
