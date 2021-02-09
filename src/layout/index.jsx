import React from 'react';
import { Layout } from 'antd';
import Navigation from './Header';
import styles from './index.less';
import InfoTop from '@/components/InfoTop';
import Power from '@/components/Power';
import Status from '@/components/Status';
import InfoBottom from '@/components/InfoBottom';
import Footer from '@/layout/Footer';

const { Header, Content } = Layout;

const Main = () => {
  return (
    <Layout className={styles.antLayout}>
      <Header className={styles.header}>
        <Navigation />
      </Header>
      <Content>
        <InfoTop />
        <Power />
        <Status />
        <InfoBottom />
      </Content>
      <Footer />
    </Layout>
  );
};

Main.propTypes = {

};

export default Main;
