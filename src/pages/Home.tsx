import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";

export default function Home() {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
    />
  );
}
