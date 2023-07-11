import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Button, Card, message } from 'antd';
import React from 'react';

/**
 *  Test Function
 *
 * @param selectedRows
 */
const testfunction = async (selectedRows: API.RuleListItem[]) => {
  try {
    console.log('testfunction');
    window.alert('testfunction');
    // await getSDImg({
    //   test: 'test',
    // });
    message.success('Excuted successfully and will refresh soon');
  } catch (error) {
    message.error('Excuted failed, please try again');
  }
};

const Workbench: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  return (
    <PageContainer>
      <Card>
        工作台
        <Button onClick={() => testfunction([])}>Test</Button>
      </Card>
    </PageContainer>
  );
};

export default Workbench;
