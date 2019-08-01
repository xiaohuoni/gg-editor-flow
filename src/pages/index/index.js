import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import GGEditor, { Flow, RegisterNode } from 'gg-editor';
import { FlowItemPanel } from './components/EditorItemPanel';
import SaveBtn from "./components/SaveBtn";
import EdgeNode from "./components/Node/EdgeNode";
import styles from './index.less';
const FormItem = Form.Item;
const { TextArea } = Input;

GGEditor.setTrackable(false);

const FlowPage = ({ form }) => {
  const { getFieldDecorator, validateFields } = form;
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const okHandler = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const { form, propsAPI } = this.props;
    const { getSelected, executeCommand, update } = propsAPI;
    const _this = this;
    setTimeout(() => {
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }
        _this.hideModelHandler();

        console.log(values);

        const item = getSelected()[0];

        if (!item) {
          return;
        }
        form.resetFields()
        executeCommand(() => {
          update(item, {
            ...values,
          });
        });
      });
    }, 0);
  };
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <SaveBtn validateFields={validateFields}></SaveBtn>
        </Col>
      </Row>

      <Row type="flex" className={styles.editorBd}>
        <Col span={4} className={styles.editorSidebar}>
          <FlowItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Flow className={styles.flow} graph={{ edgeDefaultShape: 'edge-node' }} noEndEdge={false} />
          {/* <Flow className={styles.flow}  noEndEdge={false} /> */}
          <EdgeNode />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <Form layout="horizontal">
            <FormItem
              {...formItemLayout}
              label="流程名称"
            >
              {
                getFieldDecorator('processName', {
                  rules: [{ required: true, message: '请输入流程名称!' }],
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="流程简介:"
            >
              {
                getFieldDecorator('processDesc', {
                  rules: [{ required: true, message: '请输入流程简介!' }],
                })(<TextArea autosize={{ minRows: 20, maxRows: 60 }} />)
              }
            </FormItem>
          </Form>
        </Col>
      </Row>
      {/* <FlowContextMenu /> */}
    </GGEditor>
  );
};

export default Form.create()(FlowPage);
