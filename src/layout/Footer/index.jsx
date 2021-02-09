import React from 'react';
import {Badge} from 'antd';
import styles from './index.less';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.planet} />
      <div className={styles.btnBottom}>
        <div className={styles.label}>
          <span>Breaking the limits</span> &nbsp;<Badge count="New" />
        </div>
        <div className={styles.subLabel}>Fast & Strong for OpenVPN</div>
      </div>
    </div>
  );
};

Footer.propTypes = {

};

export default Footer;
