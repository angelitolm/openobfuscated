import React, {useCallback} from 'react';
import { Switch } from 'antd';
import styles from './index.less';
const Power = () => {

  const onChange = useCallback(checked => {
    console.log(`switch to ${checked}`);
  }, []);

  return (
    <div className={styles.power}>
      <div className={styles.powerBtn}>
        <span className={styles.rotate}>Off</span>
        <Switch defaultChecked onChange={onChange} className={styles.switch}/>
        <span className={styles.rotate}>On</span>
      </div>
    </div>
  );
};

Power.propTypes = {

};

export default Power;
