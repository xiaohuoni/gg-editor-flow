import React from 'react';
import { Card } from 'antd';
import { ItemPanel, Item ,RegisterNode} from 'gg-editor';
import styles from './index.less';
import startImg from '../../assets/start.png';
import endImg from '../../assets/end.png';
import copytoImg from '../../assets/copyto.png';
import inevitableImg from '../../assets/inevitable.png';
import servicesImg from '../../assets/services.png';

import StartNode from '../Node/Start';
import EndNode from '../Node/End';
import ShowItem from '../Node/ShowItem';
const FlowItemPanel = () => {
  return (
    <ItemPanel className={styles.itemPanel}>
      <Card bordered={false}>
        <StartNode />
        <EndNode/>
        <RegisterNode
        name="start-node1"
        config={{
          label: "",
          color: "#fff"
        }}
        extend="flow-node"
      />
        <Item
          type="node"
          shape="start-node1"
          size="80*80"
          model={{
            type: 0,
            label: '流程开始',
            icon: startImg
          }}
        ><ShowItem startImg={startImg} label="流程开始" /></Item>
        <Item
          type="node"
          size="80*80"
          shape="start-node1"
          model={{
            type: 1,
            label: '必经环节',
            icon: inevitableImg
          }}
        ><ShowItem startImg={inevitableImg} label="必经环节" /></Item>
        <Item
          type="node"
          size="80*80"
          shape="start-node1"
          model={{
            type: 4,
            label: '抄送',
            icon: copytoImg
          }}
        ><ShowItem startImg={copytoImg} label="抄送" /></Item>
        <Item
          type="node"
          size="80*80"
          shape="start-node1"
          model={{
            type: 4,
            label: '服务',
            icon: servicesImg
          }}
        ><ShowItem startImg={servicesImg} label="服务" /></Item>
        <Item
          type="node"
          size="80*80"
          shape="start-node1"
          model={{
            type: 0,
            label: '流程结束',
            icon: endImg
          }}
        ><ShowItem startImg={endImg} label="流程结束" /></Item>
      </Card>
    </ItemPanel>
  );
};

export default FlowItemPanel;
