import React, { useState } from 'react';
import { Collapse, Form, Row, Col, InputNumber, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

interface Payee {
  id: string;
  name: string;
  accountName: string;
  bankName: string;
  accountNumber: string;
}

const PayeeInfo: React.FC = () => {
  const [payees, setPayees] = useState<Payee[]>([
    {
      id: '1',
      name: '',
      accountName: '禁用，自动带入',
      bankName: '禁用，自动带入',
      accountNumber: '禁用，自动带入',
    },
  ]);

  const handleAddPayee = () => {
    const newPayee: Payee = {
      id: Date.now().toString(),
      name: '',
      accountName: '禁用，自动带入',
      bankName: '禁用，自动带入',
      accountNumber: '禁用，自动带入',
    };
    setPayees([...payees, newPayee]);
  };

  const handleDeletePayee = (id: string) => {
    if (payees.length > 1) {
      setPayees(payees.filter((p) => p.id !== id));
    }
  };

  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="收款方信息" key="1">
        <div className="p-4">
          {payees.map((payee, index) => (
            <div key={payee.id} className="payee-card">
              <div className="payee-card-header">
                <span className="font-medium">收款方-收款金额</span>
                {payees.length > 1 && (
                  <DeleteOutlined
                    className="cursor-pointer text-destructive hover:text-destructive/80"
                    onClick={() => handleDeletePayee(payee.id)}
                  />
                )}
              </div>
              <div className="p-4">
                <Row gutter={48}>
                  <Col span={8}>
                    <Form.Item
                      label="收款方"
                      name={['payees', index, 'payee']}
                      rules={[{ required: true, message: '请选择收款方' }]}
                    >
                      <div className="payee-select-box">点击后弹框选择</div>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="收款方账户名称">
                      <span className="text-muted-foreground">{payee.accountName}</span>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="收款方开户行">
                      <span className="text-muted-foreground">{payee.bankName}</span>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={48}>
                  <Col span={8}>
                    <Form.Item label="收款方账号">
                      <span className="text-muted-foreground">{payee.accountNumber}</span>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="收款金额"
                      name={['payees', index, 'amount']}
                      rules={[{ required: true, message: '请输入收款金额' }]}
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
            </div>
          ))}
          <Button
            type="link"
            icon={<PlusOutlined />}
            onClick={handleAddPayee}
            className="text-primary p-0"
          >
            新增收款方
          </Button>
        </div>
      </Panel>
    </Collapse>
  );
};

export default PayeeInfo;
