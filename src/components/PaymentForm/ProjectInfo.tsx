import React from 'react';
import { Row, Col, Tag } from 'antd';

interface ProjectInfoProps {
  projectCode?: string;
  projectName?: string;
  businessType?: string;
  showTag?: boolean;
  tagCount?: number;
  teamInfo?: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  projectCode = '项目编号',
  projectName = '项目简称',
  businessType = '业务类型',
  showTag = true,
  tagCount = 1,
  teamInfo = '部门-团队长团队成员（全角","分隔）',
}) => {
  return (
    <Row gutter={48}>
      <Col span={12}>
        <div className="mb-4">
          <label className="text-muted-foreground text-sm mb-1 block">项目名称：</label>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="form-link text-primary font-medium cursor-pointer hover:underline">
              【{projectCode}】{projectName}-{businessType}，超链接
            </span>
            {showTag && tagCount > 0 && (
              <Tag color="#f5a623" className="border-0 rounded-sm">
                {tagCount}项关联
              </Tag>
            )}
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div className="mb-4">
          <label className="text-muted-foreground text-sm mb-1 block">项目团队：</label>
          <span className="text-foreground">{teamInfo}</span>
        </div>
      </Col>
    </Row>
  );
};

export default ProjectInfo;
