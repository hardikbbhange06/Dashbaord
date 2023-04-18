
import {
  CheckOutlined,
  MergeCellsOutlined,
  RedoOutlined,
  SwapOutlined,
  SyncOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { Pagination } from 'antd';
// **************


import {
  getCustomers,
  getFnn,
  getInventory,
  getOrders,
  // getRevenue,
} from "../../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space className="h" size={46} direction="vertical">
      <Space size={360} direction="horizontal">
        <DashboardCard
          icon={
            <VerticalAlignBottomOutlined
              className="v"
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
            />
          }
          title={"App Installed"}
          value={orders}
        />
        <DashboardCard
          icon={
            <RedoOutlined
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
            />
          }
          title={"Active Installs"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <SwapOutlined
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
            />
          }
          title={"Customer"}
          value={customers}
        />
      </Space>

      <Space size={360} direction="horizontal">
        <DashboardCard
          icon={
            <MergeCellsOutlined
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
            />
          }
          title={"App Un-Installed"}
          value={revenue}
        />
        <DashboardCard
          icon={
            <CheckOutlined
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
            />
          }
          title={"Alive Apps users"}
          value={orders}
        />
        <DashboardCard
          icon={
            <SyncOutlined
              style={{
                color: " #161c32",
                
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
            />
          }
          title={"Alive Churn Rate"}
          value={inventory}
        />
      </Space>
      <Space>
         <Daa/>
         <PostPagination></PostPagination>
      
      </Space>
      <Space>
        <Space>
           
          <RecentFnn />
          
        </Space>
        
        {/* <RecentOrders />
        <DashboardChart /> */}
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentFnn() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFnn().then((res) => {
      setDataSource(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    
    <Table
      columns={[
        {
          title: "Date",
          dataIndex: "created_At",
        },
        {
          title: "Day Installs",
          dataIndex: "totalinstall",
        },
        {
          title: "plateform",
          dataIndex: "totalinstall" ,
         
        },
        {
          title: "Day Uninstalls",
          dataIndex: "totaluninstall",
        },
        {
          title: "plateform",
          dataIndex: "android_uninstall",
        },
        {
          title: "Churn Rate",
          dataIndex: "totalinstall",
        },
        {
          title: "Churn Plateform",
          dataIndex: "android_churn",
        },
      ]}
      loading={loading}
      dataSource={dataSource}
      // pagination={true}
    ></Table>
    
  );
}

function Daa(){
  return(
  
      <DatePicker></DatePicker>
    
  )
}

// ********************
const PostPagination = () => (
  <Pagination
    // total={200} // total number of items
    // pageSize={10} // number of items per page
    // defaultCurrent={1} // default current page
    showSizeChanger // show rows per page options
    pageSizeOptions={['10', '50', '100', '500','1000']} // rows per page options
    // showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} // custom text for total items
  />
);
// *************

// *********

// 
export default Dashboard;
