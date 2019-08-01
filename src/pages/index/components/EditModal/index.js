import React, { Component } from 'react';
import { Modal, Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record: {}
    };
  }
  showModalHandler = (e) => {
    if (e) e.stopPropagation();
    const { propsAPI } = this.props;
    const { getSelected } = propsAPI;
    const _this = this;
    setTimeout(() => {
      const item = getSelected()[0];
      if (!item) {
        return;
      }
      console.log(item.getModel());

      _this.setState({
        visible: true,
        record: item.getModel()
      });
    }, 0);
  };

  hideModelHandler = () => {
    const {form} = this.props;
    form.resetFields()
    this.setState({
      visible: false,
      record: {}
    });
  };

  okHandler = (e) => {
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

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { label, userList, roleList, deptList } = this.state.record;
    console.log(this.state.record);

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModalHandler}>
          {children}
        </span>
        <Modal
          title={this.props.title || '编辑节点'}
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form layout="horizontal" onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="节点名称"
            >
              {
                getFieldDecorator('label', {
                  initialValue: label,
                  rules: [{ required: true, message: '请输入节点名称!' }],
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="角 色"
            >
              {
                getFieldDecorator('userList', {
                  initialValue: userList,
                  rules: [{ required: true, message: '请选择角色!', type: 'array' }],
                })(<Select mode="multiple" placeholder="Please select favourite colors">
                  <Option value="red">Red</Option>
                  <Option value="green">Green</Option>
                  <Option value="blue">Blue</Option>
                </Select>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="归属部门"
            >
              {
                getFieldDecorator('roleList', {
                  initialValue: roleList,
                  rules: [{ required: true, message: '请选择角色!', type: 'array' }],
                })(<Select mode="multiple" placeholder="Please select favourite colors">
                  <Option value="red">Red</Option>
                  <Option value="green">Green</Option>
                  <Option value="blue">Blue</Option>
                </Select>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="指定人员"
            >
              {
                getFieldDecorator('deptList', {
                  initialValue: deptList,
                })(<Select mode="multiple" placeholder="Please select favourite colors">
                  <Option value="red">Red</Option>
                  <Option value="green">Green</Option>
                  <Option value="blue">Blue</Option>
                </Select>)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(EditModal);
