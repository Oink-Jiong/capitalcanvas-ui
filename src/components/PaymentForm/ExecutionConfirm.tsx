import React from 'react';
import { Collapse, Form, Checkbox } from 'antd';

const { Panel } = Collapse;

const confirmItems = [
  {
    key: 'confirm1',
    label: '执行标的已确认无实质性变化（或变化情况不影响收购确权及估值判断）。',
  },
  {
    key: 'confirm2',
    label: '批复条件已落实。',
  },
  {
    key: 'confirm3',
    label: '面签程序及要求已落实。',
  },
  {
    key: 'confirm4',
    label: '提交审核的资料已确认真实完整。',
  },
];

const ExecutionConfirm: React.FC = () => {
  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="出款执行事项确认" key="1">
        <div className="p-4">
          <Form.Item name="executionConfirms">
            <div className="space-y-3">
              {confirmItems.map((item) => (
                <div key={item.key}>
                  <Checkbox name={item.key}>
                    <span className="text-foreground">{item.label}</span>
                  </Checkbox>
                </div>
              ))}
            </div>
          </Form.Item>
        </div>
      </Panel>
    </Collapse>
  );
};

export default ExecutionConfirm;
