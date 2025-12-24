import React from 'react';
import { Collapse, Form, Row, Col, Select, DatePicker, InputNumber } from 'antd';

const { Panel } = Collapse;

const paymentTypes = [
  { label: '项目出款', value: 'project' },
  { label: '保证金出款', value: 'deposit' },
];

const depositPaymentTypes = [
  { label: '保密保证金支出', value: 'confidential' },
  { label: '投标保证金支出', value: 'bidding' },
  { label: '其他保证金支出', value: 'other' },
];

const PaymentInfo: React.FC = () => {
  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="出款信息" key="1">
        <div className="p-4">
          <Row gutter={48}>
            <Col span={8}>
              <Form.Item
                label="出款类型"
                name="paymentType"
                rules={[{ required: true, message: '请选择出款类型' }]}
              >
                <Select placeholder="下拉单选，项目出款、保证金出款" options={paymentTypes} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="保证金支付类型"
                name="depositType"
                rules={[{ required: true, message: '请选择保证金支付类型' }]}
              >
                <Select
                  placeholder="下拉单选，保密保证金支出、投标保证金支出、其他保证金支出..."
                  options={depositPaymentTypes}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="拟付款日期"
                name="plannedPaymentDate"
                rules={[{ required: true, message: '请选择拟付款日期' }]}
              >
                <DatePicker className="w-full" placeholder="选择日期" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={8}>
              <Form.Item
                label="本次出款金额"
                name="currentPaymentAmount"
                rules={[{ required: true, message: '请输入本次出款金额' }]}
              >
                <InputNumber
                  className="w-full"
                  placeholder="请输入金额"
                  addonAfter="元"
                  min={0}
                  precision={2}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="其中：我司出资金额"
                name="companyContribution"
                rules={[{ required: true, message: '请输入我司出资金额' }]}
              >
                <InputNumber
                  className="w-full"
                  placeholder="请输入金额"
                  addonAfter="元"
                  min={0}
                  precision={2}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Panel>
    </Collapse>
  );
};

export default PaymentInfo;
