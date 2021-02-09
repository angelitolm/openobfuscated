import React from 'react';
import {Col, Row, Tooltip, Button, Typography, Menu, Dropdown} from 'antd';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import styles from './index.less';

const { Text } = Typography;

const Header = () => {

  const menu = (
    <Menu theme="dark">
      <Menu.Item key="0">
        Import
      </Menu.Item>
      <Menu.Item key="1">
        Config VPN List
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3">Close</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navigation}>
      <Row gutter={[16,16]}>
        <Col span={4} className={styles.center}>
          <Tooltip title="Menu" placement="right">
            <Dropdown overlay={menu} trigger={['click']}>
              <Button ghost icon={<AppstoreOutlined />} className={styles.btn}/>
            </Dropdown>
          </Tooltip>
        </Col>
        <Col span={16} className={styles.center}>
          <div className={styles.center}>
            <Text className={styles.title}>Open<strong>VPN</strong></Text>
          </div>

        </Col>
        <Col span={4} className={styles.center}>
          <Tooltip title="Settings" placement="left">
            <Button ghost icon={<SettingOutlined />} className={styles.btn}/>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

Header.propTypes = {

};

export default Header;
