import { PageContainer } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { useIntl } from '@umijs/max';
import { Card, Select } from 'antd';
import React, { useEffect, useState } from 'react';

// 定义下拉选框的模型数据
const temporarySdParams = [
  {
    name: '种类1',
    options: ['种类1-1', '种类1-2', '种类1-3'],
  },
  {
    name: '种类2',
    options: ['种类2-1', '种类2-2', '种类2-3'],
  },
  {
    name: '种类3',
    options: ['种类3-1', '种类3-2', '种类3-3'],
  },
  {
    name: '种类4',
    options: ['种类4-1', '种类4-2', '种类4-3'],
  },
];

const Workbench: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();
  const [formData, setFormData] = useState(() => {
    const selectedOptions = new Array(temporarySdParams.length).fill('');
    return {
      selectedOptions,
      inputText: '',
    };
  });
  const [sdParams, setSdParams] = useState(temporarySdParams); // 初始为空数组
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    // 进行数据请求，获取 sdParams 的值
    fetchData().then((data) => {
      //TODO: 数据请求逻辑完善
      // setSdParams(data);
    });
  }, []);

  const fetchData = () => {
    // 执行数据请求的逻辑，返回 Promise
    // 例如使用 fetch 或 axios 进行数据请求
    return fetch('https://example.com/api/sdParams')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Failed to fetch sdParams:', error);
        return []; // 请求失败时返回空数组
      });
  };

  const handleOptionChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const selectedOptions = [...prevData.selectedOptions];
      selectedOptions[index] = value;
      return {
        ...prevData,
        selectedOptions,
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      inputText: value,
    }));
  };

  const handleConfirmClick = () => {
    const { selectedOptions, inputText } = formData;
    setShowData(true); // 点击了确认按钮，显示保存的数据
    //TODO: 上传数据
  };

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      overflow: 'auto',
      backgroundColor: '#f7f7f7', // 更换为浅灰色背景
      backgroundSize: 'auto',
    };
  });

  const sdRenderRegionClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'row',
      width: '40%',
      overflow: 'auto',
      backgroundColor: '#e6f7ff', // 更换为淡蓝色背景
      backgroundSize: 'auto',
      justifyContent: 'center',
    };
  });

  const sdImageClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      width: '100%',
      height: 'auto',
      marginTop: '2vw',
      overflow: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#ffffff', // 更换为白色背景
      backgroundSize: 'contain',
      backgroundImage:
        "url('https://pic4.zhimg.com/80/v2-2cd622bd593ed6177af8c4396ff9a5d3_720w.jpg?source=1940ef5c')",
    };
  });

  const sdDescRegionClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      gap: '20px',
      marginLeft: '2vw',
      overflow: 'auto',
      backgroundColor: '#ffe7e7', // 更换为淡红色背景
      backgroundSize: 'auto',
    };
  });

  const sdDescInputRegionClassName = useEmotionCss(() => {
    return {
      width: '60%',
      height: '100px',
      marginLeft: '2vw',
      overflow: 'auto',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px',
      resize: 'none',
      textAlign: 'left',
    };
  });

  const dropdownContainerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      alignItems: 'center',
    };
  });

  const confirmButtonClassName = useEmotionCss(() => {
    return {
      width: '100px',
      textAlign: 'center',
      backgroundColor: '#1890ff', // 更换为蓝色背景
      color: '#ffffff', // 更换为白色文字颜色
      border: 'none',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer',
    };
  });

  // backgroundImage:
  // "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
  return (
    <PageContainer>
      <Card>
        工作台
        <div className={containerClassName}>
          <div className={sdRenderRegionClassName}>
            <img className={sdImageClassName} />
          </div>

          <div className={sdDescRegionClassName}>
            {sdParams.map((optionGroup, index) => (
              <div key={optionGroup.name} className={dropdownContainerClassName}>
                <span>{optionGroup.name}：</span>
                <Select
                  defaultValue="请选择"
                  style={{ width: 120, marginLeft: '5px' }}
                  onChange={(value) => handleOptionChange(index, value)}
                >
                  {optionGroup.options.map((option) => (
                    <Select.Option key={option} value={option}>
                      {option}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            ))}

            <textarea
              className={sdDescInputRegionClassName}
              placeholder="请输入其他描述"
              onChange={handleInputChange}
            />
            <button className={confirmButtonClassName} onClick={handleConfirmClick}>
              确定
            </button>
            {showData && (
              <div>
                <h3>保存的数据：</h3>
                {sdParams.map((optionGroup, index) => (
                  <p key={optionGroup.name}>
                    {optionGroup.name}：{formData.selectedOptions[index]}
                  </p>
                ))}
                <p>输入框输入的内容：{formData.inputText}</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Workbench;
