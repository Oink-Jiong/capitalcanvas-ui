import React from 'react';
import { Collapse, Form, Row, Col, Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Panel } = Collapse;
const { TextArea } = Input;

interface ApprovalRecord {
  key: string;
  approvalNo: string;
  approvalFile: string;
  approvalTime: string;
}

const ApprovalInfo: React.FC = () => {
  const columns: ColumnsType<ApprovalRecord> = [
    {
      title: '批复编号',
      dataIndex: 'approvalNo',
      key: 'approvalNo',
      render: (text) => <span className="form-link">{text || '报审流程超链接'}</span>,
    },
    {
      title: '批复文件',
      dataIndex: 'approvalFile',
      key: 'approvalFile',
      render: (text) => <span className="form-link">{text || '批复文件超链接'}</span>,
    },
    {
      title: '批复时间',
      dataIndex: 'approvalTime',
      key: 'approvalTime',
      render: (text) => text || 'YYYY-MM-DD',
    },
  ];

  const data: ApprovalRecord[] = [
    {
      key: '1',
      approvalNo: '',
      approvalFile: '',
      approvalTime: '',
    },
  ];

  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="批复信息" key="1">
        <div className="p-4">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="mb-6"
            bordered
          />
          <Row gutter={48}>
            <Col span={24}>
              <Form.Item
                label="批复落实情况"
                name="approvalImplementation"
                rules={[{ required: true, message: '请填写批复落实情况' }]}
              >
                <TextArea
                  rows={4}
                  placeholder="请填写批复落实情况"
                  className="w-full"
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Panel>
    </Collapse>
  );
};

export default ApprovalInfo;
