import { SearchOutlined } from "@ant-design/icons";
import AppButton from "../components/appButton/AppButton";

export default function Home() {
  return (
    <div>
      <AppButton
        icon={<SearchOutlined />}
        name="Click me !"
      />
    </div>
  )
}
