import React from 'react';
import { Form, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import ProjectInfo from '@/components/PaymentForm/ProjectInfo';
import PaymentInfo from '@/components/PaymentForm/PaymentInfo';
import ProjectInvestment from '@/components/PaymentForm/ProjectInvestment';
import PayeeInfo from '@/components/PaymentForm/PayeeInfo';
import ApprovalInfo from '@/components/PaymentForm/ApprovalInfo';
import ContractSignInfo from '@/components/PaymentForm/ContractSignInfo';
import ExecutionConfirm from '@/components/PaymentForm/ExecutionConfirm';
import DocumentInfo from '@/components/PaymentForm/DocumentInfo';

const Index: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#3a9da6',
          borderRadius: 2,
        },
      }}
    >
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-[1400px] mx-auto">
          <Form
            form={form}
            layout="vertical"
            className="space-y-4"
          >
            {/* 一、项目名称、项目团队 */}
            <div className="bg-card p-4 border border-border">
              <ProjectInfo
                projectCode="项目编号"
                projectName="项目简称"
                businessType="业务类型"
                showTag={true}
                tagCount={1}
                teamInfo="部门-团队长团队成员（全角逗号分隔）"
              />
            </div>

            {/* 二、出款信息 */}
            <PaymentInfo />

            {/* 三、项目投放情况 */}
            <ProjectInvestment paidAmount={0} partnerPaidAmount={0} />

            {/* 四、收款方信息 */}
            <PayeeInfo />

            {/* 五、批复信息 */}
            <ApprovalInfo />

            {/* 六、合同及面签信息 */}
            <ContractSignInfo />

            {/* 七、出款执行事项确认 */}
            <ExecutionConfirm />

            {/* 八、文档信息 */}
            <DocumentInfo />
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Index;
