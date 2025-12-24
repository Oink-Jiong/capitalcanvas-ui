import React from 'react';
import { Collapse, Form, Row, Col, InputNumber } from 'antd';

const { Panel } = Collapse;

interface ProjectInvestmentProps {
  paidAmount?: number;
  partnerPaidAmount?: number;
}

const ProjectInvestment: React.FC<ProjectInvestmentProps> = ({
  paidAmount = 0,
  partnerPaidAmount = 0,
}) => {
  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="项目投放情况" key="1">
        <div className="p-4">
          <Row gutter={48}>
            <Col span={8}>
              <Form.Item
                label="项目投放总额"
                name="totalInvestment"
                rules={[{ required: true, message: '请输入项目投放总额' }]}
                extra="当项目类型为单户重整时，非必填"
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
                label="其中：我司实际出资金额"
                name="actualCompanyContribution"
                rules={[{ required: true, message: '请输入我司实际出资金额' }]}
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
          <Row gutter={48}>
            <Col span={8}>
              <Form.Item label="项目已付金额">
                <span className="text-foreground">
                  {paidAmount}元 <span className="text-muted-foreground">——不可编辑，系统自动计算</span>
                </span>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="合作方已缴纳金额">
                <span className="text-foreground">
                  {partnerPaidAmount}元 <span className="text-muted-foreground">——不可编辑，系统自动计算</span>
                </span>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Panel>
    </Collapse>
  );
};

export default ProjectInvestment;
