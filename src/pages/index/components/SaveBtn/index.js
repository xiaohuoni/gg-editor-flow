
import React from "react";
import { withPropsAPI } from "gg-editor";
import EditModal from "../EditModal/index";
import { Button, Popconfirm } from 'antd';
import styles from './index.less';

class Save extends React.Component {
  handleClick = () => {
    const { propsAPI, validateFields } = this.props;
    console.log(propsAPI.save());
    setTimeout(() => {
      validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log(values);

      });
    }, 0);
  };
  deleteHandler = () => {
    const { propsAPI } = this.props;
    const { getSelected } = propsAPI;
    setTimeout(() => {
      const item = getSelected()[0];
      if (!item) {
        return;
      }
      propsAPI.remove(item);
    }, 0);
  };

  render() {
    const { propsAPI, validateFieldsAndScroll } = this.props;
    return (
      <div className={styles.panel}>
        <Button className={styles.mgr} type="primary" onClick={this.handleClick}>提交配置</Button>
        <Popconfirm title="确认删除节点" onConfirm={this.deleteHandler} >
          <Button className={styles.mgr}>删除节点</Button>
        </Popconfirm>
        <EditModal record={{}} propsAPI={propsAPI} onOk={(e) => { console.log(e) }} >
          <Button className={styles.mgr}>编辑节点</Button>
        </EditModal>
      </div>
    );
  }
}

export default withPropsAPI(Save);
