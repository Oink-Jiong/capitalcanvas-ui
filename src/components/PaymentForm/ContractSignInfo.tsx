import React from 'react';
import { Collapse, Form, Row, Col, Table, Input, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Panel } = Collapse;

interface ContractRecord {
  key: string;
  scanFile: string;
  processName: string;
}

const ContractSignInfo: React.FC = () => {
  const columns: ColumnsType<ContractRecord> = [
    {
      title: '合同扫描件',
      dataIndex: 'scanFile',
      key: 'scanFile',
      render: (text) => <span className="form-link">{text || '合同超链接'}</span>,
    },
    {
      title: '流程名称',
      dataIndex: 'processName',
      key: 'processName',
      render: (text) => <span className="form-link">{text || '流程超链接'}</span>,
    },
    {
      title: '操作',
      key: 'action',
      width: 80,
      render: () => (
        <span className="form-link cursor-pointer">删除</span>
      ),
    },
  ];

  const data: ContractRecord[] = [
    {
      key: '1',
      scanFile: '',
      processName: '',
    },
  ];

  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="合同及面签信息" key="1">
        <div className="p-4">
          <Button type="primary" className="mb-4">
            选择合同
          </Button>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="mb-6"
            bordered
          />
          <Row gutter={48}>
            <Col span={12}>
              <Form.Item
                label="面签视频"
                name="signVideo"
                rules={[{ required: true, message: '请输入面签视频链接' }]}
              >
                <Input placeholder="请输入面签视频链接" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="面签照片"
                name="signPhoto"
                rules={[{ required: true, message: '请输入面签照片链接' }]}
              >
                <Input placeholder="请输入面签照片链接" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Panel>
    </Collapse>
  );
};

export default ContractSignInfo;
