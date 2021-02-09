import React from 'react';
import {Typography} from 'antd';
import {SyncOutlined} from '@ant-design/icons';
import styles from './index.less';

const {Text} = Typography;

const Status = () => {
  return (
    <div className={styles.full}>
      <SyncOutlined spin style={{ fontSize: '1.3rem' }}/>&nbsp; <Text>Connecting</Text>
    </div>
  );
};

Status.propTypes = {

};

export default Status;
