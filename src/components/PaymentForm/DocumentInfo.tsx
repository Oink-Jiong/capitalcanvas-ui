import React from 'react';
import { Collapse, Select, Button, Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Panel } = Collapse;

interface DocumentRecord {
  key: string;
  docType: string;
  docName: string;
  docSize: string;
  uploader: string;
  uploadTime: string;
}

const documentTypes = [
  { label: '合同文件', value: 'contract' },
  { label: '审批文件', value: 'approval' },
  { label: '其他文件', value: 'other' },
];

const DocumentInfo: React.FC = () => {
  const columns: ColumnsType<DocumentRecord> = [
    {
      title: '文档类型',
      dataIndex: 'docType',
      key: 'docType',
    },
    {
      title: '文档名称',
      dataIndex: 'docName',
      key: 'docName',
    },
    {
      title: '文档大小',
      dataIndex: 'docSize',
      key: 'docSize',
    },
    {
      title: '上传人',
      dataIndex: 'uploader',
      key: 'uploader',
    },
    {
      title: '上传时间',
      dataIndex: 'uploadTime',
      key: 'uploadTime',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <span className="form-link cursor-pointer">预览</span>
          <span className="mx-1">|</span>
          <span className="form-link cursor-pointer">下载</span>
        </Space>
      ),
    },
  ];

  const data: DocumentRecord[] = [];

  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="end">
      <Panel header="文档信息" key="1">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-foreground">文档类型：</span>
              <Select
                placeholder="请选择"
                options={documentTypes}
                className="w-48"
                allowClear
              />
            </div>
            <Space>
              <Button type="primary">文件上传</Button>
              <Button>选择已有文件</Button>
              <Button>批量下载</Button>
            </Space>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={{
              total: 57,
              defaultPageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              pageSizeOptions: ['10', '20', '50'],
              showTotal: (total) => `共${total}条记录`,
            }}
          />
        </div>
      </Panel>
    </Collapse>
  );
};

export default DocumentInfo;
