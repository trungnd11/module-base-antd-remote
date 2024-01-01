import { Button, Tooltip } from "antd";
import { AppButtonStyle } from "./appButtonStyle";
import { AppButtonProps } from "@models/componentModels/AppButtonModel";

export default function AppButton(props: AppButtonProps) {
  const {
    name,
    loading,
    type,
    ghost,
    htmlType,
    onClick,
    disabled,
    title,
    ...rest
  } = props;

  const ButtonChildren = (
    <Button
      {...rest}
      ghost={ghost ?? false}
      htmlType={htmlType ?? "button"}
      type={type ?? "primary"}
      loading={loading}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </Button>
  );

  return (
    <AppButtonStyle>
      {
        title
          ? (
          <Tooltip placement="top" title={title}>
            { ButtonChildren }
          </Tooltip>
            )
          : (
              ButtonChildren
            )
      }
    </AppButtonStyle>
  );
}
