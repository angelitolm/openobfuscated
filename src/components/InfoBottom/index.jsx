import React from 'react';
import {Col, Row} from 'antd';
import {CloudDownloadOutlined, CloudUploadOutlined} from '@ant-design/icons';
import styles from './index.less';

const InfoBottom = () => {
  return (
    <Row className={styles.full}>
      <Col span={12} className={styles.center}>
        <Row>
          <Col>
            <CloudDownloadOutlined style={{ fontSize: '1.3rem' }}/> &nbsp;
          </Col>
          <Col>
            <div className={styles.thin}> Download</div>
            <div><strong>68.8</strong><span className={styles.thin}>kb/s</span></div>
          </Col>
        </Row>
      </Col>
      <Col span={12} className={styles.center}>
        <Row>
          <Col>
            <CloudUploadOutlined style={{ fontSize: '1.3rem' }}/> &nbsp;
          </Col>
          <Col>
            <div className={styles.thin}> Upload</div>
            <div><strong>21.0</strong><span className={styles.thin}>kb/s</span></div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

InfoBottom.propTypes = {

};

export default InfoBottom;
